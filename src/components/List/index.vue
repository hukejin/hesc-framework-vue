<template>
	<div class="list">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<van-list
					v-model="loading"
					:finished="noMoreData"
					finished-text="没有更多数据"
					@load="onLoad">
				<slot></slot>
			</van-list>
		</van-pull-refresh>
	</div>
</template>
<script>
	export default {
		name: "list",
		data() {
			return {
				// isLoading: false,
				// loading:this.isMoreLoading,
				// noMoreData:this.isNoMoreData
			}
		},
		mounted() {
		},
		computed: {
			isLoading : {
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
		watch: {
		},
		components: {},
		methods: {
			onRefresh(){
				this.$emit('onRefresh')
			},
			onLoad(){
				this.$emit('onLoadMore')
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
<style scoped>
</style>
