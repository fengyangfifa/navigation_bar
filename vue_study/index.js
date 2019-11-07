// Vue.component('button-counter', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// });
Vue.component("blog-post", {
    props: ["post"],
    template: `<div class=blog-post>
    <h3>{{ post.title }}</h3>
    <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
    <div v-html="post.content"></div>
    </div>`
});
Vue.component("custom-input", {
    props: ['value'],
    template: `
        <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        >
    `
});
Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
});
Vue.component('tab-home', {
    template: '<div>Home component</div>'
});
Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
});
Vue.component('tab-archive', {
    template: '<div>archive component</div>'
});

var app1 = new Vue({
    el: "#dynamic-component-demo",
    data: {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    },
});

var app = new Vue({
    el: "#components-demo",
    data: {
        posts: [
            { id: 1, title: "My journey with Vue", content: "aaa" },
            { id: 2, title: "Blogging with Vue", content: "bbb" },
            { id: 3, title: "Why Vue is so fun", content: "ccc" }
        ],
        postFontSize: 1,
        searchText: ''
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount;
        }
    },
});