
<template>
	<div class="tree-menu">
		<van-icon :name="showChildren?'close':'add-o'" :style="indent"></van-icon>
		<div :style="indent" @click="toggleChildren" class="label">{{ label }}</div>
		<div v-if="showChildren">
			<van-cell :title="item.name" :value="item.phone" v-for="(item,index) in contactBookList"  :key="index" icon="user-o" @click="click(item)" :style="indent_index(index)" ></van-cell>
		</div>
		<div v-if="showChildren">
			<tree
				v-for="node in nodelist"
				v-bind:nodes="node.children === undefined?[]:node.children"
				v-bind:label="node.name"
				v-bind:depth="depth + 1"
				v-bind:nodeId="node.id"
				v-bind:contactBookList="node.contactBookList=== undefined?[]:node.contactBookList"
				v-on:key_click="showkey"
				v-on:contact_click="showcontact"
				:key="node.id"
				>
			</tree>
		</div>
	</div>
</template>

<script>
import tree from '@/components/Tree/index.vue'
export default {
  name: 'tree',
data () {
	return {
	showChildren: false,
	show: false,
	checkitem: {},
	nodelist:this.nodes,
	elementNodeId:this.nodeId
	}
},
  mounted () {
    this.showChildren = this.showIcon()
  },
  computed: {
    indent () {
      return { transform: `translate(${this.depth * 20}px)` }
    }
  },
  watch: {},
  components: {
    tree
  },
  methods: {
    toggleChildren(){
      if(this.showIcon()){
		// 最后一层，业务写这里
        this.$emit("key_click",this.elementNodeId)
        return
      }
      this.showChildren = !this.showChildren
    },
    // 点击联系人
    click (item) {
      this.show = true
      this.checkitem = item
	  this.$emit("contact_click",item)
    },
    showIcon(){
      return (this.nodelist === undefined || this.nodelist.length === 0) && (this.contactBookList === undefined || this.contactBookList.length === 0);
    },
    indent_index(index){
      return { transform: `translate(${this.depth * 10}px)`,background:`${index % 2 === 0 ? '#F5F5DC' : '#FFF'}!important` }
    },
  showkey(nodeId){
	  this.$emit("key_click",nodeId)
  },
  showcontact(contactBook){
	  this.$emit("contact_click",contactBook)
  }
  },
  props: {
    label:{
        type:String,
		required:true
    },
    nodeId:{
	  type:String
	},
    nodes:{
		type: Array,
		required: true
    },
    depth:{
		type:Number,
		required:true
    },
    contactBookList:{
		type:Array,
    }
  }
}
</script>

<style scoped>
	.label{
		display: inline-block;
		text-align: left;
	}
	.tree-menu{
		box-sizing: border-box;
		padding: 5px;
		position: relative;
		left: 0px;
		text-align: left;
	}
</style>
