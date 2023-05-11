<script>
import CardArticle from '../singleComponents/cardArticleBig.vue';
import Card from '../singleComponents/cardArticle.vue';
import RBAr from '../partials/farm-to-table-RBar.vue';
import {store} from '../../data/store';
export default {
  name:'farm to table',
  components:{
    CardArticle,
    Card,
    RBAr,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="farm_to_table">
  <div class="my_container ">

    <div class="title">
      <div class="button flex_center ">
        <span>READ </span>
        <i class="fa-solid fa-book-open-reader"></i>
      </div>
      <h3>FARM TO TABLE</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ab reiciendis provident perspiciatis aliquid!</p>
    </div>

    <div class="container">
      <div class="col big ">

        <CardArticle class="card-article"
          :title=    'store.articles[1].title'
          :author=   'store.articles[1].author'
          :date=     'store.articles[1].date'
          :img=      'store.articles[1].imgUrl'
          :paragraph="store.articles[1].paragraph"
          :answers=  "store.articles[1].answers.length"
          :type="1"
          />

        <div class="container ">
          <Card class="card" 
          v-for="(card, index) in store.articles" :key="index"
          :title=    'store.articles[index].title'
          :author=   'store.articles[index].author'
          :date=     'store.articles[index].date'
          :img=      'store.articles[index].imgUrl'
          />
          <button>LOAD MORE POST</button>
        </div>
      </div>

      <div class="col small ">
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
      width: 110px;
      height: 25px;
      font-size: 0.55rem;
      padding: 8px;
      color: white;

      span{
        margin-right: 5px;
      }
    }
    h3{
      margin-bottom: 15px;
    }
    p{
      font-size: 0.65rem;
      margin-bottom: 42px;
      width: 50%;
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
        .card-article{
          margin-bottom: 30px;
        }
      }
      &.small{
        width: 31%;
      }
      .container{
        flex-wrap: wrap;
        width: 100%;

        .card{
          width: calc(50% - 10px);
          min-height: 40px;
          text-align: center;
        }
        button{
          width: 100%;
          margin-top: 7px;
          font-size: 0.65rem;
        }
      }
    }
  }
}

}
</style>