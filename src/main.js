import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionsComponent from './components/OptionsComponent.vue'

const app = createApp(App)

app.provide('nameApp', 'Aplikasi Saya')

app
  .component('CompositionComponent', CompositionComponent)
  .component('OptionsComponent', OptionsComponent) // penjelsan dibawah

/*
  Komponen yang sering muncul di banyak halaman, seperti Navbar, Footer, dll,
  sebaiknya dibuat sebagai komponen global atau reusable agar cukup ditulis sekali
  dan bisa dipakai berulang kali di seluruh aplikasi.

  Sedangkan komponen yang hanya muncul di satu halaman saja, misalnya Hero Section,
  cukup dibuat lokal saja di file halaman tersebut supaya kode tetap rapi dan mudah dipelihara.
*/

app.mount('#app')
