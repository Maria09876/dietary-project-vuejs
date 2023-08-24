import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.js"
import { createI18n } from 'vue-i18n'
import en from "./locales/en.json"
import gr from "./locales/gr.json"
import LanguageSelector from "./components/UI/LanguageSelector.vue";
import '../src/fonts.css'

const messages={
    en: en,
    gr: gr    
}

const i18n= createI18n({
    locale:'gr', //setting the initial locale on launch
    fallbackLocale:'en',
    messages,
})

const app = createApp(App)
app.use(i18n).mount('#app')
// Registering the LanguageSelector component globally
app.component('LanguageSelector', LanguageSelector)