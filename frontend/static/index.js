import { Elm } from '../elm/src/Main';

const vueApp = new Vue({
    el: '#vapp',
    data: {
        display: 'redbox'
    }
})

Elm.Main.init({
    node: document.getElementById("elm-node")
});