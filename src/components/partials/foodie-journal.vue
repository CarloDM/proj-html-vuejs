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
<<<<<<< HEAD
  <div class="FoodieJournal">
<<<<<<< HEAD
    <div class="my_container b_radius_3">
=======
  <div class="FoodieJournal debug">
    <div class="my_container debug">
>>>>>>> parent of e604a6d (colors)
=======
    <div class="my_container">
>>>>>>> parent of 6f9d2e6 (revert)

      <h3>FOODIE JOURNAL</h3>
      <div class="flex_center debug2">
  
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