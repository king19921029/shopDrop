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
		<!-- title -->
		<view class="title_list display_flex com_width space_between">
			<view>单号</view>
			<view>箱数</view>
			<view class="title_status">状态</view>
		</view>
		<!-- 单号 -->
		<view class="order_box">
			<!-- 全部 -->
			<view class="order_list border_bottom">
				<view class="com_width">
					<view class="display_flex list_top space_between">
						<view>0051231</view>
						<view>3</view>
						<view class="color_gray">已取消<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
					<view class="color_gray list_bottom">
						备注：我是备注信息的案例库请离开我去了我看去了我看
					</view>
				</view>
			</view>

			<view class="order_list border_bottom">
				<view class="com_width">
					<view class="display_flex list_top space_between">
						<view>0051123</view>
						<view>1</view>
						<view class="color_all">运送中<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="order_list border_bottom">
				<view class="com_width">
					<view class="display_flex list_top space_between">
						<view>0053312</view>
						<view>1</view>
						<view class="color_gray">已完成<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="order_list border_bottom">
				<view class="com_width">
					<view class="display_flex list_top space_between">
						<view>0059981</view>
						<view>2</view>
						<view class="color_gray">已退货<image class="right_icon" src="/static/right_icon.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				micTabStatus: 0,
				tabList: [{
						name: "全部",
						"id": "0"
					},
					{
						name: "运送中",
						"id": "1"
					},
					{
						name: "已完成",
						"id": "2"
					},
					{
						name: "已取消",
						"id": "3"
					},
					{
						name: "已退货",
						"id": "4"
					},


				],
			}
		},
		methods: {
			// 音乐tab
			micTabClick(idx, id) {
				var that = this;
				that.micTabStatus = idx;
			},
		}
	}
</script>

<style lang="scss">
	.box {
		.color_qx {
			color: red;
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
			padding: 20upx 0;

			.list_top {
				padding: 20upx 0;

				.right_icon {
					margin-left: 20upx;
				}
			}

			.list_bottom {
				padding: 20upx 0;
				line-height: 46upx;
			}
		}
	}
</style>
