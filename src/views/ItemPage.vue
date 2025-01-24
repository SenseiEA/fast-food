<template>
  <div class="item-page">
    <div class="header">
      <ion-button fill="clear" @click="goBack">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </ion-button>
      <h1>{{ item.category }}</h1>
    </div>

    <div class="item-details">
      <img :src="item.image" :alt="item.name" class="item-image" />
      <div class="item-info">
        <h2>{{ item.name }}</h2>
        <div class="rating">
          <span v-for="star in item.rating" :key="star">⭐</span>
        </div>
        <p>{{ item.description }}</p>
        <p class="price">P {{ item.price }}</p>
      </div>
    </div>
    <div class="quantity-section">
      <ion-button
        fill="clear"
        @click="decreaseQuantity"
        :disabled="quantity <= 1"
        >-</ion-button
      >
      <span>{{ quantity }}</span>
      <ion-button fill="clear" @click="increaseQuantity">+</ion-button>
    </div>

    <div class="beverages-section">
      <h3>Beverages</h3>
      <ion-select v-model="selectedBeverage" placeholder="Choose Beverages">
        <ion-select-option v-for="bev in beverages" :key="bev" :value="bev">
          {{ bev }}
        </ion-select-option>
      </ion-select>
    </div>
    <ion-chip>Default</ion-chip>
    <ion-chip :disabled="true">Disabled</ion-chip>
    <ion-chip :outline="true">Outline</ion-chip>
    <div class="addons-section">
      <h3>Add-Ons</h3>
      <ion-chip
        v-for="addon in addOns"
        :key="addon"
        :outline="!selectedAddOns.includes(addon)"
        @click="toggleAddOn(addon)"
      >
        {{ addon }}
      </ion-chip>
    </div>

    <ion-button expand="block" @click="setOpen(true)"> Add to Bag </ion-button>
    <ion-modal :is-open="isOpen">
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
    </ion-modal>
  </div>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonSelect,
  IonSelectOption,
  IonChip,
  IonModal,
} from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const item = ref({
  name: "Steak Frites",
  category: "Meat",
  description: "Vestibulum ante ipsum primis in faucibus orci luctus...",
  price: 172,
  rating: 5,
  image: "/steak-fries.webp",
});

const quantity = ref(1);
const selectedBeverage = ref("");
const selectedAddOns = ref<string[]>([]);
const beverages = ["Coke", "Sprite", "Water"];
const addOns = ["Extra Cheese", "Extra Sauce", "Extra Fries"];

const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const toggleAddOn = (addon: string) => {
  if (selectedAddOns.value.includes(addon)) {
    selectedAddOns.value = selectedAddOns.value.filter((a) => a !== addon);
  } else {
    selectedAddOns.value.push(addon);
  }
};

const isOpen = ref(false);
const setOpen = (open: boolean) => (isOpen.value = open);

const goBack = () => router.back();

const proceedToCheckout = () => {
  setOpen(false);
  router.push("/checkout");
};

const addMore = () => {
  setOpen(false);
  router.push("/folder/Menu");
};
</script>

<style scoped>
.item-page {
  padding: 16px;
  background-color: white;
  color: black;
}

.header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.item-details {
  text-align: center;
  flex-direction: column;
}

.success-modal {
  text-align: center;
  padding: 16px;
}

.red-text {
  color: #e63946;
}

.item-image {
  max-width: 100%;
  border-radius: 8px;
}

.item-info {
  margin-top: 16px;
}

.price {
  color: #e63946;
  font-weight: bold;
}

.quantity-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
}

.beverages-section,
.addons-section {
  margin-bottom: 16px;
  color: black;
}

.add-to-bag-btn {
  background-color: #e63946;
  color: white;
}
</style>
