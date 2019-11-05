var obj = {
    rawHtml: "bar"
};
// Object.freeze(obj);
var app = new Vue({
    el:"#app",
    data: obj,
    // created() {
    //     console.log('a is: ' + this.foo);
    // }
    created: function () {
        console.log('a is: ' + this.foo);
    }
});
