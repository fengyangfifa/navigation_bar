var app = new Vue({
    el: "#app-3",
    // data: {
    //     styleObject: {
    //         color: 'red',
    //         fontSize: '30px'    
    //     }
    // }
    data: {
        baseStyles:{
            color: 'red'
        },
        display:{
            display: ['-webkit-box', '-ms-flexbox', 'flex']
        }
    }
});