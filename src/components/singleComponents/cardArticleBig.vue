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
  <div class="card-article debug2">

    <img src="../../assets/img/single-post-img3-400x263.jpg" alt="">

    <div class="title debug2">

        <h3>title{{title}}</h3>
        <p>by {{ author + date  }}</p>

    </div>

    <div class="paragraph debug">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non expedita minima fugiat culpa, eveniet consequuntur quod natus voluptatibus enim porro ab repellendus aspernatur, sapiente dolore! Suscipit unde quod voluptas.</p>
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
    margin: 2px auto;
    font-size: 0.6rem;
    &:after{
      content: '';
      width: 100%;
      margin: 5px 0px;
      border-top: 1px solid black;
    }
  }
  .paragraph, .more{
    width: 90%;
    margin: 0 auto;
  }
  .more{
    margin-bottom: 10px;
  }
}

</style>