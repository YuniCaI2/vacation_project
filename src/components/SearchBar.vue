<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>

<template>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
</template>