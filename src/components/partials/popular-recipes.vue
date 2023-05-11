<script>
import CardArticle from '../singleComponents/cardArticleBig.vue';
import Photo from '../singleComponents/photo.vue';
import {store} from '../../data/store';
export default {
  name:'popularRecipes',
  components:{
    CardArticle,
    Photo,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="popular_recipes">
    <div class="my_container">

      <div class="title">
        <h3>POPULAR RECIPES</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ab reiciendis provident perspiciatis aliquid!</p>
      </div>

      <div class="container">
        <div class="col">
          <CardArticle
          :title=    'store.articles[2].title'
          :author=   'store.articles[2].author'
          :date=     'store.articles[2].date'
          :img=      'store.articles[2].imgUrl'
          :paragraph="store.articles[2].paragraph"
          :answers=  "store.articles[2].answers.length"
          :type="0"
          />
        </div>

        <div class="col photos ">
          <Photo class="photo"
          v-for="(photo,index) in 8" :key="index"
          :imgUrl='store.articles[1].imgUrl' />
        </div>
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>

.popular_recipes{

  .my_container{

    .title{
      font-family: 'Nunito';
      text-align: center;
      margin-bottom: 36px;

      h3{
        margin-bottom: 12px;
      }
      p{
        font-size: 0.65rem;
        width: 50%;
        margin: 0px auto;
        line-height: 1.2rem;
      }
    }

    .container{
      display: flex;
      justify-content: space-between;
      width: 100%;
      .col{
        width: 48%;
        min-height: 40px;

        &.photos{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .photo{
            width: 48%;
            margin: 2px;
          }
        }
      }
    }
  }

}
</style>