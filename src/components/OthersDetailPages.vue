<template>
    <div class="box">
        <div class="box1">
            <img src="../Cover@3x.png" class="box1-img">
            <div class="box1-icon1"><van-icon name="search" size="32px" color="#7e7e7e"/></div>
            <div class="box1-icon2"><van-icon name="ellipsis" size="32px" color="#7e7e7e"/></div>
            <div class="box1-icon3"><van-icon name="arrow-left" size="32px" color="#7e7e7e" @click="return1"/></div>
            <div class="box1-username">{{item.username}}</div>
            
                <div class="user" >
                    <van-image
                    round
                    width="120px"
                    height="120px"
                    :src=item.user_img
                    />
                </div>
                <div class="sexicon">
                    <van-image
                    round
                    width="32px"
                    height="32px"
                    src="../src/photo-list/man.png"
                    />
                </div>
            
            <div class="box1-info">
                <div class="info-text">
                    <div class="textbox">
                        <p class="textbox-num">{{ item.liked }}</p>
                        <p class="textbox-text">获赞 </p>
                    </div>
                    <div class="textbox">
                        <p class="textbox-num">{{ item.following_count }}</p>
                        <p class="textbox-text">粉丝</p>
                    </div>
                    <div class="textbox">
                        <p class="textbox-num">{{ item.follwers_count }}</p>
                        <p class="textbox-text">关注 </p>
                    </div>
    
                </div>
                <div class="info-achievement">
                   <div class="info-achievement-icon">
                    <van-icon name="../src/photo-list/medal.png" size="32"color="#f2f3f5"/>
                   </div>
                   <div class="info-achievement-text">他的成就></div>
                   <div class="user-like">
                        <p class="user-like-text">关注+</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box2">
    
    </div>
    </template>
    <script>
   import axios from 'axios';
import { ref } from 'vue'; // 引入 ref

export default {
  props: {
    name: {
      type: String, // 注意 type 的大写
      required: true
    }
  },
  setup(props) {
    const item = ref(null); // 初始化为 null 或适当的初始值
    const return1 = () => history.back();

    axios.get('/api/get_user_detail/' + props.name)
      .then((res) => {
        // 可能需要进一步的数据处理，例如检查 res.data 的结构是否符合预期
        item.value = res.data;
      })
      .catch((error) => {
        console.error('Error fetching user detail:', error);
        // 可以根据具体情况处理错误，例如显示错误信息给用户
      });

    return {
      return1,
      item // 返回 ref 对象
    };
  }
};

    </script>
    <style scoped>
    .badge-icon {
      display: block;
      font-size: 10px;
      line-height: 16px;
    }
    .box{
        position: relative;
        height: 300px;
        width: 100%;
        background-color: #fcfcfc;
    }
    .box1
    {
        height: 149px;
        width: 100%;
    }
    .box1-img{
        width: 100%;
        height: 100%;
        color: rgba(255,255,255 0.8);
        opacity: 50%;
    }
    .box1-icon3{
        position: absolute;
        top: 2.3%;
        left: 5.3%;
        width: 32px;
        height: 32px;
    }
    .box1-icon1
    {
        position: absolute;
        top: 2.3%;
        left: 80%;
        float: left;
        width: 32px;
        height: 32px;
    }
    .box1-icon2
    {
        position: absolute;
        top: 2.3%;
        right: 3.3%;
        float:left;
        margin-left: 10px;
        width: 32px;
        height: 32px;
    
    }
    .box1-username
    {
        position: absolute;
        width: 56%;
        right: 3%;
        top: 109px;
        font-size: 22px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: PingFangSC-Regular;
    }
    .user
    {
        position: absolute;
        width: 120px;
        height: 120px;
        left: 5.3%;
        top: 89px;
    }
    .sexicon{
    position: absolute;
    top: 176px;
    width: 32px;
    height: 32px;
    left: 5.3%;
    margin-left: 87px;
    background-color: #fcfcfc;
    border-top-left-radius:50%;
      border-top-right-radius: 50%;
      border-bottom-left-radius:50%;
      border-bottom-right-radius:50%;
    }
    
    .box1-info
    {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .info-text
    {
        position: absolute;
        width: 60%;
        right: 3%;
        display:-webkit-flex;
      display: flex;
      -webkit-justify-content:space-around;
      justify-content: space-around;
      height:60px;
    }
    .textbox
    {
        width: 100%;
    }
    .textbox-num
    {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size:20px;
        color:  #7C8698;
        letter-spacing: 0;
    }
    .textbox-text
    {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color:  #7C8698;
        letter-spacing: 0;
    }
    .info-achievement
    {
        position: absolute;
        top: 80px;
        left: 5.3%;
    }
    .info-achievement-icon
    {
        height: 32px;
        width: 32px;
        float: left;
    }
    .info-achievement-text
    {
        height: 32px;
        float: left;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #7C8698;
        margin-left: 10px;
    }
    .user-like
    {
    margin-left: 120%;
    float: left;
    width: 72px;
    background-color: #709fe6;
    border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
    
    .user-like-text
    {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size:18px;
        color:  #fff;
        letter-spacing: 0;
    }
    .box2{
    height: 20px;
    width: 100%;
    background-color: #ededed;
    }
    </style>