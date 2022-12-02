import { createApp } from 'vue'
import App from './App.vue'
// import installElementPlus from './plugins/element'
import router from './router'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import {
    components,
    plugins
} from './utils/elementPlus.js'

const app = createApp(App).use(router)
// app.mount('#app')
// app.use(VueRouter)
// app.use(ElementPlus)
// installElementPlus(app)


components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})
app.mount('#app')


