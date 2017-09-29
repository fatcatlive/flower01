window.onload=function(){
	//轮播图
	var oBanner=document.querySelector(".banner");
	var aLi=document.querySelectorAll(".banner>.list>li");
	var oDir=document.querySelectorAll(".banner>.direction>a");
	var aCircle=document.querySelectorAll(".banner>.circle>a");
	var now=0;
	var next=0;
	var timer=null;
	console.log(oBanner,aLi,oDir,aCircle)
	//点击左键
	oDir[0].onclick=function(){
		if(next==0){
			next=aLi.length-1;
		}else{
			next--;
		}
		tab();
	}
	//点击右键
	oDir[1].onclick=function(){
		if(next==aLi.length-1){
			next=0;
		}else{
			next++;
		}
		tab();
	}
	//小圆点
	for(var i=0;i<aCircle.length;i++){
		aCircle[i].index=i;
		aCircle[i].onclick=function(){
			for(var j=0;j<aCircle.length;j++){
				aCircle[j].className="";
			}
			next=this.index;
			aCircle[next].className="active";
			move(aLi[now],{"opacity":0});
			move(aLi[next],{"opacity":100});
			now=next;	
		}
	}
	//自动轮播
	autoPlay()
	function autoPlay(){
		clearInterval(timer)
		timer=setInterval(function(){
		if(next==aLi.length-1){
			next=0;
		}else{
			next++;
		}
		tab();
		},3000)
	}
	
	//自动调用
	function tab(){
		move(aLi[now],{"opacity":0});
		move(aLi[next],{"opacity":100});
		now=next;
		for(var j=0;j<aCircle.length;j++){
				aCircle[j].className="";
		}
		aCircle[next].className="active";
	}
	
	//移入暂停
	oBanner.onmouseover=function(){
		clearInterval(timer)
	}
	//移出继续
	oBanner.onmouseout=function(){
		autoPlay()
	}
	
	
	//动态添加数据
	var oMain=document.querySelector(".content>.main")
	ajax("get","birthday.json",function(data){
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
	
