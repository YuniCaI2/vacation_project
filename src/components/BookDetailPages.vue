<script>
import share from './share.vue'
import { ref } from 'vue';

export default {
  components: {
  share
  },
  setup() {
    const text =
    '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。';
    const comment = ref('');
    const value = ref(2.5);
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    // const text = ref('');
    // const digit = ref('');
    // const number = ref('');
    // const password = ref('');

    return { comment ,onSubmit,text,value};
  },
};
</script>
<template>
  <share></share>
  <!-- <div class="box">
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
  </div> -->
  <div class="box1">

    <img src="../photo-list/参考1.jpg" class="img">
  </div>
  <van-divider />
  <p class="title">《孤意与深情》</p>
  <p class="writer">作者:张晓风</p>
  <van-divider />
  <p class="title" style="margin-left: 2.3%;">简介</p>
  <van-text-ellipsis
  rows="3"
  :content="text"
  expand-text="展开"
  collapse-text="收起"
  class="article"
  />
  <van-divider />
  <p class="title" style="margin-left: 2.3%;">你的评分</p>
  <van-rate v-model="value" allow-half clearable style="margin-left: 2.3%;"/>
<van-divider />
<!-- <p class="Scomment">
  有1条特评
</p> -->

<div class="c-box">

  <!-- <div class="c-all">
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
  </div> -->

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
    <!-- <img src="../photo-list/100分.png"  class="c-pi"> -->
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
.writer
{
  margin-top: 5px;
  margin-left: 5.3%;
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size:14px;
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

