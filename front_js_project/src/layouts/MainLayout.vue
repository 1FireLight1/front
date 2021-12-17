<template>
<div class="auth-layout">
    <div class="page-title">
        <NavBar/>   
        <!-- <h2 class="page-title">
        {{$route.meta.title}}
    </h2> -->
    </div>
    <div class="page-container">
        <router-view/>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    name: 'MainLayout',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>