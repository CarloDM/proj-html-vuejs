<script>
export default {
  name:'cta subscribe',
  
}
</script>

<template>
  <div id="cta_subscribe" class="cta_subscribe bg_subscribe bg_white">
    <div class="my_container">
      
      <div class="container">
        <h2>Subscribe & receive</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quasi eveniet odit sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cum?</p>

        <input type="text">
        <button>SUBSCRIBE</button>

        <p>Lorem ipsum dolor sit amet.</p>

      </div>
    </div>  
  </div>
  <div class="foto_container debug2"></div>
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

  .foto_container{
    width: 100%;
    height: 188px;
    min-height: 80px;

  }

</style>