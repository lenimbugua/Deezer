import { defineStore } from "pinia";
import axios from "axios";

const corsURL = `https://cors-anywhere.herokuapp.com/`;
const baseURL = `${corsURL}https://api.deezer.com/`;

export interface Album {
  cover: string;
  id: string;
}

export interface TopTracks {
  title: string;
  duration: string;
  album: Album;
}
export interface TopTracksState {
  toptracks: TopTracks | null;
}

const state = (): TopTracksState => ({
  toptracks: null,
});

const actions = {

  async fetchTop5Tracks(artistID: string, limit: Number) {
    const url = `${baseURL}artist/${artistID}/top?limit=${limit}`;
    try {
      const response = await axios.get(url);

      console.log(response);
    } catch (error) {
      console.log(`There was an error calling the api ${error}`);
    }
  },
};

export const useTopTracksStore = defineStore("top-tracks", {
  state,
  actions,
});
