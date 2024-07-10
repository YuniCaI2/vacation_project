<template>
<div class="box1">
<SearchBar></SearchBar>
<Swipe></Swipe>
</div>
<div class="box21">
    <div class="container">
        <ul class="box22">
            <li v-for="(item,index) in items" :key="index" class="imgli">
                <img :src="item.url" class="productimg">
                <p class="title">{{ item.title }}</p>
                <img 
                v-if="iflike==false"
                src="../../photo-list/爱心.png" class="img1"
                @click="toggleLikeStatus(iflike)">
                
                <img 
                v-if="iflike==true"
                src="../../photo-list/爱心0.png" class="img1"
                @click="toggleLikeStatus(iflike)">
                
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {ref} from 'vue';
import NavBarBefore from './NavBarBefore.vue';
import SearchBar from './SearchBar.vue';
import Swipe from './Swipe.vue';
import axios from 'axios'

export default{
    components:{
        NavBarBefore,
        SearchBar,
        Swipe
    },

    data() {
        return {
            iflike:false,
            items: []
               }
    },
   
    methods: {
    toggleLikeStatus(iflike) {
      // 切换 like 状态
      this.iflike=!this.iflike
      // 这里可以添加代码来处理实际的喜欢/取消喜欢的逻辑
    }
  },
    mounted() {

    axios.get('https://www.imooc.com/api/mall-wepApp/index/product?icode=J3D67CF17D9F652C7')
        .then(res => {
// console.log(res.data)
            this.items = res.data.data
// console.log(this.items)
        })
        .catch(err => {
            console.error(err);
        })
    }, 
}


</script>
<style scoped>
.box1
{
    background-color: #f3f3f3;
    height: 330px;
}
.box21
{
    background-color: #fafafa;
}
.box22
{
    float: left;
    position: relative;
    /* left: 5.3%;
    right: 5.3%; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
}
.container{
    margin-top: 20px;
    font-size: 10px;
}
.imgli{
   
    padding: 0 0 10px 10px;
    text-align: center;
    position: relative;
}
.title {
    width: 80%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
}
.img1{
    float: left;
    width: 20px;
    height: 20px;
}
.productimg {
    text-align: center;
    width: 97%;
    height: 105px;
}

</style>
