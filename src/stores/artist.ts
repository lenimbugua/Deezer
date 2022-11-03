import { defineStore } from "pinia";
import API from "../utilities/API";

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
  loading: Boolean;
  error: Boolean;
  errorMessage: String;
}

const state = (): ArtistState => ({
  artist: null,
  loading: false,
  error: false,
  errorMessage: "",
});

const actions = {
  /* search store will perform artist search and subsequently update
   search state */
  async search(query: string) {
    const url = `search?q=${query}`;
    try {
      this.loading = true;
      const response = await API().get(url);

      const { artist } = response.data.data[0];

      const artistURL = `artist/${artist.id}`;

      const { data } = await API().get(artistURL);
      this.loading = false;
      const { name, id, tracklist } = data;

      const fans = data.nb_fan;
      const albums = data.nb_album;
      const picture = data.picture_big;

      this.artist = {
        name,
        id,
        picture,
        fans,
        albums,
        tracklist,
      };
    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMessage = `An Error occurred while sending the request: ${error}`;
    }
  },
};

export const useArtistStore = defineStore("search", {
  state,
  actions,
});
