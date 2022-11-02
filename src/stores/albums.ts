import { defineStore } from "pinia";
import axios from "axios";

const corsURL = `https://deezer-cors-proxy.herokuapp.com/`;
const baseURL = `${corsURL}https://api.deezer.com/`;

export interface Album {
  cover: string;
  id: string;
  title: string;
  releaseDate: String;
}

export interface AlbumState {
  album: Album[] | null;
}

const state = (): AlbumState => ({
  album: [],
});

const actions = {
  async fetchAlbums(albumID: Number) {
    const url = `${baseURL}album/${albumID}`;
    try {
      const response = await axios.get(url);
      console.log(response);
      const { cover, id, title } = response.data;
      const releaseDate = response.data.release_date;
      this.album = [...this.album, { cover, id, title, releaseDate }];
      console.log(this.album);
    } catch (error) {
      console.log(`There was an error calling the api ${error}`);
    }
  },
};

export const useAlbumStore = defineStore("album", {
  state,
  actions,
});
