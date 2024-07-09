<script setup>
    import SearchBar from "../components/SearchBar.vue"
    import LabelBar from "@/components/LabelBar.vue";
    import { RouterView } from "vue-router";
    //import RouterView from 'vue-router' 
</script>

<template>
    <header>
        <SearchBar></SearchBar>
        <LabelBar label_1="文章" label_2="发布" ></LabelBar>
    </header>
</template>