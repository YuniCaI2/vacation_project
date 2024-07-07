<script>//返回上一级
    export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
  props:["title"]//接口
};
</script>

<template>
    <van-nav-bar
  :title="title"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
</template>