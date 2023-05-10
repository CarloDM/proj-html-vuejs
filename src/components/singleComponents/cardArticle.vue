<script>
export default {
  name:'cardArticle',
  props:{
    title: String,
    author: String,
    date: String,
    img: String,
  }
}
</script>

<template>
  <div class="card-article debug2">

    <img src="../../assets/img/single-post-img3-400x263.jpg" alt="">

    <div class="title flex_center debug2">
        <h3>{{title}}</h3>
        <p>by {{ author + date  }}</p>
    </div>

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
    width: 80%;
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