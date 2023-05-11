<script>
import Photo from'./photo.vue';
export default {
  name:'cardArticle',
  props:{
    title: String,
    author: String,
    date: String,
    img: String,
  },
  components:{
    Photo,
  }
}
</script>

<template>
  <div class="card-article">

    <!-- <img :src=img alt=""> -->
    <Photo class="photo" :imgUrl=img :title=title />

    <a href="#" class="title flex_center clr_black ">
        <h3>{{title}}</h3>
        <p>by {{ author + date  }}</p>
    </a>

  </div>
</template>

<style lang="scss" scoped>
.card-article{
  // width: 220px;
  // width: 100%;
  // height: 200px;

  img{
    width: 100%;
  }
  .title{
    flex-direction: column;
    width: 90%;
    margin: 2px auto;
    font-size: 0.6rem;
    margin-bottom: 5px;
    margin-top: 5px;

    h3{
      margin-bottom: 7px;
      line-height: 1rem;
    }
  }
}

</style>