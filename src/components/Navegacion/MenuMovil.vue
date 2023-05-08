<template>
  <div class="mobile-menu">
    <ul>
      <li>
        <span class="img-span"
          ><img class="ingret" src="@/assets/usuario.png" alt=""
        /><a class="text-item" href="/login">Login</a></span>
      </li>
      <li>
        <span class="img-span"
          ><img class="ingret" src="@/assets/registroUS.png" alt=""
        /><a class="text-item" href="/registro">Sign Up</a></span>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/">My account</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" class="sign-out">Sign out</a>
      </li>
    </ul>
  </div>
</template>

<style>
.mobile-menu {
  width: 315px;
  position: absolute;
  z-index: 10;
  padding: 20px;
  background-color: #f7f7f7;
  left: 10px;
  border-radius: 50px;
  margin-top: 350px;
}
.mobile-menu a {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  padding-left: 8px;
}

.mobile-menu ul {
  padding: 0;
  margin: 24px 0 0;
  list-style: none;
}
.mobile-menu ul:nth-child(1) {
  border-bottom: 1px solid #c7c7c7;
}
.mobile-menu ul li {
  margin-bottom: 24px;
}
.email {
  font-size: 14px;
  font-weight: 300 !important;
}
.sign-out {
  font-size: 14px;
  color: #ffacac !important;
}
.img-span {
  margin-left: 10px;
}
.ingret {
  width: 20px;
  height: 20px;
  object-fit: cover;
}
</style>
