<template>
	<div class="httpdemo">
		<van-cell title="GET请求" value="GET基本用法" v-on:click="getmethod"></van-cell>
		<van-cell title="POST请求" value="POST基本用法" v-on:click="postmethod"></van-cell>
		<van-cell title="GET请求" value="GET 加入header基本用法" v-on:click="getmethod1"></van-cell>
	</div>
</template>
<script>
	import http from '../../assets/js/api/https'
	export default {
		name: "httpdemo",
		data() {
			return {}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: {},
		created() {
		},
		methods: {
			getmethod(){
				http.fetchGet("http://192.168.0.105:8888/getToken/").then((res) => { console.log("success",JSON.stringify(res)) })
				.catch((err) => { console.log("error",JSON.stringify(err)) })
			},
			postmethod(){
				http.fetchPost("http://192.168.0.105:8888/face/updateSubscribe",{ 'pushUrl':'http://106.12.6.104:8080/mssh/rtmp/crossareaMsg' },{ 'accessToken': '504EB0F86364AD2C24A154221927E126' })
				.then((res) => { console.log("success",JSON.stringify(res)) })
				.catch((err) => { console.log("error",JSON.stringify(err)) })
			},
			getmethod1(){
				http.fetchGet("http://192.168.0.105:8888/face/getSubscribe/",{},{ 'accessToken': 'B8ADEFE542B81778D17C9BFE51773D2C' }).then((res) => { console.log("success",JSON.stringify(res)) })
				.catch((err) => { console.log("error",JSON.stringify(err)) })
			},
		}
	}
</script>
<style scoped>
</style>
