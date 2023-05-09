<script>
export default {
  name:'jumbotron',
  
}
</script>

<template>
  <div class="jumbotron">
    <div class="my_container debug">

      <div class="card debug2">
        <span class="top debug2">TODAY'S PICK</span>
        <h1>Food Corner: Top Japanese resturant for sushi</h1>
        <span class="date">March, 25, 2019</span>
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>

  .jumbotron{
    width: 100%;
    height: 300px;
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
        width: 350px;
        height: 60%;
        text-align: center;

        .top{
          display: inline-block;
          position: absolute;
          top: -9px;
        }
      }
    }
  }
</style>