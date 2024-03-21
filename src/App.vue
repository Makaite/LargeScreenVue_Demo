<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import useScalePage from './hooks/useScalePage';

let option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9
}
useScalePage(option)
</script>

<style lang="scss" scoped>
</style>