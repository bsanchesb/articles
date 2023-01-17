import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import "./assets/main.css";

const app = createApp(App);

app.use(VueAxios, axios)
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(router);

app.mount("#app");
