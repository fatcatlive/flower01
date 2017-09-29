window.onload=function(){
	//轮播图
	var oBanner=document.querySelector(".banner");
	var aLi=document.querySelectorAll(".banner>.list>li");
	var oDir=document.querySelectorAll(".banner>.direction>a");
	var aCircle=document.querySelectorAll(".banner>.circle>a");
	var now=0;
	var next=0;
	var timer=null;
	
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
	ajax("get","data.json",function(data){
		
		var data=JSON.parse(data);
		
		var str=" ";
		for(var i=0;i<data.length;i++){
			
			str+=`<dl data-id="${data[i].id}" class="dlll">
    			<dt><a href="##" class="detail"><img src="${data[i].img}" class="imgs"></a></dt>
    			<dd class="dddd">
    				<p >${data[i].name}</p>
    				<p ><span >市场价：</span><span >${data[i].sprice}</span>
    					<span >活动价：</span><span >${data[i].hprice}</span>
    				</p>
    				<p ><span >宽*高：</span><span >${data[i].mianji}</span></p>
    				<p ><a href="##" class="add">立即购买</a></p>
    				
    			</dd>
    		</dl>`
			
		}
		oMain.innerHTML=str;
		
	})
	
	
	
	
	var oMain=document.querySelector(".content>.main")
	oMain.onclick=function(e){
		var e=e||event;
		var target=e.target||e.srcElement;
		
		
		//跳转到详情页
		if(target.className=="imgs"){
			console.log(2)
			var numId=target.parentNode.parentNode.parentNode.getAttribute("data-id");
			location.href="detail.html?"+numId;
		}
		
		
	}
	
	
	
	
	
	var timer1=setTimeout(function(){
		var odl = document.querySelectorAll("dl");
		
		
		console.log(odl)
		for(var i=0;i<odl.length;i++){
			odl[i].index=i;
			odl[i].onmouseover=function(){
				var w=odl[this.index].children[0].children[0].children[0].offsetWidth;
		        var h=odl[this.index].children[0].children[0].children[0].offsetHeight;
				odl[this.index].children[0].children[0].children[0].style.top=-10+'px';
				odl[this.index].children[0].children[0].children[0].style.width=w+5+'px';
				
			}
			odl[i].onmouseout=function(){
				
				odl[this.index].children[0].children[0].children[0].style.top=0+'px';
				odl[this.index].children[0].children[0].children[0].style.width=323+'px';
			}
		}
	
	},3000)
	
      	    var oAsk1=document.querySelector(".ask1>a");
		var oAsk2=document.querySelector(".ask2>div");
		var oAsk3=document.querySelector(".ask2");
		var oAsk4=document.querySelector(".movelr");
		var oBack=document.querySelector(".back");
		var oBacktop=document.querySelector(".backttop");
		
		console.log(oAsk1,oAsk2,oBack,oBacktop)
		
		
		//在线客服
		oAsk1.onclick=function(){
			console.log(oAsk1.offsetLeft)
			clearInterval(timer)
			
			
				var timer2=setInterval(function(){
				var speed=3;
				oAsk1.style.left=oAsk1.offsetLeft+speed+'px';
				console.log(oAsk1.style.left)
				if(oAsk1.style.left==30+'px'){
					clearInterval(timer2)
				}
			    },10)
				
			
			    var timer3=setTimeout(function(){
			    	oAsk3.style.display="block";
			 	var timer1=setInterval(function(){
				var speed=5;
				oAsk2.style.left=oAsk2.offsetLeft-speed+'px';
				console.log(oAsk2.style.left)
				if(oAsk2.style.left==0+'px'){
					clearInterval(timer1)
					oAsk1.style.zIndex=5;
					oAsk2.style.zIndex=10;
				}
			    },20)
			    	
			    },100)
			 	
						
		}
		
		
		
		
		//
		oBack.onclick=function(){
			
			clearInterval(timer)
			
			
				
			 	oAsk3.style.display="block";
			 	var timer1=setInterval(function(){
				var speed=5;
				oAsk2.style.left=oAsk2.offsetLeft+speed+'px';
				console.log(oAsk2.style.left)
				if(oAsk2.style.left==130+'px'){
					clearInterval(timer1)
				}
			    },10)
			
			
			
			 	setTimeout(function(){
			 	var timer2=setInterval(function(){
				var speed=3;
				oAsk1.style.left=oAsk1.offsetLeft-speed+'px';
				console.log(oAsk1.style.left)
				if(oAsk1.style.left==0+'px'){
					clearInterval(timer2)
					oAsk1.style.zIndex=10;
					oAsk2.style.zIndex=5;
				}
			    },10)
			 	
			 	},260)
			    
			 	
			
		}
		
		
		//滚动条
		var timer5=null;
		var oBackttop=document.querySelector(".backttop");
		window.onscroll=function(e){
			var e=e||event;
			var ch=document.documentElement.clientHeight||document.body.clientHeight;
			var sroll=document.documentElement.scrollTop||document.body.scrollTop;
			var l=sroll+(ch-oAsk4.offsetHeight)/2;
			   
			   move(l);
			   if(sroll>0){
			   	oBackttop.style.display="block"
			   }
			   
			   
			   
			   
			   function move(itarget){
			   	clearInterval(timer5)
			   	timer5=setInterval(function(){
				var speed=(l-oAsk4.offsetTop)/4;
			    speed=speed>0?Math.ceil(speed):Math.floor(speed);
			       console.log(speed)
			    if(oAsk4.offsetTop==l){
				clearInterval(timer5)
			    }else{
			    	oAsk4.style.top=oAsk4.offsetTop+speed+'px';
			    }
				
				
			},30)
			   }
			   
			
			
			
			
		}
		//回到顶部
		
		
		oBackttop.onclick=function(){
			document.body.scrollTop=0;
		}
		
	
	
	
	}
	
	
	
	

