<template>
	<view class="box">
		<!-- banner -->
		<view class="uni-padding-wrap com_width">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FF65A0" :indicator-dots="indicatorDots"
					 :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<image class="swiper_img" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" mode=""></image>
						</swiper-item>
						<swiper-item>
							<image class="swiper_img" src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" mode=""></image>
						</swiper-item>
						
					</swiper>
				</view>
			</view>
		</view>
		<!-- list -->
		<view class="list_box display_flex com_width">
			<view class="list">
				<image src="/static/zdicon.png" mode=""></image>
				<view>制单</view>
			</view>
			<view class="list">
				<image src="/static/tkicon.png" mode=""></image>
				<view>退货</view>
			</view>
			<view class="list">
				<image src="/static/fhicon.png" mode=""></image>
				<view>发货</view>
			</view>
			
			<view class="list">
				<image src="/static/zdicon.png" mode=""></image>
				<view>制单</view>
			</view>
			<view class="list">
				<image src="/static/tkicon.png" mode=""></image>
				<view>退货</view>
			</view>
			<view class="list">
				<image src="/static/fhicon.png" mode=""></image>
				<view>发货</view>
			</view>
			
			<view class="list">
				<image src="/static/zdicon.png" mode=""></image>
				<view>制单</view>
			</view>
			<view class="list">
				<image src="/static/tkicon.png" mode=""></image>
				<view>退货</view>
			</view>
			<view class="list">
				<image src="/static/fhicon.png" mode=""></image>
				<view>发货</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播相关
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
			}
		},
		computed: {
			i18n() {
				return this.$i18nMsg()
			}
		},
		onLoad() {
			setTimeout(() => {
				this.$i18n.locale = 'zh_HK'
			}, 2000)
			console.log(this.$i18nMsg())
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.box{
		.uni-padding-wrap{
			border-radius: 20upx;
			overflow: hidden;
			margin-top: 30upx;
			height: 400upx;
			view{
				width: 100%;
				height: 100%;
			}
			swiper{
				width: 100%;
				height: 100%;
			}
			image{
				width: 100%;
				height: 100%;
				border-radius: 20upx;
				
			}
		}
		.list_box{
			justify-content:space-between;
			flex-wrap: wrap;
			margin-top: 60upx;
			.list{
				width: 31%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 150upx;
				border:1px solid #E0E0E0;
				border-radius: 12upx;
				margin-top: 30upx;
				image{
					width:48upx;
					height: 48upx;
					margin-bottom: 16upx;
				}
			}
		}
	}
</style>
