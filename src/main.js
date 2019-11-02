import Vue from 'vue'
import App from './App.vue'

import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

new Vue({
	render: h => h(App)
}).$mount('#app')
