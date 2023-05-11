<script>
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';
import {store} from './data/store';

export default {
  name:'App',
  components:{
    Header,
    Main,
    Footer
  },

  methods:{},
  mounted(){
    console.log('articolo test', store.article)
  }
}
</script>

<template>
  <div id="main_wrapper">
    <!-- reference -->
    <!-- <img class="reference" src="./assets/screenshot.png" alt=""> -->
<!-- ---------------------- -->

    <Header class=""/>
    <Main/>
    <Footer class=""/>

  </div>
</template>


<style lang="scss" >
@import './scss/main.scss';

.reference{
  // tenere browser a w 1131
  width: 100%;
  position: absolute;
  opacity: 0.40;
}

</style>