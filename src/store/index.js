import { createStore } from 'vuex'

export default createStore({
  state: {
    links: {
      default: [
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
      data: [],
    }
  },
  getters: {
    links: (state) => state.links,
  },
  mutations: {
    setLinks(state, value) {
      state.links.data = value;
    },
  },
  actions: {
    speichern() {
      const linksString = JSON.stringify(this.state.links.data);
      localStorage.setItem("links", linksString);
    },

    laden() {
      if (localStorage.getItem("links")) {
        const linksString = localStorage.getItem("links");
        this.state.links.data = JSON.parse(linksString);
      } else {
        this.state.links.data = this.state.links.default;
      }
    },

    hinzufuegen(newLink) {
      newLink.id = this.maxId + 1;
      this.state.links.data.push(newLink);
      this.speichern();
    },

    maxId() {
      let maximum = -1;
      if (this.state.links.data.length > 0) {
        maximum = this.state.links.data[0].id;
        for (let i = 1; i < this.state.links.data.length; i++) {
          const aktuellerLink = this.state.links.data[i];
          if (aktuellerLink.id > maximum) {
            maximum = aktuellerLink.id;
          }
        }
      }
      return maximum;
    },
  },
  modules: {
  }
})
