<!--1/view-->
<template>
  <div id="app">
  	<router-view :arr="name"  @sou="fun($event)"></router-view>
      
  </div>
 
</template>


<!--2.处理方法  处理逻辑-->
<script>

export default {
  name: 'App',
  components: {
     
  },
  data(){
  	return{
  		sousuo:false,
  		name:[]
  	}
  },methods:{
			 fun(val){
    	this.name=val
    }
	}

}
</script>



<!--3、、 样式-->
<style scoped>

</style>
