import { defineStore } from "pinia";

// search store will perform artist searc and subsequently update
// search state
export const useSearchStore = defineStore("search", {
  state: () => ({ artist: 0 }),
  getters: {},
  actions: {
    async search() {
      this.count++;
      try {
        const response = await axios.get(
          `https://api.deezer.com/search?q=eminem`,
          params
        );
        console.log(response);
      } catch (error) {}
    },
  },
});
