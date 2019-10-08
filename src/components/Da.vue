<template>
  <div class="news">
  	<header class="mui-bar mui-bar-nav" style="padding: 0;margin: 0;background: white;">
  	    <span class="mui-icon mui-icon-search" style="position: absolute;left: 20px;"></span>
  	    <router-link to="/sou"><input type="text" placeholder="电影/电视剧/影人" style="margin-bottom: 0px;" 
  	    	class="mui-input-speech"/>
  	     </router-link>
  	     
		  <ul style="background: white;margin-top:0px;">
		   		<li v-for="(val,index) in arr"   :class="{bian:val.shi}">
		   			<router-link :to="val.lu"   :class="{he:val.shi}">{{ val.zhi }}</router-link>
		   		</li>
		   </ul>
  	</header>
  	<div class="" style="margin-bottom: 92px;">
  		
  	</div>
  	
     
    
  </div>
</template>

<script>
	

export default {
  name: 'News',
  components:{
    
  },
  data () {
    return {
      arr:[
  		  {lu:"/hello",zhi:"正在热映",shi:false},
  		  {lu:"/wo",zhi:"即将上映",shi:true}
  
  		 ],
  		 ar:[
  		  {lu:"http://127.0.0.1:8080/news#type1",zhi:"热映",shi:true,kan:"mui-icon mui-icon-map"}, 
  		  {lu:"http://127.0.0.1:8080/pai",zhi:"排行榜",shi:false,kan:"mui-icon mui-icon-spinner-cycle mui-spin"},
  		   {lu:"http://127.0.0.1:8080/de",zhi:"我的",shi:false,kan:"mui-icon mui-icon-contact"}
  		  
  		 ],
  		 kong:[],
  		 hai:false
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
  		
  	}
  }
}
</script>


<style scoped>

ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
header ul li{
	display: inline-block;
	width: 50%;
	text-align: center;
	padding: 10px 0;
	height: 50px;
	line-height: 40px;
	border-bottom: 2px solid gray;
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
   input{
   	background: gainsboro;
   	padding-left:50px;
   	border: 0px;
   	border-radius: 8px;
   	margin-top: 2px;
   }
 
</style>
