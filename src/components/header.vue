<script>
import headerTop from './partials/headerTop.vue';
import headerNav from './partials/headerNav.vue';
export default {
  name:'Header',
  components:{
    headerTop,
    headerNav,
  }
}
</script>

<template>
  <header>
    <div class="my_container">

      <headerTop class="debug"/>

      <div class="logo debug"></div>

      <headerNav class="debug"/>

    </div>
  </header>
</template>

<style lang="scss" scoped>

header{
  // height: 100px;

  .logo{
    width: 70px;
    height: 70px;
    margin: 5px auto;
  }
}
</style>