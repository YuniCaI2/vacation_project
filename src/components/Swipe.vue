<template>



<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" style="height: 250px; width: 100%;"/>
  </van-swipe-item>
</van-swipe>
</template>
<script>
export default {
  setup() {
    const images = [
      '../src/photo-list/swipe1.png',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  },
};
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height: 250px;
    width: 100px;
    text-align: center;
    background-color: #888888;
  }

</style>