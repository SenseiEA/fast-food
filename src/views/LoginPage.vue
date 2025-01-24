<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="login-page">
        <img src="/fastfoodwhite.png" alt="FastFood Logo" class="logo" />

        <ion-text class="text">Bonjour!</ion-text>
        <ion-text class="subtext">
          Welcome to all new FastFood mobile app. Kindly login to your account.
          Thank you!
        </ion-text>

        <form class="login-form" @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your name"
              v-model="username"
              required
            />
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              v-model="password"
              required
            />
            <a href="#" class="forgot">Forgot?</a>
          </div>

          <button type="submit" class="login-button" @click="goToHome">
            Login
          </button>
        </form>

        <a href="#" class="guest-login">Login as Guest</a>

        <p class="signup-text">
          Don’t have an account yet? <a href="#" class="create">Create</a>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/vue";
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  router.push("/folder/Home");
};

const username = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with:", {
    username: username.value,
    password: password.value,
  });
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Manjari:wght@100;400;700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: white;
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

.text {
  color: black;
  font-family: "Roboto", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtext {
  color: #666;
  font-family: "Roboto", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}

/* Form Styling */
.login-form {
  width: 100%;
  max-width: 400px;
}

.input-group {
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

.input-group #email {
  background-color: white;
}

.input-group #password {
  background-color: white;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.input-group input {
  font-family: "Roboto";
  width: 100%;
  font-size: 16px;
  border: none;
  color: #666;
}

.forgot {
  position: absolute;
  right: 10px;
  top: 30px;
  font-size: 14px;
  color: red;
  text-decoration: none;
}

/* Button Styling */
.login-button {
  width: 100%;
  padding: 10px;
  background-color: red;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.guest-login {
  display: block;
  text-align: center;
  font-size: 16px;
  color: red;
  text-decoration: none;
  margin-bottom: 20px;
}

.signup-text {
  font-size: 14px;
  color: #666;
  text-align: center;
}

.signup-text a {
  color: red;
  font-weight: bold;
  text-decoration: none;
}
</style>
