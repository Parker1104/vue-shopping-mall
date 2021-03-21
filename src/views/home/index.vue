<!--  -->
<template>
  <div id="home_page">
    <nav-bar>
      <div class="nav-bar-title" slot="center">购 物 街</div>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
    <home-recommends :crecommends="recommends"></home-recommends>
    <div class="recommend_img"><img  src="~assets/img/recommend_bg.png" alt=""></div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommends from './childComps/HomeRecommends'

  import {getHomeMultiData} from 'network/api/home'
  export default {
    name:'home',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommends
    },
    created () {
      getHomeMultiData().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>
<style>
#home_page {
  height: 5000px
}
.nav-bar {
  background-color: var(--tint-color);
}
.nav-bar-title {
  color: white;
  font-size: 18px;
}
.recommend_img {
  display: flex;
  width: 100%;
  height: 282.1px;
}
.recommend_img img{
  width: 100%;
}

</style>
