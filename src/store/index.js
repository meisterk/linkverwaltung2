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
      ]
    }
  },
  getters: {
    links: (state) => state.links,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
