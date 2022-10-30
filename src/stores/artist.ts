import { defineStore } from "pinia";
import axios from "axios";

const corsURL = `https://cors-anywhere.herokuapp.com/`;
const baseURL = `${corsURL}https://api.deezer.com/`;
export interface Artist {
  name: string;
  picture: string;
  fans: Number;
  albums: Number;
}

export interface ArtistState {
  artist: Artist | null;
}

const state = (): ArtistState => ({
  artist: null,
});

const getters = {};
const actions = {
  // search store will perform artist search and subsequently update
  // search state
  async search(query: string) {
    const url = `${baseURL}search?q=${query}`;
    try {
      const response = await axios.get(url);

      const { artist } = response.data.data[0];

      const artistURL = `${baseURL}/artist/${artist.id}`;

      const { data } = await axios.get(artistURL);

      const name = data.name;
      const picture = data.picture;
      const fans = data.nb_fan;
      const albums = data.nb_album;

      this.artist = {
        name,
        picture,
        fans,
        albums,
      };
      console.log(this.artist);
    } catch (error) {
      console.log(`There was an error calling the api ${error}`);
    }
  },
  async fetchTracks(query: string) {
    const url = `${baseURL}search?q=${query}`;
    try {
      const response = await axios.get(url);

      const { artist } = response.data.data[0];

      const artistURL = `${baseURL}/artist/${artist.id}`;

      const { data } = await axios.get(artistURL);

      const name = data.name;
      const picture = data.picture;
      const fans = data.nb_fan;
      const albums = data.nb_album;

      this.artist = {
        name,
        picture,
        fans,
        albums,
      };
      console.log(this.artist);
    } catch (error) {
      console.log(`There was an error calling the api ${error}`);
    }
  },
};

export const useArtistStore = defineStore("search", {
  state,
  getters,
  actions,
});
