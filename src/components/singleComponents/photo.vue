<script>
export default {
  name:'photo',
  props:{
    imgUrl:String,
  }
}
</script>

<template>
  <div class="photo flex_center">
    <!-- <img src="../../assets/img/food/fi-korean-food-400x263.jpg" alt=""> -->
    <img :src=imgUrl alt="">
  </div>
</template>


<style lang="scss" scoped>
.photo{
  width: 100%;
  
  img{
    width: 100%;
  }
}
</style>