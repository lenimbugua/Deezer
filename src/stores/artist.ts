import { defineStore } from "pinia";
import axios from "axios";

const corsURL = `https://cors-anywhere.herokuapp.com/`;
const baseURL = `${corsURL}https://api.deezer.com/`;
export interface Artist {
  name: string;
  id: string;
  picture: string;
  fans: Number;
  albums: Number;
  tracklist: string;
}

export interface Album {
    cover: string;
    id: string;
  }

export interface TopTracks {
    title: string;
    duration: string;
    album: Album;
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
      const { name, id, picture, tracklist } = data;

      const fans = data.nb_fan;
      const albums = data.nb_album;

      this.artist = {
        name,
        id,
        picture,
        fans,
        albums,
        tracklist,
      };
      console.log(this.artist);
    } catch (error) {
      console.log(`There was an error calling the api ${error}`);
    }
  },
  async fetchTop5Tracks(artistID: string) {
    const url = `${baseURL}artist/${artistID}/top?limit=5`;
    try {
      const response = await axios.get(url);

      console.log(response);
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
