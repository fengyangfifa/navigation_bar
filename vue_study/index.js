var app = new Vue({
    el: "#example",
    data: {
        message: "hello"
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        now: function () {
            return Date.now();
        }
    }
});

var app2 = new Vue({
    el: "#demo",
    data: {
        firstName: "Foo",
        lastName: "Bar",
    },
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + ' ' + this.lastName;
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val;
    //     }
    // },
    computed: {
        fullName: {
            get: function () {
                return this.firstName+ " " + this.lastName;
            },
            set: function (newvalue) {
                var names = newvalue.split(" ");
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        } 
    }
});