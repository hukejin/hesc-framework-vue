<template>
	<div class="searchlistmodule">
		<div>加搜索条的支持下拉、上拉的列表</div>
		<searchlist @onSearch="onSearch" @onCancel="onCancel" @onRefresh="onRefresh" @onLoad="onLoad" :isRefrushLoading="isRefrushing"
		:isMoreLoading="isMoreLoading" :isNoMoreData="isNoMore">
			<!--列表子项根据业务自定义样式-->
			<van-cell :title="item.id" :value="item.value" v-for="(item,index) in listdatas"  :key="index" icon="user-o" @click="OnItemClick(item)" ></van-cell>
		</searchlist>
	</div>
</template>
<script>
	import searchlist from '../../components/SearchList/index'
	export default {
		name: "searchlistmodule",
		data() {
			return {
				isRefrushing:false,
				isMoreLoading:false,
				isNoMore:false,
				listdatas:[],
				index:0,
				moreinidex:51,
				value:''
			}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: {
			searchlist
		},
		created() {
			for (let i = 30; i < 50; i++) {
				this.listdatas.push({ "id":i,"value":i })
			}
		},
		methods: {
			// 下拉刷新的回调，数据加载完毕后设置isRefrushing=false即可
			onRefresh(){
				let self = this
				setTimeout(function () {
					let newitems = []
					for (let i = 0; i < 5; i++) {
						self.index = self.index + 1;
						let value = "refrush-" + String(self.index)
						newitems.push({ "id":self.index,"value":value })
					}
					self.listdatas = newitems.concat(self.listdatas)
					self.isRefrushing = false
				},1000)
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
				},1000)
			},
			OnItemClick(item){
				this.$toast('点击的是：' + JSON.stringify(item));
			},
			onSearch(value){
				this.$toast('要查询的是：' + value);
			},
			onCancel(){
				this.$toast('取消了搜索');
			}
		}
	}
</script>
<style scoped lang="scss">
</style>
