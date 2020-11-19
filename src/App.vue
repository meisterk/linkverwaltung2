<template>
  <img alt="Logo der GBS Schulen München" src="./assets/logo.png" />
  <MyComponent ueberschrift="Hallo I3A!" nochwas="3" />
  <MyList />
  <MyForm />
  <MyComponent ueberschrift="Servus!" nochwas="17" />

</template>

<script>
import MyComponent from "./components/MyComponent.vue";
import MyForm from "./components/MyForm.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyComponent,
    MyForm,
    MyList
  },
};
</script>

<style>
</style>
