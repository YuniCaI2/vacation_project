<template>
  <nav-bar-before></nav-bar-before>
<van-form @failed="onFailed" @submit="onSubmit">
<van-cell-group inset>
  <!-- 输入任意文本 -->
  <van-field 
    v-model="username"
    label="用户名"
    :rules="[{required:(username!=''?false:true)}]"
    placeholder="请输入用户名"
    
  />
  <van-field 
    v-model="identity"
    name="pattern2"
    label="您的身份"
    :rules="[{ validator:validatorIdentity }]"
    placeholder="请输入老师/学生"
  />
  <van-field 
    v-model="schoolclass"
    name="pattern1"
    label="所在班级"
    :rules="[{ validator: validatorSchoolClass}]"
    placeholder="例:509"
  
  />
    <!-- 输入邮箱 -->
    <van-field 
    v-model="email_id"
    label="邮箱"
    :rules="[{validator: validatoremail}]"
    placeholder="请输入邮箱"
  />
  <!-- 输入手机号，调起手机号键盘 -->
  
    <!-- 输入邮箱 -->
    <van-field 
    v-model="birthdate"
    label="生日"
    :rules="[{validator: validatorBirthdate}]"
    placeholder="请输入生日,例：2001-01-01"
  />
  <van-field 
    v-model="sex"
    label="性别"
    :rules="[{validator: validatorsex}]"
    placeholder="请输入性别男/女"
  />

  <!-- 输入密码 -->
  <van-field 
    v-model="password" 
     :rules="[{required:(password!=''?false:true)}]"
    type="password" 
    label="密码" />
</van-cell-group>
<div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
     注册
    </van-button>
  </div>

</van-form>


</template>

<script>
import { ref } from 'vue';
import NavBarBefore from './NavBarBefore.vue';
import { showNotify } from 'vant';
import { closeToast, showLoadingToast } from 'vant';
import axios from 'axios';
import { useRoute } from 'vue-router';
showNotify({ type: 'success', message: '通知内容' })
export default {
  components:{
     NavBarBefore
  },

  setup() {
    const username = ref('');
    const birthdate = ref('');
    const email_id = ref('');
    const sex = ref('');
    const identity = ref('');
    const password = ref('');
    const schoolclass =ref('');
    const router = useRoute();
    const validatorSchoolClass=(val)=>{return  /^\d\d\d$/.test(val)?null:'不合法请重新输入'};
    const validatorIdentity=(val)=>{return   /^(老|学)(师|生)$/.test(val)?null:'不合法请重新输入'};
    const validatoremail=(val)=>{return   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val)?null:'不合法请重新输入'};
    const validatorsex=(val)=>{return   /^(男|女)$/.test(val)?null:'不合法请重新输入'};
    const validatorBirthdate=(val)=>{return   /^\d{4}-(02-(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)|(01|03|05|07|08|10|12)-(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)|(04|06|09|11)-(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30))$/.test(val)?null:'不合法请重新输入'};
//     const validateSchoolClass = (value) => {
//   return /^\d\d\d$/.test(value) ? Promise.resolve() : Promise.reject('请输入三位数字的班级号');
// };

// const validateIdentity = (value) => {
//   return /^(老|学)(师|生)$/.test(value) ? Promise.resolve() : Promise.reject('请输入老师或学生');
// };
const onSubmit = async () => {
  try {
    const response = await axios.post('/api/register', {
      username: username.value,
      password: password.value,
      birthdate: birthdate.value,
      sex: sex.value,
      email_id: email_id.value,
      identity: identity.value,
      schoolclass: schoolclass.value
    });

    if(response.status === 201){
      console.log(response.data.message);
      router.push('/login');  // Assuming you have a route setup for login
    }
  } catch (error) {
    console.error('Error submitting registration:', error);
    alert('注册过程中出现错误，请稍后再试。');
  }
};



const onFailed = (errorInfo) => {
  console.log('failed', errorInfo);
  // 遍历所有的错误信息并显示第一条错误信息
  for (let field of errorInfo) {
    if (field.message) {
      showNotify({ type: 'warning', message: field.message });
      break; // 只显示第一条错误信息
    }
  }
};

    return { username,birthdate, email_id,sex, identity,password,schoolclass ,validatorSchoolClass,validatorIdentity,validatoremail,validatorBirthdate,validatorsex,onFailed,onSubmit};
  },
};

</script>
