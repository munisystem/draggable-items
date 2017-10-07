import Vue from 'vue/dist/vue.esm'
import _ from 'lodash'

import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        data: {
            dragItem: undefined,
            items: [
                {
                    content: "I want to read 'Microservice Architecture'.",
                    index: 0
                },
                {
                    content: "I go to buy this at Junkdo.",
                    index: 1
                },
                {
                    content: "I'm sad that 'Microservice Architecture' was sold out...",
                    index: 2
                }
            ]
        },
        computed: {
            orderedItems: function () {
              return _.orderBy(this.items, 'index')
            }
        },
        methods: {
            dragstart(item, event) {
                this.dragItem = item;
                event.target.style.opacity = .5;
            },
            dragend(event) {
                event.target.style.opacity = 1;
            },
            dragenter(item) {
                const tmpIndex = item.index;
                item.index = this.dragItem.index;
                this.dragItem.index = tmpIndex;
            },
        }
    });
});
