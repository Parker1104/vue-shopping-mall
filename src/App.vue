<template>
  <div id="app">
    <router-view/>
    <mainTabBar/>
  </div>
</template>
<script>
import mainTabBar from 'components/content/mainTabBar/MainTabBar'
  export default {
    name: 'app',
    components: {
      mainTabBar,
    }
  }
</script>
<style lang="less">
  @import url("./assets/css/base.css");
</style>
