<template>
    <div class="box">
    <P class="title">点赞排行榜</P>
    <van-divider />
    <!-- 前三循环 -->
     <div class="box-3" v-if="items.length > 0">
        <div class="icon"><img src="../photo-list/first.png" class="icon-img"></div>
        <div class="userbox">
            <van-image
                    round
                    width="80px"
                    height="80px"
                    :src="'/api/get_others_image/'+items[0].username"
                    class="user"
                    />
             <div class="username">{{ items[0].username }}</div>
             <div class="like"><img src="../photo-list/like0.png" class="icon-img"></div>
             <p class="likenum">{{ items[0].liked }}</p>
        </div>
     </div>
     <van-divider v-if="items.length > 0" />
    
     <div class="box-3" v-if="items.length > 1">
        <div class="icon"><img src="../photo-list/second.png" class="icon-img"></div>
        <div class="userbox">
            <van-image
                    round
                    width="80px"
                    height="80px"
                    :src="'/api/get_others_image/'+items[1].username"
                    class="user"
                    />
             <div class="username">{{items[1].username}}</div>
             <div class="like"><img src="../photo-list/like0.png" class="icon-img"></div>
             <p class="likenum">{{ items[1].liked }}</p>
        </div>
     </div>
     <van-divider v-if="items.length > 1" />
    
     <div class="box-3" v-if="items.length > 2">
        <div class="icon"><img src="../photo-list/third.png" class="icon-img"></div>
        <div class="userbox">
            <van-image
                    round
                    width="80px"
                    height="80px"
                    :src="'/api/get_others_image/'+items[2].username"
                    class="user"
                    />
             <div class="username">{{ items[2].username}}</div>
             <div class="like"><img src="../photo-list/like0.png" class="icon-img"></div>
             <p class="likenum">{{ items[2].liked }}</p>
        </div>
     </div>
     <van-divider v-if="items.length > 2" />
     <div class="block"></div>
    <!-- 其余4-20 -->
     <div v-for="(data,i) in datas" :key="i" class="box-other">
        <div class="uer2box">
            <p class="chart">{{ data.id }}</p>
            <van-image
                    round
                    width="40px"
                    height="40px"
                    :src="data.src"
                    class="user2"
            />
            <div class="username2">{{ data.text }}</div>
         </div>
         <div class="block" style="height: 1px;"></div>
     </div>
     <van-divider />
     
     <!-- <结束> -->
    </div>
    </template>
    <script>
    import { ref } from 'vue';
    import axios from 'axios';
    export default {
      setup() {
        const items = ref([]);
        const datas = ref([]);
        axios.get('/api/get_ranking')
          .then(response => {
            items.value = response.data;
    
            // 处理 items 数组中的数据
            for (let i = 3; i < items.value.length; i++) {
              if (items.value[i] !== null) {
                datas.value.push({
                  id: i,
                  text: items.value[i].username,
                  src: '/api/get_others_image/'+items.value[i].username
                });
              }
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // 可以在此处理错误逻辑
          });
    
        return {
          datas,
          items
        };
      },
    };
    </script>
    <style scoped>
    .box {
      background-color: #fcfcfc;
      width: 100%;
    }
    .title {
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 25px;
      line-height: 40px;
    }
    .box-3 {
      height: 100px;
      position: relative;
    }
    .icon {
      position: absolute;
      top: 10px;
      width: 80px;
      height: 80px;
      left: 5.3%;
      float: left;
    }
    .icon-img {
      width: 100%;
      height: 100%;
    }
    .userbox {
      height: 80px;
      width: 70%;
      position: absolute;
      right: 5.3%;
      top: 10px;
      background-color: #fcfcfc;
    }
    .user {
      float: left;
    }
    .username {
      float: left;
      margin-left: 52px;
      margin-top: 24px;
      width: 110px;
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 20px;
    }
    .like {
      float: left;
      margin-top: 20px;
      height: 40px;
      width: 40px;
      margin-left: 120px;
    }
    .likenum {
      float: left;
      margin-left: 10px;
      margin-top: 20px;
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 25px;
    }
    .block {
      height: 20px;
      width: 100%;
      background-color: #ededed;
    }
    .box-other {
      height: 50px;
      position: relative;
    }
    .uer2box {
      height: 40px;
      width: 90%;
      position: absolute;
      left: 5.3%;
      top: 5px;
      background-color: #fcfcfc;
    }
    .chart {
      float: left;
      margin-left: 5.3%;
      margin-top: 4px;
      text-align: left;
      font-family: PingFangSC-Regular;
      color: #48a7ff;
      font-size: 20px;
    }
    .user2 {
      margin-left: 5.3%;
      float: left;
    }
    .username2 {
      float: left;
      margin-left: 10px;
      margin-top: 9px;
      width: 110px;
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 14px;
    }
    </style>
    