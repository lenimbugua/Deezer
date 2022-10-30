import { defineStore } from "pinia";
import axios from "axios";

// search store will perform artist search and subsequently update
// search state
export const useSearchStore = defineStore("search", {
  state: () => ({ artist: null }),
  getters: {},
  actions: {
    async search() {
      this.count++;
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem`
        );
        console.log(response);
      } catch (error) {
        console.log(`There was an error calling the api ${error}`);
      }
    },
  },
});
