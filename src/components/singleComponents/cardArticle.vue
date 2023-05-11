<script>
export default {
  name:'cardArticle',
  props:{
    title: String,
    author: String,
    date: String,
    img: String,
  },
  methods:{
    saluta(){
      console.log('ciao')

    }
  }
  
}
</script>

<template>
  <div class="card-article bg_white">

    <div class="hover_img debug">
      <a href="#">link</a>
      <h4>{{title}}</h4>
      <img  src="../../assets/img/single-post-img3-400x263.jpg" alt="">
    </div>

    <div class="title flex_center debug2 ">
        <h3>{{title}}</h3>
        <p>by {{ author + date  }}</p>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.card-article{
  // width: 220px;
  // width: 100%;
  // height: 145px;
  aspect-ratio: 1.51/1 ;
  img{
    width: 100%;
    height: 100%;
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