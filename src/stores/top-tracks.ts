import { defineStore } from "pinia";
import axios from "axios";

const corsURL = `https://cors-anywhere.herokuapp.com/`;
const baseURL = `${corsURL}https://api.deezer.com/`;

export interface Album {
  cover: string;
  id: string;
  title: string;
}

export interface TopTracks {
  title: string;
  duration: string;
  album: Album;
}
export interface TopTracksState {
  toptracks: TopTracks[] | null;
  loading: Boolean;
  error: Boolean;
  errorMessage: string;
}

const state = (): TopTracksState => ({
  toptracks: [],
  loading: false,
  error: false,
  errorMessage: "",
});

const actions = {
  async fetchTop5Tracks(artistID: string, limit: Number) {
    const url = `${baseURL}artist/${artistID}/top?limit=${limit}`;
    try {
      this.loading = true;
      const response = await axios.get(url);
      this.loading = false;

      const tracks = response.data.data;
      console.log(tracks);
      //reset first before updating
      this.toptracks = [];
      for (let track of response.data.data) {
        const { title, duration } = track;
        const album = {
          cover: track.album.cover_medium,
          id: track.album.id,
          title: track.album.title,
        };
        this.toptracks.push({
          title,
          duration,
          album,
        });
      }

      console.log(this.toptracks);
    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMessage = `An Error occurred while sending the request`;
    }
  },
};

export const useTopTracksStore = defineStore("top-tracks", {
  state,
  actions,
});
