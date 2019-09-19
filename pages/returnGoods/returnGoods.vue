<template>
	<view class="box">
		<com-title></com-title>
		<!-- tab -->
		<view class="tab_list display_flex border_bottom border_top space_between">
			<view class="tab_list_name" :class="[micTabStatus == idx ? 'add_color':'']" v-for="(item,idx) in tabList" :key="idx"
			 @click="micTabClick(idx,item.id)">
				{{item.name}}
				<text></text>
			</view>
		</view>
		<!-- 单号 -->
		<view class="order_box">
			<!-- 全部 -->
			<view class="order_list border_bottom">
				<view class="com_width">
					<view class="display_flex list_top space_between">
						<view>0051231</view>
						<view class="fh_num">3</view>
						<view class="display_flex shop_list_count">
							<view class="count_btn">-</view>
							<view class="count_num">2</view>
							<view class="count_btn">+</view>
						</view>
						<view class="color_qx">运送中<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
					<view class="color_gray list_bottom">
						备注：我是备注信息的案例库请离开我去了我看去了我看
					</view>
				</view>
			</view>

			<view class="order_list border_bottom">
				<uni-swipe-action @closed="closed" class="uni_box " :options="options">
					<view class="cont com_width display_flex  space_between">
						<view>0051123</view>
						<view class="fh_num">3</view>
						<view class="display_flex shop_list_count">
							<view class="count_btn">-</view>
							<view class="count_num">2</view>
							<view class="count_btn">+</view>
						</view>
						<view class="color_qx">运送中<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
				</uni-swipe-action>
			</view>
			<view class="order_list border_bottom">
				<uni-swipe-action @closed="closed" class="uni_box " :options="options">
					<view class="cont com_width display_flex  space_between">
						<view>0051123</view>
						<view class="fh_num">3</view>
						<view class="display_flex shop_list_count">
							<view class="count_btn">-</view>
							<view class="count_num">2</view>
							<view class="count_btn">+</view>
						</view>
						<view class="color_qx">运送中<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
				</uni-swipe-action>
			</view>
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
				micTabStatus: 0,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				tabList: [{
						name: "单号",
						"id": "0"
					},
					{
						name: "发货箱数",
						"id": "1"
					},
					{
						name: "退货箱数",
						"id": "2"
					},
					{
						name: "状态",
						"id": "3"
					}
				],
			}
		},
		methods: {
			// 音乐tab
			micTabClick(idx, id) {
				var that = this;
				that.micTabStatus = idx;
			},
			closed(){
				console.log(1)
			}
		}
	}
</script>

<style lang="scss">
	.box {
		.color_qx {
			color: #172CFE;
		}

		.color_th {
			color: #000;
		}

		.color_ys {
			color: #1A2FFE;
		}

		.color_wc {
			color: #2BB91C;
		}

		/*tab */
		.tab_list {
			height: 88upx;
			width: 100%;

			.tab_list_name {
				width: 128upx;
				text-align: center;
				// margin-left: 40upx;
				font-size: 32upx;
			}

			.add_color {
				color: #FF6666;
				position: relative;
			}

			.add_color text {
				display: block;
				width: 80upx;
				border-radius: 20px;
				height: 4upx;
				top: 57upx;
				left: 12%;
				background: #FF6666;
				position: absolute;
			}

		}

		// title
		.title_list {
			padding: 30upx 0;
			font-weight: 500;
		}

		// 订单列表
		.order_list {
			.fh_num{
				width:128upx;
				text-align: center;
			}
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
			.right_icon {
				margin-left: 20upx;
			}
		}
		
		// 购物车加减
		.shop_list_count {
			width: 178upx;
			height: 43upx;
			border-radius: 6upx;
			border: 1upx solid rgba(224, 224, 224, 1);
		
			.count_btn {
				width: 50upx;
				height: 43upx;
				display: flex;
				justify-content: center;
				align-items: center;
		
				.re_icon {
					width: 14upx;
					height: 2upx;
				}
		
				.add_icon {
					width: 14upx;
					height: 15upx;
				}
			}
		
			.count_num {
				width: 78upx;
				height: 43upx;
				line-height: 43upx;
				text-align: center;
				border-right: 1upx solid rgba(224, 224, 224, 1);
				border-left: 1upx solid rgba(224, 224, 224, 1);
			}
		}
	}
</style>
