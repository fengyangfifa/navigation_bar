Vue.component('submit-button', {
	template: `
		<div class="container">
			<header>
				<slot name="header">header</slot>
			</header>
			<main>
				<slot>main</slot>
			</main>
			<footer>
				<slot name="footer">footer</slot>
			</footer>
		</div>
	`
});
Vue.component('current-user', {
	data() {
		return {
			user: {
				firstName: 'fe',
				lastName: 'ya'
			}
		}
	},
	template:`
		<span>
			<slot v-bind:user="user">{{ user.lastName }}</slot>
		</span>
	`
});
var app = new Vue({
	el: "#example-2",
	data: {

	}
});