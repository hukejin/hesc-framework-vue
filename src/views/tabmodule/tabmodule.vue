<template>
	<div class="tabmodule">
		<div style="color: black;font-weight: 500;margin: 30px;text-align: center;font-size: 1.2rem">演示tab-page页面滚动，tab跟随移动</div>
		<tabpage :tablist="tabs">
			<addressinfo :info="{}" class="item-content"></addressinfo>
			<addressdetail :info="{}" class="item-content"></addressdetail>
			<basicinfo :info="{}" class="item-content"></basicinfo>
			<dangerinfo :info="{}" class="item-content"></dangerinfo>
			<rentalinfo :info="{}" class="item-content"></rentalinfo>
			<addressinfo :info="{}" class="item-content"></addressinfo>
		</tabpage>
	</div>
</template>
<script>
	import tabpage from '../../components/TabPage/index'
	import addressinfo from './demo/Address'
	import addressdetail from './demo/AddressDetail'
	import basicinfo from './demo/BasicInfo'
	import dangerinfo from './demo/DangerInfo'
	import rentalinfo from './demo/RentalInfo'
	export default {
		name: "tabmodule",
		data() {
			return {
				tabs:[]
			}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: {
			tabpage,addressinfo,addressdetail,basicinfo,dangerinfo,rentalinfo
		},
		created() {
			this.tabs.push({ "title":"地址","index":0 })
			this.tabs.push({ "title":"地址详情","index":1 })
			this.tabs.push({ "title":"房屋","index":2 })
			this.tabs.push({ "title":"危房","index":3 })
			this.tabs.push({ "title":"出租房","index":4 })
			this.tabs.push({ "title":"地址1","index":5 })
		},
		methods: {}
	}
</script>
<style scoped lang="scss">
	.item-content{
		padding: 20px;
		div{
			font-size: 20px;
			height: 20px;
			margin: 20px;
		}
	}
</style>
