<template>
	<div class="listmodule">
		<div>支持下拉、上拉的列表</div>
		<list :isRefrushLoading="isRefrushing" :isMoreLoading="isMoreLoading" :isNoMoreData="isNoMore"
		      @onRefresh="onRefresh" @onLoadMore="onLoad">
			<!--列表子项根据业务自定义样式-->
			<van-cell :title="item.id" :value="item.value" v-for="(item,index) in listdatas"  :key="index" icon="user-o" @click="OnItemClick(item)" ></van-cell>
		</list>
	</div>
</template>
<script>
	import list from '../../components/List/index'
	export default {
		name: "listmodule",
		data() {
			return {
				isRefrushing:false,
				isMoreLoading:false,
				isNoMore:false,
				listdatas:[],
				index:0,
				moreinidex:51
			}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: {
			list
		},
		created() {
			for (let i = 30; i < 50; i++) {
				this.listdatas.push({ "id":i,"value":i })
			}
			// 如果数据本身很少不够一屏，直接将isNoMore设置为true
			// this.isNoMore = true
		},
		methods: {
			// 下拉刷新的回调，数据加载完毕后设置isRefrushing=false即可
			onRefresh(){
				let self = this
				setTimeout(function () {
					for (let i = 0; i < 5; i++) {
						self.index = self.index + 1;
						let value = "refrush-" + String(self.index)
						self.listdatas.push({ "id":self.index,"value":value })
					}
					self.isRefrushing = false
				},1500)
			},
			// 上拉加载更多，数据执行完后isMoreLoading=false，完成本次加载，如果数据已到最后一页，设置isNoMore=true即可
			onLoad(){
				let self = this
				setTimeout(function () {
					for (let i = 0; i < 5; i++) {
						self.moreinidex = self.moreinidex + 1;
						let value = "moredata-" + String(self.moreinidex)
						self.listdatas.push({ "id":self.moreinidex,"value":value })
					}
					self.isMoreLoading = false
					if(self.listdatas.length === 50){
						self.isNoMore = true
						console.log("no more data")
					}
				},1500)
			},
			OnItemClick(item){
				this.$toast('点击的是：' + JSON.stringify(item));
			}
		}
	}
</script>
<style scoped>
</style>
