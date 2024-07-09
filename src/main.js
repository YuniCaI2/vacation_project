import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar,Uploader,Icon,Divider,Notify } from 'vant'
=======
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar,Button,Cell,Icon,Uploader} from 'vant'
>>>>>>> fc3f3c065e100791b1006cbc57eb636ec80b0569
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar,Uploader,Icon,Divider,Notify,Cell,Button} from 'vant'

import 'vant/lib/index.css'
import { Image as VanImage } from 'vant';
import { Button } from 'vant';

import store from "./store"
const app = createApp(App)/*创建应用实例 */
// 将 store 实例作为插件安装
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
<<<<<<< HEAD
app.use(VanImage);
app.use(Button);
app.use(Uploader);
app.use(Icon);
app.use(Divider);
app.use(Notify);
=======
app.use(Cell)
app.use(Button)
app.use(Uploader)
app.use(Icon)
>>>>>>> fc3f3c065e100791b1006cbc57eb636ec80b0569
app.mount('#app')
