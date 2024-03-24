<template>
  <div ref="rightCenter" :style="{width: width, height: height}"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import setupEcharts from '@/hooks/rightCenter.js';

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  rightCenterEchartsData: {
    type: Array,
    default: () => []
  }
})

let rightCenter = ref(null)

watch(() => props.rightCenterEchartsData, (newValue, oldValue) => {
  setupEcharts(rightCenter.value, newValue)
})

onMounted(() => {
  setupEcharts(rightCenter.value, props.rightCenterEchartsData)
})
</script>

<style lang="scss" scoped>

</style>