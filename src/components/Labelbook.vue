<script>
import { ref } from 'vue';
import { showToast } from 'vant';
import inbook from './in-book.vue'
import outbook from './out-book.vue';

export default {
  components: {
inbook,
outbook
  },
  props: ["label_1", "label_2"],
  setup() {
    const active = ref(0);
    const onClickTab = ({ title }) => showToast(title);

    return {
      active,
      onClickTab,
inbook,
outbook
    };
  }
};
</script>


<template>
  
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="国内文学作品">
        <inbook></inbook>
      </van-tab>
      <van-tab title="外国文学作品"><div><outbook></outbook></div></van-tab>
    </van-tabs>

</template>

<style>
</style>
