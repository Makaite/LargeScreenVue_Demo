import * as echarts from 'echarts';
import { onUnmounted } from 'vue'

const useEcharts = (el) => {
  const echartsInstance = echarts.init(el, null, { render: 'svg'})

  onUnmounted(() => {
    echartsInstance.dispose()
  })

  const setOption = (option) => {
    echartsInstance.setOption(option)
  }

  const resizeEcharts = () => {
    echartsInstance.resize()
  }

  return {
    echartsInstance,
    setOption,
    resizeEcharts
  }
}

export default useEcharts
