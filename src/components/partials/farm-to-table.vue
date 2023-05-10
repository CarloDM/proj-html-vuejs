<script>
import CardArticle from '../singleComponents/cardArticleBig.vue';
import Card from '../singleComponents/cardArticle.vue';
import RBAr from '../partials/farm-to-table-RBar.vue';
export default {
  name:'farm to table',
  components:{
    CardArticle,
    Card,
    RBAr,
  }
}
</script>

<template>
  <div class="farm_to_table">
  <div class="my_container debug">

    <div class="title">
      <div class="button debug">
        READ
        <i class="fa-solid fa-book-open-reader"></i>
      </div>
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
          <button>LOAD MORE POST</button>
        </div>
      </div>

      <div class="col small debug2">
        <RBAr/>
      </div>
    </div>


  </div>
</div>
</template>


<style lang="scss" scoped>

.farm_to_table{

.my_container{

  .title{
    position: relative;
    font-family: 'Nunito';
    
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
        width: 68%;
      }
      &.small{
        width: 28%;
      }
      .container{
        flex-wrap: wrap;
        width: 100%;

        .card{
          width: calc(50% - 10px);
          min-height: 40px;
        }
        button{
          width: 100%;
        }
      }
    }
  }
}

}
</style>