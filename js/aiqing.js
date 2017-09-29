window.onload=function(){
	
	
	
	//动态添加数据
	var oMain=document.querySelector(".content>.main")
	ajax("get","aiqing.json",function(data){
		console.log(data)
		var data=JSON.parse(data);
		console.log(data)
		var str=" ";
		for(var i=0;i<data.length;i++){
			
			str+=`<dl>
    			<dt><img src="${data[i].img}"/></dt>
    			<dd>
    				<p>${data[i].name}</p>
    				<p><span>市场价：</span><span>${data[i].sprice}</span>
    					<span>活动价：</span><span>${data[i].hprice}</span>
    				</p>
    				<p><span>宽*高：</span><span>${data[i].mianji}</span></p>
    				<p><a href="##">立即购买</a></p>
    				
    			</dd>
    		</dl>`
			
		}
		oMain.innerHTML=str;
		
	})
	
	}
	
