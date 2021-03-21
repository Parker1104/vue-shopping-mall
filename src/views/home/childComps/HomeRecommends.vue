<!--  -->
<template>
  <div class="recommendsBody">
    <div class="recommendsItem" v-for="item in crecommends" :key="item.image">
        <div>
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div>
        <div>
          {{item.title}}
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommends',
    props: {
      crecommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style>
.recommendsBody {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 6px solid #f0f2f5;
}
.recommendsItem {
  margin-top: 5px;
  font-size: 13px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  padding-bottom: 7px;
}
.recommendsItem img{
  height: 70px;
  width: 70px;
}
</style>
