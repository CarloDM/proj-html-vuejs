<script>
export default {
  name:'FooterTop',
}
</script>

<template>
  <div id="footer-top" class="">
    
    <div class="col ">

      <div class="logo ">
        <img src="../../assets/img/avada/avada-food-logo-mob-2x.png" alt="">
      </div>

      <div class="social">
        <a href="#"><i class="fa-brands fa-facebook-f"></i> </a>
        <a href="#"><i class="fa-brands fa-instagram"></i>  </a>
        <a href="#"><i class="fa-brands fa-twitter"></i>    </a>
        <a href="#"><i class="fa-brands fa-youtube"></i>    </a>
      </div>
      
    </div>

    <div class="col info ">
      <ul>
        <li v-for="link in 5"><a href="#">Recipes</a></li>
      </ul>
    </div>

    <div class="col contact ">
      <h4>contact</h4>
      <ul>
        <li><i class="fa-solid fa-location-dot"></i> addres</li>
        <li><i class="fa-solid fa-phone-flip"></i> telephone</li>
        <li><i class="fa-solid fa-envelope"></i> email</li>
      </ul>
    </div>

    <div class="col get-our-app ">
      <h4>get our app!</h4>
      <a class="" href="#">
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
    // height: 100%;
    // padding: 0 15px;

    .logo{
      margin-top: 6px;
      width: 85%;
      min-height: 80px;

      img{
        width: 100%;
      }
    }
    .social{
      width: 80%;
      margin-top: 10px;

      a{
        margin: 0px 5px;
      }
    }
    &.info{
      padding-top: 19px;
    }
    &.contact, &.get-our-app{
      h4{
        padding: 2px 20px;
      }
    }

    &.contact{
      
    h4{
        margin-bottom: 20px;
      }
    }
    &.get-our-app{
      h4{
        margin-bottom: 12px;
      }
      a{
        display: block;
        position: relative;
        left: 25px;
        width: 80%;
        height: 45px;
        margin-bottom: 15px;

        img{
          width: 100%;
        }
      }
    }

    ul{
      margin-left: 24px;
      font-size: 0.65rem;

      li{
        margin-bottom: 13px;
      }
    }

  }
}

</style>