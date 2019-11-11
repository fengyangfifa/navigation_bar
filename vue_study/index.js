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
	template: `
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
// function test(resolve, reject) {
// 	var timeOut = Math.random() * 2;
// 	console.log('set timeout to: ' + timeOut + ' seconds.');
// 	setTimeout(function () {
// 		if(timeOut < 1){
// 			console.log("call resolve()...");
// 			resolve('200 OK');
// 		}else{
// 			console.log('call reject()...');
// 			reject('timeout in ' + timeOut + ' seconds.');
// 		}
// 	}, timeOut*10);
// }
// new Promise(test).then(function (result) {
// 	console.log('成功：' + result);
// }).catch(function (reason) {
// 	console.log('失败：' + reason);
// })
function multiply(input) {
	return new Promise(function (resolve, reject) {
		console.log('calculating ' + input + ' x ' + input + '...');
		setTimeout(resolve, 500, input * input);
	});
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
	return new Promise(function (resolve, reject) {
		console.log('calculating ' + input + ' + ' + input + '...');
		setTimeout(resolve, 500, input + input);
	});
}

var p = new Promise(function (resolve, reject) {
	console.log('start new Promise...');
	resolve(123);
});

p.then(multiply)
	.then(add)
	.then(multiply)
	.then(add)
	.then(function (result) {
		console.log('Got value: ' + result);
	});
