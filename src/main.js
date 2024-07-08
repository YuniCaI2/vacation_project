import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar} from 'vant'
import 'vant/lib/index.css'
import { Image as VanImage } from 'vant';
import { Button } from 'vant';


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
app.use(VanImage);
app.use(Button);
app.mount('#app')
