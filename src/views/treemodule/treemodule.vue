<template>
	<div class="treemodule">
		<div>演示基本树形组件</div>
		<tree
			v-bind:nodes="node.children"
			v-bind:label="node.name"
			v-bind:depth="0"
			v-bind:nodeId="node.id"
			:key="node.id"
			v-on:key_click="showkey">
		</tree>
	</div>
</template>
<script>
	import tree from '../../components/Tree/index'
	export default {
		name: "treemodule",
		data() {
			return {
				node:{},
			}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		components: { tree },
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
						]
					},
					{ "id":"11",
						"name":"拱墅区",
						"children":[
							{ "id":"110","name":"龙游镇" },
							{ "id":"111","name":"侠客镇" }
						]
					},
					{ "id":"12",
						"name":"余杭区",
						"children":[
							{ "id":"120","name":"良渚镇" },
							{ "id":"121","name":"余杭镇" },
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
			showkey(key){
				// 根据传出来的id，查询对应节点的其它信息或者别的业务逻辑
				console.log("treemodule-key",key)
			}
		}
	}
</script>

<style scoped>

</style>
