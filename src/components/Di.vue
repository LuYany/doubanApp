<template>
  <div class="">
  
  	<div id="" style="margin-top: 46px;">
  		
  	</div>
     <footer style="position: fixed;bottom: 0px;width: 100%;">
     	<ul>
	   		<li v-for="(val,index) in ar">
	   			
	   			<router-link :to="val.lu"   :class="{he:val.shi}">
	   			 <span :class="val.kan"></span><br>
	   				{{ val.zhi }}</router-link>
	   		</li>
			<!-- <li v-for="(val,index) in ar" @click="go(val)" :class="{he:val.shi}">
			     <span :class="val.kan"> {{val.zhi}} </span>
			</li> -->
   	  </ul>
     </footer>
  </div>
</template>

<script>
export default {
  name: 'Di',
  components:{
   
  },
  data () {
    return {
      arr:[
  		  {lu:"#type1",zhi:"正在热映",shi:true},
  		  {lu:"#type2",zhi:"即将上映",shi:false}
  
  		 ],
  		 ar:[
  		  {lu:"/hello",zhi:"热映",shi:true,kan:"mui-icon mui-icon-map"}, 
  		  {lu:"/pai",zhi:"排行榜",shi:false,kan:"mui-icon mui-icon-spinner-cycle mui-spin"},
  		   {lu:"/de",zhi:"我的",shi:false,kan:"mui-icon mui-icon-contact"}
  		  
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
	  go(val){
		  console.log(val.lu)
		  this.$router.push(`${val.lu}`);
	  },
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
