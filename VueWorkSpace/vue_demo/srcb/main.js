import Vue from 'vue'
import App from './App'
import store from './store';
import './base.css'

new Vue({
	el: "#app",
	components: {
		App
	},
	template: '<App/>',
	store
});

// new Vue({
// 	el: "#app",
// 	render: h => h(App),
// 	store
// });
