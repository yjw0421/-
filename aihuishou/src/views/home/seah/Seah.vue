<template>
  <div class="header">
    <div class="content">
      <span>换新机</span>
    </div>
    <div class="img">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/img/image1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/image1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/image1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/image1.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <img class="img2" src="@/assets/img/sale.png" alt />
    <div class="nav-box">
      <ul class="nav">
        <li id="tj" class="nav-item">推荐</li>
        <li >华为</li>
        <li @click="go('huawei')">荣耀</li>
        <li>苹果</li>
      </ul>
      <sectioni></sectioni>
    </div>
  </div>
</template>
<script>
import { get } from "@/api/http";
import sectioni from "./sectioni";
export default {
  components: {
    sectioni
  },
  created(){
    this.sss()
  },
  methods: {
    async sss() {
      let rs = await get("/mock.json");
      console.log(rs);
      this.datalist = rs.data.data;
      this.$store.commit('setData',rs.data.data.productInfo['9'])
      this.$store.commit('setData',rs.data.data.productInfo['52'])
      this.$store.commit('setData',rs.data.data.productInfo['484'])
      this.$store.commit("setScroll",true)
      console.log(rs.data.data.recommendBrands)
     
     
    },
     go(letter){
       this.bscroll.scrollToElement(document.querySelector(`.`+letter),500)
    }
    
 
  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  height: 100%;
  .nav-box {
    overflow: hidden;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .nav {
    padding-top: 10px;
    width: 60px;
    height: 168px;
    padding-left: 22px;
    li {
      width: 100%;
      height: 42px;
      color: #535051;
    }
  }
  .img2 {
    margin: 0 auto;
    width: 343px;
    height: 100px;
  }
  .img {
    margin: 20px 0;
    img {
      margin: 0 auto;
      width: 343px;
      height: 138px;
    }
  }
  .content {
    span {
      font-weight: 900;
      font-size: 26px;
      color: #111111;
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  width: 343px;
}
</style>