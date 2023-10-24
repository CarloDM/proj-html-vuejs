<script>
export default {
  name:'cta subscribe',
  
}
</script>

<template>
  <div id="cta_subscribe" class="cta_subscribe bg_subscribe bg_white">
    <div class="my_container">
      
      <div class="container">

        <h2 style="display: inline-block;"> Subscribe </h2> 
        <h2 style="display: inline-block; margin: 0px 5px; color: rgb(252, 117, 35);"> & </h2> 
        <h2 style="display: inline-block;"> receive a Free eBook </h2>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quasi eveniet odit sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cum?</p>

        <input class="input_mail_avada " type="text" placeholder="insert your email_*">
        <button class="btn_avada">SUBSCRIBE</button>

        <p>Lorem ipsum dolor sit amet.</p>

      </div>
    </div>  
  </div>
  <div class="photo_container ">

    <div class="image ">
      <img style="width: 100%;" src="../../assets/img/food/Yogurt-Nan-1200x790.jpg" alt="">
    </div>
    <div class="image ">
      <img style="width: 100%;" src="../../assets/img/food/Mixed-fruits-1200x790.jpg" alt="">
    </div>
    <div class="image ">
      <img style="width: 100%;" src="../../assets/img/food/r-rachel-park-366508-unsplash-min-1200x790.jpg" alt="">
    </div>
    <div class="image ">
      <img style="width: 100%;" src="../../assets/img/food/r-michelle-tsang-500721-unsplash-min-1200x790.jpg" alt="">
    </div>

  </div>
</template>


<style lang="scss"  scoped>

.cta_subscribe{
  
  background-size: cover;
  font-family: 'Nunito';
  padding-top: 55px;
  padding-bottom: 56px;
  .my_container{

    .container{
      text-align: center;
      width: 90%;
      margin: 40px auto;

      h2{
        font-family: 'Domine';
        margin-bottom: 10px;
      }
      p{
        width: 80%;
        margin: 0px auto;
        font-size: 0.65rem;
        margin-bottom: 30px;
        line-height: 1rem;
      }
      input{
        width: 42%;
        margin-right: 20px;
      }
      button{
        width: 125px;
        height: 30px;
        margin-bottom: 20px;
      }
    }
  }
}

  .photo_container{
    width: 100%;
    height: 200px;
    min-height: 80px;
    display: flex;

    .image{
      width: 25%;
    }

  }

</style>