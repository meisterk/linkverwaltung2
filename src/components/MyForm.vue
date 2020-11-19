<template>
  <form>
    <h1>MyForm</h1>
    <h2>Text</h2>
    <input v-model="textString" placeholder="edit me" />
    <p>{{ textString }}</p>

    <h2>Number</h2>
    <input type="number" v-model.number="zahl" />
    <p>{{ zahl }}</p>

    <h2>Checkbox</h2>
    <input type="checkbox" v-model="angeklickt" />
    <p>{{ angeklickt }}</p>

    <h2>Radiobuttons</h2>
    <input
      type="radio"
      value="entweder"
      v-model="auswahlString"
      name="gruppe"
    />
    <input type="radio" value="oder" v-model="auswahlString" name="gruppe" />
    <p>{{ auswahlString }}</p>

    <h2>Select</h2>
    <select v-model="selectedString">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>{{ selectedString }}</p>
  </form>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      textString: "hallo servus",
      zahl: 0,
      angeklickt: false,
      auswahlString: "oder",
      selectedString: "C",
    };
  },
};
</script>

<style scoped>
form {
  background-color: cornsilk;
  border: 1px solid black;
}
</style>
