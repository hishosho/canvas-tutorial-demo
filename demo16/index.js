(function () {
  window.onload = function () {
    draw ()
  }

  function draw () {
    const ctx = document.getElementById('demo16').getContext('2d')
    ctx.fillRect(0, 0, 200, 200)
    ctx.translate(100, 100)

    // Create a circular clipping path
    ctx.beginPath()
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true)
    ctx.clip()

    // draw background
    const lingrad = ctx.createLinearGradient(0,-100,0,100)
    lingrad.addColorStop(0, '#232256')
    lingrad.addColorStop(1, '#143778')

    // 蓝色填满矩形，因为ctx.translate(100, 100)， 所以要移动回去
    ctx.fillStyle = lingrad
    ctx.fillRect(-100,-100,200,200)

    for (let j=1; j<50; j++){
      ctx.save()
      ctx.fillStyle = '#fff'
      ctx.translate(100-Math.floor(Math.random()*150),
                    100-Math.floor(Math.random()*150))
      drawStar(ctx,Math.floor(Math.random()*4)+2)
      ctx.restore()
    }
  }

  function drawStar (ctx, r) {
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(r, 0)
    for (let i = 0; i < 9; i++) {
      ctx.rotate(Math.PI / 5)
      if (i % 2 === 0) {
        ctx.lineTo((r / 0.525731)*0.200811, 0)
      } else {
        ctx.lineTo(r, 0)
      }
    }
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }

})()