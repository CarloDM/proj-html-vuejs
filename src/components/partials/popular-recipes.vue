<script>
import CardArticle from '../singleComponents/cardArticleBig.vue';
import Photo from '../singleComponents/photo.vue';
export default {
  name:'popularRecipes',
  components:{
    CardArticle,
    Photo,
  }
}
</script>

<template>
  <div class="popular_recipes">
    <div class="my_container debug">

      <div class="title">
        <h3>POPULAR RECIPES</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ab reiciendis provident perspiciatis aliquid!</p>
      </div>

      <div class="container">
        <div class="col debug2">
          <CardArticle
          :paragraph="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non expedita minima fugiat culpa, eveniet consequuntur quod natus voluptatibus enim porro ab repellendus aspernatur, sapiente dolore! Suscipit unde quod voluptas. Suscipit unde quod voluptas. Suscipit unde quod voluptas.'"/>
        </div>

        <div class="col photos debug2">
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