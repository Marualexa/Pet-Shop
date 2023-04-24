<template>
  <div class="tabla-2">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="segung-title">Resumen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">SubTotal:</th>
          <td>${{ new Intl.NumberFormat("es-US").format(56.387) }}</td>
        </tr>
        <tr>
          <th scope="row">Descuento:</th>
          <td>${{ new Intl.NumberFormat("es-US").format(0) }}</td>
        </tr>
        <tr>
          <th scope="row">Transporte:</th>
          <td>${{ new Intl.NumberFormat("es-US").format(4.0) }}</td>
        </tr>
        <tr>
          <th scope="row">TOTAL A PAGAR:</th>
          <td>${{ new Intl.NumberFormat("es-US").format(77.222) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-success">CONFIRM ORDER</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-danger">DISCARD ORDER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.segung-title {
  color: #ffacac;
}
.col {
    padding: 10px;
}
</style>
