<template>
  <div class="registration">
    <h1>Регистрация</h1>
    <form @submit.prevent="onFormSubmit" class="login-form auth-form">
      <div class="form-field">
        <label for="email"></label>
        <input class="input-info"
          v-model="email"
          id="email"
          type="email"
          placeholder="Ваша почта"
          required
        />
      </div>
      <div class="form-field">
        <label for="login"></label>
        <input class="input-info"
          v-model="login"
          id="login"
          type="text"
          placeholder="Ваш ник"
          required
        />
      </div>
      <div class="form-field">
        <label for="password"></label>
        <input class="input-info"
          v-model="password"
          type="password"
          id="password"
          placeholder="Ваш пароль"
          required
          encrypted
        />
      </div>
      <button id="submitBtn" type="submit">Регистрация</button>
    </form>
    <div class="action-link">
        <span>Уже есть аккаунт? </span>
        <a @click="redirect" class="link-btn">Войти</a>
      </div>
  </div>
</template>

<script>
import { doRegister } from "@/netClient/authService";
export default {
  name: "RegistrationPage",
  data: () => ({
    login: "",
    password: "",
    email: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
            this.email.trim(),
            this.login.trim(),
            this.password.trim(),
        );
        console.warn({data});
      } catch (error) {
        console.error({ error });
        throw error;
      }
      this.$router.push("/login");
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
</style>