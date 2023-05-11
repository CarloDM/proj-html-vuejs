<script>
export default {
  name:'photo',
  props:{
    imgUrl: String,
    title: String,
  }
}
</script>

<template>
  <div class="photo flex_center hover_photo">

    <img :src=imgUrl alt="">

    <p class="link"><a class="clr_white" href="#">link</a></p>
    <p class="title">{{title}}</p>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/var.scss' as * ;
.photo{
  width: 100%;
  flex-direction: column;
  background-image: linear-gradient($black,$avada_orange);
  img{
    transition: all 0.2s ease;
    width: 100%;
    opacity: 1;
  }
  .link,.title{
    transition: all 0.2s ease;
    position: absolute;
    opacity: 0;
  }
  .title{
    transform: translateY(100%);
  }

  &:hover{
    img{
      opacity: 0.1;
    }
    .link,.title{
      display: block;
      opacity: 1;
    }
  }
}
</style>