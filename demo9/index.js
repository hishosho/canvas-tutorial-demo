(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo9')
    const ctx = canvas.getContext('2d')

    // fillStyle
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`
        ctx.fillRect(j * 25, i * 25, 25, 25)
      }
    }

    // strokeStyle
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)})`
        ctx.beginPath()
        ctx.arc(200+j*25,12.5+i*25,10,0,Math.PI*2,true)
        ctx.stroke()
      }
    }

    // Transparency
    // globalAlpha
    // 画背景
    ctx.fillStyle = '#FD0'
    ctx.fillRect(0,200,75,75)
    ctx.fillStyle = '#6C0'
    ctx.fillRect(75,200,75,75)
    ctx.fillStyle = '#09F'
    ctx.fillRect(0,275,75,75)
    ctx.fillStyle = '#F30'
    ctx.fillRect(75,275,75,75)
    ctx.fillStyle = '#FFF'

    // 给圆设置透明度值
    ctx.globalAlpha = 0.2

    // 画圆
    for (let i=0; i<7; i++){
        ctx.beginPath()
        ctx.arc(75,275,10+10*i,0,Math.PI*2,true)
        ctx.fill()
    }

    // 还原透明度
    ctx.globalAlpha = 1
    // rgba
    // 画背景
    ctx.fillStyle = 'rgb(255,221,0)'
    ctx.fillRect(190,200.5,150,37.5)
    ctx.fillStyle = 'rgb(102,204,0)'
    ctx.fillRect(190,238,150,37.5)
    ctx.fillStyle = 'rgb(0,153,255)'
    ctx.fillRect(190,275.5,150,37.5)
    ctx.fillStyle = 'rgb(255,51,0)'
    ctx.fillRect(190,313.5,150,37.5)

    // 画半透明矩形
    for (let i=0;i<10;i++){
      ctx.fillStyle = `rgba(255,255,255,${(i+1)/10})`
      for (let j=0;j<4;j++){
        ctx.fillRect(195+i*14,207+j*37.5,14,27.5)
      }
    }
  }
})()