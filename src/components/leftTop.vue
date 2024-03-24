<template>
  <div ref="leftTop" :style="{width: width, height: height}"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import setupEcharts from '@/hooks/leftTop.js';

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  leftTopEchartsData: {
    type: Array,
    default: () => []
  }
})

let leftTop = ref(null)

watch(() => props.leftTopEchartsData, (newValue, oldValue) => {
  setupEcharts(leftTop.value, newValue)
})

onMounted(() => {
  setupEcharts(leftTop.value, props.leftTopEchartsData)
})
</script>

<style lang="scss" scoped></style>