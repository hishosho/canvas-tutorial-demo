(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo4')
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    // 绘制一段圆弧路径， 圆弧路径的圆心在 (x, y) 位置，半径为 r ，
    // 根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
    // Math.PI * 2 = 360°
    // 绘制最外层的圆圈
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
    // 顺时针画嘴
    ctx.moveTo(110, 75)
    ctx.arc(75, 75, 35, 0, Math.PI, false)
    // 左眼
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
    ctx.moveTo(95, 65)
    // 右眼
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
    ctx.stroke()
    // 可以删除moveTo代码看效果
  }
})()