<template>
  <div class="bottomContent">
    <template v-for="(item, index) in bottomData" :key="item">
      <div :class="['item', `panel${item.id}`]">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <span :id="`total-num-${item.id}`" class="number">{{
            item.totalNum
          }}</span>
          <span class="unit">{{ item.unit }}</span>
        </div>
        <div class="right">
          <span
            :class="['triangle', item.isUp ? 'up-triangle' : 'down-triangle']"
          ></span>
          <span :id="`percentage-num-${item.id}`" class="percentage">{{
            item.percentage
          }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { nextTick, watch } from 'vue';

import { CountUp } from 'countup.js'
const props = defineProps({
  bottomData: {
    type: Array,
    default: function() {
      return []
    }
  }
})

watch(()=>props.bottomData, (newValue, oldValue)=>{
  nextTick(()=>{
    startAnimation(newValue)
  })

})

function startAnimation(array = []) {
   // 等 dom更新 完成之后执行
   const option1 = {
    decimalPlaces: 1, // 保留一位小数点 
    duration: 2,
    useGrouping: false, // 1000 -> 1,000
  }
  const option2 = {
    decimalPlaces: 1, // 保留一位小数点 
    duration: 2,
    useGrouping: false, // 1000 -> 1,000
    suffix: '%'
  }
  array.forEach((item)=>{
    new CountUp(`total-num-${item.id}`, item.totalNum, option1).start()
    new CountUp(`percentage-num-${item.id}`, item.percentage, option2).start()
  })

}
</script>

<style scoped lang="scss">
.bottomContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding-top: 40px; */
}

.bottomContent .item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;

  flex: 1;
  height: 100%;
  padding: 0 10px 0 35px;
  /* border: 1px solid red; */
}


.bottomContent .left {
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
}
.bottomContent .left .title {
  color: white;
}
.bottomContent .left .number {
  font-size: 36px;
  font-weight: bold;
  color: #23aeff;
  line-height: 60px;
}

.bottomContent .left .unit {
  font-size: 18px;
  color: #23aeff;
}

.bottomContent .right {
  margin-top: 35px;
}

.bottomContent .panel1 .right .up-triangle {
  display: inline-block;
  margin-bottom: 4px;
  width: 0;
  height: 0;
  border-bottom: 8px solid #c70013;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bottom .panel1 .right .percentage {
  color: #c70013;
}
.bottom .panel2 .right .up-triangle {
  display: inline-block;
  margin-bottom: 4px;
  width: 0;
  height: 0;
  border-bottom: 8px solid #c70013;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bottomContent .panel2 .right .percentage {
  color: #c70013;
}

.bottomContent .panel3 .right .down-triangle {
  display: inline-block;
  margin-bottom: 1px;
  width: 0;
  height: 0;
  border-top: 8px solid #37a73f;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bottomContent .panel3 .right .percentage {
  color: #37a73f;
}
</style>
