import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KtHeader from './components/KtHeader'
import KtFooter from './components/KtFooter'

Vue.config.productionTip = false

Vue.component('kt-header', KtHeader)
Vue.component('kt-footer', KtFooter)


export default {

}

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')