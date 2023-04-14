<template>
  <div id="search-box">
    <form action="/search" id="search-form" method="get" target="_top">
      <input id="search-text" name="q" placeholder="Search" type="text" />
      <button id="search-button" type="submit"><span>Busca!</span></button>
    </form>
  </div>
</template>

<style>
#search-box {
  position: relative;
  width: 30%;
  margin: 0;
}
#search-form {
  height: 32px;
  border: 1px solid #ffacac;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
}
#search-text {
  font-size: 16px;
  font-weight: bold;
  color: #ddd;
  border-width: 0;
  background: transparent;
}

#search-box input[type="text"] {
  width: 90%;
  padding: 2px 0 12px 1em;
  color: #333;
  outline: none;
}
#search-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 34px;
  width: 80px;
  color: #a75d5d;
  text-align: center;
  line-height: 4px;
  border-width: 0;
  background-color: #ffacac;
  -webkit-border-radius: 0px 15px 15px;
  -moz-border-radius: 0px 15px 15px 15px;
  border-radius: 15px 15px 15px 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
</style>
