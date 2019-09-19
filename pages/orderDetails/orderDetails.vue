<template>
	<view class="box">
		<view class="com_title com_width">基本信息</view>
		<cmd-cell-item title="订单编号" addon="90120312"></cmd-cell-item>
		<cmd-cell-item title="分店名称" addon="446黄埔"></cmd-cell-item>
		<cmd-cell-item title="派送区域" addon="本区"></cmd-cell-item>
		<cmd-cell-item title="箱数" addon="5箱"></cmd-cell-item>
		<view class="com_title com_width"></view>
		<cmd-cell-item title="提交时间" addon="2019-06-01 09:10:00"></cmd-cell-item>
		<cmd-cell-item title="操作人" addon="jack"></cmd-cell-item>
		<cmd-cell-item title="提交方式" addon="扫码提交"></cmd-cell-item>
		
		<view class="com_title com_width">物流信息</view>
		<cmd-cell-item title="揽件时间" addon="2019-06-01 09:10:00"></cmd-cell-item>
		<cmd-cell-item title="揽件司机" addon="xuen"></cmd-cell-item>
	</view>
</template>

<script>
	import cmdCellItem from '@/components/cmd-cell-item/cmd-cell-item.vue'
	export default {
		components: {
			cmdCellItem
		},
		data() {
			return {
				test: 1
			}
		}
	}
</script>
</script>

<style lang="scss">
	.box {
		height: 100vh;

		.com_title {
			padding: 30upx 0;
			font-size: 34upx;
			font-weight: bold;

		}
	}
</style>
