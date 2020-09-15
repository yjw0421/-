<template>
    <div>
        <HeaderBar></HeaderBar>
    <ul class="uls">
        <router-link active-class="active" tag="li" to="/home/movie/Commend">推荐</router-link>
        <router-link  active-class="active" tag="li" to="/Course">回收指南</router-link>
        <router-link  active-class="active" tag="li" to="/Guide">3步换新机</router-link>
        <router-link  active-class="active" tag="li" to="/Upgrade">一小时快修</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
    .uls{
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        padding: 0 18px;
        .active{
             position: relative;
             &::after{
                position: absolute;
                content:"";
                bottom:4px;
                left: 50%;
                transform: translateX(-50%);
                width:60px;
                height: 4px;
                background-image: linear-gradient(90deg,#fffa8f,#ffd33f);
            }
        }
       
    }
</style>
<script>
import HeaderBar from "@/components/HeaderBar";
export default {
    components:{
        HeaderBar
    }
}
</script>
