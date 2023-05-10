<script>
export default {
  name:'cardArticle',
  props:{
    title: String,
    author: String,
    date: String,
    img: String,
    paragraph: String,
  }
}
</script>

<template>
  <div class="card-article ">

    <img src="../../assets/img/single-post-img3-400x263.jpg" alt="">

    <div class="title debug2">

        <h3>title{{title}}</h3>
        <p>by {{ author + date  }}</p>

    </div>

    <div class="paragraph debug">
      <p>{{ paragraph }}</p>
    </div>

    <div class="more">
      <a href="#">LEARN MORE</a>
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
      margin: 4px 0px;
      border-top: 1px solid black;
    }
  }
  .paragraph, .more{
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
    border: 1px solid black;

    a{
      color: white;
    }
  }
}

</style>