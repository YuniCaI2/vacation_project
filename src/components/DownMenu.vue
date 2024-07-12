<template>
    <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
</van-dropdown-menu>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const value1 = ref(0);
    const value2 = ref('a');
    const option1 = [
      { text: '全部书籍', value: 0 },
      { text: '国内文学作品', value: 1 },
      { text: '外国文学作品', value: 2 },
    ];
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];

    return {
      value1,
      value2,
      option1,
      option2,
    };
  },
};
</script>