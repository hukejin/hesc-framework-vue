<template>
	<div class="tabpages">
		<div class="tabpagestitlebar">
			<div class="tabpagestitle" v-for="(tab,index) in tablist" :key="tab.title" @click="tabClick(index)"><span>{{tab.title}}</span></div>
			<div id="tabpagesbtmline"><span style="display: block;background-color: red;width: 100%;height: 100%"></span></div>
		</div>
		<div class="tabpagescontent">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: "tabpages",
		data() {
			return {
				active:0,
				viewheight:0, // 屏幕高度
				maxScroll:0, // 可滚动距离
				htmlHeight:0, // 页面可见高度,
				tabScroll:[], // 保存滚动瞄点
				hadtranslatex:0,
				preindex:1,
				bl:null,
				trans:0,
				doms:0,
				titleElements:[],
				titleBar:null
			}
		},
		mounted() {
			// 记录每个内容对用的dom数组
			this.titleBar = document.getElementsByClassName("tabpagestitlebar")
			this.titleElements = document.getElementsByClassName("tabpagestitle")
			this.bl = document.getElementById("tabpagesbtmline");
			this.arrDom = document.getElementsByClassName("item-content");
			if(this.titleElements.length > 0){
				this.titleElements[0].classList.add("active")
			}
			this.htmlHeight = document.getElementsByClassName("tabpages")[0].scrollHeight
			this.viewheight = window.screen.height
			this.maxScroll = this.htmlHeight - this.viewheight
			for (let i = 0; i < this.arrDom.length; i++) {
				this.tabScroll[i] = this.arrDom[i].offsetHeight * 2 / 3 + this.arrDom[i].offsetTop
			}
			if(this.sysutil.isMobileSystem()){
				this.doms = this.titleElements.length
				if(this.tablist.length < 5){
					this.trans = window.screen.width / this.doms;
					this.bl.style.width = window.screen.width / this.doms + "px";
				}else{
					this.trans = window.screen.width * 0.22;
					this.bl.style.width = window.screen.width * 0.22 + "px";
					for (let i = 0; i < this.titleElements.length; i++) {
						this.titleElements[i].style.flexBasis = '22%';
						this.titleElements[i].style.flexGrow = 0;
						this.titleElements[i].style.flexShrink = 0;
					}
				}
			}else{
				this.trans = 60;
				this.bl.style.width = this.trans + "px";
			}
			this.bl.style.boxSizing = 'border-box';
			this.bl.style.padding = '0px 15px';
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll);
		},
		computed: {},
		watch: {},
		components: {},
		created() {
			window.addEventListener('scroll', this.handleScroll);
		},
		methods: {
			handleScroll(){
				let scrollTop = document.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop < this.titleBar[0].clientHeight){
					this.titleBar[0].classList.remove('positionfix')
				}else{
					this.titleBar[0].classList.add('positionfix')
				}
				this.tabChange(this.toScroll(scrollTop))
			},
			toScroll(scrollY){
				let index = 1;
				for (let i = 0; i < this.arrDom.length; i++) {
					if(this.arrDom[this.arrDom.length - 1].offsetTop - scrollY > 80){
						if(this.arrDom[i].offsetTop - scrollY <= 80 && this.arrDom[i + 1].offsetTop - scrollY > 80){
							index = i;
						}
					}else{
						index = this.arrDom.length - 1;
					}
				}
				return index;
			},
			tabChange(clickIndex){
				let downIndex = clickIndex + 1;
				if(this.preindex === downIndex){
					return
				}
				this.bl.style.transform = 'translateX(' + (this.trans * (downIndex - this.preindex) + this.hadtranslatex) + 'px)';
				this.bl.style.transitionDuration = '0.3s';
				this.hadtranslatex += this.trans * (downIndex - this.preindex);
				this.titleBar[0].scrollTo(this.hadtranslatex,0)
				this.preindex = downIndex;

				for (let i = 0; i < this.titleElements.length; i++) {
					if(i === clickIndex){
						this.titleElements[i].classList.add("active")
					}else{
						this.titleElements[i].classList.remove("active")
					}
				}
			},
			tabClick(index){
				this.tabChange(index)
				for (let i = 0; i < this.titleElements.length; i++) {
					if(i === index){
						this.titleElements[i].classList.add("active")
					}else{
						this.titleElements[i].classList.remove("active")
					}
				}
				document.scrollingElement.scrollTop = this.arrDom[index].offsetTop
			},
		},
		props:['tablist']
	}
</script>
<style scoped lang="scss">
	.positionfix{
		position: fixed !important;
	}
	.tabpagestitlebar{
		height: 44px;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		background-color: white;
		box-sizing: content-box;
		padding-bottom: 15px;
		display: flex;
		overflow: hidden;
		overflow-x: auto;
		.tabpagestitle{
			/*flex: 0 0 22%;*/
			width: 100%;
			height: 100%;
			line-height: 44px;
			text-align: center;
			box-sizing: border-box;
			color: #7d7e80;
			span{
				margin: 0 auto;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.active{
			color: #323233;
			font-weight: 500;
		}
		#tabpagesbtmline{
			position: absolute;
			bottom: 15px;
			left: 0;
			z-index: 1;
			height: 3px;
			/*background-color: #ee0a24;*/
			border-radius: 3px;
		}
	}
	.tabpagescontent{
		position: relative;
		margin-top: 60px;
		.item-content{
			padding: 20px;
		}
		.item-content div{
			font-size: 20px;
			height: 20px;
			margin: 20px;
		}
	}
</style>
