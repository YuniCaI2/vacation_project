<script setup>
    import SearchBar from "../components/SearchBar.vue"
    import LabelBar from "@/components/LabelBar.vue";

</script>

<template>
    <SearchBar></SearchBar>
    <LabelBar label_1="文章" label_2="发布" url_1="/article" url_2="/release"></LabelBar>
    <RouterView />
</template>