<template>
  <div class="border mb-2 bg-light p-2">
    <legend>Neuer Link</legend>
    <div class="form-group">
      <label for="inputName">Name</label>
      <input
        v-model="newName"
        class="form-control"
        id="inputName"
        type="text"
        placeholder="Name"
      />
    </div>

    <div class="form-group">
      <label for="inputUrl">Url</label>
      <input
        v-model="newUrl"
        class="form-control"
        id="inputUrl"
        type="text"
        placeholder="Url"
      />
    </div>

    <button
      @click="hinzufuegen"
      class="btn btn-primary mb-1"
      aria-label="Hinzufügen"
    >
      Hinzufügen
    </button>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      newName: "",
      newUrl: "",
      newLink: {},
    };
  },
  methods: {
    hinzufuegen() {
      if (this.newName != "" && this.newUrl != "") {
        this.newLink = {
          linktext: this.newName,
          url: this.newUrl,
          votes: 0,
        };
        this.$store.dispatch("hinzufuegen", this.newLink);
      }
    },
  },
};
</script>

<style scoped>
</style>
