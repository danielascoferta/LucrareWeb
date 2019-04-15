import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
