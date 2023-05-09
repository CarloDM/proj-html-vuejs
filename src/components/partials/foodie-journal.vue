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
  <div class="FoodieJournal debug">
    <h3>FOODIE JOURNAL</h3>
    <div class="my_container flex_center debug2">

      <Card v-for="card in 3"
      :title="'food corner: top japan..'"
      :author="'pinco pallino'"
      :date="'22 marzo 2019'"/>


    </div>
  </div>
</template>


<style lang="scss" scoped>

.FoodieJournal{
  margin-top: -40px;
  text-align: center;
  .my_container{
    flex-direction: row;
  }
}
</style>