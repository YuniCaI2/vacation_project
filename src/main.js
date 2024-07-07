import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)/*创建应用实例 */

app.use(router)
app.use(Tab);
app.use(Tabs);
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')