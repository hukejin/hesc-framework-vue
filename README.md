# hesc-framework-vue

# 通用的vue工程框架，满足现有产品的UI、服务等框架
### UI部分采用mint、vant进行二次开发实现通用类型的各种组件，方便项目直接使用
---
#### list的用法   
list组件实现了下拉刷新、上滑加载更多的事件回调，props需要设定3个值 
```
isRefrushLoading 是否正在下拉刷新，当下拉刷新触发后变更为true，如果执行完下拉的web请求后
将其设置为false   
isMoreLoading 是否正在上滑加载更多，当上滑加载触发后变更为true，如果执行完上滑的web请求后
将其设置为false   
isNoMoreData 如果已是数据最后一页，将其设置为true
```  
组件回调事件
```
onRefresh() 触发下拉刷新
onLoad() 上滑加载更多
```
list组件支持插槽slot，可以自定义各类效果的item
```
<list :isRefrushLoading="isRefrushing" :isMoreLoading="isMoreLoading" :isNoMoreData="isNoMore"
      @onRefresh="onRefresh" @onLoadMore="onLoad">
    <!--列表子项根据业务自定义样式-->
    <van-cell :title="item.id" :value="item.value" v-for="(item,index) in listdatas"  :key="index" icon="user-o" @click="OnItemClick(item)" ></van-cell>
</list>
```
#### 带搜索功能的列表SearchList   
基本用法同上list组件，添加了搜索事件回调
```
@onSearch="onSearch" 进行搜索
@onCancel="onCancel" 取消搜索，清空搜索条件
```
#### 页签组件tabpage,支持滚动屏幕自动关联tab页签
需传入数组对象tablist，数组子元素为
```
{   "title":"地址",//页签标题
    "index":0 //页签索引
}
```
页签采用slot方式进行子页面关联
```
<tabpage :tablist="tabs">
    <itemComponent1 ></itemComponent1>
    <itemComponent2 ></itemComponent2>
    <itemComponent3 ></itemComponent3>
</tabpage>
```
#### 树形组件 tree
树形组件采用迭代方式实现树形结构，建议不要超过3层结构   
props传值说明：
```
label:节点名称
nodeId：节点唯一标识id
nodes：Array  节点结构体数组
depth：节点深度，初始为0，剩下的会自动计算赋值
contactBookList：节点最终子项(无子节点)
```
事件回调
```
showkey() 点击最终子项返回click事件
```


