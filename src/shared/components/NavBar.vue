<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';
// const props = defineProps<{title?: string}>()
interface Props {
  title?: string;
  links?:RouterLink[];
  showICon?:boolean;
}
const props = withDefaults(defineProps<Props>(),{
  showICon:true,
  links: ()=> [],
});


</script>
<template>
    
        <nav class="navbar navbar-expand-lg colorBg fixed-top ">
  <div class="container-fluid">
    <img v-if="props.showICon" src="@/assets/logo.svg" alt="vue logo" height="25" width="25"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
  
       <RouterLink 
       v-for="link in props.links"
       :key="link.path"
       :to="link.path"
       class="nav-item nav-link"
       >{{link.title }}</RouterLink>
      </div>
      <span v-if="props.title" class="navbar-brand text-white">{{ props.title }}</span>
  
    </div>
  </div>
</nav>
 
</template>



<style scoped>
.colorBg{
    background-color: #2196f3;
}

</style>
