<template>
    
<div class="box1">
    <share></share>
    <img src="../photo-list/back.jpg" class="img">
    <div class="answerbox">
        <div class="title"><p >第1题</p></div>
        <van-divider />

        <div class="option" 
       :class="optionClass['A'] ? 'selected' : ''"
       @click="toggleOption('A')">A&nbsp;&nbsp;&nbsp;选项1</div>
       <div class="block"></div>
       <div class="option" 
       :class="optionClass['B'] ? 'selected' : ''"
       @click="toggleOption('B')">B&nbsp;&nbsp;&nbsp;选项1</div>
       <div class="block"></div>
       <div class="option" 
       :class="optionClass['C'] ? 'selected' : ''"
       @click="toggleOption('C')">C&nbsp;&nbsp;&nbsp;选项1</div>
       <div class="block"></div>
       <div class="option" 
       :class="optionClass['D'] ? 'selected' : ''"
       @click="toggleOption('D')">D&nbsp;&nbsp;&nbsp;选项1</div>
       <div class="block"></div>
        <!-- <p class="option">A&nbsp;&nbsp;&nbsp;选项1</p>
        <div class="block"></div>
        <p class="option">B&nbsp;&nbsp;&nbsp;选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1</p>
        <div class="block"></div>
        <p class="option">C&nbsp;&nbsp;&nbsp;选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1</p>
        <div class="block"></div>
        <p class="option">D&nbsp;&nbsp;&nbsp;选项4</p> -->
        <div style="height: 15px;"></div>
    <p v-if="showAnswer&&(userAnswer == correctAnswer)" class="answer">{{userAnswer}}{{correctAnswer}}回答正确</p>
        <p v-if="(userAnswer != correctAnswer)&&showAnswer" class="answer">{{userAnswer}}{{correctAnswer}}回答错误</p>

        <p class="answer" v-if="showAnswer" >答案：A</p>

        <!-- <van-button color="#f4a526" round size="large">提交</van-button>
        <van-button color="#f4a526" round size="large">下一题</van-button> -->

        <van-button color="#f4a526" round size="large" 
              v-if="!showAnswer" 
              @click="submitAnswer">提交</van-button>
        <van-button color="#f4a526" round size="large" 
              v-if="showAnswer" 
              @click="nextQuestion">下一题</van-button>

    </div>
</div>
</template>


<script>
import share from './share.vue';
import { ref, computed, watch } from 'vue';
import { Button, Divider } from 'vant';
export default {
components: {
  share
  },
  setup(){
    const options = ref({
  A: false,
  B: false,
  C: false,
  D: false
});
    const selectedOption = ref(null); // 当前选中的选项
const showAnswer = ref(false); // 是否显示答案
const correctAnswer = 'A'; // 正确答案
const userAnswer = ref(null); // 用户答案

// 选项变色的计算属性
const optionClass = computed(() => {
  return  {
    A: options.value.A,
    B: options.value.B,
    C: options.value.C,
    D: options.value.D,
  };
  
});

// 切换选项的方法
const toggleOption = (option) => {
    for (const key in options.value) {
    options.value[key] = false;
  }
  // 然后选择被点击的选项
  options.value[option] = true;
};

// 提交答案的方法
const submitAnswer = () => {
  userAnswer.value = Object.keys(options.value).find(key => options.value[key]);
  showAnswer.value = true;
  // 提交答案后，使用 watch 来给出反馈
  checkAnswer();
  console.log(userAnswer.value)
  console.log(correctAnswer)

};

// 检查答案是否正确
const checkAnswer = () => {
  if (userAnswer.value == correctAnswer) {
    console.log('Correct answer!');
  } else {
    console.log('Wrong answer. The correct answer is:', correctAnswer);
  }
};

// 下一题的方法
const nextQuestion = () => {
  options.value.A = false;
  options.value.B = false;
  options.value.C = false;
  options.value.D = false;
  selectedOption.value = null; // 重置选中的选项
  showAnswer.value = false;
  userAnswer.value = null;
  // 这里添加逻辑来加载下一题
};

// 监听用户答案变化，给出反馈
// watch(userAnswer, (newAnswer) => {
//   if (newAnswer === correctAnswer) {
//     // 显示正确答案的反馈
//     console.log('Correct answer!');
//   } else {
//     // 显示错误答案的反馈
//     console.log('Wrong answer. The correct answer is:', correctAnswer);
//   }
// });
return{
    optionClass,
    toggleOption,
    submitAnswer,
    nextQuestion,
    options,
    selectedOption,
    showAnswer,
    userAnswer

};
  }
}
</script>



<style scoped>
.selected {
  background-color: #fbeedb!important; /* 选中时的背景色 */
  
}
.box1
{
    background-color: #fcfcfc;
    height: 900px;
    width: 100%;
    position: relative;

}
.img
{
    width: 100%;
    height: auto;
    opacity: 50%;
}
.answerbox
{
    position: absolute;
    top: 20%;
    width: 89.4%;
    margin-left: 5.3%;
    background-color: rgba(255,255,255,0.5);
    border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  
}
.title
{
  margin-top: 10px;
  margin-left: 2.3%;
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size:25px;
  font-weight: bold;
}
.option
{
    width: 89.4%;
    margin-left: 5.3%;
    text-align: justify;
    background-color:#fcfaee;
    border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-family: PingFangSC-Regular;
    font-size:20px;
    color: #b6760c;

}
.option-text
{
    margin-left: 5%;
    margin-right: 5%;
    font-family: PingFangSC-Regular;
    font-size:20px;
    color: #ffffff;
}
.block
{
    height: 8px;
}
.answer{
    margin-left: 5%;
    margin-right: 5%;
    font-family: PingFangSC-Regular;
    font-size:26px;
    color: #9b630a;

}
</style>