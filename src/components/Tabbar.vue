<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/reaction">互动</van-tabbar-item>
  <van-tabbar-item icon="search" to="/admiration">赏析</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/personal">我的</van-tabbar-item>
</van-tabbar>
</template>