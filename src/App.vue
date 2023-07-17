<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';

import { routeLinks } from './router/link-routes';

</script>


<template>
  <div id="app" >
    

      <NavBar 
        title="ArcoIris"
        :links="routeLinks"
      />



      <RouterView />


  </div>
</template>

<style scoped>



</style>
