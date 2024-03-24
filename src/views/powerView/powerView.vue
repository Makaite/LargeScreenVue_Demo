<template>
  <div class="power-view">
    <div class="header"></div>

    <div class="left-top">
      <left-top :leftTopEchartsData="leftTopData"></left-top>
    </div>
    <div class="left-bottom">
      <left-bottom :leftBottomEchartsData="leftBottomData"></left-bottom>
    </div>

    <div class="right-top">
      <right-top :rightTopData="rightTopData" :percentage="percentage"></right-top>
    </div>
    <div class="right-center">
      <right-center :rightCenterEchartsData="rightCenterData"></right-center>
    </div>
    <div class="right-bottom">
      <right-bottom></right-bottom>
    </div>

    <div class="center">
      <center></center>
    </div>
    <div class="bottom">
      <bottom :bottomData="bottomResult"></bottom>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { leftTopData, leftBottomData, bottomData, rightTopData, rightCenterData } from '@/data/imitateData.js'
import LeftTop from '@/components/leftTop.vue'
import LeftBottom from '@/components/leftBottom.vue'
import RightTop from '@/components/rightTop.vue'
import RightCenter from '@/components/rightCenter.vue'
import RightBottom from '@/components/rightBottom.vue'
import Center from '@/components/center.vue'
import Bottom from '@/components/bottom.vue'

let percentage = ref(0)
let bottomResult = ref([])

setTimeout(() => {
  percentage.value = 70
  bottomResult.value = bottomData
}, 100)
</script>

<style lang="scss" scoped>
.power-view {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .header {
    position: absolute;
    top: 21px;
    left: 0;
    right: 0;
    height: 56px;
    background-image: url(@/assets/images/bg_header.svg);
  }

  .left-top {
    width: 536px;
    height: 443px;
    position: absolute;
    top: 116px;
    left: 16px;
    background-image: url(@/assets/images/bg_left-top.svg);
    background-repeat: no-repeat;
  }

  .left-bottom {
    width: 536px;
    height: 443px;
    position: absolute;
    bottom: 49px;
    left: 16px;
    background-image: url(@/assets/images/bg_left_bottom.svg);
    background-repeat: no-repeat;
  }

  .right-top {
    width: 519px;
    height: 327px;
    position: absolute;
    top: 96px;
    right: 17px;
    background-image: url(@/assets/images/bg_right_top.svg);
    background-repeat: no-repeat;
  }

  .right-center {
    width: 519px;
    height: 327px;
    position: absolute;
    right: 17px;
    top: 443px;
    background-image: url(@/assets/images/bg_right_center.svg);
    background-repeat: no-repeat;
  }

  .right-bottom {
    width: 519px;
    height: 242px;
    position: absolute;
    right: 17px;
    bottom: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(@/assets/images/bg_right_bottom.svg);
    background-repeat: no-repeat;
  }

  .center {
    width: 823px;
    height: 710px;
    position: absolute;
    right: 540px;
    bottom: 272px;
    border: 5px solid pink;
  }

  .bottom {
    width: 823px;
    height: 209px;
    position: absolute;
    right: 540px;
    bottom: 49px;
    background-image: url(@/assets/images/bg_bottom.svg);
    background-repeat: no-repeat;
  }
}
</style>