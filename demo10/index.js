(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo10')
    const ctx = canvas.getContext('2d')

    // lineCap
    const lineCap = ['butt','round','square']
    // 创建路径
    ctx.strokeStyle = '#09f'
    ctx.beginPath()
    ctx.moveTo(10,10)
    ctx.lineTo(140,10)
    ctx.moveTo(10,140)
    ctx.lineTo(140,140)
    ctx.stroke()

    // 画线条
    ctx.strokeStyle = 'black'
    for (var i=0;i<lineCap.length;i++){
      ctx.lineWidth = 15
      ctx.lineCap = lineCap[i]
      ctx.beginPath()
      ctx.moveTo(25+i*50,10)
      ctx.lineTo(25+i*50,140)
      ctx.stroke()
    }

    // lineJoin
    const lineJoin = ['round', 'bevel', 'miter']
    ctx.lineWidth = 10
    for (let i = 0; i < lineJoin.length; i++) {
      ctx.lineJoin = lineJoin[i]
      ctx.beginPath()
      ctx.moveTo(200, 5 + i * 40)
      ctx.lineTo(240, 45 + i * 40)
      ctx.lineTo(280, 5 + i * 40)
      ctx.lineTo(320, 45 + i * 40)
      ctx.lineTo(360, 5 + i * 40)
      ctx.stroke()
    }

    // miterLimit
     // 绘制参考线
    ctx.strokeStyle = '#09f'
    ctx.lineWidth = 2
    ctx.strokeRect(-5, 200, 160, 50)

    // 设置线条样式
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 10

    ctx.miterLimit = 1

    // 绘制线条
    ctx.beginPath()
    ctx.moveTo(0, 100)
    for (let i = 0; i < 24; i++) {
      let dy = i % 2 == 0 ? 25 : -25
      ctx.lineTo(Math.pow(i, 1.5) * 2, 225 + dy)
    }
    ctx.stroke()
  }
})()