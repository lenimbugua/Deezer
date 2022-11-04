import { defineStore } from "pinia";
import API from "../utilities/API";
import { useStorage } from "@vueuse/core";

export interface Artist {
  name: string;
  id: string;
  picture: string;
  fans: Number;
  albums: Number;
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
  artists: Artist[] | null;
  artist: Artist | null;
  loading: Boolean;
  error: Boolean;
  errorMessage: String;
}

const state = () => ({
  artists: useStorage("artists", []),
  artist: useStorage("artist", {}),
  loading: false,
  error: false,
  errorMessage: "",
});

const actions = {
  /* search store will perform artist search and subsequently update
   search state */
  async search(query: string) {
    const url = `search/artist?q=${query}`;
    try {
      this.loading = true;
      const response = await API().get(url);

      const data = response.data.data;

      this.artists = data;
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMessage = `An Error occurred while sending the request: ${error}`;
    }
  },
  setSingleArtist(artist: Artist) {
    this.artist = artist;
  },
};

export const useArtistStore = defineStore("search", {
  state,
  actions,
});
