<script>
import axios from 'axios';
import { ref, reactive, toRef } from 'vue';

export default {
  setup() {
    const items = ref([]);
    const iflike = ref('');
    iflike.value = 0;
    axios.get('/api/get_reaction')
      .then((res) => {
        items.value = res.data;
      })
      .catch((error) => {
        console.error({"error": error});
      });
    const handleClick = async(item)  => {
        axios.post(
            '/api/change_liked',
             {
        username : item.username,
        iflike : iflike.value
    }
        ).catch(
            (res) =>{
                console.error({'error': res.error})
            }
        )
        iflike.value = ! iflike.value
    }
    

    return {
      items,
      iflike,
      handleClick
    };
  }
};
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in items" :key="index" class="imgli">
        <router-link :to="'/articledetail/'"> 
          <img :src="item.filename" class="productimg">
          <div class="userbox">
            <div class="userbox-radius">
              <van-image
                round
                width="2rem"
                height="2rem"
                :src="item.user_img"
                class="userimg"
              />
              <p class="username">{{ item.username }}</p>
              <div class="user-like">
                <p class="user-like-text">关注+</p>
              </div>
            </div>
            <div>
              <img
                v-if="!iflike"
                src="../photo-list/爱心.png"
                class="imglike"
                @click="handleClick(item)"
              />
              <img
                v-else
                src="../photo-list/爱心0.png"
                class="imglike"
                @click="handleClick(item)"
              />
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.container{
    margin-top: 20px;
    font-size: 10px;
    
}
.imgli{
    margin-top: 20px;
    width:100%;
    float: left;
    background-color: #eeeeee;
    /* margin-right: 10px; */
    border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.imgli:hover{
    margin-top: 20px;
    width:100%;
    float: left;
    background-color: #eeeeee;
    /* margin-right: 10px; */
    border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  animation: to-biger 0.5s linear 0s forwards;
}
.userbox{
    height: 36px;
    background-color: #e2e2e2;
    position: relative;
    border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.userbox-radius
{
  margin-top: 1px;
  margin-left: 1px;
  height: 34px;
  width: 80%;
  background-color: #709fe6;
  position: absolute;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
}
.userimg
{
    margin-top: 1px;
    left: 2px;
    position: absolute;

}
.username {
    position:absolute;
    left: 40px;
    width: 55%;
    top: 1px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.user-like
{
height: 32px;
margin-top: 1px;
position: absolute;
top: 0;
left: 70%;
width: 72px;
background-color: rgb(255, 255, 255);
border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.user-like-text
{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size:18px;
    color:  #709fe6;
    letter-spacing: 0;
}
.imglike
{
    position: absolute;
    right: 5.3%;
    width: 30px;
    height: 30px;


}
.productimg {
    text-align: center;
    width: 100%;
    height: 330px;
    overflow: hidden;
    border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
@keyframes to_biger {
            0%{
                transform:scale(1);
            }
            25%{
                transform: scale(1.05);
            }
            50%{
                transform: scale(1.1);
            }
            100%{
                transform: scale(1.15);
            }
        }
</style>