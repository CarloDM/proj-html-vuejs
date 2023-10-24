<script>
export default {
  name:'headerNav',

}
</script>

<template>
  <div id="header-nav" class=" flex_center">

    <ul class="flex_between">
      <li>Home</li>
      <li>Recipes</li>
      <li>Places</li>
      <li>Blog</li>
      <li>About</li>
      <li>Contact</li>
      <li><i class="fa-solid fa-magnifying-glass"></i></li>
    </ul>

  </div> 
</template>

<style lang="scss" scoped>
@use '../../scss/var.scss' as * ;

#header-nav{
  width: 100%;
  height: 30px;
  margin-bottom: 6px;
  font-size: 0.6rem;


  ul{
    width: 60%;

    li{
      cursor: pointer;
      position: relative;

      &:hover{
        color: $avada_orange;

        &::after{
          content: "";
          position: absolute;
          bottom: -7px;
          left: 5%;
          height: 0px;
          width: 90%;
          background-color: $avada_orange;
          border-radius: 5px;
          border: 1px solid $avada_orange;
        }
      }
    }
  }
}
</style>