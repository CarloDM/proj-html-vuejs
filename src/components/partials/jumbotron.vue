<script>
export default {
  name:'jumbotron',
  
}
</script>

<template>
  <div id="jumbotron" class="jumbotron">
    <div class="my_container">

      <div class="card bg_white b_radius_5">
        <span class="top bg_avada b_radius_3">TODAY'S PICK</span>
        <h1>Food Corner: Top Japanese resturant for sushi</h1>
        <span class="date">March, 25, 2019</span>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

  .jumbotron{
    width: 100%;
    height: 411px;
    background-image: url(../../assets/img/single-post-img3-1200x790.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .my_container{
      display: flex;
      justify-content: center;
      align-items: center;
      .card{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 410px;
        height: 33%;
        text-align: center;
        transform: translateY(-27px);

        .top{
          font-family: 'Nunito';
          font-size: 0.55rem;
          font-weight: 600;
          color: white;
          display: inline-block;
          position: absolute;
          top: -14px;
          padding: 6px 14px;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.46);
        }

        h1{
          font-size: 1.5rem;
          line-height: 1.8rem;
          transform: translateY(5px);
          margin-bottom: 18px;
        }
        span{
          font-size: 0.6rem;
        }
      }
    }
  }
</style>