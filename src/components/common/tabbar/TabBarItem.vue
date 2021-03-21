<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'tabBarItem',
    data() {
      return {
        // isActive: false
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#1296db',
      }
    },
    computed: {
      isActive () {
        // 方式一：this.$route当前活跃组件的path与父组件传递的值props中的path是否一致，
        return this.$route.path === this.path
        // 方式二：
        // return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle () {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick () {
        this.$router.replace(this.path)
      }
    },
  }
</script>

<style>
  .tab-bar-item {
    /* flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
    该样式平分父级元素的横向分布*/
    flex: 1;
    height: 65px;
    text-align: center;
    font-size: 11px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 8px;
    /* 此属性去除图片默认情况下底部的3个像素 */
    vertical-align: middle;
  }

</style>
