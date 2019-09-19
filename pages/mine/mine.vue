<template>
	<view class="box">
		<view class="to_top bg_all"></view>
		<!-- headers -->
		<view class="headers display_column com_width">
			<image class="headers_img" src="/static/logo.png" mode=""></image>
			<view class="headers_name">{{userInfo.nickName}}</view>
		</view>
		<!-- 设置等 -->
		<view class="user_set bg_fff com_width">
			<view class="set_list com_width display_flex" >
				<image src="/static/languageIcon.png"></image>
				<view class="">
					语言切换
				</view>
			</view>
			<view class="set_list com_width display_flex" >
				<image src="../../static/mineIcon.png"></image>
				<view class="">
					个人信息
				</view>
			</view>
			<view class="set_list com_width display_flex">
				<image src="/static/set.png"></image>
				<view class="">
					设置
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					"nickName": "匿名用户"
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.box{
	background:#f7f7f7;
	height:100vh;
	.to_top{
		height: 200upx;
		padding: 40upx 0;
	}
	// headers
	.headers {
		height: 225upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		z-index: 999;
		margin-top: -100upx;
		box-shadow: 0 3upx 9upx #D9D9D9;
		.headers_img {
			width: 146upx;
			height: 146upx;
			border-radius: 50%;
			border: 6upx solid rgba(255, 255, 255, 1);
			margin-top: -80upx;
		}
	
		.headers_name {
			font-size: 32upx;
			font-weight: 500;
			color: rgba(38, 38, 40, 1);
			margin-top: 20upx;
		}
	}
	.user_set{
		border-radius:20upx;
		margin-top: 40upx;
		box-shadow: 0 3upx 9upx #D9D9D9;
		.set_list{
			border-bottom: 1upx solid #f5f5f5;
			padding-top: 36upx;
			padding-bottom: 36upx;
		}
		image{
			width: 32upx;
			height: 32upx;
			margin-right:20upx;
		}
	}
	
	
}
</style>
