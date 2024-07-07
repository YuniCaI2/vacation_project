<script setup>
    import SearchBar from "../components/SearchBar.vue"
    import LabelBar from "@/components/LabelBar.vue";

</script>

<template>
    <SearchBar></SearchBar>
    <LabelBar ></LabelBar>
    <RouterView />
</template>