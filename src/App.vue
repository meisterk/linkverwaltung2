<template>
  <div class="container">
    <MyHeader />
    <main>
      <MyForm />
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between"
          v-for="link in this.$store.getters.links.data"
          :key="link.id"
        >
          <a :href="link.url">{{ link.linktext }}</a>
          <div>
            <span class="badge badge-primary">{{ link.votes }}</span>
            <button
              class="btn btn-primary btn-sm ml-1"
              @click="upvote(link.id)"
              aria-label="Hochvoten"
            >
              <i class="lni lni-thumbs-up"></i>
            </button>
            <button
              class="btn btn-danger btn-sm ml-1"
              @click="deleteLink(link.id)"
              aria-label="Löschen"
            >
              <i class="lni lni-trash"></i>
            </button>
          </div>
        </li>
      </ul>
    </main>
    <div class="footer mt-2">
      <footer class="border alert alert-info">
        Diese Links werden wurden von Franz Kohnle gesammelt.
      </footer>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyForm from "./components/MyForm.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyForm,
  },
  
  computed: {
    
  },
  methods: {
    upvote(id) {
      this.$store.dispatch('upvote', id);
    },
    deleteLink(id) {
      // index des zu löschenden Links ermitteln
      let index = this.links.findIndex((link) => link.id === id);
      // Element an der Stelle index aus Array entfernen
      this.links.splice(index, 1);
      this.speichern();
    },
    
  },
  mounted() {
    this.$store.dispatch('laden');
    this.$store.dispatch('sortieren');    
  },
};
</script>

<style>
</style>
