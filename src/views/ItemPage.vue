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

    <ion-button expand="block" @click="addToBag" class="add-to-bag-btn">
      Add to Bag
    </ion-button>
  </div>
</template>

<script setup lang="ts">
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

const addToBag = () => {
  // Simulate adding item to the bag
  console.log("Added to Bag:", {
    item: item.value,
    quantity: quantity.value,
    beverage: selectedBeverage.value,
    addOns: selectedAddOns.value,
  });

  showModal();
};

const goBack = () => router.back();
const showModal = () => {
  router.push("/modal-success");
};
</script>

<style scoped>
.item-page {
  padding: 16px;
}

.header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.item-details {
  text-align: center;
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
}

.add-to-bag-btn {
  background-color: #e63946;
  color: white;
}
</style>
