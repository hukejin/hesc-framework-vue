<template>
	<div class="eventcontent caculate-height basic-form">
		<div class="title">地址详情</div>
		<van-cell-group>
			<van-cell title="详细地址"  />
			<van-cell title="地址类型" />
			<van-cell title="地理位置">
				<span class="position-btn" slot="right-icon" @click="seePosition()">点击查看</span>
			</van-cell>
			<van-cell title="区县"  />
			<van-cell title="街道/镇/乡/开发区"  />
			<van-cell title="行政村/社区"  />
			<van-cell title="所属网格"  />
			<van-cell title="道路/街/巷/弄" />
			<van-cell title="自然村/小区/大厦/学校"  />
			<van-cell title="幢/楼栋/组"  />
			<van-cell title="门牌号" />
			<van-cell title="单元号"  />
			<van-cell title="室号"  />
		</van-cell-group>
	</div>
</template>

<script>
	import { Toast } from "vant";
	export default {
		name: "BaseInfo",
		props:{
			info:{
				type: Object,
				required: true
			}
		},
		components: {
		},
		data() {
			return {
			};
		},
		computed: {

		},
		methods: {
			seePosition() {
				if(!this.info.latitude || !this.info.longitude){
					Toast("没有坐标信息");
				}
			},
		},
		mounted: function() {

		}
	};
</script>

<style lang="scss" scoped>
	.eventcontent {
		background-color: #fff;
		overflow: auto;

		.title {
			background-color: transparent;
			font-size: 32px;
			color: #222222;
			padding-left: 18px;
			position: relative;
		}
		.title::before {
			content: '';
			width: 6px;
			height: 80%;
			background-color: #5094f2;
			position: absolute;
			left: 0;
			top: 10%;
		}
		.position-btn {
			text-decoration: underline;
			color: #5094f2;
		}
	}
	.caculate-height {
		min-height: 700px;
	}
</style>
