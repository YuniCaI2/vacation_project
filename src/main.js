import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar,Button,Cell,Icon,Uploader} from 'vant'
import 'vant/lib/index.css'
import { Image as VanImage } from 'vant';


const app = createApp(App)/*创建应用实例 */

app.use(router)
app.use(Tab);
app.use(Tabs);
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Form);
app.use(Field);
app.use(NavBar);
app.use(CellGroup);
app.use(Cell)
app.use(Button)
app.use(Uploader)
app.use(Icon)
app.mount('#app')
