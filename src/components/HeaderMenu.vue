<template>
  <div>
  <div class="container">
      <img @click="resposibleMenu" src="../assets/icon_menu.svg" alt="menu" class="menu" />

      <div class="navbar-left">
        <img src="../assets/logo.png" alt="logo" class="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div class="navbar-right">
        <ul>
          <li class="navbar-shopping-cart">
            <img src="../assets/icon_shopping_cart.svg" alt="shopping cart" />
            <div>0</div>
          </li>
        </ul>
      </div>

  </div>
  
</div>
</template>

<script setup>
  import { inject } from 'vue';

const { showMenu, showBurge } = inject('showBurge');

function resposibleMenu() {
  //if(showBurge.value == false) {
  //if(!showBurge.value) {
    //showMenu(true);
  //}
  //else {
    //showMenu(false);
  //}
  showMenu(!showBurge.value)
}
</script>


<style>
:root {
      --white: #C7C7C7;
      --black: #000000;
      --very-light-pink: #FFACAC;
      --text-input-field: #FFBFA9;
      --hospital-green: #FBFFB1;
      --sm: 14px;
      --md: 16px;
      --lg: 18px;
    }
    body {
      margin: 0;
      font-family: 'Quicksand', sans-serif;
    }
    .container {
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      border-bottom: 1px solid #FFACAC;
    }
    .menu {
      display: none;
    }

    .logo {
      width: 100px;
    }

    .navbar-left ul,
    .navbar-right ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      height: 80px;
    }

    .navbar-left {
      display: flex;
    }

    .navbar-right {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .navbar-left ul {
      margin-left: 12px;
      margin-block: auto;
    }

    .navbar-left ul li a,
    .navbar-right ul li a {
      text-decoration: none;
      color: #C7C7C7;
      padding: 8px;
      border-radius: 8px;
    }

    .navbar-left ul li a:hover,
    .navbar-right ul li a:hover {
      border: 1px solid #FFACAC;
      color: #FFACAC;
    }

    .navbar-shopping-cart {
      position: relative;
    }

    .navbar-shopping-cart div {
      width: 16px;
      height: 16px;
      background-color: #FFACAC;
      border-radius: 50%;
      font-size: var(--sm);
      font-weight: bold;
      position: absolute;
      top: -6px;
      right: -3px;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    @media (max-width: 800px) {
      .menu {
        display: block;
      }
      .navbar-left ul {
        display: none;
      }
    }
</style>
