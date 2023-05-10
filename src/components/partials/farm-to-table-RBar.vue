<script>
export default {
  name:'R-Bar',

  
}
</script>

<template>
  <div class="r-bar">

    <section class="top ">

      <div class="view flex_center debug">
        <h1>view our latest recipes</h1>
      </div>

      <div class="guide debug">
        <span class="debug2">city guide: Singapore</span>
        <img src="../../assets/img/avada/singapore-featured-image-1200x790.jpg" alt="">
        <a href="#">view all city guides</a>
      </div>

    </section>

    <section class="bottom debug">

      <input class="search-bar " type="text">

      <div class="follow-us debug2">
        <h4>follow us</h4>
        <a href="#">ic</a>
        <a href="#">ic</a>
        <a href="#">ic</a>
        <a href="#">ic</a>
        <a href="#">ic</a>
      </div>

      <div class="select flex_center debug2">
        <span>popular</span>
        <span>recent</span>
      </div>

      <div class="posts">

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

        <div class="post flex_center">
          <div class="logo"></div>
          <div class="title">
            <h5>title</h5>
            <span>date</span>
          </div>
        </div>

      </div>

      <div class="tweet debug2">tweet</div>
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
      aspect-ratio: 1/1.319;
      background-image: url(../../assets/img/avada/ad-bg.jpg);
      background-size: cover;
      padding: 27% 22%;
      text-align: center;
      margin-bottom: 10px;
    }
    .guide{
      position: relative;
      width: 100%;
      text-align: center;

      img{
        width: 100%;
      }
      span{
        position: absolute;
        bottom: 30%;
      }
      a{
        display: inline-block;
        padding: 5px;
      }
    }

    &:after{
      content: '';
      display: inline-block;
      width: 100%;
      border: 1px solid rgb(228, 10, 10);
    }
  }
  .bottom{
    text-align: left;
    .search-bar{
      width: 100%;
    }
    .follow-us{}
    .select{
      span{
        display: inline-block;
        text-align: center;
        width: 50%;
        border: 1px solid black;
      }
    }
    .posts{
      width: 100%;
      .post{
        width: 100%;
        height: 40px;
        .logo{
          width: 40px;
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
        }
      }
    }
    .tweet{}
  }
}

</style>