<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}
</style>
