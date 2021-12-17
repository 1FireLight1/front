<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "App",
  components: {
    MainLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta?.layout || "main-layout";
    },
  },
};
</script>
