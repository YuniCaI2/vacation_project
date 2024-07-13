<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      cup1:'../src/photo-list/cup.png',
      cup2:'../src/photo-list/cup1.png',
      pen1:'../src/photo-list/pen.png',
      pen2:'../src/photo-list/pen1.png',
      active: 'records-o',
      inactive:'edit',
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
  <van-tabbar-item icon="records-o" to="/start">
    <span>挑战</span>
  </van-tabbar-item>
  <van-tabbar-item icon="contact-o" to="/personal">我的</van-tabbar-item>
</van-tabbar>
</template>