import Vue from 'vue';
import loading from '../src/index';

new Vue({
    el: '#app',
    directives: { loading },
    data: {
        title: 'Vue Loading',
        desc: 'Vue directive for show loading block in anything',
        github: 'https://github.com/coffcer/vue-loading',
        // example
        loading: {
            a: false,
            b: false
        }
    },
    methods: {
        showLoading (example) {
            this.loading[example] = true;

            window.setTimeout(() => {
                this.loading[example] = false;
            }, 2000);
        }
    }
})
