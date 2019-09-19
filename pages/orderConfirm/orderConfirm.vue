<template>
	<view class="box">
		<view class="border_top border_bottom">
			<view class="com_width display_flex com_order_title">
				<view>单号</view>
				<input type="number" value="064400">
			</view>
		</view>
		
		<view class="border_top border_bottom" style="margin-top: 20upx;">
			<view class="com_width display_flex com_order_title">
				<view>箱数</view>
				<input type="number" value="50">
				<image src="../../static/login_close.png" mode=""></image>
			</view>
		</view>
		
		<view class="number_box display_flex">
			<view class="more_box display_flex space_between">
				<view>7</view>
				<view>8</view>
				<view>9</view>
				<view>4</view>
				<view>5</view>
				<view>6</view>
				<view>1</view>
				<view>2</view>
				<view>3</view>
			</view>
			<view class="one_box display_flex">
				0
			</view>
		</view>
		<!-- 备注 -->
		<view class="textarea_box border_top border_bottom">
			<textarea maxlength="200" class="com_width" placeholder="请输入订单备注"/>
			<view class="com_width">0/200</view>
		</view>
		<!-- 开关 -->
		<view class="border_bottom">
			<view class="com_width display_flex space_between com_order_title">
				<view>停止继续扫描</view>
				<switch/>
			</view>
		</view>
		<!-- footer -->
		<view class="footer com_width display_flex space_between">
			<view class="footer_left">取消</view>
			<view class="footer_right">确定</view>
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
	.com_order_title{
		padding: 26upx 0;
		>view{
			padding-right: 50upx;
		}
		input{
			width: 77%;
		}
		image{
			width: 32upx;
			height: 32upx;
		}
	}
	.number_box{
		// width: 50%;
		margin:5% 0 30upx 10%;
		
		font-size: 72upx;
		font-weight: bold;
		.more_box{
			width: 70%;
			flex-wrap: wrap;
			view{
				width: 32%;
				padding: 28upx 0;
				text-align: center;
			}
		}
		.one_box{
			width: 10%;
			text-align: end;
			margin-left: 5%;
		}
	}
	.textarea_box{
		padding: 20upx 0;
		view{
			text-align: end;
		}
		textarea{
			height:200upx;
		}
	}
	.footer{
		margin-top: 50upx;
		view{
			border-radius: 8upx;
			color: #fff;
			text-align: center;
			line-height:80upx;
		}
		.footer_right{
			background: rgba(30,161,20,.8);
			width:64%;
			height: 80upx;
		}
		.footer_left{
			background: rgba(183,183,183,1);
			width:32%;
			height: 80upx;
		}
	}
}
</style>
