import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importa o firebase
import '../src/assets/js/firebase'
//Css do boostrap
import 'bootstrap/dist/css/bootstrap.css';
// Importar o JavaScript do Bootstrap e o Popper.js
import 'bootstrap/dist/js/bootstrap.bundle';
// Importar os icones do fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
//Css geral
import './assets/main.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
