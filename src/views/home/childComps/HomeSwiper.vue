<template>
    <el-carousel id="hy-swiper" arrow="always" :height="sWidth">
        <el-carousel-item class="swiper_item" v-for="item in cbanners" :key="item.image">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
      name: "HomeSwiper",
      props: {
          cbanners:{
              type:Array,
              default() {
                  return []
              }
          }
      },
      data () {
        return {
          sWidth: '0px'
        }
      },

      mounted() {
        this.setWidth()
      },

      methods: {
        setWidth () {
          this.sWidth = document.body.clientWidth*0.52 + "px"
          console.log(this.sWidth);
        }
      },
    }
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper_item {
    width: 100%;
  }
  .swiper_item img{
    width: 100%;
  }

</style>
