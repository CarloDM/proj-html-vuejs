<script>
import CardArticle from '../singleComponents/cardArticleBig.vue';
import Card from '../singleComponents/cardArticle.vue';
export default {
  name:'farm to table',
  components:{
    CardArticle,
    Card,
  }
}
</script>

<template>
  <div class="farm_to_table">
  <div class="my_container debug">

    <div class="title">
      <div class="button debug">button</div>
      <h3>FARM TO TABLE</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ab reiciendis provident perspiciatis aliquid!</p>
    </div>

    <div class="container">
      <div class="col big debug2">
        <CardArticle />

        <div class="container ">
          <Card v-for="art in 6"
          class="card"
          />
        </div>
      </div>
      <div class="col small debug2"></div>
    </div>


  </div>
</div>
</template>


<style lang="scss" scoped>

.farm_to_table{

.my_container{

  .title{
    position: relative;
    
    .button{
      position: absolute;
      right: 0px;
      width: 80px;
      height: 20px;
    }
  }

  .container{
    display: flex;
    justify-content: space-between;
    width: 100%;

    .col{
      min-height: 40px;
      &.big{
        width: 64%;
      }
      &.small{
        width: 32%;
      }
      .container{
        flex-wrap: wrap;
        width: 100%;

        .card{
          width: calc(50% - 10px);
          min-height: 40px;
        }
      }
    }
  }
}

}
</style>