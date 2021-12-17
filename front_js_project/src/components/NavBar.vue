<template>
  <div id="nav">
    <div class="nav-wrapper">
      <div class="links">
        <div><router-link class="linkPage" exact to="/">Список дел</router-link></div>
        <div><router-link class="linkPage" to="/info">Инфо</router-link></div>
      </div>
      <div><a @click="onLogoutClicked" class="input_nav-link"> Выйти </a></div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import { doLogout } from "@/netClient/todoService";
export default {
  name: "Navbar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        console.log(localStorage);
          this.$router.push("/login");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped></style>