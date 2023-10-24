<script>
import CulinaryCard from '../singleComponents/culinaryCard.vue';
import {store} from '../../data/store';
export default {
  name:'culinary collection',
  components:{
    CulinaryCard,
  },
  data(){
    return {
      store,
    }
  }
  
}
</script>

<template>
    <div id="culinary_collection" class="culinary_collection">
    <div class="my_container">

      <div class="title">
        <h3>CULINARY COLLECTION</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ab reiciendis provident perspiciatis aliquid!</p>
      </div>

      <div class="collection">
        <CulinaryCard class="cards"
          v-for="(collection,index) in store.culinaryCollections" :key="index"
          :imgUrl='collection.imgUrl'
          :title="collection.title"
          />
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>

.culinary_collection{
      font-family: 'Nunito';
      text-align: center;
  .my_container{

    .title{


      h3{
        margin-bottom: 15px;
      }
      p{
        font-size: 0.65rem;
        width: 50%;
        margin: 0px auto 40px ;
      }
    }

    .collection{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      .cards{
        width: calc(85% / 4);

      }
    }
  }

}
</style>