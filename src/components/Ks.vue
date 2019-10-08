<template>
<div class="hello" style="margin: 0;background: white;">
	  <div  v-for="val in arr" style="margin: 0;padding: 10px 0px;">
		    <div class="mui-content" style="background: white;">
				   	<div class="mui-row">
					   		  <div class="mui-col-xs-4" style="text-align: center;">
					   			 <img :src="val.images.small" width="100"/>
					   	   	</div>
					   			 <div class="mui-col-xs-5">
							       <h4>{{val.title}}</h4>
							       <p>评分：{{val.rating.average}}</p>
							      <p>导演：{{val.directors[0].name}}</p>
							      <p>主演：{{val.casts[0].name}},{{val.casts[1].name}},
							    	{{val.casts[2].name}}</p>
					        </div>
								    <div class="mui-col-xs-3" style="font-size: 10px;text-align: center;padding-top: 20px;color: #fab8ca;">
								    		{{(val.collect_count/10000)>1? (val.collect_count/10000).toFixed(2)+"万":val.collect_count}}人看过
								     	<button>购票</button>
								  </div>
				   	</div>
		  	</div>
		  	<hr />
	  </div>
    
</div>
  	
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
     arr:[]
    }
  },
  created:function(){
  	this.$http.jsonp("https://api.douban.com/v2/movie/top250").then(function(data){
  		console.log(data.body.subjects);
  		this.arr = data.body.subjects;
  	},function(err){
  		console.log(err)
  	})
  }
  
}
</script>


<style scoped>
p{
	margin: 0;
}
button{
	background: white;
	border: 1px solid #fab8ca;
	color: pink;
};
</style>
