<template>
<div class="box">
<P class="title">点赞排行榜</P>
<van-divider />
<!-- 前三循环 -->
 <div class="box-3">
    <div class="icon"><img src="../photo-list/第一.png" class="icon-img"></div>
    <div class="userbox">
        <van-image
                round
                width="80px"
                height="80px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class="user"
                />
         <div class="username">LoveTRY4545465465</div>
         <div class="like"><img src="../photo-list/爱心0.png" class="icon-img"></div>
         <p class="likenum">32</p>
    </div>
 </div>
 <van-divider />

 <div class="box-3">
    <div class="icon"><img src="../photo-list/第二.png" class="icon-img"></div>
    <div class="userbox">
        <van-image
                round
                width="80px"
                height="80px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class="user"
                />
         <div class="username">LoveTRY4545465465</div>
         <div class="like"><img src="../photo-list/爱心0.png" class="icon-img"></div>
         <p class="likenum">32</p>
    </div>
 </div>
 <van-divider />

 <div class="box-3">
    <div class="icon"><img src="../photo-list/第三.png" class="icon-img"></div>
    <div class="userbox">
        <van-image
                round
                width="80px"
                height="80px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class="user"
                />
         <div class="username">LoveTRY4545465465</div>
         <div class="like"><img src="../photo-list/爱心0.png" class="icon-img"></div>
         <p class="likenum">32</p>
    </div>
 </div>
 <van-divider />
 <div class="block"></div>
<!-- 其余4-20 -->
 <div v-for="(data,i) in datas":key="i" class="box-other">
    <div class="uer2box">
        <p class="chart">{{ data.id }}</p>
        <van-image
                round
                width="40px"
                height="40px"
                :src=data.src
                class="user2"
        />
        <div class="username2">{{data.text}}</div>
     </div>
     <div class="block" style="height: 1px;"></div>
 </div>
 <van-divider />
 
 <!-- <结束> -->
</div>
</template>
<script>
export default {
  setup() {
    const datas = [
      { id:4,text: '全部书籍', src: "../src/photo-list/爱心.png" },
      { id:5,text: '国内文学作品', src: "../src/photo-list/收藏.png" },
      { id:6,text: '外国文学作品', src: "../src/photo-list/收藏0.png" },
    ];
    return {
        datas
    };
  },
};
</script>
<style scoped>
.box
{
    background-color: #fcfcfc;
    width: 100%;
}
.title
{
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size:25px;
  line-height: 40px;
}
.box-3
{
height: 100px;
position: relative;
}

.icon
{
    position: absolute;
    top: 10px;
    width: 80px;
    height: 80px;
    left: 5.3%;
    float: left;

}
.icon-img{
    width: 100%;
    height: 100%;
}
.userbox
{
    height: 80px;
    width: 70%;
    position: absolute;
    right: 5.3%;
    top: 10px;
    background-color: #fcfcfc;
}
.user{

    float: left;
}
.username
{
    float: left;
    margin-left: 52px;
    margin-top: 24px;
    width: 110px;
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size:20px;
}
.like{
    float: left;
    margin-top: 20px;
    height: 40px;
    width: 40px;
    margin-left: 120px;
}
.likenum
{
    float: left;
    margin-left: 10px;
    margin-top: 20px;
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size:25px;
}
.block
{
    height: 20px;
    width: 100%;
    background-color: #ededed;
}
.box-other
{
    height: 50px;
    position: relative;
}
.uer2box
{
    height: 40px;
    width: 90%;
    position: absolute;
    left: 5.3%;
    top: 5px;
    background-color: #fcfcfc;
}
.chart
{
    float: left;
margin-left: 5.3%;
margin-top: 4px;
text-align: left;
font-family: PingFangSC-Regular;
color: #48a7ff;
font-size:20px;
}
.user2{
margin-left: 5.3%;
float: left;
}
.username2
{
float: left;
margin-left: 10px;
margin-top: 9px;
width: 110px;
text-align: left;
font-family: PingFangSC-Regular;
font-size:14px;
}
</style>