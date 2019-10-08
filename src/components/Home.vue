<template>
	<div class="hello">
		<header class="mui-bar mui-bar-nav" style="height:50px;text-align: center;">

			<router-link to="/Myvideo" style="height: 50px;line-height: 50px;position: absolute;left: 10px;">取消</router-link>
			<router-link to="/" style="line-height: 50px;">注册豆瓣</router-link>

		</header>
		<div class="mui-content" style="transform: scale(0.9);">
			<h1 style="font-size: 40px;">欢迎加入豆瓣</h1>
			<input type="text" v-model="user" placeholder="账号" maxlength="12" style="border: 1px solid gainsboro;border-radius: 5px 5px 0px 0px;" id="username" />
			<div class="mui-input-row">
				<input type="password" maxlength="12" v-model="pwd" class="mui-input-password" placeholder="密码" style="border: 1px solid gainsboro;border-top: 0px;" id="password" />
			</div>

			<input type="text" maxlength="12" v-model="nic" placeholder="昵称" style="border: 1px solid gainsboro;border-top: 0px;border-radius: 0px 0px 5px 5px;" id="ni">

			<button class="mui-btn" @click="bb">下一步</button>
			<p style="text-align: center;">点击「下一步」代表你已经阅读并同意<a href="#" style="text-decoration: underline;color: gray;font-size: 16px;">用户使用协议</a></p>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'News',
		components: {

		},
		data() {
			return {
				user: "",
				pwd: "",
				nic: "",
				upData: null,
				repeat: null

			}
		},
		methods: {
			bb() {
				if (this.user.length < 6) {
					mui.alert("账号长度6-12位")
					return false;
				}
				if (this.pwd.length < 6) {
					mui.alert("密码长度6-12位")
					return false;
				}
				if (this.nic.length < 1) {
					mui.alert("昵称长度1-12位")
					return false;
				}
				window.localStorage.setItem("user", this.user);
				window.localStorage.setItem("pwd", this.pwd);
				window.localStorage.setItem("nic", this.nic);
				mui.toast("注册成功")
				setTimeout(function() {}, 300)
				this.$router.push("myvideo")
			}
		}
	}
</script>

<style scoped>
	header a {
		color: black;
	}
	
	h1 {
		color: #3aa74b;
		margin-top: 40px;
		margin-bottom: 40px;
		text-align: center;
		font-weight: 300;
	}
	
	input {
		height: 50px;
		width: 100%;
		margin-top: 0px;
		margin-bottom: 0px;
		border: 0px;
		border-radius: 0px;
	}
	
	.mui-btn {
		width: 100%;
		height: 50px;
		display: block;
		line-height: 40px;
		font-size: 21px;
		background: #3aa74b;
		color: white;
		margin-top: 20px;
	}
	
	p {
		font-size: 16px;
		margin-top: 20px;
	}
	
	.mui-input-row span {
		position: relative;
		right: px;
	}
</style>