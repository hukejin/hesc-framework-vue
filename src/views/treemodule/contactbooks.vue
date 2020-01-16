<template>
	<div class="contactbooks">
		<div>树形组件-->通讯录应用</div>
		<tree
			v-bind:nodes="node.children"
			v-bind:label="node.name"
			v-bind:depth="0"
			v-on:contact_click="showcontact">
		</tree>
	</div>
</template>
<script>
	import tree from '../../components/Tree/index'
	export default {
		name: "contactbooks",
		data() {
			return {
				msg: 'hello'
			}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: {
			tree
		},
		created() {
			this.node = {
				"id":"1",
				"name":"杭州市",
				"contactBookList":[],
				"children":[
					{ "id":"10",
						"name":"西湖区",
						"children":[
							{ "id":"100","name":"三墩镇" },
							{ "id":"101","name":"留下镇" }
						],
						"contactBookList":[
							{ "name":"张宝","phone":"123456" },
							{ "name":"张角","phone":"654987" },
							{ "name":"张飞","phone":"9998888" },
						],
					},
					{ "id":"11",
						"name":"拱墅区",
						"children":[
							{ "id":"110",
								"name":"龙游镇",
								"contactBookList":[
									{ "name":"李宝","phone":"444" },
									{ "name":"李角","phone":"555" },
									{ "name":"李飞","phone":"77" },
								], },
							{ "id":"111","name":"侠客镇" }
						]
					},
					{ "id":"12",
						"name":"余杭区",
						"children":[
							{ "id":"120","name":"良渚镇" },
							{ "id":"121",
								"name":"余杭镇" ,
								"contactBookList":[
									{ "name":"余杭李宝","phone":"463565" },
									{ "name":"余杭李角","phone":"u6u56i7" },
									{ "name":"余杭李飞","phone":"23t34y5u" },
								], },
							{ "id":"122","name":"临安镇" }
						]
					},
					{ "id":"13",
						"name":"江干区",
						"children":[
							{ "id":"130","name":"半山镇" },
							{ "id":"131","name":"临平" },
							{ "id":"132","name":"下沙镇" }
						]
					}
				]
			}
		},
		methods: {
			showcontact(key){
				// 收到通讯录里的相关人员进行电话等操作或者别的业务
				console.log("contactbooks",JSON.stringify(key))
			}
		}
	}
</script>

<style scoped>

</style>
