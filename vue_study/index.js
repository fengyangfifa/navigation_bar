new Vue({
	el: '#example-1',
	data: {
		show: true
	}
});
new Vue({
	el: '#example-2',
	data: {
		show: true
	}
});
new Vue({
	el: '#example-3',
	data: {
		show: true
	}
});
new Vue({
	el: '#transition-components-demo',
	data: {
		view: 'v-a'
	},
	components: {
		'v-a': {
			template: '<div>Component A</div>'
		},
		'v-b': {
			template: '<div>Component B</div>'
		}
	}
});
new Vue({
	el: '#list-demo',
	data: {
		items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		nextNum: 10
	},
	methods: {
		randomIndex: function () {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function () {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function () {
			this.items.splice(this.randomIndex(), 1)
		},
	}
});