/******************************
 * 
 * 适配的计算函数
 * 
============================ */

const triggerScale = (option) => {
  let targetX = option.targetX || 1920
  let targetY = option.targetY || 1080
  let targetRatio = option.targetRatio || 16 / 9

  let currentX = document.documentElement.clientWidth || document.body.clientWidth
  let currentY = document.documentElement.clientHeight || document.body.clientHeight

  let scaleRatio = currentX / targetX
  let currentRatio = currentX / currentY

  if(currentRatio > targetRatio) {
    scaleRatio = currentY / targetY
    document.body.style = `width:${targetX}px;height:${targetY}px;transform:scale(${scaleRatio}) translateX(-50%);left:50%;`
  } else {
    document.body.style = `width:${targetX}px;height:${targetY}px;transform:scale(${scaleRatio});`
  }
}

export default triggerScale
