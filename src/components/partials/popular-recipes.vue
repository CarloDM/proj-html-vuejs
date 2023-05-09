<script>
export default {
  name:'popularRecipes',
  
}
</script>

<template>
  <div class="popular_recipes">
    <div class="my_container debug">

      <div class="title">
        <h3>POPULAR RECIPES</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ab reiciendis provident perspiciatis aliquid!</p>
      </div>

      <div class="container">
        <div class="col debug2"></div>
        <div class="col debug2"></div>
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>

.popular_recipes{

  .my_container{

    .title{
      text-align: center;
    }

    .container{
      display: flex;
      justify-content: space-between;
      width: 100%;
      .col{
        width: 48%;
        min-height: 40px;
      }
    }
  }

}
</style>