<template>
<div class="box">
    <div class="box1">
        <img src="../Cover@3x.png" class="box1-img">
        <div class="box1-icon1"><van-icon name="search" size="32px" color="#7e7e7e"/></div>
        <div class="box1-icon2"><van-icon name="share-o" size="32px" color="#7e7e7e"/></div>
    </div>
</div>
</template>
<script>
</script>
<style scoped>
.box{
    position: relative;
    height: 360px;
    width: 100%;
    background-color: #fcfcfc;
}
.box1
{
    height: 149px;
    width: 100%;
}
.box1-img{
    width: 100%;
    height: 100%;
    color: rgba(255,255,255 0.8);
    opacity: 50%;
}
.box1-icon1
{
    position: absolute;
    top: 2.3%;
    left: 80%;
    float: left;
    width: 32px;
    height: 32px;
}
.box1-icon2
{
    position: absolute;
    top: 2.3%;
    right: 3.3%;
    float:left;
    margin-left: 10px;
    width: 32px;
    height: 32px;

}
</style>