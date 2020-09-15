<template>
  <div class="content">
    <div class="header">
      <!-- <HeaderBar></HeaderBar> -->
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <ul class="uls">
      <router-link active-class="active" tag="li" to="/home/movie">
        <span class="iconfont">&#xe68a;</span>
        首页
      </router-link>
      <router-link active-class="active" tag="li" to="/home/seah">
        <span class="iconfont">&#xe69c;</span>
        换新机
      </router-link>
      <router-link active-class="active" tag="li" to="/home/station">
        <span class="iconfont">&#xe6af;</span>
        服务站
      </router-link>
      <router-link active-class="active" tag="li" to="/home/my">
        <span class="iconfont">&#xe600;</span>
        我的
      </router-link>
    </ul>
  </div>
</template>
<script>
// import HeaderBar from "../../components/HeaderBar";
import Movie from "./movie/Movie";
import "@/assets/iconfont/iconfont.css";

export default {
  components: {
    // HeaderBar,
    Movie,
    
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    overflow:auto;
  }
  .uls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
    // overflow: hidden;
    .active {
      color: red;
    }
    span {
      display: block;
      text-align: center;
    }
  }
}
</style>
