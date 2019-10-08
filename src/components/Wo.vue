<template>
	<div class="wo" style="margin: 0;">
		<da></da>
		<div v-for="(val,index) in arr" @click="c(index)">
			<div class="mui-content" style="background: white;">
				<div class="mui-row" style="padding: 12px 0px;">
					<div class="mui-col-xs-4" style="text-align: center;">
						<img :src="val.images.small" width="100" />
					</div>
					<div class="mui-col-xs-5">
						<h4>{{val.title}}</h4>

						<p>导演：{{val.directors[0].name}}</p>
						<p>主演：{{ typeof(val.casts[0])=="object"?val.casts[0].name:str[0] }}, {{ typeof(val.casts[1])=="object"?val.casts[1].name:str[1] }}, {{ typeof(val.casts[2])=="object"?val.casts[2].name:str[2] }}
						</p>
					</div>
					<div class="mui-col-xs-3" style="font-size: 10px;text-align: center;padding-top: 20px;color: #fab8ca;">
						{{(val.collect_count/10000)>1? (val.collect_count/10000).toFixed(2)+"万":val.collect_count}}人看过
						<button>购票</button>
					</div>
				</div>
			</div>
			<hr style="margin: 0;" />

		</div>
		<di style="margin-top:65px;"></di>
	</div>

</template>

<script>
	import Da from './Da'
	import Di from './Di'
	import Xiang from './Xiang'
	export default {
		name: 'Wo',
		components: {
			"da": Da,
			"di": Di,
			"xiang": Xiang
		},
		data() {
			return {
				arr: [],
				str: ["许宁", "王道媚", "彭翔"]
			}
		},
		methods: {
			c(index) { //子传父
				this.$emit("sou", this.arr[index]);
				this.$router.push("xiang")

			}
		},
		created: function() {
			this.$http.jsonp("https://api.douban.com/v2/movie/coming_soon").then(function(res) {
				console.log(res.body.subjects);
				this.arr = res.body.subjects;
			}, function(err) {
				console.log(err)
			})
		}

	}
</script>

<style scoped>
	p {
		margin: 0;
	}
	
	button {
		background: white;
		border: 1px solid #fab8ca;
		color: pink;
	}
	
	;
</style>