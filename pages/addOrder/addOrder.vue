<template>
	<view class="box">
		<com-title></com-title>
		<view class="com_width top_headers display_flex">
			<view>店铺名：446黄埔</view>
			<view>跨区A</view>
			<view>10时-20时</view>
		</view>
		<view class="content_title border_bottom">
			<view class="display_flex space_between com_width ">
				<view>单号</view>
				<view>箱数</view>
			</view>
		</view>
		<!-- 单号 -->
		<view class="order_box">
			<!-- 全部 -->
			<view class="order_list border_bottom">
				<view class="com_width">
					<view class="display_flex list_top space_between">
						<view>0051231</view>
						
						<view class="color_qx">3</image>
						</view>
					</view>
					<view class="color_gray list_bottom">
						备注：我是备注信息的案例库请离开我去了我看去了我看
					</view>
				</view>
			</view>
			<view class="order_list">
				<uni-swipe-action @closed="closed" class="uni_box " :options="options">
					<view class="cont com_width display_flex space_between">
						<view>0051123</view>
						<view>8</view>
					</view>
				</uni-swipe-action>
			</view>
			<view class="order_list">
				<uni-swipe-action @closed="closed" class="uni_box " :options="options">
					<view class="cont com_width display_flex space_between">
						<view>0051123</view>
						<view>1</view>
					</view>
				</uni-swipe-action>
			</view>
		</view>
		<!-- footer -->
		<view class="footer display_flex border_top">
			<view class="bg_all color_fff">手动新增</view>
			<view>扫码</view>
		</view>
	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue";
	export default {
		components: {
			uniSwipeAction
		},
		data() {
			return {
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.box{
	.top_headers{
		padding: 20upx 0;
		view{
			margin-right:10%;
		}
	}
	.content_title{
		padding: 30upx 0;
		margin-top: 30upx;
	}
	// 订单列表
	.order_list {

		.uni-swipe-action{
			border-bottom: 1px solid #E0E0E0;
		}
		.cont{
			height: 100upx;
			line-height: 100upx;
		}
		.list_top {
			height: 100upx;
			line-height: 100upx;
		}
	
		.list_bottom {
			padding: 20upx 0;
			line-height: 46upx;
		}
	}
	.footer{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 120upx;
		view{
			height: 120upx;
			line-height: 120upx;
			width: 50%;
			text-align: center;
		}
	}
}
</style>
