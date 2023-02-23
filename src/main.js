import { createApp } from 'vue';
import  App  from './App.vue';
import TheHeader from './components/TheHeader.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const app = createApp(App);
library.add(faXmark);

app.component('the-header', TheHeader)
app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
