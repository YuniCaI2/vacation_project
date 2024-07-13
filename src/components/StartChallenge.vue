<template>
<div class="box1">
    <img src="../photo-list/back.jpg">
    <van-button type="danger" round size="large" class="button" to="/challenge">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="2000"
    :touchable="false"
    :show-indicators="false"
  >
    <van-swipe-item>开始做题</van-swipe-item>
    <van-swipe-item>一次生成30道题</van-swipe-item>
  </van-swipe>
</van-button>
</div>
</template>


<script>

</script>


<style scoped>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
.box1
{
    background-color: #fcfcfc;
    height: 900px;
    width: 100%;
    position: relative;
}
.img
{
    width: 100%;
    height: auto;

}
.button
{
    position: absolute;
    left: 0;
    top: 70%;

}
</style>