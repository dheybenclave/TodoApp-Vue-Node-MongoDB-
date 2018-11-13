<template>
  <div id="app" >
     <headers />
    <home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import headers from "./components/headers.vue";
import home from "./components/home.vue";
import login from "./components/login.vue";

export default {
  name: "app",
  components: {
    headers,
    home
  }
};
</script>

<style>
#app {
  font-size: 98.7%;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: "Krub", sans-serif;
  /* font-family: "Roboto", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
