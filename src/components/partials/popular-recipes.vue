<script>
import CardArticle from '../singleComponents/cardArticleBig.vue';
import Photo from '../singleComponents/photo.vue';
import {store} from '../../data/store'
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
          :title=    'store.articles[0].title'
          :author=   'store.articles[0].author'
          :date=     'store.articles[0].date'
          :img=      'store.articles[0].imgUrl'
          :paragraph="store.articles[0].paragraph"
          :answers=  "store.articles[0].answers.length"
          :type="0"
          />
        </div>

        <div class="col photos ">
          <Photo v-for="phot in 8"
           class="photo"/>
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
            width: 50%;
            padding: 5px;
          }
        }
      }
    }
  }

}
</style>