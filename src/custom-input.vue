<template>
  <div id="custom-input">
    <h4>Child - Custom Input -- {{ val }}</h4>
    <input type="text" :value="val" @input="emitEvent" />
  </div>
</template>

<script>
export default {
  name: "custom-input",
  props: ["value", "testVal"],
  beforeCreate() {
    console.log("custom-input.vue beforeCreate fired");
    console.log("prop.testVal in beforeCreate: ", this.$attrs);
    console.log("prop.value in beforeCreate: ", this.value);
  },
  created() {
    console.log("custom-input.vue created");
    console.log("prop.testVal in created: ", this.testVal);
    console.log("prop.value in created: ", this.value);
  },
  data() {
    return {
      val: this.value,
    };
  },
  methods: {
    emitEvent(evtVal) {
      console.log("evtVal: ", evtVal);
      this.$emit("input", evtVal.target.value);
    },
  },
};
</script>
<style>
#custom-input {
  background-color: lightgreen;
  border: 1px dotted;
  padding: 10px;
}
input {
  margin-top: 15px;
  background: white;
  border: 1px solid green;
}
</style>
