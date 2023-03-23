<template>
  <form class="container-edict">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" id="Name" placeholder="Name" />
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Price" />
      </div>
    </div>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea class="form-control" rows="3"></textarea>
    </div>

    <div class="form-group">
      <label for="inputAddress2">Url Pinteres</label>
      <input type="text" class="form-control" placeholder="Url Pinteres" />
    </div>

    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="@/assets/imagen.svg" alt="" />
    </div>

    <button type="button" class="btn btn-primary">Edit</button>
  </form>
</template>

<script setup>
import { useRouter } from "vue-router";

const route = useRouter();

</script>

<style scoped>
.container-edict {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
  width: 90px;
  height: 40px;
  text-align: center;
  background-color: #a75d5d;
  border-color: #a75d5d;
}
.btn-primary:hover {
  color: #a75d5d;
  background-color: #fff;
  border-color: #a75d5d;
}
.card {
  display: flex;
  justify-self: end;
  align-items: end;
  width: 50px;
  height: 100%;
  padding: 23px;
}
.card-img-top {
  width: 100%;
  height: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  object-fit: cover;
}
</style>
