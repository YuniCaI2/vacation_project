<template>
<div v-if="iflogin" class="box">
    <div  class="box1">
        <van-icon name="setting-o" size="32" class="set"/>
        <img src="../Cover@3x.png"alt="" class="box-img">
        <div class="box-profile">
            <van-image
            round
            width="10rem"
            height="10rem"
            :src="user_img"
        />
        </div>
        <div style="height: 85px;"></div>
        <div class="box-name">
            <p  style="text-align: center;">
            {{ username }}
        </p>
        </div>
        <div class="box-tool">
            <div class="box-tool-box">
                <p class="box-tool-box-num">{{ following_count }}</p>
                <p class="box-tool-box-text">关注</p>
            </div>
            <div class="box-tool-box">
                <p class="box-tool-box-num">{{ followers_count }}</p>
                <p class="box-tool-box-text">粉丝</p>
            </div>
            <div class="box-tool-box">
                <p class="box-tool-box-num">{{ liked }}</p>
                <p class="box-tool-box-text">获赞</p>
            </div>
        </div>
        

    </div>

    <div class="box2">
        <div class="box2-text1">个人信息</div>
        <div class="box2-text2">备忘录</div>
        <div class="box2-text3">每日任务</div>
        <div class="box2-text4">我的图文</div>
        <div class="box2-text5">成就</div>
        <div class="box2-text6">退出登录</div>


        <div class="box2-bark1"><van-icon name="arrow" /></div>
        <div class="box2-bark2"><van-icon name="arrow" /></div>
        <div class="box2-bark3"><van-icon name="arrow" /></div>
        <div class="box2-bark4"><van-icon name="arrow" /></div>
        <div class="box2-bark5"><van-icon name="arrow" /></div>
        <div class="box2-bark6"><van-icon name="arrow" /></div>

    </div>
</div>

<div v-if="iflogin==false" class="box">
    <div  class="box1">
        <img src="../Cover@3x.png"alt="" class="box-img">
        <div class="box-profile">
            <router-link to="/login">
            <van-image
            
            round
            width="10rem"
            height="10rem"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"
        />
        </router-link>
        </div>
        <div style="height: 85px;"></div>
        <p class="box-name" style="text-align: center;" to="/login">
           请点击头像登入
        </p>
 

    </div>
    <div class="box2">

    </div>
</div>
</template>
<script>
import { useStore } from 'vuex';
import {ref} from 'vue';
import axios from 'axios';
export default {
  setup() {
    // 使用 useStore 钩子来访问 Vuex store
    const store = useStore();
    const user_img = ref('');
    const followers_count = ref('');
    const following_count = ref('');
    const liked = ref('');
    const username = ref('');
    // 从 store 中获取你需要的状态值
    const iflogin = store.state.iflogin?true:false;
    console.log(iflogin)
    if (iflogin)
  {
    user_img.value = '/api/user_image';
    axios.get('/api/get_user_active_info')
    .then(response =>{
        following_count.value = response.data.following_count;
        followers_count.value = response.data.followers_count;
        liked.value = response.data.liked;
        username.value = response.data.username;
        // console.log(followering_count.value)
    })
    // axios.get('/api/user_image',{
    //     withCredentials: true
    // })
    //     .then(response =>{
    //         user_img.value = '/api/user_image';
    //     })
    //     .catch(error =>{
    //         console.error('Error fetch image',error);
    //     })
  }
    // 返回组件的数据对象
    return {
      // 你可以在这里使用 iflogin 作为组件的数据属性
      iflogin,
      user_img,
      following_count,
      followers_count,
      liked,
      username
    };
  },
  // 你可以在这里定义其他选项，如 methods、computed、watch 等
};

</script>
<style scoped>
.box{
    position: relative;
}
.set{
    position: absolute;
    top: 5.3%;
    right: 5.3%;

}
.box-img{
    height: 149px;
    width: 100%;

}
.box1
{
    height: 360px;
    width: 100%;
    background-color: #fcfcfc;
}
.box-profile
{
    position:absolute;
    top: 79.5px;
    left: 50%;
    margin-left: -80px;
    width: 139px;
    height: 139px;

}
.box2{
background-color: #fff;
height: 323px;
width: 100%;
}
.box-name
{
    /* position: absolute;
    top: 243px; */
    /* left: 50%; */
    /* margin-left: -30px; */
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color:  #7C8698;
    letter-spacing: 0;
}
.box-tool
{
  display:-webkit-flex;
  display: flex;
  -webkit-justify-content:space-around;
  justify-content: space-around;
  height:60px;
   
}
.box-tool-box
{
    width: 100px;
}
.box-tool-box-num
{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size:20px;
    color:  #7C8698;
    letter-spacing: 0;
}
.box-tool-box-text
{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color:  #7C8698;
    letter-spacing: 0;
}

.box-tel
{
 
    left: 50%;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #7C8698;
    letter-spacing: 0;
}
.box2-text1
{
    position: absolute;
    top:370px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text2
{
    position: absolute;
    top:410px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text3
{
    position: absolute;
    top:450px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text4
{
    position: absolute;
    top:490px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text5
{
    position: absolute;
    top:530px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text6
{
    position: absolute;
    top:570px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-bark1
{
    position: absolute;
    top:373px;
    right:5.3%;
}
.box2-bark2
{
    position: absolute;
    top:413px;
    right:5.3%;
}
.box2-bark3
{
    position: absolute;
    top:453px;
    right:5.3%;
}
.box2-bark4
{
    position: absolute;
    top:493px;
    right:5.3%;
}
.box2-bark5
{
    position: absolute;
    top:533px;
    right:5.3%;
}
.box2-bark6
{
    position: absolute;
    top:573px;
    right:5.3%;
}
</style>