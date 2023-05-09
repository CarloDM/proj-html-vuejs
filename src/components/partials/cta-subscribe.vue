<script>
export default {
  name:'cta subscribe',
  
}
</script>

<template>
  <div class="cta_subscribe">
    <div class="my_container debug">

      <div class="container">
        <h2>Subscribe</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quasi eveniet odit sunt.</p>

        <input type="text">
        <button>SUBSCRIBE</button>

        <p>Lorem ipsum dolor sit amet.</p>

      </div>
    </div>  
    <div class="foto_container debug2"></div>
  </div>
</template>


<style lang="scss"  scoped>

.cta_subscribe{
  background-image: url(../../assets/img/subscribe-sec-bg.png);
  background-size: cover;
  .my_container{

    .container{
      text-align: center;
      width: 90%;
      margin: 40px auto;
    }
  }

  .foto_container{
    width: 100%;
    min-height: 80px;
  }
}

</style>