import { defineStore } from 'pinia'

export interface Toast {
  hasError: Boolean
  message: string
}

export interface ToastState {
  toast: Toast | null
}

const state = (): ToastState => ({
  toast: null,
})

const actions = {
  setError(message: Number) {
    this.toast = {
      hasError: true,
      message,
    }
    setTimeout(() => {
      this.unsetError()
    }, 3000)
  },
  unsetError() {
    this.toast = null
  },
}

export const useUiStore = defineStore('ui', {
  state,
  actions,
})
