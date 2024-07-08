import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Tabbar,TabbarItem,Tab,Tabs,Search,Form, Field, CellGroup, NavBar,Button,Cell} from 'vant'
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
<<<<<<< HEAD
app.use(Cell)
app.use(Button)
=======
app.use(VanImage);
app.use(Button);
>>>>>>> ee6f55d8a9b3a64cae7333a9fcb1aacc5f0dacdc
app.mount('#app')
