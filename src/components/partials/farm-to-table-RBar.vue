<script>
export default {
  name:'R-Bar',

  
}
</script>

<template>
  <div id="r-bar" class="r-bar">

    <section class="top ">

      <div class="view flex_center ">
        <h2>view our latest recipes</h2>
      </div>

      <div class="guide ">
        <span class="">city guide: Singapore</span>
        <img src="../../assets/img/avada/singapore-featured-image-1200x790.jpg" alt="">
        <a class="" href="#">
          <i class="fa-solid fa-earth-americas"></i>
          view all city guides
        </a>
      </div>

    </section>

    <section class="bottom ">

      <input class="search-bar " type="text">

      <div class="follow-us ">
        <h4>follow us</h4>
        <a href="#"><i class="fa-brands fa-facebook-f"></i> </a>
        <a href="#"><i class="fa-brands fa-instagram"></i>  </a>
        <a href="#"><i class="fa-brands fa-twitter"></i>    </a>
        <a href="#"><i class="fa-brands fa-youtube"></i>    </a>
        <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
      </div>

      <div class="select flex_center ">
        <span>popular</span>
        <span>recent</span>
      </div>

      <div class="posts">

        <div class="post flex_center ">
          <div class="logo"></div>
          <div class="title">
            <h5>veray long title vary long title </h5>
            <span>date</span>
          </div>
        </div>
        

        <div class="post flex_center">
          <div class="logo"></div>
          <div class="title">
            <h5>title</h5>
            <span>date</span>
          </div>
        </div>

        <div class="post flex_center">
          <div class="logo"></div>
          <div class="title">
            <h5>title</h5>
            <span>date</span>
          </div>
        </div>

      </div>

      <div class="tweet ">tweet</div>
    </section>


  </div>
</template>

<style lang="scss" scoped>

.r-bar{
  width: 100%;
  text-align: center;
  font-family: 'Nunito';
  .top, .bottom{
    width: 100%;
    min-height: 40px;
  }
  .top{
    .view{
      width: 100%;
      height: 245px;
      // aspect-ratio: 1/1.319;
      background-image: url(../../assets/img/avada/ad-bg.jpg);
      background-position: center;
      background-size: cover;
      padding: 27% 22%;
      text-align: center;
      margin-bottom: 30px;

      h2{
        font-size: 1.1rem;
        padding: 5px;
        line-height: 1.2rem;
      }
    }
    .guide{
      position: relative;
      width: 100%;
      // height: 200px;
      text-align: center;
      display: flex;
      flex-direction: column;
      img{
        width: 100%;
      }
      span{
        position: absolute;
        bottom: 30%;
        color: white;
        font-size: 1rem;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.623);
      }
      a{
        display: inline-block;
        font-size: 0.65rem;
        width: 100%;
        padding: 5px;

      }
    }
    &:after{
      content: '';
      display: inline-block;
      width: 100%;
      border: 1px solid rgb(218, 218, 218);
    }
  }
  .bottom{
    text-align: left;
    .search-bar{
      margin-top: 30px;
      width: 100%;
      height: 30px;
    }
    .follow-us{
      margin-top: 25px;
      margin-bottom: 24px;
      height: 60px;
      padding: 1px 3px;
      h4{
        font-size: 0.8rem;
        margin-bottom: 12px;
      }
      a{
        margin-right: 20px;
      }
    }
    .select{
      span{
        display: inline-block;
        text-align: center;
        width: 50%;
        font-size: 0.65rem;
        padding: 8px 0px;
        margin-bottom: 30px;
      }
    }
    .posts{
      width: 100%;
      margin-bottom: 30px;
      .post{
        width: 100%;
        height: 40px;
        margin-bottom: 14px;
        .logo{
          width: 30px;
          aspect-ratio: 1/1;
          border:1px solid black;
          border-radius: 50%;
        }
        .title{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 80%;
          height: 100%;
          margin-left: 5px;
          font-size: 0.75rem;
        }
      }
    }
    .tweet{}
  }
}

</style>