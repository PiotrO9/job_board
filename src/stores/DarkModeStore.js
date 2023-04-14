import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkModeStore', {
    state: () => ({
        darkMode: false
    }),
    getters: {
        getDarkModeState() {
            return this.darkMode
        }
    },
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        }
    }
})