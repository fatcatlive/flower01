window.onload=function(){
	
	var table=document.querySelector(".tab");
	var zong=document.querySelector(".zong");
	
	
	
	
	
	//加载数据
	ajax("get","data.json",function(data){
		var data=JSON.parse(data)
		var data1={};
		if(getCookie("init")){
			data1=JSON.parse(getCookie("init"))
		   }else{
			data1={};
		    }
		
		
		for(var i=0;i<data.length;i++){
			var str="";
			for(var key in data1){
				if(data[i].id==key){
					var tr=document.createElement("tr");
					str+=`<td><input type="checkbox" checked="checked" class="check"/></td>
    				<td data-id=${data[i].id}><img src="${data[i].img}"/></td>
    				<td>${data[i].name}</td>
    				<td>${data[i].sprice}</td>
    				<td>陈漂亮</td>
    				<td>
    					<div>
    					<button class="decrease">-</button>
			            <input type="text" class="num" value = "${data1[data[i].id]}">
			            <button class="increase">+</button>
    					</div>
    				</td>
    				<td class="tota">${"￥"+data1[data[i].id]*data[i].sprice.substring(1)}</td>
    				<td><a href="##" class="buy">提交订单</a><a href="##" class="delete">删除商品</a></td>
    			`
				tr.className="new";
				tr.innerHTML=str;
				table.children[0].insertBefore(tr,zong);
				}
				
				
				
			}
		}
	})
	
	//事件代理实现
	table.onclick=function(e){
		var e=e||event;
		var target=e.target||e.srcElement;
		var data1={};
		
		
		
		if(target.className=="decrease"){
		   var val=target.nextElementSibling.value;
		   var price=target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.substring(1);
		   var numid=target.parentNode.parentNode.parentNode.children[1].getAttribute("data-id")
		    if(getCookie("init")){
			data1=JSON.parse(getCookie("init"))
		   }else{
			data1={};
		    }
			if(val==1){
				val=1;
			}else{
				val--;
				data1[numid]--;
			}
			target.nextElementSibling.value=val;
			target.parentNode.parentNode.nextElementSibling.innerHTML="￥"+price*val.toFixed(2);
			var data2=JSON.stringify(data1);
			setCookie("init",data2,7)
			total()
			console.log(data2)
			
		}
		
		if(target.className=="increase"){
		   var val=target.previousElementSibling.value;
		   var price=target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.substring(1);
			var numid=target.parentNode.parentNode.parentNode.children[1].getAttribute("data-id")
		    if(getCookie("init")){
			data1=JSON.parse(getCookie("init"))
		   }else{
			data1={};
		   }
			val++;
			data1[numid]++;
			target.previousElementSibling.value=val;
			target.parentNode.parentNode.nextElementSibling.innerHTML="￥"+price*val.toFixed(2)
			var data2=JSON.stringify(data1);
			setCookie("init",data2,7)
			console.log(data2)
			total()		
		}
		
		//删除商品
		
		if(target.className=="delete"){
			if(getCookie("init")){
			data1=JSON.parse(getCookie("init"))
		   }else{
			data1={};
		   }
			target.parentNode.parentNode.remove()
			var numid=target.parentNode.parentNode.children[1].getAttribute("data-id");
			delete data1[numid];
			var data2=JSON.stringify(data1);
			setCookie("init",data2,7)
			
		}
		
		//多选框
		
		if(target.className=="check"){
			total()
			check1()
		
	       }
		
		//全选
		if(target.className=="allchecked")
		{
			
			var check=document.querySelectorAll(".check");
			if(target.checked){
				for(var i=0;i<check.length;i++){
					check[i].checked="checked"
				}
			}else{
				for(var i=0;i<check.length;i++){
					check[i].checked="";
				}
			}
			total();
			
		}
		
		//清空购物车
		if(target.className=="alldelete"){
			var newTr=document.querySelectorAll(".new")
			console.log(newTr)
			for(var i=0;i<newTr.length;i++){
				newTr[i].remove();
			}
			setCookie("init","",7)
			
		}
	
      }
	
	     
	    setTimeout(function(){
		//多选框
	     total()
	     },500)
	    
	    
	    //计算总价函数
	    function total(){
		    var sum=0;
			var check=document.querySelectorAll(".check");
			var tota=document.querySelectorAll(".tota");
			var pricetotal=document.querySelector(".pricetotal");
			 for(var i=0;i<check.length;i++){
	      	if(check[i].checked){
	      		sum+=parseInt(tota[i].innerHTML.substring(1));
	      	    }
	      	pricetotal.innerHTML="￥"+sum;
	        }
	      }
	    
	    
	    
	     //反选
	     function check1(){
	     	var allcheck=document.querySelector(".allchecked");
	     	var check=document.querySelectorAll(".check");
	     	var bStop=true;
	     	var bStop1=true;
	     	for(var i=0;i<check.length;i++){
	     		if(check[i].checked){
	     			bStop=false;
	     		}
	     	}
	     	for(var i=0;i<check.length;i++){
	     		if(!check[i].checked){
	     			bStop1=false;
	     		}
	     	}
	     	
	     	if(bStop==false&&bStop1==false){
	     		allcheck.checked=""
	     	}else if(bStop==false&&bStop1==true){
	     		allcheck.checked="checked"
	     	}
	     	
	     }

}
