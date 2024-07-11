<script>
import share from './share.vue'
import { ref } from 'vue';

export default {
  data() {
        return {
            iflike:false,
            ifcollect:false,
               }
    },
    methods: {
    toggleLikeStatus1(iflike) {
      // 切换 like 状态
      this.iflike=!this.iflike
      // 这里可以添加代码来处理实际的喜欢/取消喜欢的逻辑
    },
    toggleLikeStatus2(iflike) {
      // 切换 like 状态
      this.ifcollect=!this.ifcollect
      // 这里可以添加代码来处理实际的喜欢/取消喜欢的逻辑
    }
  },
  components: {
  share
  },
  setup() {
    const comment = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    // const text = ref('');
    // const digit = ref('');
    // const number = ref('');
    // const password = ref('');

    return { comment ,onSubmit};
  },
};
</script>
<template>
  <share></share>
  <div class="box">
    <div class="user">
      <van-image
                round
                width="120px"
                height="120px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                />
    </div>
    <div class="username">LoveTRY4545465465</div>
    <div class="icon">
                <img 
                v-if="iflike==false"
                src="../photo-list/爱心.png" class="icon1"
                @click="toggleLikeStatus1(iflike)">
                
                <img 
                v-if="iflike==true"
                src="../photo-list/爱心0.png" class="icon1"
                @click="toggleLikeStatus1(iflike)">
               
                <img 
                v-if="ifcollect==false"
                src="../photo-list/收藏.png" class="icon2"
                @click="toggleLikeStatus2(ifcollect)">
                
                <img 
                v-if="ifcollect==true"
                src="../photo-list/收藏0.png" class="icon2"
                @click="toggleLikeStatus2(ifcollect)">
    </div>
   
    <div class="user-like">
      <p class="user-like-text">关注+</p>
    </div>
  </div>
  <div class="box1">

    <img src="../photo-list/参考1.jpg" class="img">
  </div>
  <van-divider />
  <p class="title">标题</p>
  <van-divider />
  <p class="article">一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。

青春的底色，要用“勇立潮头、勇争一流”的进取精神来绘。志不求易者成，事不避难者进。成功的道路绝不会是一马平川，而可能是布满荆棘、充满泥泞，广大青年只有不怕苦、不怕难，拼搏在发展最前沿，到国家最需要的地方，才能绘好青春的底色。在脱贫攻坚第一线，有“好青年”邱瑞麟，扎根山区九年，克服各种困难，用他吃苦耐劳的进取精神带领乡亲们增收致富；在抗击疫情第一线，有一大批“90后”“00后”主动请缨，组成不惧不退“青春逆行者”，守护着我们的城市和家园。人生万事须自为，跬步江山即寥廓。广大青年人只有在各自的战场上奋勇拼搏，挥洒汗水，才能展现新时代中国青年奋勇进取的精神面貌。

青春的旋律，要用“绵绵用力，久久为功”的实干精神来谱。空谈误国，实干兴邦。实干不只是一种行动，更代表着青年人的态度和精神。
</p>
<van-divider />
<p class="Scomment">
  有1条特评
</p>

<div class="c-box">
  <!-- 从这里开始读评论数据循环 -->
  <div class="c-all">
    <div class="c-user">
    <van-image
  round
  width="24px"
  height="24px"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  class="c-userimg"
  />
    <div class="c-username">猫老师</div>
    </div>
    <img src="../photo-list/100分.png"  class="c-pi">
  <div class="c-comment1">写得很棒，继续保持！</div>
  <van-divider />
  </div>
  <!-- 结束 -->
   <div class="block">共1条评论</div>
<!-- 从这里开始读评论数据循环 -->
<div class="c-all">
    <div class="c-user">
    <van-image
  round
  width="24px"
  height="24px"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  class="c-userimg"
  />
    <div class="c-username">猫老师</div>
    </div>
    <img src="../photo-list/100分.png"  class="c-pi">
  <div class="c-comment2" style="color: #000">写得很棒，继续保持！写得很棒，继续保持！写得很棒，继续保持！写得很棒，继续保持！写得很棒，继续保持！写得很棒，继续保持！写得很棒，继续保持！</div>
  <van-divider />
 </div>
 <!-- 结束 -->

 <div class="c-all">
 <van-cell-group inset>
  <van-field
    v-model="comment"
    rows="2"
    autosize
    label="评论"
    type="textarea"
    maxlength="50"
    placeholder="请输入评论，老师在评论开头加“#”自动转化为特评"
    show-word-limit
  />
</van-cell-group>
<div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
<div style="height: 20px;"></div>
</div>
<div class="box" style="background-color: #fff;height: 60px;">
</div>
</div>
</template>
<style scoped>
.icon
{
  position: absolute;
  top: 100px;
  right: 30%;
  margin-right: 15px;
  width: 80px;

}
.icon1
{
  float: left;
  width: 32px;
  height: 32px;
}
.icon2
{
  float: left;
  width: 32px;
  height: 32px;
  margin-left: 15px;
}
.user-like
{
position: absolute;
top: 100px;
right: 5.3%;
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
.box{
width: 100%;
height: 160px;
background-color: #fcfcfc;
position: relative;
}
.user
{
position: absolute;
left: 5.3%;
height: 120px;
width: 120px;
top: 20px;
}
.username
{
  top: 15px;
  left: 5.3%;
  margin-left: 130px;
  position: absolute;
  margin-top: 10px;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size:25px;
}

.box1
{
  height: 20%;
  width: auto;
}
.img
{
  width: 100%;
  height: 100%;
}
.title
{
  margin-top: 10px;
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size:25px;
}
.article
{
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size:18px;
  background-color: #fcfcfc;
}
.Scomment
{
  margin-top: 10px;
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size:25px;
  color: #ffa51e;
}
.c-box
{
  position: relative;
  background-color: #fcfcfc;
  width:100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.c-user
{
  height: 28px;
  width: 100%;
  position: relative;
}
.c-userimg
{
  margin-top: 2px;
    left: 2px;
    position: absolute;
}
.c-username
{
  position:absolute;
    left: 40px;
    width: 55%;
    top: 0px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.c-pi
{
  position: absolute;
  right: 5.3%;
  top: 0px;
  width: 40px;
  height: 40px;
}
.c-comment1
{
  /* position: absolute;
  top: 20px;*/
  width: 60%; 
  text-align: justify;
  text-align-last:left ;
  margin-left: 10%;
  font-family: PingFangSC-Regular;
  font-size:14px;
  color: #ff0000;
  background-color: #fcfcfc;
}
.c-comment2
{
  /* position: absolute;
  top: 20px;*/
  width: 80%; 
  margin-left:10%;
  text-align: justify;
  text-align-last:left ;
  font-family: PingFangSC-Regular;
  font-size:14px;
  color: #000;
  background-color: #fcfcfc;
}
.block
{
  background-color: #ededed;
  height:20px ;
  color: #297ddd;
  font-family: PingFangSC-Regular;
  font-size:14px;
}

</style>

