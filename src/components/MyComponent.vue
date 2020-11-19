<template>
  <div class="hello">
    <h1>{{ ueberschrift }} {{ nochwas }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    ueberschrift: String,
    nochwas: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: lightgrey;
  border: 1px solid black;
  padding: 0.5em;
  text-align: center;
}
</style>
