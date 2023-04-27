<template>
  <div class="container-product">
    <img class="arrow-leth" src="../assets/atras.png" alt="atras" />
    <p class="title-cart">CONFIRMATION</p>
    <div class="text-center ng-star-inserted">
      <h2 class="title-section mt-4">
        <p _ngcontent-serverapp-c98="" class="title-section-small sustite">Your order</p>
        <span _ngcontent-serverapp-c98="" class="h2 font-weight-bold"
          >Was successfully performed</span
        >
      </h2>
      <p class="item-count">The following information is the summary of your order</p>
    </div>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">N. order</th>
          <td>10197</td>
        </tr>
        <tr>
          <th scope="row">Date</th>
          <td>27 de Abril de 2023</td>
        </tr>
        <tr>
          <th scope="row">Amount to cancel</th>
          <td colspan="means of payment">
            ${{ new Intl.NumberFormat("es-US").format(195855) }}
          </td>
        </tr>
        <tr>
          <th scope="row">Means of payment</th>
          <td colspan="means of payment">Tarjeta Crédito o Débito</td>
        </tr>
        <tr>
          <th scope="row">Payment status</th>
          <td colspan="means of payment">No pagado</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped>
.container-product {
  padding-top: 20px;
}
.arrow-leth {
  width: 45px;
  height: 45px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
.table {
  display: grid;
  place-content: center;
}
.title-cart {
  font-size: 19px;
  font-weight: bold;
  margin-left: 15px;
}
.sustite {
  font-size: 19px;
  color: #ffacac;
}
.h2 {
  margin-bottom: 10px;
}
.item-count {
  margin-top: 15px;
}
</style>
