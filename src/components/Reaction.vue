<script setup>
    import SearchBar from "../components/SearchBar.vue"
    import LabelBar from "@/components/LabelBar.vue";
    import { RouterView } from "vue-router";
    import { ref } from "vue";

//     const isSearchBarVisible = ref(false);

// // 定义点击事件处理函数
// function toggleSearchBar() {
//   isSearchBarVisible.value = !isSearchBarVisible.value;
// }
// </script>

<template>
    <header>
        

        <SearchBar v-show="isSearchBarVisible" ></SearchBar>

        <!-- <img src="../photo-list/老师.png" class="top-icon"> -->
        <LabelBar label_1="文章" label_2="发布"  ></LabelBar>
        <!-- <div class="top-icon"  @click="toggleSearchBar"><van-icon name="search" size="44" /></div> -->

 
    </header>
</template>
<style scoped>
/* .back
{
    background-color: #f3f3f3;
    height: 55px;
}
.margin
{
    margin-top: 10px;
} */
.top{
    display:-webkit-flex;
  display: flex;
  -webkit-justify-content:space-between;
  justify-content: space-between;
    height: 44px;
}
.top-icon
{
    height: 44px;
    width: 44px;
}

</style>