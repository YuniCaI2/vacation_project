<template>
<van-cell-group inset>
  <!-- 输入任意文本 -->
  <van-field 
    v-model="username"
    label="用户名"
    :rules="[{required:(username!=''?false:true)}]"
    placeholder="请输入用户名"
  />
  <!-- 输入手机号，调起手机号键盘 -->
  <van-field 
    v-model="tel" 
    :rules="[{required:(tel!=''?false:true)}]"
    type="tel" 
    label="手机号" 
    placeholder="请输入手机号"
  />
  <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <template #button>
      <van-button size="small" type="primary">发送验证码</van-button>
    </template>
  </van-field>

  <!-- 输入密码 -->
  <van-field 
    v-model="password" 
     :rules="[{required:(tel!=''?false:true)}]"
    type="password" 
    label="密码" />
</van-cell-group>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const tel = ref('');
    const sms = ref('');
    const password = ref('');

    return { username,tel, sms, password };
  },
};
</script>
