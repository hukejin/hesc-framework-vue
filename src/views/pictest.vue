<template>
	<div class="pictest">
		<van-uploader :after-read="afterRead" v-model="fileList" multiple>
			<van-button icon="photo" type="primary">上传图片</van-button>
		</van-uploader>
	</div>
</template>
<script>
	export default {
		name: "pictest",
		data() {
			return {
				fileList:[]
			}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: {},
		created() {
		},
		methods: {
			afterRead(file) {
				console.log(file);
				alert(file)
				// this.fileList.push("https://static.clewm.net/cli/images/cli_logo@2x.png")
			}
		}
	}
</script>
<style scoped>
</style>
