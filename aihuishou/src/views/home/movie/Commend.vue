<template>
  <div class="head">
    <div class="head-con">
      <a href="https://page.aihuishou.com/renderer/?activityId=928">
        <img src="@/assets/img/banner.jpg" alt />
      </a>
      <img class="img1" src="@/assets/img/phone.png" alt />
      <img class="img2" src="@/assets/img/new.png" alt />
    </div>
    <div class="content">
      <span>爱回收门店</span>
      <i>
        全部门店
        <van-icon name="arrow" />
      </i>
      <div class="con">
        <img class="img3" src="@/assets/img/ai.jpg" alt />
        <div class="con-city">
          <p>太原市有3家门店</p>
          <img class="img4" src="@/assets/img/dt.png" alt />
          <span>获取最近门店</span>
          <div class="contain">
            <span class="big">
              <h2>旧机回收</h2>
              <h3>当面质检秒拿钱</h3>
              <van-icon name="arrow" class="icon-b" />
            </span>
            <span class="small">
              <h2>
                以旧换新
                <van-icon name="arrow" class="icon-a" />
              </h2>
              <div class="mine">
                <span>特色服务 隐私清除 | 数据迁移</span>
                <div class="mine-con">
                  <span>查看门店服务</span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {};
</script>
<style lang="scss" scoped>
.head {
  .mine-con {
      padding-top: 10px;
      
    span {
        color: #333;
      text-align: center;
      line-height: 41px;
      border-radius: 100px;
      background: #fff03b;
      transform: translateX(-260px);
      display: block;
      width: 311px;
      height: 41px;
    }
  }
  .mine {
    display: inline;
    margin-left: -250px;
    width: 14px;
    height: 16px;
    background: url(../../../assets/img/mine.png) no-repeat;
  }
  a {
    img {
      display: block;
      width: 375px;
      height: 116px;
    }
  }
  .img1 {
    width: 375px;
    height: 74px;
  }
  .img2 {
    width: 375px;
    height: 68px;
  }
  .img3 {
    width: 90px;
    height: 68px;
  }
  .img4 {
    width: 12px;
    height: 14px;
    padding-top: 15px;
    position: absolute;
    top: 27px;
    left: -15px;
    padding-left: 15px;
  }
  .content {
    padding: 14px 16px 14px 16px;
    i {
      font-style: normal;
      float: right;
    }
    .con {
      width: 311px;
      height: 68px;
      padding-top: 15px;
      .big {
        .icon-b {
          margin-top: -20px;
        }
        transform: translateX(-110px);
        display: inline-block;
        width: 226px;
        height: 58px;
        background-image: url(../../../assets/img/bj.png);
      }
      .small {
        transform: translateX(-105px);
        display: inline-block;
        width: 80px;
        height: 58px;
        background-image: url(../../../assets/img/xbj.png);
      }

      .con-city {
        .contain {
          .mine span {
            padding-left: 30px;
          }
          .icon-a {
            padding-top: 20px;
          }

          .small h2 {
            color: #000;
            font-size: 15px;
            line-height: 58px;
          }
          h2 {
            font-size: 15px;
            color: black;
            line-height: 29px;
          }
          h3 {
            font-size: 12px;
            color: #777;
          }
          display: flex;
          margin-top: 20px;
        }
        position: relative;
        margin-left: 20px;
        span {
          font-size: 13px;
          color: #333;
          padding-left: 15px;
        }
        p {
          padding-bottom: 15px;
        }
      }
      display: flex;
      flex-direction: row;
    }
  }
}
</style>