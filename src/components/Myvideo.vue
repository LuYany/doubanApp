<template>
	<div class="myvideo">
		<div class="mui-content">
			<h1>欢迎来到豆瓣</h1>
			<input type="text" maxlength="12" v-model="user" style="border: 1px solid gainsboro;border-radius: 5px 5px 0px 0px" placeholder="手机号/邮箱" />
			<input type="password" maxlength="12" v-model="pwd" style="border: 1px solid gainsboro;border-radius: 0px 0px 5px 5px;border-top: 0px;" placeholder="密码" />
			<button style="margin-top: 30px;" @click="deng()">登录</button>
			<p style="margin: 20px 0px;text-align: center;">
				<a href="#" style="margin-right: 10px;color: #3aa74b;">注册豆瓣</a>|
				<a href="#" style="margin-left: 10px;color:gray;">忘记密码</a>
			</p>
		</div>
		<div class="" style="position: fixed;bottom: 50px;width: 100%;text-align: center;">
			<a href="#" style="color: gray;margin-right:20px ;"> 
			    <span class="mui-icon mui-icon-weibo">微博登录</span>
			</a> |

			<a href="#" style="color: gray;margin-left:20px ;">
				<span class="mui-icon mui-icon-weixin">微信登录</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Myvideo',
		components: {

		},
		data() {
			return {
				user: "",
				pwd: ""
			}
		},
		methods: {
			deng() {
				var user = window.localStorage.getItem("user");
				var pwd = window.localStorage.getItem("pwd");
				if (this.user.length == "") {
					mui.alert("账号不能为空");
					return false;

				}
				if (this.user != user) {
					mui.alert("账号不对");
					return false;
				}
				if (this.pwd.length == "") {
					mui.alert("密码不能为空");
					return false;
				}
				if (this.pwd != pwd) {
					mui.alert("密码不对");
					return false;
				}
				mui.toast("登录成功")
				setTimeout(function() {}, 300)
				this.$router.push("hello")
			}
		}
	}
</script>

<style scoped>
	h1 {
		color: #3aa74b;
		margin-top: 80px;
		margin-bottom: 40px;
		text-align: center;
		font-weight: 300;
	}
	
	input {
		height: 50px;
		width: 84%;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-left: 8%;
		border: 0px;
		border-radius: 0px;
	}
	
	button {
		height: 50px;
		width: 84%;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-left: 8%;
		background: #3aa74b;
		color: white;
		font-size: 20px;
	}
	
	;
	p {}
	
	;
	a {
		color: black;
	}
</style>