<template>
  <div id="app">
    <div>Current value in Parent - {{ bye }}</div>
    <input type="text" v-model="bye" />
    <br /><br />
    <custom-input testVal="Priviat" v-model="bye" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import child from "./components/child";
import customInput from "./custom-input";

export default {
  name: "App",
  data() {
    return {
      bye: "Bye World",
      names: [],
    };
  },
  created() {
    console.log("App.vue created");
  },
  components: {
    child,
    customInput,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin-right: 20px;
  margin-left: 20px;
}

input {
  border: 1px solid blue;
  border-radius: 3px;
  padding: 3px;
}
</style>
