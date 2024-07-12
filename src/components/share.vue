<template>
    <van-nav-bar  left-text="返回" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-icon name="ellipsis" size="18" color="#7e7e7e"/>
    </template>
  </van-nav-bar>
</template>
<script>
import { showToast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => showToast('按钮');
    return {
      onClickLeft,
      onClickRight,
    };
  },
  props:["title"]
};
</script>