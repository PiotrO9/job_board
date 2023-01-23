import { reactive } from 'vue'

export const ThemeMode = reactive({
    isDarkMode: false,
    SwitchModes() {
        this.isDarkMode = !this.isDarkMode
    }
})