<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.box {
		color: #333333;
	}
	.right_icon {
		width: 14upx;
		height: 22upx;
	}
	.bg_top {
		width: 100%;
		height: 230upx;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: -1;
	}
	
	view {
		line-height: 1;
	}
	
	.right_icon {
		width: 14upx;
		height: 22upx;
	}
	
	/*每个页面公共css */
	.box {
		font-size: 30upx;
	}
	
	.bg_fff {
		background: #fff;
	}
	
	/* 蓝色 */
	.bg_all {
		background: #FF6666;
	}
	
	.color_fff {
		color: #fff;
	}
	
	.color_all {
		color: #FF6666;
	}
	
	.pic_color {
		color: #FF6666;
	}
	
	.color_gray {
		color: #999999;
	}
	
	.border_top {
		border-top: 1px solid #E0E0E0;
	}
	
	.border_bottom {
		border-bottom: 1upx solid #E0E0E0;
	}
	
	.com_width {
		width: 90%;
		margin-left: 5%;
	}
	
	.display_flex {
		display: flex;
		align-items: center;
	}
	
	.display_column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.space_between {
		justify-content: space-between;
	}
	
	.overflow {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.overflow_tow {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	//通用顶部
	.headers {
		background:#f7f7f7;
		padding: 28upx 0;
		.bg_fff{
			border-radius: 8upx;
			padding: 8upx 0;
			.display_flex{
				width: 90%;
				justify-content: center;
			}
			.scode{
				width: 36upx;
				height: 36upx;
				margin-right: 20upx;
			}
			icon{
				margin-right: 10upx;
			}
			
		}
	}
	
	
</style>
