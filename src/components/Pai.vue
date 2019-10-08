<template>
<div class="pai" style="margin: 0;">
	 <div id="slider" class="mui-slider" >
            <div class="mui-slider-group mui-slider-loop">
                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="../../static/img/1.jpg">
                    </a>
                </div>
                <!-- 第一张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../static/img/1.jpg">
                    </a>
                </div>
                <!-- 第二张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../static/img/2.jpg">
                    </a>
                </div>
                <!-- 第三张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="../../static/img/3.jpg">
                    </a>
                </div>
           
                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="../../static/img/3.jpg">
                    </a>
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div>
        <div class="mui-content" style="text-align: center;">
        	<div class="mui-row" >
        		<div class="mui-col-xs-6">
        			<router-link to="/kou">
        			<div class="q1">
        				<span class="mui-icon mui-icon-plus"></span>
        				
        			</div>
        			</router-link>
        			口碑榜
        		</div>
        		<div class="mui-col-xs-6">
        			<router-link to="/bei">
        			<div class="q2">
        				<span class="mui-icon mui-icon-phone"></span>
        			</div>
        			</router-link>
        			北美票房榜
        		</div>
        		<div class="mui-col-xs-6">
        			<router-link to="/xin">
        			<div class="q3" >
        				<span class="mui-icon mui-icon-contact"></span>
        		     </div>
        		    </router-link>
        		     新片榜
        		</div>
        	 
	        		<div class="mui-col-xs-6">
	        			<router-link to="/top">
	        			<div class="q4">
	        				<span class="mui-icon mui-icon-star"></span>
	        			</div>
	        			</router-link>
	        			TOP250
	        		</div>
        		
        	</div>
        </div>
    <nb></nb>
</div>
  	
</template>

<script>
import A from './A'

export default {
  name: 'Pai',
  components: { 
     "nb":A  
  },
  data () {
    return {
   ar:[
  		  {lu:"/hello",zhi:"热映",shi:false,kan:"mui-icon mui-icon-map"}, 
  		  {lu:"http://127.0.0.1:8080/pai",zhi:"排行榜",shi:true,kan:"mui-icon mui-icon-spinner-cycle mui-spin"},
  		   {lu:"http://127.0.0.1:8080/de",zhi:"我的",shi:false,kan:"mui-icon mui-icon-contact"}
  		  
  		 ]
    }
  },methods:{
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
img{
	height: 180px;
}
.q1{
	width: 80px;
	height: 80px;
	background: darkorange;
	margin: auto;
	border-radius: 40px;
	position: relative;
	text-align: center;
	margin-top: 40px;
	margin-bottom: 20px;
}
.q1 span{
	line-height: 80px;
	font-size: 40px;
	color: white;
}
.q2{
	width: 80px;
	height: 80px;
	background: #007AFF;
	
	border-radius: 40px;
	position: relative;
	text-align: center;
	margin: auto;
	margin-top: 40px;
	margin-bottom: 20px;
}
.q2 span{
	line-height: 80px;
	font-size: 40px;
	color: white;
}
.q3{
	width: 80px;
	height: 80px;
	background: forestgreen;
	margin: auto;
	border-radius: 40px;
	position: relative;
	text-align: center;
	margin-top: 40px;
	margin-bottom: 20px;
}
.q3 span{
	line-height: 80px;
	font-size: 40px;
	color: white;
}
.q4{
	width: 80px;
	height: 80px;
	background: palevioletred;
	margin: auto;
	border-radius: 40px;
	position: relative;
	text-align: center;
	margin-top: 40px;
	margin-bottom: 20px;
}
.q4 span{
	line-height: 80px;
	font-size: 40px;
	color: white;
}
footer{
	background:white;
	border-top: 1px solid black;
}
ul{
	margin: 0;
	padding: 0;
	list-style: none;
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
	color: gray;
}
.he{
	color: black;
}
</style>
