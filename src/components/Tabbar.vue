<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      cup1:'../src/photo-list/奖杯.png',
      cup2:'../src/photo-list/奖杯1.png',
      pen1:'../src/photo-list/羽毛笔.png',
      pen2:'../src/photo-list/羽毛笔1.png',
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
    return {
      icon,
      active,
    };
  },
};
</script>

<template>
  
<van-tabbar v-model="active">
  <van-tabbar-item icon="notes-o" to="/admiration">赏析</van-tabbar-item>
  <van-tabbar-item to="/reaction">
    <span>互动</span>
    <template #icon="props">
      <img :src="props.active ? icon.pen2 : icon.pen1" />
    </template>
  </van-tabbar-item>
  
  <van-tabbar-item to="/charts">
    <span>排行榜</span>
    <template #icon="props">
      <img :src="props.active ? icon.cup2 : icon.cup1" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item badge="3">
    <span>好友</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="contact-o" to="/personal">我的</van-tabbar-item>
</van-tabbar>
</template>