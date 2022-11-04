import { defineStore } from "pinia";

export interface Track {
  title: string;
  source: string;
}

export interface TrackState {
  track: Track | null;
}

const state = (): TrackState => ({
  track: null,
});

const actions = {
  setTrack(track: Track) {
    this.track = track;
  },
};

export const useTrackStore = defineStore("track", {
  state,
  actions,
});
