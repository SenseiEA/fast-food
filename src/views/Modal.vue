<template>
  <div class="success-modal">
    <h2>Successfully added!</h2>
    <p>What do you want to do now?</p>
    <ion-button expand="block" color="danger" @click="proceedToCheckout">
      Proceed to Checkout
    </ion-button>
    <ion-button expand="block" color="light" @click="addMore">
      <span class="red-text">Add more</span>
    </ion-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const proceedToCheckout = () => {
  router.push("/checkout");
};

const addMore = () => {
  router.push("/folder/Menu");
};
</script>

<style scoped>
.success-modal {
  text-align: center;
  padding: 16px;
}

.red-text {
  color: #e63946;
}
</style>
