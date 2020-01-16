<template>
	<div class="searchlist">
		<form action="/" class="searchbar">
			<van-search
					v-model="value"
					placeholder="请输入搜索关键词"
					show-action
					@search="onSearch"
					@cancel="onCancel"
			/>
		</form>
		<list :isRefrushLoading="isRefrushing" :isMoreLoading="loading" :isNoMoreData="noMoreData"
		      @onRefresh="onRefresh" @onLoadMore="onLoad" class="contentlist">
			<slot></slot>
		</list>
	</div>
</template>
<script>
	import list from '../List/index'
	export default {
		name: "searchlist",
		data() {
			return {
				// isRefrushing:false,
				// isMoreLoading:false,
				// isNoMore:false,
				value:''
			}
		},
		mounted() {
		},
		computed: {
			isRefrushing : {
				get: function () {
					return this.isRefrushLoading
				},
				set: function (newValue) {
					this.isRefrushLoading = newValue
				}
			},
			loading : {
				get: function () {
					return this.isMoreLoading
				},
				set: function (newValue) {
					this.isMoreLoading = newValue
				}
			},
			noMoreData : {
				get: function () {
					return this.isNoMoreData
				},
				set: function (newValue) {
					this.isNoMoreData = newValue
				}
			}
		},
		watch: {},
		components: {
			list
		},
		created() {
		},
		methods: {
			onSearch(value){
				this.$emit('onSearch',value)
			},
			onCancel(){
				this.value = ''
				this.$emit('onCancel')
			},
			onRefresh(){
				this.$emit('onRefresh')
			},
			onLoad(){
				this.$emit('onLoad')
			}
		},
		props: {
			isRefrushLoading:{
				type:Boolean,
				required:true,
				default:false
			},
			isMoreLoading:{
				type:Boolean,
				required:true,
				default:false
			},
			isNoMoreData:{
				type:Boolean,
				required:true,
				default:false
			}
		}
	}
</script>
<style scoped lang="scss">
.searchlist{
	position: absolute;
	margin: 0;
	padding: 0;
	display: flex;
	.searchbar{
		position: fixed;
		top: 0px;
		width: 100vw;
		display: block;
		flex-grow: 1;
		z-index: 2000;
	}
	.contentlist{
		position: absolute;
		top: 50px;
		flex-grow: 9;
	}
}
</style>
