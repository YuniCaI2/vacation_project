<template>
<div v-if="iflogin" class="box">
    <div  class="box1">
        <img src="../Cover@3x.png"alt="" class="box-img">
        <div class="box-profile">
            <van-image
            round
            width="10rem"
            height="10rem"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"
        />
        </div>
        <div style="height: 85px;"></div>
        <div class="box-name">
            <p  style="text-align: center;">
            112
        </p>
        </div>
        
        <p class="box-tel">
            18911023266
        </p>

    </div>

    <div class="box2">
        <div class="box2-text1">个人信息</div>
        <div class="box2-text2">备忘录</div>
        <div class="box2-text3">每日任务</div>
        <div class="box2-text4">设置</div>
        <div class="box2-text5">退出登入</div>

        <div class="box2-bark1"><van-icon name="arrow" /></div>
        <div class="box2-bark2"><van-icon name="arrow" /></div>
        <div class="box2-bark3"><van-icon name="arrow" /></div>
        <div class="box2-bark4"><van-icon name="arrow" /></div>
        <div class="box2-bark5"><van-icon name="arrow" /></div>

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

export default {
  setup() {
    // 使用 useStore 钩子来访问 Vuex store
    const store = useStore();

    // 从 store 中获取你需要的状态值
    const iflogin = store.state.iflogin?true:false;
    console.log(iflogin)
    // 返回组件的数据对象
    return {
      // 你可以在这里使用 iflogin 作为组件的数据属性
      iflogin
    };
  },
  // 你可以在这里定义其他选项，如 methods、computed、watch 等
};

</script>
<style scoped>
.box{
    position: relative;
}
.box-img{
    height: 149px;
    width: 100%;

}
.box1
{
    height: 344px;
    width: 100%;
    background-color: #fff;
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
    color: #203152;
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
    top:344px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text2
{
    position: absolute;
    top:384px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text3
{
    position: absolute;
    top:424px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text4
{
    position: absolute;
    top:464px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}
.box2-text5
{
    position: absolute;
    top:504px;
    left:5.3%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #262626;
}

.box2-bark1
{
    position: absolute;
    top:348px;
    right:5.3%;
}
.box2-bark2
{
    position: absolute;
    top:388px;
    right:5.3%;
}
.box2-bark3
{
    position: absolute;
    top:428px;
    right:5.3%;
}
.box2-bark4
{
    position: absolute;
    top:468px;
    right:5.3%;
}
.box2-bark5
{
    position: absolute;
    top:508px;
    right:5.3%;
}
</style>