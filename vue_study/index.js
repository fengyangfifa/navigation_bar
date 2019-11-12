new Vue({
	el: '#animated-number-demo',
	data: {
		number: 0,
		tweenedNumber: 0
	},
	computed: {
		animatedNumber: function () {
			return this.tweenedNumber.toFixed(0);
		}
	},
	watch: {
		number: function (newValue) {
			TweenLite.to(this.$data, 0.5, {
				tweenedNumber: newValue
			});
		}
	}
});