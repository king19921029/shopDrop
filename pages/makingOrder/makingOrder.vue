<template>
	<view class="box">
		<view class="com_width top_headers display_flex space_between">
			<view>店铺名：446黄埔</view>
			<view>本区</view>
			<view>周一三五</view>
			<view>每时段限30单</view>
		</view>
		
		<view class="content border_top">
			<view class="left_box">
				<view class="left_list border_bottom" v-for="(item,idx) in 5" :key="idx">
					{{idx}} 时 - 1{{idx}} 时
				</view>
			</view>
			<view class="right_box">
				<view class="right_box_title border_bottom color_all display_flex space_between">
					<view>日期</view>
					<view>已下单数</view>
					<view>可下单数</view>
				</view>
				<view v-for="(item,idx) in 8" :key="idx" class="display_flex border_bottom right_box_list space_between">
					<view>06-2{{idx}}</view>
					<view>1{{idx}}</view>
					<view>{{idx}}1</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
		font-size: 26upx;
		margin:0 30upx;
	}
	.content{
		height:90vh;
		display:flex;
		.left_box{
			width: 30%;
			border-right: 1px solid #E0E0E0;
			text-align: center;
			.left_list{
				padding: 20upx 0;
			}
		}
		.right_box{
			width: 70%;
			.right_box_title{
				padding: 20upx 0;
				view{
					width: 33%;
					text-align: center;
				}
			}
			.right_box_list{
				padding: 20upx 0;
				view{
					width: 33%;
					text-align: center;
				}
			}
		}
	}
}
</style>
