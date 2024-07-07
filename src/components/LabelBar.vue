<script>
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const active = ref(0);
    const onClickTab = ({ title }) => showToast(title);
    return {
      active,
      onClickTab,
    };
  },
  props:["label_1","label_2","url_1","url_2"]
};
</script>

<template>
<van-tabs v-model:active="active" @click-tab="onClickTab">
  <van-tab :title="label_1" :to="url_1"></van-tab>
  <van-tab :title="label_2" :to="url_2"></van-tab>
</van-tabs>
</template>