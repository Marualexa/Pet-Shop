<template>
  <aside class="product-detail">
    <div class="title-container">
      <img src="@/assets/flechita.svg" alt="arrow" />
      <p class="title">My order</p>
    </div>

    <div class="my-order-content">
      <div class="shopping-cart">
        <figure>
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="bike"
          />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="@/assets/icon_close.png" alt="close" />
      </div>

      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>

      <button class="primary-button">Checkout</button>
    </div>
  </aside>
</template>

<style>
.product-detail {
  width: 360px;
  padding: 24px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
}
.title-container {
  display: flex;
}
.title-container img {
  transform: rotate(180deg);
  margin-right: 14px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.order {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  background-color: #f7f7f7;
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 0 24px;
}
.order p:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.order p span:nth-child(1) {
  font-size: 16px;
  font-weight: bold;
}
.order p:nth-child(2) {
  text-align: end;
  font-weight: bold;
}
.shopping-cart {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}
.shopping-cart figure {
  margin: 0;
}
.shopping-cart figure img {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
}
.shopping-cart p:nth-child(2) {
  color: #c7c7c7;
}
.shopping-cart p:nth-child(3) {
  font-size: 16px;
  font-weight: bold;
}
.primary-button {
  background-color: #ffacac;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
}
@media (max-width: 640px) {
  .product-detail {
    width: 100%;
  }
}
</style>
