<script>
import share from './share.vue'
export default {
  components: {
  share
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
<div class="c-box">
  <p class="Scomment">
  有1条特评
  </p>
</div>

<div class="box" style="background-color: #fff;">

</div>
</template>
<style scoped>
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


</style>

