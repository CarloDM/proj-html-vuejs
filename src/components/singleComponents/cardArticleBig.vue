<script>
export default {
  name:'cardArticle',
  props:{
    title: String,
    author: String,
    date: String,
    img: String,
    paragraph: String,
    answers: Number,
    type: Number,
  }
}
</script>

<template>
  <div class="card-article ">

    <img :src=img alt="">

    <div class="title">

        <h3>{{title }}</h3>
        <p>by {{ author + date }}</p>

    </div>

    <div class="paragraph ">
      <p>{{ paragraph }}</p>
    </div>

    <div v-if="type === 0"
      class="more bg_avada">
      <a href="#">LEARN MORE</a>
    </div>

    <div v-if="type === 1"
      class=" read-more flex_between">
      <a href="#">read more ></a>
      <a href="#"><i class="fa-regular fa-message"></i>{{ answers }} </a>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.card-article{
  width: 100%;
  background-color: white;

  img{
    width: 100%;
  }

  .title{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 18px auto;
    font-size: 0.6rem;

    h3{
      margin-bottom: 8px;
    }
    &:after{
      content: '';
      width: 100%;
      margin: 10px 0px;
      border-top: 1px solid rgb(223, 223, 223);
    }
  }
  .paragraph, .more, .read-more{
    width: 90%;
    margin: 0 auto;
  }
  .paragraph{
    font-size: 0.65rem;
    line-height: 1.1rem;
    margin-bottom: 9px;
  }
  .more{
    width: 85px;
    padding: 8px 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    font-size: 0.50rem;
    font-weight: 900;
    a{
      color: white;
    }
  }
  .read-more{
    font-family:'nunito' ;
    font-size: 0.65rem;
  }
}

</style>