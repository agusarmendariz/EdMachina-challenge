<script setup>
import NavBar from './NavBar.vue'
import SideBar from './SideBar.vue';
import Footer from './Footer.vue';



</script>

<template>
  <div class="app-admin-wrap-layout">
    <NavBar/>
    <SideBar/>
  </div>
  <div>
<!-- store -->
<main>
  <div class="">


  <div>
    <RouterView/>
  </div>
  
</div>
</main>
<Footer/>
  </div>
  
</template>

<style scoped>
  .app-admin-wrap-layout{
    width:100%;
    height:100%
  }



</style>

 


