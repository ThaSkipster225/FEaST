import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/css/FEaST_CSS.css'


var firebaseConfig = {
    apiKey: "AIzaSyDJR9dwtaVhCfD7mVEv2oDNKdTu7_DyD_8",
    authDomain: "feast-4899.firebaseapp.com",
    projectId: "feast-4899",
    storageBucket: "feast-4899.appspot.com",
    messagingSenderId: "493436136143",
    appId: "1:493436136143:web:9836baff4cca6d1b8425ba"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
