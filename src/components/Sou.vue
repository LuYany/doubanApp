<template>
  <div class="news">
  	<div class="tou" style="background: #43bc55;height: 50px;padding-top: 3px;position: fixed;top: 0px;width: 100%;z-index: 999999;">
  		 <span class="mui-icon mui-icon-search" style="position: absolute;left: 20px;line-height: 40px;"></span>
  	    <input type="text" placeholder="电影/电视剧/影人" 
  	    	style="margin-bottom: 0px;width:80%;height: 40px;margin-left: 10px;" class="mui-input-speech" 
  	    	v-model="str"  @click="b()"/>
 
<span @click="sou" style="width:20%;height: 40px;margin-left: 10px;color:white;line-height: 40px;text-align: right;">
	<strong v-show="bu">搜索</strong><router-link to="/hello" v-show="!bu" style="color:white">取消</router-link>
</span>
  	</div>
<div style="margin-top: 50px;">
		<div v-show="bu">
		  <ul>
		    <li v-for="(val,index) in wang" style="height: 60px;line-height: 60px;padding-left: 20px;border-bottom: 1px dashed gray;" @click="qian(index)">
		  
		    <span  :style="val.ff" style="color: gray;width: 20px;height: 20px;text-align: center;line-height: 20px;display: inline-block;margin-right: 20px;">{{val.qian}}</span><span>{{val.hou}}</span>
		    </li>
		  </ul>
		</div>
  	   <div  v-for="(val,index) in arr" style="margin: 0;" v-show="!bu" @click="c(index)">
		    <div class="mui-content" style="background: white;padding-top: 10px ;">
				   	<div class="mui-row">
					   		  <div class="mui-col-xs-4" style="text-align: center;">
					   			 <img :src="val.images.small" width="100"/>
					   	   	</div>
					   			 <div class="mui-col-xs-5">
							       <h4>{{val.title}}</h4>
							       			     		       <div style="position: relative;color: gray;"> <span v-if="val.rating.average!==0">评分：</span>
							       	<el-rate v-if="val.rating.average!==0"
  v-model="(val.rating.average/2).toFixed(1)"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}" style="transform: scale(0.8);width: 120px;overflow: hidden;position: absolute;top:0px;left: 30px;">
</el-rate><span style="position: absolute;top:0px;left: 135px;" v-if="val.rating.average!==0">{{  val.rating.average}}</span>
					<span v-else style="font-size: 14px;color: gray;">尚未上映</span>		       
							       </div>
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
		  
	  </div>
   </div>     
  </div>
</template>

<script>
	
import Wan from './Wan'
export default {
  name: 'News',
  components:{
    "wan":Wan
  },
  data () {
    return {
    	str:"",
       arr:[],
       bu:true,
       logoMsg:"",
       ff:{
         "background":"red"
       },
     tu:"",
     shi:[],
     wang:[
       {"qian":"1","hou":"西红柿首富",
       "ff":{"background":"yellow","color":"white"
       }
       },
       {"qian":"2","hou":"小偷家族",   "ff":{"background":"orange","color":"white"
       }},
       {"qian":"3","hou":"风语咒",   "ff":{"background":"red","color":"white"
       }},
       {"qian":"4","hou":"一次别离",   "ff":{"background":""
       }},
       {"qian":"5","hou":"的士速递5","ff":{"background":""
       }},
       {"qian":"6","hou":"狄仁杰之四大天王","ff":{"background":""
       }},
       {"qian":"7","hou":"边境杀手","ff":{"background":""
       }},
       {"qian":"8","hou":"解码游戏","ff":{"background":""
       }},
       {"qian":"9","hou":"神秘世界历险记4","ff":{"background":""
       }},
       {"qian":"10","hou":"西小河的夏天","ff":{"background":""
       }}
       
     ]
    }
  },methods:{
  	                   
				sou:function(){
					 
					   if(this.str.length<1){
					   	  return false;
					   }
					this.$http.jsonp("https://api.douban.com/v2/movie/search",{params:{q:this.str,count:20}}).then(function(res){
						console.log(res.body.subjects);
						this.arr = res.body.subjects;
						this.bu=!this.bu
					}
					)
			},
			b(){
				
					this.bu=true
				
			},c(index){//子传父
			
    	this.$emit("sou",this.arr[index]);
    
    	this.$router.push("xiang")
    	
    },qian(index){
     
      this.str=this.wang[index].hou;
      
      this.sou();
     
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

p{
	margin: 0;
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
