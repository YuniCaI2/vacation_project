import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar,Uploader,Icon,Divider,Notify,Cell,Button,Swipe, SwipeItem} from 'vant'

import 'vant/lib/index.css'
import { Image as VanImage } from 'vant';

import store from "./store"
const app = createApp(App)/*创建应用实例 */
// 将 store 实例作为插件安装
import axios from 'axios';




app.use(store)
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
app.use(VanImage);
app.use(Button);
app.use(Uploader);
app.use(Icon);
app.use(Divider);
app.use(Notify);
app.use(Cell)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
