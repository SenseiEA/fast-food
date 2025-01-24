<template>
  <ion-page>
    <ion-header :condensed="true">
      <ion-toolbar>
        <template v-if="isHome">
          <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
          <ion-title>
            <img src="/public/crown.png" id="food-pro"></img>
            {{ points }} Points</ion-title>
          
          <ion-buttons slot="end">            
            <ion-avatar>
                <img
                  alt="Chou Tzuyu"
                  src="/public/chou-tzuyu.png"
                />
            </ion-avatar>
          </ion-buttons>

        </template>
        <template v-else-if="isOrder">
          <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
          <ion-title>Our Foods</ion-title>
          <ion-buttons slot="end">
            <ion-icon :md="cartSharp" color="danger"></ion-icon>
          </ion-buttons>
        </template>
        <template v-else>
          <ion-title>{{ $route.params.id }}</ion-title>
        </template>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <template v-if="isHome">
        <ion-header>
    <ion-toolbar>
      <ion-title>Anneoyong, Chou!</ion-title>
    </ion-toolbar>
    <ion-content :fullscreen="true" class="ion-padding">
    <div id="greeting">
      <h2>What do you want to eat?</h2>
    </div>

    <ion-searchbar
      placeholder="try our new Steak Fries Veggies"
      color="light"
    ></ion-searchbar>

    <div id="special-offers">
      <h3>Special Offers! <span class="view-all">View All</span></h3>
      <ion-slides pager="true" class="special-offers-slider">
        <ion-slide>
          <img src="/public/offer1.jpeg" alt="Offer 1" />
        </ion-slide>
        <ion-slide>
          <img src="/public/offer2.webp" alt="Offer 2" />
        </ion-slide>
      </ion-slides>
    </div>

    <div id="category">
      <h3>What's New?</h3>
      <div class="category-grid">
        <div class="category-card">
          <img src="/public/chicken.jpg" alt="Chicken" />
          <div class="category-label">Chicken<br />9 Recipes</div>
        </div>
        <div class="category-card">
          <img src="/public/burger.png" alt="Burger" />
          <div class="category-label">Burger<br />5 Recipes</div>
        </div>
      </div>
    </div>

    <section class="most-popular">
      <h2>Most Popular</h2>
      <div class="popular-grid">
        <div class="popular-item" v-for="(item, index) in popularItems" :key="index">
          <img :src="item.image" :alt="item.name" class="popular-image" />
          <h3 class="popular-title">{{ item.name }}</h3>
          <p class="popular-category">{{ item.category }}</p>
          <p class="popular-price">P {{ item.price }}</p>
          <div class="popular-rating">
            <span v-for="star in item.rating" :key="star">⭐</span>
          </div>
        </div>
      </div>
    </section>
    <ion-footer>    
      <ion-button expand="block" color="danger" class="order-now-button" @click="() => router.push('/folder/Menu')">
      Order Now!
    </ion-button>
    </ion-footer>

  </ion-content>
  </ion-header>
      </template>
      <template v-else-if="isOrder">
        <div class="order-section">
          <div class="search-bar">
            <ion-searchbar v-model="searchQuery"></ion-searchbar>
            <ion-button class="filter-button" fill="clear">
              <ion-icon name="filter-outline"></ion-icon>
            </ion-button>
          </div>
          <div class="categories">
            <button
              v-for="(category, index) in categories"
              :key="index"
              :class="{ active: selectedCategory === category }"
              @click="selectCategory(category)"
            >
              {{ category }}
            </button>
          </div>
          <div class="food-grid">
            <div
              class="food-item"
              v-for="(item, index) in filteredItems"
              :key="index"
              @click="() => router.push('/item')"
            >
              <img :src="item.image" :alt="item.name" class="food-image" />
              <h3 class="food-title">{{ item.name }}</h3>
              <p class="food-category">{{ item.category }}</p>
              <p class="food-price">P {{ item.price }}</p>
              <div class="food-rating">
                <span v-for="star in item.rating" :key="star">⭐</span>
              </div>
            </div>
          </div>
      </div>
      </template>
      <template v-else>
        <div id="container">
        <strong class="capitalize">{{ titlePage }}</strong>
        <p>
          Explore
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
      </div>
      </template>


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
  IonIcon,
  IonAvatar,
  IonButton,
  IonInput,
  IonFooter,
  IonSearchbar
} from "@ionic/vue";

import { cartSharp } from "ionicons/icons";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { popularItems } from "@/composables/foodItems";

const searchQuery = ref("");
const selectedCategory = ref("All");
const route = useRoute();
const router = useRouter()  


const categories = ["All", "Breakfast", "Chicken", "Seafood"];


const isHome = computed(() => route.params.id === "Home");
const isOrder = computed(() => route.params.id === "Menu")
const titlePage = computed(() => route.params.id || "Page");
const points = 0;

const filteredItems = computed(() => {
  return popularItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory =
      selectedCategory.value === "All" ||
      item.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};

</script>

<style scoped>
ion-header {
  margin-top: 20px;
}

ion-avatar {
  margin-left: 20px;
  width: 50px;
  height: 50px;
}

#food-pro {
  width: 25px;
  height: 25px;
}


#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

#greeting {
  text-align: left;
  margin-bottom: 10px;
}

#greeting h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.custom-searchbar {
  margin: 10px 0 20px;
  --background: #f8f8f8;
  --color: #000;
  border-radius: 10px;
  
}

#special-offers {
  margin-bottom: 20px;
}

#special-offers h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view-all {
  font-size: 14px;
  color: var(--ion-color-danger);
  cursor: pointer;
}

.special-offers-slider img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

#category {
  margin-bottom: 20px;
}

.category-grid {
  display: flex;
  gap: 15px;
  overflow-x: auto;
}

.category-card {
  position: relative;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.category-label {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.order-now-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  border-radius: 10px;
}

.most-popular {
  padding: 16px;
}

.most-popular h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.popular-item {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.popular-image {
  max-width: 100%;
  border-radius: 8px;
}

.popular-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 8px 0;
}

.popular-category {
  font-size: 0.875rem;
  color: #666;
}

.popular-price {
  font-size: 1rem;
  font-weight: bold;
  color: #e63946;
}

.popular-rating {
  margin-top: 8px;
  color: #ffc107;
}

.order-section {
  padding: 16px;
}

.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.search-input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
}

.filter-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.categories {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.categories button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 16px;
  background-color: #f8f8f8;
  font-size: 14px;
  cursor: pointer;
}

.categories button.active {
  background-color: #e63946;
  color: white;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.food-item {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.food-image {
  max-width: 100%;
  border-radius: 8px;
}

.food-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 8px 0;
}

.food-category {
  font-size: 0.875rem;
  color: #666;
}

.food-price {
  font-size: 1rem;
  font-weight: bold;
  color: #e63946;
}

.food-rating {
  margin-top: 8px;
  color: #ffc107;
}

</style>
