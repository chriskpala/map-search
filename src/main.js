import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import "primevue/resources/themes/lara-light-blue/theme.css";
import 'primevue/resources/primevue.min.css'

const app=createApp(App);
app.use(VueGoogleMaps,{
  load: {
    key:process.env.VUE_APP_MAP_API_KEY,
    libraries: 'places'
  },
});
app.use(PrimeVue);
app.component("AutoComplete", AutoComplete);

app.mount('#app');
