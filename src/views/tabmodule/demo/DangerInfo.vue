<template>
  <div class="basic basic-form">
    <div class="title">危房信息</div>
    <van-cell-group>
        <van-cell title="初始等级" is-link  required @click="showinitialevelStrType = true" />
        <van-popup  position="bottom">
          <van-picker show-toolbar  @cancel="showinitialevelStrType = false" @confirm="chooseinitialevelStrType" />
        </van-popup>
        <van-cell title="损坏等级" is-link  required @click="showdamagelevelStrType = true" />
        <van-popup  position="bottom">
          <van-picker show-toolbar  @cancel="showdamagelevelStrType = false" @confirm="choosedamagelevelStrType" />
        </van-popup>
        <van-cell title="综合等级" is-link  required @click="showintergratedlevelStrType = true" />
        <van-popup  position="bottom">
          <van-picker show-toolbar  @cancel="showintergratedlevelStrType = false" @confirm="chooseintergratedlevelStrType" />
        </van-popup>
        <van-cell title="危房类别" is-link  required @click="showdangertypeType = true" />
        <van-popup  position="bottom">
          <van-picker show-toolbar  @cancel="showdangertypeType = false" @confirm="choosedangertypeType" />
        </van-popup>
      <van-field label="结构破坏情况" placeholder/>
      <van-field label="结构裂缝情况" placeholder/>
      <van-field  label="沉降倾斜情况" placeholder/>
      <van-field  label="其他危害情况" placeholder/>
      <van-field  label="鉴定情况" placeholder/>
      <van-field  clearable label="解危处置情况" placeholder/>
      <van-field label="备注" placeholder/>
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
      showinitialevelStrType:false,
      showdamagelevelStrType:false,
      showintergratedlevelStrType:false,
      showdangertypeType:false,
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    chooseinitialevelStrType(picker) {
      this.info.buildingdangerous.initialevelStr = picker.text
      this.showinitialevelStrType = false;
    },
    choosedamagelevelStrType(picker) {
      this.info.buildingdangerous.damagelevelStr = picker.text
      this.showdamagelevelStrType = false
    },
    chooseintergratedlevelStrType(picker) {
      this.info.buildingdangerous.intergratedlevelStr = picker.text
      this.showintergratedlevelStrType = false
    },
    choosedangertypeType(picker) {
      this.info.buildingdangerous.dangertypeStr = picker.text
      this.showdangertypeType = false
    },
  }
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>
