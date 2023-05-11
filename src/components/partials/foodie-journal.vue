<script>
import Card from '../singleComponents/cardArticle.vue'
export default {
  name:'FoodieJournal',
  components:{
    Card,
  }
}
</script>

<template>
  <div class="FoodieJournal">
    <div class="my_container b_radius_3">

      <h3>FOODIE JOURNAL</h3>
      <div class="flex_center">
  
        <Card class="card" v-for="card in 3"
        :title="'food corner: top japan and other txt for long'"
        :author="'pinco pallino'"
        :date="'22 marzo 2019'"/>
  
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