<script>
import Jumbotron from './partials/jumbotron.vue';
import FoodieJournal from './partials/foodie-journal.vue';
import PopularRecipes from './partials/popular-recipes.vue';
import CulinaryCollection from './partials/culinary-collection.vue';
import FarmToTable from './partials/farm-to-table.vue';
import CtaSubscribe from './partials/cta-subscribe.vue';
export default {
  name:'Main',
  components: {
    Jumbotron,
    FoodieJournal,
    PopularRecipes,
    CulinaryCollection,
    FarmToTable,
    CtaSubscribe
  }
}
</script>

<template>
  <main>
    <div class="">
      
      <Jumbotron          id="jumbotron"          ></Jumbotron>
      <FoodieJournal      id="foodie-journal"     ></FoodieJournal>
      <PopularRecipes     id="popular-recipes"    ></PopularRecipes>
      <CulinaryCollection id="culinary-collection"></CulinaryCollection>
      <FarmToTable        id="farm-to-table"      ></FarmToTable>
      <CtaSubscribe       id="cta-subscribe"      ></CtaSubscribe>
      
    </div>
  </main>
</template>

<style lang="scss" scoped>

main{
#foodie-journal{
  margin-bottom: 71px;
}
#popular-recipes{
  margin-bottom: 119px;
}
#culinary-collection{
  margin-bottom: 112px;
}
#farm-to-table{
  margin-bottom: 75px;
}
}

</style>