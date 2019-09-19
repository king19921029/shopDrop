<template>
	<view class="box border_top">
		<view v-if="loginType" class="photo_login">
			<view class="com_input_box com_width display_flex">
				<view class="user_phone_box phone_box display_flex com_width">
					<view>+852</view>
					<input @input="isLoginFun" v-model="login_photo" type="number" placeholder="请输入手机号">
				</view>
			</view>
			<view class="code_box com_width display_flex">
				<view class="user_phone_box space_between display_flex com_width">
					<input @input="isLoginFun" v-model="login_code" type="number" placeholder="输入验证码">
					<button class="btnvalue" @click="getCode">{{btnValue}}</button>
				</view>
			</view>
		</view>

		<view v-else class="photo_login">
			<view class="com_input_box com_width display_flex">
				<view class="user_phone_box phone_box display_flex com_width">
					<view>账号：</view>
					<input @input="isLoginFun" v-model="login_photo" type="number" placeholder="请输入账号">
				</view>
			</view>
			<view class="com_input_box com_width display_flex" style="margin-top:20upx;">
				<view class="user_phone_box phone_box display_flex com_width">
					<view>密码：</view>
					<input password="" @input="isLoginFun" v-model="login_photo" type="number" placeholder="请输入密码">
				</view>
			</view>
		</view>


		<button @click="goLogin" class="com_width login_btn login_btn_y">
			登录
		</button>
		<!-- <view class="com_width xy_font">若手机号未注册，将会进入注册流程。注册即<text class="color_all">《用户注册协议》、《隐私协议》</text></view> -->
		<view class="tab_box">
			<view @click="loginTab" v-if="loginType" class="tab_btn color_all">←账号密码登录</view>
			<view @click="loginTab" v-else class="tab_btn color_all">←验证码登录</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginType: false,
				isLogin: false, //是否可以登录

				login_code: "", //验证码
				login_photo: "", //手机号

				btnValue: '发送验证码', //验证码文案
				second: 60, //时间s
				btnDisabled: false, //点击状态
			}
		},
		onShow() {

		},
		methods: {
			loginTab() {
				this.loginType = !this.loginType
			},
			isLoginFun() {
				if (this.login_code != "" && this.login_photo != "") {
					this.isLogin = true
				} else {
					this.isLogin = false
				}
			},
			async getCode() {
				//验证手机号
				if (this.blurPhone(this.login_photo)) {
					//防止二次点击
					if (!this.btnDisabled) {
						try {
							let phone = this.login_photo;
							let utc = Date.parse(new Date()) / 1000;
							let secret = "saqqweqw";
							let str = `${phone}${utc}${secret}`
							let sign = this._md5(str)

							let code = await this.$wxhttp.post({
								url: '/lollipop/api/v1/get_vcode',
								data: {
									phone: phone,
									utc: utc,
									sign: sign
								},
							})
							
							this.timer();
							return;

						} catch (error) {
							console.log(error);
						}
					}
				}


			},
			async goLogin() {
				const that = this;
				let phone = "18801287297";
				let password = "123123";
				try {
					let data = await that.$wxhttp.get({
						url: '/api/Auth/Login',
						data: {
							phone: phone,
							password:password
						},
					})
					// if (data.data.access_token) {
					// 	uni.setStorageSync("access_token", data.data);
					// 	uni.navigateBack()
					// }
				} catch (error) {
					console.log(error);
				}

			},
			timer: function() {
				let promise = new Promise((resolve, reject) => {
					let setTimer = setInterval(
						() => {
							var second = this.second - 1;
							this.second = second;
							this.btnValue = second + '秒';
							this.btnDisabled = true;
							if (this.second <= 0) {
								this.second = 60;
								this.btnValue = '获取验证码';
								this.btnDisabled = false;
								resolve(setTimer)
							}
						}, 1000)
				})
				promise.then((setTimer) => {
					clearInterval(setTimer)
				})
			},
			// 手机号验证
			blurPhone: function(phone) {
				let that = this
				var ajxtrue = false;
				if (!(/^1[34578]\d{9}$/.test(phone))) {
					ajxtrue = false;
					uni.showToast({
						title: '手机号有误',
						icon: '/static/img/login_close.png',
						duration: 2000
					})

				} else {
					ajxtrue = true;
				}
				return ajxtrue;
			},

		},

	}
</script>

<style lang="scss">
	.box {
		.tab_box {
			position: absolute;
			right: 5%;
			bottom: 20%;

			.tab_btn {
				// font-weight:bold;
				font-size: 32upx;
			}
		}

		.com_input_box {
			height: 99upx;
			background: rgba(245, 245, 245, 1);
			border-radius: 8upx;
			margin-top: 100upx;

			.user_phone_box {

				image {
					height: 40upx;
					width: 40upx;
				}
			}

			.phone_box {
				input {
					width: 74%;
					margin: 0 20upx 0 20upx;
				}
			}
		}

		.code_box {
			height: 99upx;
			background: rgba(245, 245, 245, 1);
			border-radius: 8upx;
			margin-top: 20upx;

			.user_phone_box {
				justify-content: space-between;

				image {
					height: 40upx;
					width: 40upx;
				}
			}

			.btnvalue {
				min-width: 170upx;
			}

			button::after {
				border: none;

			}

			button {
				background: rgba(245, 245, 245, 1);
				padding: 0 0 0 20upx;
				color: rgba(255, 102, 102, 0.5);
				font-size: 28upx;
				margin: 0;
				border-left: 1upx solid #E0E0E0;
				border-radius: 0;
				height: 48upx;
				line-height: 48upx;
			}

		}

		button::after {
			border: none;
		}

		.login_btn {
			height: 88upx;
			border-radius: 50upx;
			color: #fff;
			line-height: 88upx;
			text-align: center;
			margin-top: 40upx;
		}

		button[disabled] {
			color: #fff !important;
			background: rgba(255, 102, 102, 0.5) !important;
		}

		.login_btn_y {
			background: rgba(255, 102, 102, 1);
		}

		.login_btn_n {
			background: rgba(255, 102, 102, 0.5);
		}

		.xy_font {
			font-size: 22upx;
			color: rgba(153, 153, 153, 1);
			line-height: 32upx;
			margin-top: 22upx;
		}
	}
</style>
