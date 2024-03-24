<template>
  <div ref="leftBottom" :style="{width: width, height: height}"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import setupEcharts from '@/hooks/leftBottom.js';

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  leftBottomEchartsData: {
    type: Array,
    default: () => []
  }
})

let leftBottom = ref(null)

watch(props.leftBottomEchartsData, (newValue, oldValue) =>{
  setupEcharts(leftBottom.value, newValue)
})

onMounted(() => {
  setupEcharts(leftBottom.value, props.leftBottomEchartsData)
})
</script>

<style lang="scss" scoped>

</style>