import Vue from 'vue'
import App from './App.vue'

import ToggleButton from 'vue-js-toggle-button';
import i18n from './i18n'

Vue.use(ToggleButton);

new Vue({
	i18n,
	render: h => h(App)
}).$mount('#app');
