<!-- <template>
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
</script> -->
<template>
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="value1"
        :options="option1"
        @click="handleClick"
      />
    </van-dropdown-menu>
    <!-- 动态组件 -->
    <component :is="currentComponent"></component>
  </template>
  
  <script>
  import { ref } from 'vue';

  import Inbook from './in-book.vue';
  import Article from './Article.vue';
  import Release from './Release.vue';
  export default {
    components: {
      Inbook,
      Article,
      Release
    },
    setup() {
        const value1 = ref(0);
    const currentComponent = ref('Inbook'); // 默认渲染的组件

    const option1 = ref([
      { text: '全部书籍', value: 'Inbook' },
      { text: '国内文学作品', value: 'Article' },
      { text: '外国文学作品', value: 'Release' },
    ]);

    const handleClick = (option) => {
        const componentName = option.value; // 假设 value 是组件名称
        console.log(option.value);
        currentComponent.value = componentName;
        console.log(currentComponent.value);
        
    }
  
      return {
        value1,
        option1,
        currentComponent,
        handleClick
      };
    },
  };
  </script>