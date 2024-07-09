<template>
  <div >
  <nav-bar-before></nav-bar-before>
<van-cell-group inset>
  <!-- 输入任意文本 -->
  <van-field 
    v-model="username"
    label="用户名"
    :rules="[{required:(username!=''?false:true)}]"
    placeholder="请输入用户名"
  />
    <!-- 输入邮箱 -->
    <van-field 
    v-model="mail"
    label="邮箱"
    :rules="[{required:(username!=''?false:true)}]"
    placeholder="请输入邮箱"
  />
  <!-- 输入手机号，调起手机号键盘 -->
  />
    <!-- 输入邮箱 -->
    <van-field 
    v-model="birthday"
    label="生日"
    :rules="[{required:(username!=''?false:true)}]"
    placeholder="请输入生日"
  />

  <!-- 输入密码 -->
  <van-field 
    v-model="password" 
     :rules="[{required:(tel!=''?false:true)}]"
    type="password" 
    label="密码" />
</van-cell-group>
<div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
     注册
    </van-button>
  </div>
<van-divider />
  </div>

</template>

<script>
import { ref } from 'vue';
import NavBarBefore from './NavBarBefore.vue';
import { showNotify } from 'vant';
showNotify({ type: 'success', message: '通知内容' })
export default {
  components:{
     NavBarBefore
  },

  setup() {
    const username = ref('');
    const birthday = ref('');
    const mail = ref('');
    const password = ref('');

    return { username,birthday, mail, password };
  },
};

</script>
