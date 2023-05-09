<script>
import FooterTop from './partials/footerTop.vue'
export default {
  name:'Footer',
  components:{
    FooterTop,
  }
}
</script>

<template>
  <footer>
    <div class="my_container">

      <FooterTop class="top debug"></FooterTop>
      
      <div class="bottom debug"></div>

    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer{
  width: 100%;
  height: 180px;

  .top{
    width: 100%;
    height: calc(100% - 40px);
  }

  .bottom{
    width: 100%;
    height: 40px;
  }
}

</style>