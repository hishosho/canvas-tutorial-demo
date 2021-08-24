(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas1 = document.getElementById('demo6q')
    const ctx1 = canvas1.getContext('2d')

    // 二次贝塞尔曲线
    ctx1.beginPath()
    
    ctx1.moveTo(75, 25)
    ctx1.quadraticCurveTo(25, 25, 25, 62.5)
    ctx1.quadraticCurveTo(25, 100, 50, 100)
    ctx1.quadraticCurveTo(50, 120, 30, 125)
    ctx1.quadraticCurveTo(60, 120, 65, 100)
    ctx1.quadraticCurveTo(125, 100, 125, 62.5)
    ctx1.quadraticCurveTo(125, 25, 75, 25)
    ctx1.stroke()

    const canvas2 = document.getElementById('demo6b')
    const ctx2 = canvas2.getContext('2d')

    // 三次贝塞尔曲线
    ctx2.beginPath()
    ctx2.moveTo(75, 40)
    ctx2.bezierCurveTo(75, 37, 70, 25, 50, 25)
    ctx2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
    ctx2.bezierCurveTo(20, 80, 40, 102, 75, 120)
    ctx2.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
    ctx2.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
    ctx2.bezierCurveTo(85, 25, 75, 37, 75, 40)
    ctx2.fill()

  }
})()