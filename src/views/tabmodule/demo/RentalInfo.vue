<template>
  <div class="basic basic-form">
    <div class="title">出租房</div>
    <van-cell-group>
      <van-field clearable label="租赁备案证号" placeholder/>
        <van-cell title="出租房性质" is-link  />
        <van-popup v-model="showhousepropertyType" position="bottom">
          <van-picker show-toolbar @cancel="showhousepropertyType = false" @confirm="choosehousepropertyType" />
        </van-popup>
        <van-cell title="出租房类型" is-link  required @click="showhousetypeType = true" />
        <van-popup v-model="showhousetypeType" position="bottom">
          <van-picker show-toolbar  @cancel="showhousetypeType = false" @confirm="choosehousetypeType" />
        </van-popup>
        <van-cell title="出租房用途" is-link  required @click="showapplicationType = true" />
        <van-popup v-model="showapplicationType" position="bottom">
          <van-picker show-toolbar  @cancel="showapplicationType = false" @confirm="chooseapplicationType" />
        </van-popup>
      <template>
        <van-cell title="租用状态" is-link  @click="showrentalstateType = true" />
        <van-popup v-model="showrentalstateType" position="bottom">
          <van-picker show-toolbar  @cancel="showrentalstateType = false" @confirm="chooserentalstateType" />
        </van-popup>
      </template>
        <van-cell title="房屋结构" is-link  required @click="showhousestructureType = true" />
        <van-popup v-model="showhousestructureType" position="bottom">
          <van-picker show-toolbar  @cancel="showhousestructureType = false" @confirm="choosehousestructureType" />
        </van-popup>
      <template>
        <van-cell title="群租标志" is-link  @click="showgrouprentalflagType = true" />
        <van-popup v-model="showgrouprentalflagType" position="bottom">
          <van-picker show-toolbar  @cancel="showgrouprentalflagType = false" @confirm="choosegrouprentalflagType" />
        </van-popup>
      </template>
      <van-field  clearable label="出租间数" placeholder/>
      <van-field  clearable label="限住人数" placeholder/>
        <van-cell title="出租人类型" is-link  required @click="showownertypeType = true" />
        <van-popup v-model="showownertypeType" position="bottom">
          <van-picker show-toolbar  @cancel="showownertypeType = false" @confirm="chooseownertypeType" />
        </van-popup>
        <van-field  required clearable label="出租人姓名" placeholder/>
      <van-field  clearable label="出租人身份证号码" placeholder/>
        <van-field  required clearable label="出租人联系方式" placeholder/>
      <van-field  clearable label="出租人现居详址" placeholder/>
        <van-field  required clearable label="主要承租人姓名" placeholder/>
      <van-field  clearable label="主要承租人身份证号码" placeholder/>
        <van-field  required clearable label="主要承租人联系方式" placeholder/>
      <template>
        <van-cell title="出租日期" is-link  value-class="cell-value" @click="showrentaldateTime = true"/>
        <van-popup v-model="showrentaldateTime" position="bottom">
          <van-datetime-picker  type="date" @cancel="showrentaldateTime = false" @confirm="chooserentaldateTime"/>
        </van-popup>
      </template>
      <template>
        <van-cell title="登记日期" is-link  value-class="cell-value" @click="showregisterdateTime = true"/>
        <van-popup v-model="showregisterdateTime" position="bottom">
          <van-datetime-picker  type="date" @cancel="showregisterdateTime = false" @confirm="chooseregisterdateTime"/>
        </van-popup>
      </template>
        <van-cell title="隐患类型" is-link  required @click="showdangertypeType = true" />
        <van-popup v-model="showdangertypeType" position="bottom">
          <van-picker show-toolbar  @cancel="showdangertypeType = false" @confirm="choosedangertypeType" />
        </van-popup>
        <van-cell title="隐患程度" is-link  required @click="showdangerlevelType = true" />
        <van-popup v-model="showdangerlevelType" position="bottom">
          <van-picker show-toolbar  @cancel="showdangerlevelType = false" @confirm="choosedangerlevelType" />
        </van-popup>
        <van-cell title="有无安全出口" is-link  @click="showisexitType = true" />
        <van-popup v-model="showisexitType" position="bottom">
          <van-picker show-toolbar  @cancel="showisexitType = false" @confirm="chooseisexitType" />
        </van-popup>
        <van-cell title="是否签订治安责任保证书" is-link  @click="showdutyletterType = true" />
        <van-popup v-model="showdutyletterType" position="bottom">
          <van-picker show-toolbar  @cancel="showdutyletterType = false" @confirm="choosedutyletterType" />
        </van-popup>
        <van-cell title="有无消防通道" is-link  @click="showfireaccessType = true" />
        <van-popup v-model="showfireaccessType" position="bottom">
          <van-picker show-toolbar  @cancel="showfireaccessType = false" @confirm="choosefireaccessType" />
        </van-popup>
      <van-field  clearable label="备注" placeholder/>
    </van-cell-group>
  </div>
</template>

<script>
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
      showhousepropertyType:false,
      showhousetypeType:false,
      showapplicationType:false,
      showrentalstateType:false,
      showhousestructureType:false,
      showgrouprentalflagType:false,
      showownertypeType:false,
      showrentaldateTime:false,
      showregisterdateTime:false,
      showdangertypeType:false,
      showdangerlevelType:false,
      showisexitType:false,
      showdutyletterType:false,
      showfireaccessType:false,
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    choosehousepropertyType(picker) {
      this.info.houserental.houseproperty = picker.text
      this.showhousepropertyType = false;
    },
    choosehousetypeType(picker) {
      this.info.houserental.housetype = picker.text
      this.showhousetypeType = false
    },
    chooseapplicationType(picker) {
      this.info.houserental.application = picker.text
      this.showapplicationType = false
    },
    chooserentalstateType(picker) {
      this.info.houserental.rentalstate = picker.value
      this.showrentalstateType = false
    },
    choosehousestructureType(picker) {
      this.info.houserental.housestructure = picker.text
      this.showhousestructureType = false
    },
    choosegrouprentalflagType(picker) {
      this.info.houserental.grouprentalflag = picker.value
      this.showgrouprentalflagType = false
    },
    chooseownertypeType(picker) {
      this.info.houserental.ownertype = picker.text
      this.showownertypeType = false
    },
    chooserentaldateTime(picker) {
      this.showrentaldateTime = false;
    },
    chooseregisterdateTime(picker) {
      this.showregisterdateTime = false;
    },
    choosedangertypeType(picker) {
      this.info.houserental.dangertype = picker.text
      this.showdangertypeType = false
    },
    choosedangerlevelType(picker) {
      this.info.houserental.dangerlevel = picker.text
      this.showdangerlevelType = false
    },
    chooseisexitType(picker) {
      this.info.houserental.isexit = picker.value
      this.showisexitType = false
    },
    choosedutyletterType(picker) {
      this.info.houserental.dutyletter = picker.value
      this.showdutyletterType = false
    },
    choosefireaccessType(picker) {
      this.info.houserental.fireaccess = picker.value
      this.showfireaccessType = false
    },
  }
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>
