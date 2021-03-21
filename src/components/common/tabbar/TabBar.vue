<!--  -->
<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'taBbar'
  }
</script>
<style>
.tab-bar{
  background: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
