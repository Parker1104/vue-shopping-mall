<!--  -->
<template>
<div>
  <tab-bar>
    <tab-bar-item path="/home">
        <!-- 在html模板中使用路径别名，需要加~，否则会找不到文件 -->
        <img slot="item-icon" src="~assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/home_active.svg" alt="">
        <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/category_active.svg" alt="">
        <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>

</template>

<script>

import tabBar from 'components/common/tabbar/TabBar'
import tabBarItem from 'components/common/tabbar/TabBarItem'


  export default {
    name:'mainTabBar',
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>
<style>
</style>
