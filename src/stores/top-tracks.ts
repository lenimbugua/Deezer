import { defineStore } from 'pinia'
import API from '../utilities/API'

export interface Album {
  cover: string
  id: string
  title: string
}

export interface TopTracks {
  title: string
  duration: string
  source: string
  album: Album
}
export interface TopTracksState {
  toptracks: TopTracks[] | null
  loading: Boolean
  error: Boolean
  errorMessage: string
}

const state = (): TopTracksState => ({
  toptracks: [],
  loading: false,
  error: false,
  errorMessage: '',
})

const actions = {
  async fetchTop5Tracks(artistID: string, limit: Number) {
    const url = `artist/${artistID}/top?limit=${limit}`
    try {
      this.loading = true
      const response = await API().get(url)
      this.loading = false

      // reset first before updating
      this.toptracks = []
      for (const track of response.data.data) {
        const { title, duration, preview } = track
        const album = {
          cover: track.album.cover_medium,
          id: track.album.id,
          title: track.album.title,
        }
        this.toptracks.push({
          title,
          duration,
          album,
          source: preview,
        })
      }
    }
    catch (error) {
      this.loading = false
      this.error = true
      this.errorMessage = `An error occurred while sending the request ${error}`
    }
  },
}

export const useTopTracksStore = defineStore('top-tracks', {
  state,
  actions,
})
