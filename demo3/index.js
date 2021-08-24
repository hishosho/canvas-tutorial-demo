(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo3')
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(75, 50)
    ctx.lineTo(100, 75)
    ctx.lineTo(100, 25)
    // 边框
    ctx.stroke()

    // 填充 （注释最后两行，放开ctx.fill()，查看区别）
    // ctx.fill()
  }
})()