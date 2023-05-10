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
    <div class="my_container debug">

      <h3>FOODIE JOURNAL</h3>
      <div class="flex_center debug2">
  
        <Card v-for="card in 3"
        :title="'food corner: top japan..'"
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
    padding: 0px 20px;
  }
}
</style>