<script>
import { ref } from 'vue';
import NavBarBefore from './NavBarBefore.vue';
export default {
  components:{
     NavBarBefore
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
  methods:{
    Login(){
      this.$store.commit('Login')
    }
  }
};
</script>
<style scoped>

</style>
<template>
<van-form @submit="onSubmit">
  <NavBarBefore title="登录"></NavBarBefore>
  <div >
  <van-cell-group inset >
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登入
    </van-button>
  </div>
</div>
<div class="wrap">
  <p class="wrap1">忘记密码</p>
  <router-link to="/register"><p class="wrap2">新用户注册</p></router-link>
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

