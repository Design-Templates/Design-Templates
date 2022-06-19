import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import './assets/scss/global.scss'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')
