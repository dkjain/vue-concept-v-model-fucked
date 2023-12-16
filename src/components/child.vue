<template>
  <div class="child">
    <h4>CHILD COMPONENT</h4>
    <div>Test</div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: String,
  },
  data() {
    return {
      localEl: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.child {
  text-align: left;
  min-height: 100px;
  padding: 10px;
  background: lightgoldenrodyellow;
  border: 2px solid;
  .h4,
  h4 {
    margin: 0;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
