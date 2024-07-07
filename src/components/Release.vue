<script>
import { ref } from 'vue';

export default {
  setup() {
    const onSubmit = (values) => {
      console.log('submit', values);
    };
     const value = ref([
      { url: '' },
    ]);
    return {
      username,
      article,
      onSubmit,
      value
    };
  },
};
</script>

<template>
    
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field name="uploader" label="文件上传">
         <template #input>
            <van-uploader v-model="value" />
        </template>
    </van-field>
    <van-field
      v-model="article"
      type="article"
      name="文章"
      label="文章"
      placeholder="文章"
      :rules="[{ required: true, message: '请书写文章' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      上传
    </van-button>
  </div>
</van-form>


</template>