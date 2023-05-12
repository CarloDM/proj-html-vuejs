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

      <h3>FOODIE JOURNAL</h3>
      <div class="flex_center">
  
        <Card class="card"
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
    padding-bottom: 20px;
    background-color: white;
    // senza border si ridimensiona????
    border: 1px solid rgba(0, 0, 0, 0);
    h3{
      font-family: 'Nunito';
      margin: 14px;
    }

    .flex_center
    .card{
      padding: 0px 15px;
    }
  }
}
</style>