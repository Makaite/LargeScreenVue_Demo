<template>
  <div class="rightTop">
    <!-- 1. 水球 -->
    <water-ball class="rightWaterball" :percentage="percentage"></water-ball>
    <!-- 2. 图例 -->
    <div class="legend">
      <template v-for="item in rightTopData" :key="item">
        <div class="legName">
          <span :class="['dot', `area${item.id}`]"></span>
          <span class="name">{{ item.name }}</span>
          <span class="percentage">{{ item.percentage }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import WaterBall from "./waterBall.vue";

const props = defineProps({
  percentage: {
    type: Number,
    default: 70
  },
  rightTopData: {
    type: Array,
    default: function() {
      return []
    }
  }
}) 
</script>

<style scoped>
.rightTop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}


.rightTop .rightWaterball {
  width: 269px;
  height: 199px;
  margin-top: 50px;
  margin-left: 40px;
}

.rightTop .legend {
  flex: 1;
}
.rightTop .legName {
  margin-top: 23px;
  margin-left: 40px;
}
.rightTop .legName span {
  display: inline-block;
  font-size: 20px;
  margin-right: 11px;
}
.rightTop .legend .dot {
  width: 17px;
  height: 17px;
  border-radius: 50%;
}
.rightTop .legend .area1 {
  background-color: #209393;
}
.rightTop .legend .area2 {
  background-color: #1a54a5;
}
.rightTop .legend .area3 {
  background-color: #85caf0;
}
.rightTop .legend .area4 {
  background-color: #f5b64a;
}
.rightTop .legend .area5 {
  background-color: #ee792e;
}
.rightTop .legend .name {
  color: white;
}
.rightTop .legend .percentage {
  color: #0cd2ea;
}
</style>
