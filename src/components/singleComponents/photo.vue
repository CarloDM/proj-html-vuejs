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
  <div id="photo" class="photo flex_center">

    <img :src=imgUrl alt="">

    <p class="link"><a class="clr_white" href="#">link</a></p>
    <p class="title clr_white ">{{title}}</p>
    
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/var.scss' as * ;
.photo{
  width: 100%;
  flex-direction: column;
  overflow: hidden;
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
  .link{
    transform: translateY(-100%);
  }
  .title{
    text-align: center;
    font-size: 0.8rem;
    max-width: 150px;
    padding: 10px;
    transform: translateY(50%);
  }


  &:hover{
    background-image: linear-gradient($black,$avada_orange);
    img{
      opacity: 0.1;
    }
    .link,.title{
      display: inline-block;
      opacity: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .photo{
    .title{
      font-size: 0.6rem;
      max-width: 120px;
    }
  }
}

@media screen and (max-width: 500px) {
  .photo{
    .title{
      font-size: 0.4rem;
      max-width: 100px;
    }
  }
}
</style>