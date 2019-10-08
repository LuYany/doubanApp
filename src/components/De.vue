<template>
  <div class="news">
  	<header class="mui-bar mui-bar-nav" style="padding: 0;margin: 0;background: #42bd55;text-align: center;height: 50px;line-height: 50px;color: white;">
  	    我的
  	</header>
  	
     <div class="mui-content" style="margin-top: 20px;padding-left:10px">
       <div class="mui-row" v-show="kan">
       	 <div class="mui-col-xs-3">
       	 	<img src="../../static/img/ca_1.jpg" />
       	 </div>
       	 <div class="mui-col-xs-8">
       	 	<p>Rio 锐澳 水蜜桃味白兰地鸡尾酒(预调酒)275ml</p>
       	 	<p>颜色：灰色    型号：S</p>
       	<span style="color: red;font-size: 20px;">￥{{ jia }}</span>
       	 	<span style="color: black;margin-left: 5px;">26R</span>
       	 		<button @click="one--" class="mui-btn">-</button>
						<input type="number" min="1"  v-model="one<1?one=1:one" id="a" maxlength="12" style="height: 33px;text-align: center;width: 80px;border-left: 0px;border-right: 0px;"/>
						<button @click="one++" class="mui-btn">+</button>
       	 </div>
       	  <div class="mui-col-xs-">
       	 	<span style="width:20px;height: 20px;display: block;background:gray;color: white;text-align: center;border-radius: 10px;line-height: 20px;"	@click="lol">x</span>
       	 </div>
       </div>
       
       <div class="mui-row" v-show="q">
       	 <div class="mui-col-xs-3">
       	 	<img src="../../static/img/ca_2.jpg" />
       	 </div>
       	 <div class="mui-col-xs-8">
       	 	<p>Rio 锐澳 水蜜桃味白兰地鸡尾酒(预调酒)275ml</p>
       	 	<p>颜色：灰色    型号：S</p>
       	<span style="color: red;font-size: 20px;">￥{{ jia }}</span>
       	 	<span style="color: black;margin-left: 5px;">26R</span>
       	 	
       	 		<button @click="er--" class="mui-btn">-</button><input type="number" min="1"  v-model="er<1?er=1:er" id="a" maxlength="12" style="height: 33px;text-align: center;width: 80px;border-left: 0px;border-right: 0px;"/><button @click="er++" class="mui-btn">+</button>
       	 
       	 		

       	 	
    
       	 </div>
       	  <div class="mui-col-xs-">
       	 	<span style="width:20px;height: 20px;display: block;background:gray;color: white;text-align: center;border-radius: 10px;line-height: 20px;"
       	 	
       	 	@click="lpl">x</span>
       	 </div>
       </div>
  
      <div class="mui-row" v-show="w">
       	 <div class="mui-col-xs-3">
       	 	<img src="../../static/img/ca_3.jpg" />
       	 </div>
       	 <div class="mui-col-xs-8">
       	 	<p>Rio 锐澳 水蜜桃味白兰地鸡尾酒(预调酒)275ml</p>
       	 	<p>颜色：灰色    型号：S</p>
       	<span style="color: red;font-size: 20px;">￥{{ jia }}</span>
       	 	<span style="color: black;margin-left: 5px;">26R</span>
       	 	
       	 		<button @click="san--" class="mui-btn">-</button><input type="number" min="1"  v-model="san<1?san=1:san" id="a" maxlength="12" style="height: 33px;text-align: center;width: 80px;border-left: 0px;border-right: 0px;"/><button @click="san++" class="mui-btn">+</button>
       	 
       	 </div>
       	  <div class="mui-col-xs-">
       	 	<span style="width:20px;height: 20px;display: block;background:gray;color: white;text-align: center;border-radius: 10px;line-height: 20px;"
       	 	
       	 	@click="uzi">x</span>
       	 </div>
       </div>
			 
       <div class="mui-row" v-show="e">
       	 <div class="mui-col-xs-3">
       	 	<img src="../../static/img/ca_4.jpg" />
       	 </div>
       	 <div class="mui-col-xs-8">
       	 	<p>Rio 锐澳 水蜜桃味白兰地鸡尾酒(预调酒)275ml</p>
       	 	<p>颜色：灰色    型号：S</p>
       	<span style="color: red;font-size: 20px;">￥{{ jia }}</span>
       	 	<span style="color: black;margin-left: 5px;">26R</span>
       	 		<button @click="si--" class="mui-btn">-</button><input type="number"  min="1" v-model="si<1?si=1:si" id="a" maxlength="12" style="height: 33px;text-align: center;width: 80px;border-left: 0px;border-right: 0px;"/><button @click="si++" class="mui-btn">+</button>
       	 
       	 </div>
       	  <div class="mui-col-xs-">
       	 	<span style="width:20px;height: 20px;display: block;background:gray;color: white;text-align: center;border-radius: 10px;line-height: 20px;"
       	 	
       	 	@click="faker">x</span>
       	 </div>
       	 
       </div>
          <p>
          <div @click="qin" style="width: 20px;height: 20px;border: 1px solid gainsboro;display: inline-block;text-align: center;">
					  <span v-show="xian">{{v}}</span>
					</div>
          全选
           <span style="float: right;">商品总价：<strong style="color: red;text-align: center;">
           	<em v-show="xian">{{jia*(one<1?1:one)+jia*(er<1?1:er)+jia*(san<1?1:san)+jia*(si<1?1:si)-z-x-c-b}}</em> 
           	<em v-show="!xian">0</em></strong>元</span><br>
           	<button class="mui-btn" style="float: right;background: #42bd55;color:white;" v-show="xian" @click="jie">确认结算</button>
           	 <button class="mui-btn" style="float: right;margin-right: 10px;" v-show="xian" @click="qin">继续购物</button>
       
          </p>
      
     </div>
     <rng></rng>
  </div>
</template>

<script>
	import Rng from './Rng'
	import Ks from './Ks'
	
export default {
  name: 'De',
  components:{
    "ks":Ks,
    "rng":Rng
  },
  data () {
    return {
      one:1,
      er:1,
      san:1,
      si:1,
      jia:86,
      zong:0,
      v:"",
      arr:[
  		  {lu:"#type1",zhi:"正在热映",shi:true},
  		  {lu:"#type2",zhi:"即将上映",shi:false}
  
  		 ],
  		 ar:[
  		  {lu:"http://127.0.0.1:8080/news#type1",zhi:"热映",shi:false,kan:"mui-icon mui-icon-map"}, 
  		  {lu:"http://127.0.0.1:8080/pai",zhi:"排行榜",shi:false,kan:"mui-icon mui-icon-spinner-cycle mui-spin"},
  		   {lu:"http://127.0.0.1:8080/de",zhi:"我的",shi:true,kan:"mui-icon mui-icon-contact"}
  		  
  		 ],
  		 kong:[],
  		 hai:false,
  		 kan:true,
  		 q:true,
  		 w:true,
  		 e:true,
  		 le:false,
  		 z:0,
  		 x:0,
  		 c:0,
  		 b:0,
  		 xian:false,
  		 v:"√"
  		 	 	 
  		 
    }
  }, created:function(){
  	this.$http.jsonp("https://api.douban.com/v2/movie/top250").then(function(data){
  		console.log(data.body.subjects);
  		this.kong = data.body.subjects;
  	},function(err){
  		console.log(err)
  	})
  },methods:{
  	demo:function(index){
  		for(var i =0;i<this.arr.length;i++){
  			this.arr[i].shi = false;
  		}
  		
  		this.arr[index].shi = this.arr[index].shi = true;
  	},
  	de:function(index){
  		for(var i =0;i<this.ar.length;i++){
  			this.ar[i].shi = false;
  		}
  		
  		this.ar[index].shi = this.ar[index].shi = true;
  		
  	},
  	lol(){
  		this.z=this.jia*(this.one<1?this.one=1:this.one);
  		this.zong=this.zong-this.jia*(this.one<1?this.one=1:this.one);
  		this.kan=!this.kan
  	},
  	lpl(){
  		this.x=this.jia*(this.er<1?this.er=1:this.er);
  		this.zong=this.zong-this.jia*(this.er<1?this.er=1:this.er);
  		this.q=!this.q
  	},
  	uzi(){
  		this.c=this.jia*(this.san<1?this.san=1:this.san);
  		this.zong=this.zong-this.jia*(this.san<1?this.san=1:this.san);
  		this.w=!this.w
  	},
  	faker(){
  		this.b=this.jia*(this.si<1?this.si=1:this.si);
  		this.zong=this.zong-this.jia*(this.si<1?this.si=1:this.si);
  		this.e=!this.e
  	},
  	qin(){
  		this.xian=!this.xian
  	},
  	jie(){
  	mui.alert('余额不足', '亲', function() {
      mui.toast('祝各位同学找个好工作');
    });
  		
  	}
  	
  }
}
</script>


<style scoped>
img{
	width: 80px;
	height: 100px;
}
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
header ul li{
	display: inline-block;
	width: 100%;
	text-align: center;
	padding: 10px 0;
	height: 50px;
	line-height: 40px;
	border-bottom: 1px solid gray;
	font-size: 24px;
	
}
ul li a{
	color: gray;
}
footer{
	background:white;
	border-top: 1px solid black;
}
footer  ul li{
	display: inline-block;
	width: 33.33%;
	text-align: center;
	padding: 10px 0;
	font-weight: bold;
	
}
footer a{
	font-weight: bold;
}
.he{
	color: black;
}
	.bian{
	
	border-bottom: 2px solid black;
	}
	header{
		padding: 5px auto;
		background: white;
	}
   button{
   border-radius: 0px;
   background: gainsboro;
   }
   input{
   border-radius: 0px;}
 p{
 margin: 0;}
</style>
