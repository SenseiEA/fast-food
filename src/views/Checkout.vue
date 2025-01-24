<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Order Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="user-details">
        <h3>Chou Tzuyu</h3>
        <p>+63 912 345 6789</p>
        <p>chou.tzu-yu@email.com</p>
      </div>

      <ion-list>
        <ion-radio-group value="home">
          <ion-item>
            <ion-label>
              <h4>My Home Address</h4>
              <p>
                No. 21 St. Agustin Street, Brgy. De Jose, Delgado City 2234
                Philippines
              </p>
            </ion-label>
            <ion-radio slot="start" value="home"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>
              <h4>Work/Office</h4>
              <p>
                3rd flr Anyeong Bldg, Seareal St. Joaquin City 3456 Philippines
              </p>
            </ion-label>
            <ion-radio slot="start" value="office"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <div class="order-items">
        <h4>Orders</h4>
        <ion-card>
          <ion-card-content>
            <div class="item-details">
              <img src="/steak-fries.webp" alt="Steak Fries Veggies" />
              <div>
                <h5>Steak Fries Veggies</h5>
                <p>1x Tomato Sauce</p>
                <p>1x Regular Coke</p>
                <p>1x Fried Chicken</p>
              </div>
              <div class="price">
                <p>P 185</p>
                <ion-button size="small" fill="outline">-</ion-button>
                <span>1</span>
                <ion-button size="small" fill="outline">+</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="payment-options">
        <h4>Payment Option</h4>
        <ion-list>
          <ion-radio-group value="cod">
            <ion-item>
              <ion-label>Cash on Delivery</ion-label>
              <ion-radio slot="start" value="cod"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Loyalty Points (0 points)</ion-label>
              <ion-radio slot="start" value="loyalty"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>PayPal</ion-label>
              <ion-radio slot="start" value="paypal"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Paynamics</ion-label>
              <ion-radio slot="start" value="paynamics"></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      </div>
      <div class="summary">
        <p>Subtotal: P 185</p>
        <p>Delivery Charge: P 59</p>
        <h3>Grand Total: P 244</h3>
        <ion-button
          expand="block"
          color="danger"
          @click="placeOrder"
          id="open-toast"
          >Place Order</ion-button
        >
      </div>
      <ion-toast
        trigger="open-toast"
        message="Your order has No.19034564 has been successfully processed. Kindly wait for our notification regarding your order."
        :duration="5000"
      ></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonCard,
  IonCardContent,
  IonItem,
  IonText,
  IonToast,
} from "@ionic/vue";

import { useRouter } from "vue-router";
const router = useRouter();

const placeOrder = () => {
  router.push("/folder/Home");
};
</script>

<style>
.user-details {
  padding: 16px;
  background: #f4f4f4;
  margin-bottom: 10px;
  color: black;
}

.order-items img {
  width: 80px;
  height: 80px;
  margin-right: 16px;
}

.item-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.payment-options {
  margin-top: 20px;
}

.summary {
  padding: 16px;
  text-align: center;
  background: #f4f4f4;
  color: black;
}
</style>
