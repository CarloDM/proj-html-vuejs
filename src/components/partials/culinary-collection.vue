<script>
import Photo from '../singleComponents/photo.vue';
import {store} from '../../data/store';
export default {
  name:'culinary collection',
  components:{
    Photo,
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
        <Photo class="photo"
          v-for="(collection,index) in store.culinaryCollections" :key="index"
          :imgUrl='collection.imgUrl' />
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>

.culinary_collection{

  .my_container{

    .title{
      font-family: 'Nunito';
      text-align: center;

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

      .photo{
        width: calc(85% / 4);
        padding: 0px 20px;
        margin: 0px 5px 10px 5px;
        box-shadow: 0px 0px 10px rgb(121, 121, 121);
      }
    }
  }

}
</style>