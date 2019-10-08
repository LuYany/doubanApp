<template>
  <div class="xiang">
  	<div  style="background:#1e1d23;color:white;">
  		<router-link to="/hello">
				<div style="height: 40px;line-height: 40px;padding: 0px 10px;position: fixed;top: 0px;width: 100%;background:#1e1d23 ;z-index: 99999;">
					<router-link  to="/hello" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color:white;line-height: 40px;"></router-link>
						<h1 class="mui-title" style="color: white;">  <span class="mui-icon mui-icon-home" style="font-size: 24px;"></span>电影  </h1>
						<span class="mui-icon mui-icon-location" style="font-size: 24px;float: right;line-height: 40px;color: white;"></span>
					</div>
				</router-link>
  	    <div style="clear: both;margin-top: 40px;"></div>
  	    <div class="hei" style="background:#1e1d23 ;padding: 0;margin: 0;text-align: center;padding: 30px;">
  	    	  <img :src="arr.images.small" width="60%"/>
  	    </div>
  	    <div>
  	    	 <div class="mui-content">
  	    	 	 <div class="mui-row" style="padding: 20px;">
  	    	 	 	  <div class="mui-col-xs-8">
  	    	 	 	  	<h3 style="color: black;">{{arr.title}}</h3>
  	    	 	 	  	<p>{{ arr.year }}/动作/搞笑/冒险</p>
  	    	 	 	  	<p>原名：{{ arr.original_title }}</p>
  	    	 	 	  	<p>上映时间：{{ arr.year }}(中国大陆)</p>
  	    	 	 	  	<p>片长：107分钟</p>
  	    	 	 	  </div>
  	    	 	 	  <div class="mui-col-xs-4">
  	    	 	 	  	 <div style="text-align: center;background: white;padding-top: 10px;">
  	    	 	 	  	 	   <p>豆瓣评分</p>
  	    	 	 	  	 	   <div style="position: relative;">
  	    	 	 	
  	    	 	 	  	 	   <h3 style="color: black;height: 30px;line-height: 30px;" v-if="arr.rating.average!==0">{{ arr.rating.average }}</h3>
  	    	 	 	  	 	 <h3 style="color: gray;height: 30px;line-height: 30px;font-size: 16px;" v-else>尚未上映</h3>
  	    	 	 	  	 	 <el-rate
	  v-model="(arr.rating.average/2).toFixed(1)"
	  disabled
	  show-score
	  text-color="#ff9900"
	  score-template="{value}" style="width: 120px;overflow: hidden;margin: auto;" >
</el-rate>  
 	   </div>
 	  
 	 
  	    	 	 	  	 	   <p style="margin-top: 15px;">{{arr.collect_count}}人</p>
  	    	 	 	  	 </div>
  	    	 	 	  </div>
  	    	 	 	 <div class="mui-col-xs-12" style="margin-top: 20px;">
  	    	 	 	 	   <button style="width: 100%;height: 40px;background: #efeff4;color:orange;border:orange 1px solid;">购票</button>
  	    	 	 	 <hr style="margin-top: 40px;margin-bottom: 20px;"/>
  	    	 	 	 </div>
  	    	 	 	  
  	    	 	 	  <div class="mui-col-xs-12">
  	    	 	 	  	<p style="margin-bottom: 15px;">简介</p>
  	    	 	 	  <p style="color: black;">
  	    	 	 	  	<span v-show="!zhang">{{ brr.summary.substr(0,74)}}</span>
  	    	 	 	  		<span v-show="zhang">{{ brr.summary}}</span>
  	    	 	 	      <span style="font-weight: bold;" v-on:click="zhang=true" v-show="!zhang">...<strong style="color: green;">展开</strong> </span>
  	    	 	 	  </p>
  	    	 	
  	    	 	 	  <p style="text-align: right;" v-show="zhang">举报简介</p>
  	    	 	 	  	<p style="margin-bottom: 15px;margin-top: 30px;">影人</p>
  	    	 	 	   
               
			   <img src="../../static/img/e.png" width="30%" height="150px"/>
				 <img src="../../static/img/r.png" width="30%"  height="150px" style="margin-left: 5%;margin-right: 5%"/>
				 <img src="../../static/img/w.png" width="30%"  height="150px"/>
<span style="color: black;width: 30%;text-align: center;display: inline-block;">{{typeof(arr.casts[0])=="object"?arr.casts[0].name:str[0]}}</span>
<span style="color: black;width: 30%;text-align: center;display: inline-block;margin-left: 5%;margin-right: 5%;">{{typeof(arr.casts[1])=="object"?arr.casts[1].name:str[1]}}</span>
<span style="color: black;width: 30%;text-align: center;display: inline-block;">{{typeof(arr.casts[2])=="object"?arr.casts[2].name:str[2]}}</span>
                     </div>
	  	    	 	 	  <div class="" style="margin:10px 0px;">
	  	    	 	 	  	  <button style="width: 100%;height: 40px;background: #edecf1;margin-top: 20px;">评论</button>
	  	    	 	 	  </div>
	  	    	 	 	   <p style="font-size: 16px;color: black;">短评</p>
	  	    	 	 	    <div class="">
	  	    	 	 	    	 <div>
	  	    	 	 	    	 	<img src="../../static/img/f.png" style="float: left;height: 37px;"/>
	  	    	 	 	    	 	<span style="line-height: 37px;height: 37px;color: black;">董的多</span>
	  	    	 	 	    		<span @click="q++">
	  	    	 	 	    	 	  <span style="float: right;line-height: 37px;height: 37px;color: black;"> {{ q }}</span>
	  	    	 	 	    	 	  <img src="../../static/img/zan.png" style="float: right;height: 27px;margin-top: 6px;"/>
	  	    	 	 	    	 	</span>
	  	    	 	 	    	 	
	  	    	 	 	    	 </div>
	  	    	 	 	    	 <div style="color: black;padding-left: 32px;padding-right: 5px;">
	  	    	 	 	    	 	 本来是想给三星的，不过看到这么多没看片的大神怒刷一星，觉得有必要改产五星中和一下。这种片子既然买了就别想着剧情逻辑了，哐哐猛砸一通，结局来个happyending，场面特效这些就完全值回票钱了。
	  	    	 	 	    	   <p>1个月前</p>
	  	    	 	 	    	 </div>
	  	    	 	 	    </div>
	  	    	 	 	    
	  	    	 	 	     <div class="">
	  	    	 	 	    	 <div>
	  	    	 	 	    	 	<img src="../../static/img/d.png" style="float: left;height: 37px;"/>
	  	    	 	 	    	 	<span style="line-height: 37px;height: 37px;color: black;">科林</span>
	  	    	 	 	  	<span @click="w++">
	  	    	 	 	    	 	<span style="float: right;line-height: 37px;height: 37px;color: black;"> {{ w }}</span>
	  	    	 	 	    	 	<img src="../../static/img/zan.png" style="float: right;height: 27px;margin-top: 6px;"/>
	  	    	 	 	    	 	</span>
	  	    	 	 	    	 	
	  	    	 	 	    	 </div>
	  	    	 	 	    	 <div style="color: black;padding-left: 32px;padding-right: 5px;">
	  	    	 	 	    	 	 本来是想给三星的，不过看到这么多没看片的大神怒刷一星，觉得有必要改产五星中和一下。这种片子既然买了就别想着剧情逻辑了，哐哐猛砸一通，结局来个happyending，场面特效这些就完全值回票钱了。
	  	    	 	 	    	   <p>1个月前</p>
	  	    	 	 	    	 </div>
	  	    	 	 	    </div>
	  	    	 	 	     <div class="">
	  	    	 	 	    	 <div>
	  	    	 	 	    	 	<img src="../../static/img/g.png" style="float: left;height: 37px;"/>
	  	    	 	 	    	 	<span style="line-height: 37px;height: 37px;color: black;">搬砖侠</span>
	  	    	 	 	    	 	<span @click="e++">
	  	    	 	 	    	 	<span style="float: right;line-height: 37px;height: 37px;color: black;"> {{ e }}</span>
	  	    	 	 	    	 	<img src="../../static/img/zan.png" style="float: right;height: 27px;margin-top: 6px;"/>
	  	    	 	 	    	 	</span>
	  	    	 	 	    	 </div>
	  	    	 	 	    	 <div style="color: black;padding-left: 32px;padding-right: 5px;">
	  	    	 	 	    	 	 本来是想给三星的，不过看到这么多没看片的大神怒刷一星，觉得有必要改产五星中和一下。这种片子既然买了就别想着剧情逻辑了，哐哐猛砸一通，结局来个happyending，场面特效这些就完全值回票钱了。
	  	    	 	 	    	   <p>1个月前</p>
	  	    	 	 	    	 </div>
	  	    	 	 	    </div>
  	    	 	 	  </div>
  	    	 	 	  	</div>
  	    	 	 </div>
  	    	 </div>
  	    </div>
  	</div>
  </div>

</template>

<script>
export default {
  name: 'Xiang',
  components:{
  },
  props:["arr"],
  data () {
    return {
    	zhang:false,
    	wo:"[展开]",
    	shou:"[收起]",
    	q:2199,
    	w:785,
    	e:645,
    	sh:4,
    	tt:"../../static/img/e.png",
    	tu1:this.arr.casts[0]=="object"?arr.casts[0].avatars.small:this.tt,
    	brr:[],
    	crr:[],
    	str:["吴永辉","马昭","康松"],
    	bu:26985127,
    	di:"https://api.douban.com/v2/movie/subject/"
    	
    }
  },methods:{
          kai(){
          	 this.zhang=!this.zhang; 
          }
  },created:function(){
  
this.$http.jsonp(this.di+this.arr.id).then(function(res){
  		console.log(res.body);
  		this.brr = res.body;
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
   input{
   	background: gainsboro;
   	padding-left:50px;
   	border: 0px;
   	border-radius: 8px;
   	margin-top: 2px;
   }
 
</style>