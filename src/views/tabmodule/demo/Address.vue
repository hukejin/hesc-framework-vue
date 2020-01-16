<template>
	<div class="basic basic-form">
		<div class="title">地址</div>
		<van-cell-group>
			<van-cell title="详细地址" />
				<van-cell title="地址类型" is-link  required @click="showAddType = true" />
				<van-popup position="bottom">
					<van-picker show-toolbar :columns="ADDTYPEOP" @cancel="showAddType = false" @confirm="chooseAddType" />
				</van-popup>
			<van-cell title="地理位置" is-link  @click="showChoosePosition" />
				<van-cell title="区县" is-link  required @click="getDistrict()" />
				<van-popup v-model="showDistrictType" position="bottom">
					<van-picker show-toolbar :columns="DISTRICT" @cancel="showDistrictType = false" @confirm="chooseDistrictType" />
				</van-popup>
				<van-cell title="街道/镇/乡/开发区" is-link  required @click="getStreet()" />
				<van-popup v-model="showStreetType" position="bottom">
					<van-picker show-toolbar :columns="STREET" @cancel="showStreetType = false" @confirm="chooseStreetType" />
				</van-popup>
				<van-cell title="行政村/社区" is-link  required @click="getCommunity()" />
				<van-popup v-model="showCommunityType" position="bottom">
					<van-picker show-toolbar :columns="COMMUNITY" @cancel="showCommunityType = false" @confirm="chooseCommunityType" />
				</van-popup>
			<template>
				<van-cell title="所属网格" is-link  required @click="getOrg()" />
				<van-popup v-model="showOrgType" position="bottom">
					<van-picker show-toolbar :columns="ORG" @cancel="showOrgType = false" @confirm="chooseOrgType" />
				</van-popup>
			</template>
			<van-field clearable label="道路/街/巷/弄" placeholder @input="textChange"/>
			<van-field  clearable label="自然村/小区/大厦/学校" placeholder @input="textChange"/>
			<van-field  clearable label="幢/楼栋/组" placeholder @input="textChange"/>
			<van-field clearable label="门牌号" placeholder @input="textChange"/>
			<van-field  clearable label="单元号" placeholder @input="textChange"/>
			<van-field  clearable label="室号" placeholder @input="textChange" v-if="info.type && info.type == '细分地址'"/>
		</van-cell-group>
	</div>
</template>

<script>
	import { Toast } from "vant";
	export default {
		name: "BasicInfo",
		props:{
			info:{
				type: Object,
				required: true
			}
		},
		data() {
			return {
				showAddType:false,
				ADDTYPEOP: [{ text: "标准地址", value: "0" }, { text: "细分地址", value: "1" },],
				positionmsg: "没有获取到位置信息",
				showDistrictType: false,
				DISTRICT: [],
				showStreetType: false,
				STREET: [],
				showCommunityType: false,
				COMMUNITY: [],
				showOrgType: false,
				ORG: [],
			};
		},
		computed: {
		},
		mounted() {
			this.info.type = (this.info.type ? (this.info.type === '0' ? "标准地址" : "细分地址") : "")
			if(!this.info.longitude || !this.info.latitude) {
				this.initPosition();
			} else {
				this.positionmsg = '位置信息已选择'
			}
		},
		methods: {
			setFullArr() {
				this.$set(this.info, 'fulladdr', (this.info.districtName ? this.info.districtName : '') +
					(this.info.streetName ? this.info.streetName : '') +
					(this.info.communityName ? this.info.communityName : '') +
					(this.info.orgName ? this.info.orgName : '') +
					(this.info.roadandlanes ? this.info.roadandlanes : '') +
					(this.info.village ? this.info.village : '') +
					(this.info.buildingnum ? this.info.buildingnum : '') +
					(this.info.housenum ? this.info.housenum : '') +
					(this.info.unit ? this.info.unit : '') +
					(this.info.gatenum ? this.info.gatenum : ''))
				this.$forceUpdate();
			},
			textChange(value) {
				this.setFullArr();
			},
			// 获取区县
			getDistrict() {
				this.showDistrictType = true;
				this.DISTRICT = []
				let data = {
					interfacecode: "mobile_base_getOrgList",
					userPlacecode: JSON.parse(window.localStorage.getItem("userorg")).placecode
				}
				this.$get(data).then(res => {
					if (res.data.resultCode === "0") {
						let obj = JSON.parse(res.data.obj)
						obj.forEach(a => {
							this.DISTRICT.push({ text: a.name, value: a.code, id: a.id })
						})
					} else {
						alert(res.data.resultMsg);
					}
				})
			},
			// 获取街道
			getStreet() {
				if(!this.info.districtName) {
					Toast('请先选择区县')
					return;
				}
				this.showStreetType = true;
				this.STREET = []
				let data = {
					interfacecode: "mobile_base_getOrgList",
					userPlacecode: JSON.parse(window.localStorage.getItem("userorg")).placecode,
					placecode: this.info.districtCode
				}
				this.$get(data).then(res => {
					if (res.data.resultCode === "0") {
						let obj = JSON.parse(res.data.obj)
						obj.forEach(a => {
							this.STREET.push({ text: a.name, value: a.code, id: a.id })
						})
					} else {
						alert(res.data.resultMsg);
					}
				})
			},
			// 获取村
			getCommunity() {
				if(!this.info.streetName) {
					Toast('请先选择街道/镇/乡/开发区')
					return;
				}
				this.showCommunityType = true;
				this.COMMUNITY = []
				let data = {
					interfacecode: "mobile_base_getOrgList",
					userPlacecode: JSON.parse(window.localStorage.getItem("userorg")).placecode,
					placecode: this.info.streetCode
				}
				this.$get(data).then(res => {
					if (res.data.resultCode === "0") {
						let obj = JSON.parse(res.data.obj)
						obj.forEach(a => {
							this.COMMUNITY.push({ text: a.name, value: a.code, id: a.id })
						})
					} else {
						alert(res.data.resultMsg);
					}
				})
			},
			// 获取网格
			getOrg() {
				if(!this.info.communityName) {
					Toast('请先选择行政村/社区')
					return;
				}
				this.showOrgType = true;
				this.ORG = []
				let data = {
					interfacecode: "mobile_base_getOrgList",
					userPlacecode: JSON.parse(window.localStorage.getItem("userorg")).placecode,
					placecode: this.info.communityCode
				}
				this.$get(data).then(res => {
					if (res.data.resultCode === "0") {
						let obj = JSON.parse(res.data.obj)
						obj.forEach(a => {
							this.ORG.push({ text: a.name, value: a.code, id: a.id })
						})
					} else {
						alert(res.data.resultMsg);
					}
				})
			},
			chooseDistrictType(picker) {
				this.$set(this.info, 'districtName', picker.text)
				this.$set(this.info, 'district', picker.id)
				this.$set(this.info, 'districtCode', picker.value)
				this.showDistrictType = false;
				// 清除下级选择信息
				this.$set(this.info, 'streetName', '')
				this.$set(this.info, 'street', '')
				this.$set(this.info, 'streetCode', '')
				this.$set(this.info, 'communityName', '')
				this.$set(this.info, 'community', '')
				this.$set(this.info, 'communityCode', '')
				this.$set(this.info, 'orgName', '')
				this.$set(this.info, 'orgId', '')
				this.$set(this.info, 'orgCode', '')
				this.setFullArr()
			},
			chooseStreetType(picker) {
				this.$set(this.info, 'streetName', picker.text)
				this.$set(this.info, 'street', picker.id)
				this.$set(this.info, 'streetCode', picker.value)
				this.showStreetType = false;
				// 清除下级选择信息
				this.$set(this.info, 'communityName', '')
				this.$set(this.info, 'community', '')
				this.$set(this.info, 'communityCode', '')
				this.$set(this.info, 'orgName', '')
				this.$set(this.info, 'orgId', '')
				this.$set(this.info, 'orgCode', '')
				this.setFullArr()
			},
			chooseCommunityType(picker) {
				this.$set(this.info, 'communityName', picker.text)
				this.$set(this.info, 'community', picker.id)
				this.$set(this.info, 'communityCode', picker.value)
				this.showCommunityType = false;
				// 清除下级选择信息
				this.$set(this.info, 'orgName', '')
				this.$set(this.info, 'orgId', '')
				this.$set(this.info, 'orgCode', '')
				this.setFullArr()
			},
			chooseOrgType(picker) {
				this.$set(this.info, 'orgName', picker.text)
				this.$set(this.info, 'orgId', picker.id)
				this.$set(this.info, 'orgCode', picker.value)
				this.showOrgType = false;
				this.setFullArr()
			},
			// 初始化坐标信息
			initPosition() {
				this.positionmsg = "坐标信息获取中...";
			},
			// 手动选取坐标
			showChoosePosition() {
			},
			chooseAddType(picker) {
				// this.info.type = picker.text
				this.$set(this.info, 'type', picker.text)
				if(this.info.type === '标准地址') {
					this.info.gatenum = ''
					this.setFullArr()
				}
				this.showAddType = false;
				this.$forceUpdate();
			},
		}
	};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>
