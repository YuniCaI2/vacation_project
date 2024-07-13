<template>
    <div class="box21">
        <div class="container">
            <ul class="box22">
                <li v-for="(item,index) in items" :key="index" class="imgli">
                    <RouterLink :to="'/bookdetail/'+item.id">
                    <img :src="item.book_cover" class="productimg">
                    </RouterLink>
                    <p class="title">{{ item.book_name}}</p>
                    <img 
                    v-if="iflike==false"
                    src="../photo-list/like.png" class="img1"
                    @click="toggleLikeStatus(iflike)">
                    
                    <img 
                    v-if="iflike==true"
                    src="../photo-list/like0.png" class="img1"
                    @click="toggleLikeStatus(iflike)">
                    
                </li>
            </ul>
        </div>
    </div>
    </template>
    <script>
    import {ref} from 'vue';
    import axios from 'axios'
    import { RouterLink } from 'vue-router';

    
    export default{

    
        data() {
            return {
                iflike:false,
                   }
        },
       
        methods: {
        toggleLikeStatus(iflike) {
          // 切换 like 状态
          this.iflike=!this.iflike
          // 这里可以添加代码来处理实际的喜欢/取消喜欢的逻辑
        }
      },
        setup(){
            const items = ref("");
            axios.get('/api/get_foreign_book')
            .then(res =>{
                items.value=res.data
            }).catch(err => {
                console.error(err);
            })
            return {
                items
            }
        }
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
        width: 48%;
        /* padding: 0 0 10px 10px; */
        text-align: center;
        position: relative;
        margin-left: 1%;
        margin-right: 1%;
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
        width: 100%;
        height: 105px;
    }
    
    </style>
    