<template>
  <div class="container">
    <MyHeader />
    <main>
      <MyForm @hinzufuegen="hinzufuegen" />
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between"
          v-for="link in links"
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
  data() {
    return {
      links: [
        {
          id: 0,
          linktext: "kohnlehome.de",
          url: "http://kohnlehome.de",
          votes: 1,
        },
        {
          id: 1,
          linktext: "Offizielle Website der GBS",
          url: "https://gbsschulen.de",
          votes: 3,
        },
      ],
    };
  },
  computed: {
    maxId() {
      let maximum = -1;
      if (this.links.length > 0) {
        maximum = this.links[0].id;
        for (let i = 1; i < this.links.length; i++) {
          const aktuellerLink = this.links[i];
          if (aktuellerLink.id > maximum) {
            maximum = aktuellerLink.id;
          }
        }
      }
      return maximum;
    },
  },
  methods: {
    upvote(id) {
      console.log("+");
      //this.links[id].votes++; Funktioniert nicht, wenn umsortiert wurde
      const clickedLink = this.links.find((link) => link.id === id);
      clickedLink.votes++;
      this.sortieren();
      this.speichern();
    },
    deleteLink(id) {
      // index des zu löschenden Links ermitteln
      let index = this.links.findIndex((link) => link.id === id);
      // Element an der Stelle index aus Array entfernen
      this.links.splice(index, 1);
      this.speichern();
    },
    sortieren() {
      this.links.sort(function (link1, link2) {
        return link2.votes - link1.votes;
      });
    },
    laden() {
      if (localStorage.getItem("links")) {
        const linksString = localStorage.getItem("links");
        this.links = JSON.parse(linksString);
      } else {
        this.links = [
          {
            id: 0,
            linktext: "kohnlehome.de",
            url: "http://kohnlehome.de",
            votes: 1,
          },
          {
            id: 1,
            linktext: "Offizielle Website der GBS",
            url: "https://gbsschulen.de",
            votes: 3,
          },
        ];
      }
    },
    speichern() {
      const linksString = JSON.stringify(this.links);
      localStorage.setItem("links", linksString);
    },
    hinzufuegen(newLink) {
      newLink.id = this.maxId + 1;
      this.links.push(newLink);
      this.speichern();
    },
  },
  mounted() {
    this.laden();
    this.sortieren();
  },
};
</script>

<style>
</style>
