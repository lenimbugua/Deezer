import { defineStore } from "pinia";

export interface Track {
  title: string;
  source: string;
  duration: number;
}

export interface TrackState {
  track: Track | null;
}

const state = (): TrackState => ({
  track: null,
});

const actions = {
  setTrack(track: Track) {
    //unset first
    this.unsetTrack();
    this.track = track;
  },
  unsetTrack(track: Track) {
    this.track = null;
  },
};

export const useTrackStore = defineStore("track", {
  state,
  actions,
});
