<script>//test
import { ref } from 'vue';


export default {
  setup() {
    const article = ref('');
    const title=ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };
     const value = ref([
      { url: '' },
    ]);
    return {
      article,
      onSubmit,
      value,
      title
    };
  },
};
</script>

<template>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field name="uploader" label="图片上传">
         <template #input>
            <van-uploader v-model="value" />
        </template>
    </van-field>
    <van-field
      v-model="title"
      type="article"
      name="文章"
      label="标题/主题"
      placeholder="若无空出本栏即可"
      
    />
    <van-cell-group inset>
  <van-field
    v-model="article"
    rows="1"
    autosize
    label="正文"
    type="textarea"
    placeholder="请输入文章"
    :rules="[{ required: true, message: '请书写文章' }]"
  />
</van-cell-group>
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      上传
    </van-button>
  </div>
  <div class="wrap">
  <p class="wrap1">优秀作品管理</p>
  <router-link to="/register"><p class="wrap2">任务完成情况</p></router-link>
</div>
</van-form>


</template>
<style scoped>
.wrap{
  display:-webkit-flex;
  display: flex;
  -webkit-justify-content:space-around;
  justify-content: space-around;
  height: 32px;

}
.wrap1{
width: 100px;
}
</style>