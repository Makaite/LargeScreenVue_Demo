/*********************************
 * 
 * 通过scale适配
 * 
 ===============================*/

 import _ from 'lodash'
 import { onMounted, onUnmounted } from 'vue'
 import triggerScale from "./triggerScale"

const useScalePage = (option) => {
  const handleResize = _.throttle(() => {
    triggerScale(option)
  },100)

  onMounted(() => {
    triggerScale(option)
    window.onresize = () => handleResize()
  })

  onUnmounted(() => {
    window.onresize = () => handleResize()
  })
}

export default useScalePage
