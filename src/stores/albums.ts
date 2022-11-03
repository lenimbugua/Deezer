import { defineStore } from "pinia";
import API from "../utilities/API";

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
    const url = `album/${albumID}`;
    try {
      const response = await API().get(url);
      const { cover, id, title } = response.data;
      const releaseDate = response.data.release_date;
      this.album = [...this.album, { cover, id, title, releaseDate }];
    } catch (error) {
      console.log(`There was an error sending request ${error}`);
    }
  },
};

export const useAlbumStore = defineStore("album", {
  state,
  actions,
});
