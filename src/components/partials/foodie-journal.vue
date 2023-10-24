<script>
import Card from '../singleComponents/cardArticle.vue';
import {store} from '../../data/store';
export default {
  name:'FoodieJournal',
  components:{
    Card,
  },
  data(){
    return{
      store,
    }
  },
}
</script>

<template>
  <div id="FoodieJournal" class="FoodieJournal">
    <div class="my_container b_radius_3">

      <div class="title_container ">
        <div class=""></div>
        <h3 class=""> FOODIE JOURNAL </h3>
        <div class=""></div>
      </div>
      
      <div class="flex_between ">
  
        <Card class="card "
        v-for="(card, index) in [store.articles[0],store.articles[1],store.articles[2]]" :key="index"
        :title=    'card.title'
        :author=   'card.author'
        :date=     'card.date'
        :img=      'card.imgUrl'/>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

.FoodieJournal{
  text-align: center;
  .my_container{
    margin-top: -40px;
    padding: 0px 20px 20px 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 20px 0px rgba(43, 43, 43, 0.249);

    .title_container{
      display: flex;
      justify-content: space-between;
      align-items: center;

      & div{
        width: 39%;
        height: 1px;
        background-color: rgba(128, 128, 128, 0.123);
        border-radius: 5px;
      }

      h3{
        font-family: 'Nunito';
        margin: 14px 0px;
        display: inline-block;
      }
    }
    
    
    .flex_center{
      align-items: flex-start;
    }

    .flex_between{
      align-items: start;
    }
    .card{
      width: 31%;
    }
  }
}

</style>