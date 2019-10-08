<template>
<div class="hello" style="margin: 0;background: white;">
 <header class="mui-bar mui-bar-nav">
     
     <h1 class="mui-title">新片榜</h1>
 </header>
<div id="" style="margin-top: 44px;">
	
</div>
   <div  v-for="(val,index) in arr"  @click="c(index)">
		    <div class="mui-content" style="background: white;">
				   	<div class="mui-row" style="padding: 13px 0px;">
					   		  <div class="mui-col-xs-4" style="text-align: center;">
					   			 <img :src="val.images.small" width="100"/>
					   	   	</div>
					   			 <div class="mui-col-xs-5">
							   <h4>{{val.title}}</h4>
							      <div style="position: relative;">评分： <el-rate
  v-model="(val.rating.average/2).toFixed(1)"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}" style="transform: scale(0.8);width: 120px;overflow: hidden;position: absolute;top:0px;left: 30px;">
</el-rate><span style="position: absolute;top:0px;left: 135px;">{{ val.rating.average}}</span></div>
							      <p>导演：{{val.directors[0].name}}</p>
							 	<p>主演：{{val.casts[0].name}},{{val.casts[1].name}},{{val.casts[2].name}}
							    	</p>
					        </div>
								    <div class="mui-col-xs-3" style="font-size: 10px;text-align: center;padding-top: 20px;color: #fab8ca;">
								    		{{(val.collect_count/10000)>1? (val.collect_count/10000).toFixed(2)+"万":val.collect_count}}人看过
								     	<button>购票</button>
								  </div>
				   	</div>
		  	</div>
		  	<hr />
		  
	 </div>
	  <hai style="margin-top: 65px;"></hai>
   </div>
  	
</template>

<script>
import Tou from './Tou'
import A from './A'
export default {
  name: 'Wo',
  components: {
     "tou":Tou,
     "hai":A,
     
     
  },
  data () {
    return {
     arr:[]
    }
  },methods:{
    	c(index){//子传父

    	this.$emit("sou",this.arr[index]);
    	this.$router.push("xiang")
    	
    }
  },
  
  created:function(){
  		this.$http.get("../../static/hello.json").then(function(res){
  		console.log(res.body.subjects);
  		this.arr = res.body.subjects;
  	
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