<template>
  <div class="home">
    <p style="padding: 5px;background-color: aquamarine">展示vue版本的组件-UI-后台服务工程</p>
    <van-cell title="树形组件" is-link to="treeModule" value="显示树形控件的使用方法"></van-cell>
    <van-cell title="通讯录组件" is-link to="contactbooks" value="树形控件实现通讯录"></van-cell>
    <van-cell title="列表组件" is-link to="listmodule" value="实现下拉刷新、上拉加载更多"></van-cell>
    <van-cell title="带搜索的列表组件" is-link to="searchlistmodule" value="实现下拉刷新、上拉加载更多"></van-cell>
    <van-cell title="随界面滚动的tab组件" is-link to="tabmodule" value="基层项目为例"></van-cell>
    <van-cell title="http组件的使用" is-link to="webdemo" value="展示post、get用法"></van-cell>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
    }
  },
  methods:{

  }
}
</script>
