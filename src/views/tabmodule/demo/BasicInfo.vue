<template>
  <div class="basic basic-form">
    <div class="title">房屋</div>
    <van-cell-group>
        <van-field  clearable label="住所名称" required placeholder/>
        <van-cell title="居住情况" is-link  required @click="showlivingsituationType = true" />
        <van-popup v-model="showlivingsituationType" position="bottom">
          <van-picker show-toolbar  @cancel="showlivingsituationType = false" @confirm="chooselivingsituationType" />
        </van-popup>
      <van-field  clearable label="住所简称" placeholder/>
      <template>
        <van-cell title="住所户型" is-link  @click="showhousetypeType = true" />
        <van-popup  position="bottom">
          <van-picker show-toolbar  @cancel="showhousetypeType = false" @confirm="choosehousetypeType" />
        </van-popup>
      </template>
      <template>
        <van-cell title="住所用途" is-link  @click="showapplicationType = true" />
        <van-popup v-model="showapplicationType" position="bottom">
          <van-picker show-toolbar @cancel="showapplicationType = false" @confirm="chooseapplicationType" />
        </van-popup>
      </template>
      <van-field  clearable label="套内建筑面积" placeholder/>
      <template>
        <van-cell title="是否违建" is-link @click="showislegalbuildType = true" />
        <van-popup  position="bottom">
          <van-picker show-toolbar  @cancel="showislegalbuildType = false" @confirm="chooseislegalbuildType" />
        </van-popup>
      </template>
      <van-field  clearable label="不动产权证号" placeholder/>
      <template>
        <van-cell title="房屋所有权人类型" is-link  @click="showownertypeType = true" />
        <van-popup v-model="showownertypeType" position="bottom">
          <van-picker show-toolbar  @cancel="showownertypeType = false" @confirm="chooseownertypeType" />
        </van-popup>
      </template>
      <van-field  clearable label="房屋所有权人姓名" placeholder/>
      <van-field clearable label="所有权人证件号" placeholder/>
      <van-field  clearable label="所有权人联系方式" placeholder/>
      <template>
        <van-cell title="所有权登记时间" is-link  value-class="cell-value" @click="showregisterTime = true"/>
        <van-popup v-model="showregisterTime" position="bottom">
          <van-datetime-picker  type="date" @cancel="showregisterTime = false" @confirm="chooseregisterTime"/>
        </van-popup>
      </template>
      <template>
        <van-cell title="所有权注销时间" is-link  value-class="cell-value" @click="showcanceldateTime = true"/>
        <van-popup  position="bottom">
          <van-datetime-picker  type="date" @cancel="showcanceldateTime = false" @confirm="choosecanceldateTime"/>
        </van-popup>
      </template>
      <van-field  clearable label="共有情况" placeholder/>
        <van-cell title="地址" required is-link  @click="setAddress()" />
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
      showlivingsituationType:false,
      showhousetypeType:false,
      showapplicationType:false,
      showislegalbuildType:false,
      showownertypeType:false,
      showregisterTime:false,
      showcanceldateTime:false,
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    chooselivingsituationType(picker) {
      this.info.livingsituation = picker.text
      this.showlivingsituationType = false;
      this.$emit('chooselivingsituation');
    },
    choosehousetypeType(picker) {
      this.info.housetype = picker.text
      this.showhousetypeType = false;
    },
    chooseapplicationType(picker) {
      this.info.application = picker.text
      this.showapplicationType = false;
    },
    chooseislegalbuildType(picker) {
      this.info.islegalbuild = picker.value
      this.showislegalbuildType = false;
    },
    chooseownertypeType(picker) {
      this.info.ownertype = picker.value
      this.showownertypeType = false
    },
    chooseregisterTime(picker) {
      this.showregisterTime = false;
    },
    choosecanceldateTime(picker) {
      this.showcanceldateTime = false;
    },
    setAddress() {
      localStorage.setItem('info', JSON.stringify(this.info))
      this.$router.push({ name: 'AddressChoice' });
    }
  },
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>
