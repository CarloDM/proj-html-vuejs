<script>
export default {
  name:'FooterTop',
}
</script>

<template>
  <div id="footer-top" class="debug2">
    
    <div class="col debug">
      <div class="logo debug"></div>

      <ul class="social">
        <a href="#"><i class="fa-brands fa-facebook-f"></i> </a>
        <a href="#"><i class="fa-brands fa-instagram"></i>  </a>
        <a href="#"><i class="fa-brands fa-twitter"></i>    </a>
        <a href="#"><i class="fa-brands fa-youtube"></i>    </a>
      </ul>
    </div>

    <div class="col debug">
      <ul>
        <li v-for="link in 5"><a href="#">Recipes</a></li>
      </ul>
    </div>

    <div class="col debug">
      <h4>contact</h4>
      <ul>
        <li><i class="fa-solid fa-location-dot"></i> addres</li>
        <li><i class="fa-solid fa-phone-flip"></i> telephone</li>
        <li><i class="fa-solid fa-envelope"></i> email</li>
      </ul>
    </div>

    <div class="col debug">
      <h4>get our app!</h4>
      <a href="#">
        <img src="../../assets/img/download-android.png" alt="">
      </a>
      <a href="#">
        <img src="../../assets/img/download-app-store.png" alt="">
      </a>
    </div>

  </div>
</template>


<style lang="scss" scoped>
#footer-top{
  display: flex;
  padding: 30px 0px;
  .col{
    width: calc(100% / 4);
    height: 100%;
    padding: 0 15px;

    .logo{
      width: 100%;
      min-height: 80px;
    }
    .social{
      width: 80%;
      display:flex;
      justify-content: space-around;
      margin-top: 10px;
    }
    ul{

      li{
        margin-bottom: 10px;
      }
    }

    h4{
        margin-bottom: 20px;
      }
    a{

      img{
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}

</style>