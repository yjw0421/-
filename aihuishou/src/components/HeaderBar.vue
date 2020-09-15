<template>
    <div class="headerBar">
       <router-link to="/city" class="city">
           <span>太原市</span>
       </router-link>
       <div class="span">
           <i class="iconfont">&#xe635;</i><span>搜索您要卖的品牌、机器型号</span>
       </div>
       <div class="icon">
           <span class="iconfont">&#xe607;</span>
       </div>
    </div>
</template>
<style lang="scss" scoped>
    .headerBar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        // background: blue;
        position: relative;
        span{ 
        &::before{
            margin-left:15px;
            position: absolute;
            left:55px;
            top:22px;
            content: '';
            border-color:gray transparent transparent transparent;
            border-width: 6px;
            border-style: solid;
        }
        }
        .span{
            line-height: 32px;
            display:block;
            width: 228px;
            height: 32px;
            color: #999;
            box-shadow: 0 0.01rem 0.2rem rgba(207,213,215,.3);
            border-radius: 20px;
            margin-left:16px;
        }
        .city{
            padding-left: 22px;
        }
        .icon{
          margin-right:15px;
        }
    }
</style>