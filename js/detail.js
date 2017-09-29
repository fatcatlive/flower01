window.onload=function(){
	var arr=location.href.split("?");
	var arr1=arr[1];
	
	//加载数据
	var oMain=document.querySelector(".content>.main")
	ajax("get","data.json",function(data){
		
		var data=JSON.parse(data);
		var str="";
		for(var i=0;i<data.length;i++){
			if(data[i].id==arr1){
				str+=`<div class="top">
    			<div class="left">
    				<img src="${data[i].img1}"/>
    			</div>
    			<div class="right">
    				<p>${data[i].name}</p>
    				<p>${data[i].sprice}</p>
    				<p><span>原价：</span>${data[i].hprice}</p>
    				<p>${data[i].title}<br />
                                                      
                      </p>
                      <p>【配送范围：只限长沙市二环内免费，二环外按距离收取相关运费。】</p>
                      <p><a href="##" class="add">加入我的花篮</a>
                      <a href="##">立即购买</a></p>
    				
    			</div>
    		</div>
    		
    		
    		<div class="bottom">
    			<div class="left">
    				<img src="${data[i].img2}"/>
    				<img src="${data[i].img3}"/>
    			</div>
    			<div class="right">
    				<div class="product">
    					<p>产品规格</p>
    					<p>Product size</p>
    					<p>${data[i].mianji}</p>
    				</div>
    				
    				<div class="protect">
    					<p>保养说明</p>
    					<p>Maintenance instructions</p>
    					<div class="duanluo">
    						<p>请打开包装，您可以把花束解散，根据喜好自由发挥，插进花器。
    							花朵最外层为鲜花保护瓣，不喜欢可以剥去。 如想维持花束原样，
    							建议只去掉根部水袋，切勿解开花束脖子处的绳子。根据您的瓶子
    							高度，以45度角修剪根部。</p>
    						<p>放在花瓶中的花，请每天剪根换水，保证花枝1/3浸润在水中。</p>
    						<p>都市花乡保证花材新鲜。因运输原因，您拿到的花束如憔悴，不要担心。
    							将花器中装1/3清水，将附赠的“可利鲜”溶解其中，一包“可利鲜”兑水
    							500ml，可利鲜会帮助花苞充分开放，保持鲜艳的颜色和香味，第二天花束就会精神。。</p>
    						<p>注意：切勿将花放在过热或强光环境下。</p>
    						<p>【特别说明：鲜花是季节性商品，某些花材可能由于天气、运输等突发状况而
    							出现缺货。此时，花艺师将在不影响花艺整体效果的情况下，用等值或高于
    							原花材价格的新花材进行创作。】</p>
    							
    					</div>
    				</div>
    				
    				
    				<div class="shipping">
    					<p>运输说明</p>
    					<p>Shipping instructions</p>
    					<p>本商品是提前预订款，情人节当天配送，
    						仅限长沙市区二环线内免费派送；节假日配送时间段为
    						上午，下午，晚上十点前；如要求在特别时段送达，
    						请在确认订单致电客服电话4001000520。</p>
    				</div>
    				
    				
    				<div class="return">
    					<p>退换货说明</p>
    					<p>Return instructions</p>
    					<p>下单成功后，我们将根据您的要求制作与发货。如
							无特别情况，我们不会再与您联系确认订单。
							订单一旦生成，如需取消或修改订单信息（地址，
							送达日期），请务必于预定收货日期的48小时之
							前提出。如有质量问题请在签收后24小时内联系
							客服。。</p>
    				</div>
    				
    			</div>
    		</div>
    		`
			}
		}
		oMain.innerHTML=str;
	})
	
	
	//加入购物车
	
	
	if(getCookie("init")){
		var obj=JSON.parse(getCookie("init"));
	}else{
		var obj={};
	}
	
	oMain.onclick=function(e){
		
		var e=e||event;
		var target=e.target||e.srcElement;
		if(target.className="add"){
			if(obj[arr1]){
				var sum=obj[arr1];
				sum++;
				obj[arr1]=sum;
			}else{
				obj[arr1]=1;
			}
          
		

		}
		console.log(obj)
		 var str1=JSON.stringify(obj);
		 setCookie("init",str1,7)
		 console.log(str1)
	}
	
	
}
