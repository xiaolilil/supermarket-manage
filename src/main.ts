import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


const app = createApp(App);

// 将store、router挂载到全局变量上, 方便使用
// app.config.globalProperties.$store = useStore();
// app.config.globalProperties.$router = useRoute();

app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')

