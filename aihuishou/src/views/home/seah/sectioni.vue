<template>
  <div class="con" ref="datalist">
    <div class="content">
      <p>推荐</p>
      <div class="index" v-for="(item,i) in this.$store.state.data" :key="i" :class="{huawei:item.brandName===华为}">
        <img :src="item.images[0].url" alt />
        <div class="indexP">
          <p class="index_p">{{item.name}}</p>
          <div class="indexR">
            <p class="index_pr">{{item.title}}</p>
            <p class="index_pro">
              官方指导价：
              <span class="index_pr">{{item.price}}</span>
              <span>起</span>
            </p>
          </div>
          <p class="index_all">
            <span class="index_label">赠送</span>
            <span class="index_value">以旧换新补贴最高{{item.subsidy}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { get } from "@/api/http";
BScroll.use(Pullup);
export default {
  data() {
    return {
      datalist: {
        productInfo: [],
        recommendBrands:[]
      }
    };
  },
  created() {
    if (this.$store.state.scroll) {
      this.$nextTick(() => {
        this.initMovielistScroll();
      });
    }
  },
  methods: {
    initMovielistScroll() {
      if (this.bs) {
        this.bs.refresh();
        return;
      }
      this.bscroll = new BScroll(this.$refs.datalist, {
        pullUpLoad: true,
        click: true
      });
      // this.bscroll.on("pullingUp", () => {
      //   console.log("up....")
      //   if (this.movie.hasMore) {
      //     this.getMoreMovielist()
      //   } else {
      //     Toast("没有更多的数据了")
      //   }
      // })
      // this.bscroll.on("scroll", position => {
      //   if(position.y< -50) {
      //     this.$store.commit('setShowAd', false)
      //   }else{
      //      this.$store.commit('setShowAd', true)
      //   }
      // })
    }
  }

  // methods: {
  //   async sss() {
  //     let rs = await get("/mock.json");
  //     console.log(rs);
  //     this.datalist = rs.data.data;
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.con {
  flex: 1;
  background: white;
  overflow: hidden;
}
.content {
  padding-top: 10px;
  .index {
    padding: 20px 0;
    display: flex;
    .indexP {
      .indexR {
        p {
          color: #777;
          font-size: 12px;
        }
      }
      .index_all {
        span {
          font-size: 12px;
          color: #fe4e4a;
        }
        width: 167px;
        height: 19px;
        border: solid 1px #fe4e4a;
      }
      .index_pro {
        padding: 10px 0;
        span {
          color: #f63;
        }
      }
    }
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    img {
      width: 62px;
      height: 62px;
      padding: 10px 20px;
    }
  }
  display: flex;
  flex-direction: column;
}
</style>