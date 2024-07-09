<script>
import { ref } from 'vue';
import { showToast } from 'vant';
import Article from './Article.vue';
import Release from './Release.vue';

export default {
  components: {
    Article,
    Release
  },
  props: ["label_1", "label_2"],
  setup() {
    const active = ref(0);
    const onClickTab = ({ title }) => showToast(title);

    return {
      active,
      onClickTab,
      Article, // 暴露组件以在模板中使用
      Release
    };
  }
};
</script>


<template>
  
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="图文  ">
        <Article></Article>
      </van-tab>
      <van-tab title="发布"><div class="release"><Release></Release></div></van-tab>
    </van-tabs>

</template>

<style>
.release{
  margin-top:40%; 
}
</style>
