(function () {
  window.onload = function () {
    drawState()
    drawTranslating()
    drawRotating()
    drawScale()
    drawTransforms()
  }

  /**
   * save类似缓存一步属性设置，在restore中获取缓存的状态。是个栈结构，获取后就弹出
   * 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, 
   * lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, 
   * font, textAlign, textBaseline, direction, imageSmoothingEnabled
   */
  function drawState () {
    const ctx = document.getElementById('demo15_state').getContext('2d')

    ctx.fillRect(0,0,150,150)   // 使用默认设置绘制一个矩形
    ctx.save()                  // 保存默认状态

    ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
    ctx.fillRect(15,15,120,120)  // 使用新的设置绘制一个矩形

    ctx.save()                   // 保存当前状态
    ctx.fillStyle = '#FFF'       // 再次改变颜色配置
    ctx.globalAlpha = 0.5
    ctx.fillRect(30,30,90,90)    // 使用新的配置绘制一个矩形

    ctx.restore()               // 重新加载之前的颜色状态
    ctx.fillRect(45,45,60,60)   // 使用上一次的配置绘制一个矩形

    ctx.restore()               // 加载默认颜色配置
    ctx.fillRect(60,60,30,30)   // 使用加载的配置绘制一个矩形
  }

  /**
   * 多个矩形都创建在(0, 0)位置，用translate进行位置移动，省去fillRect位置计算
   */
  function drawTranslating () {
    const ctx = document.getElementById('demo15_translating').getContext('2d')
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.save()
        ctx.fillStyle = `rgb(${(51 * i)},${(255 - 51 * i)}, 255)`
        ctx.translate(10 + j * 50, 10 + i * 50)
        ctx.fillRect(0, 0, 25, 25)
        ctx.restore()
      }
    }
  }

  function drawRotating () {
    const ctx = document.getElementById('demo15_rotating').getContext('2d')
    ctx.translate(75, 75)
    for (let i = 1; i < 6; i++) {
      ctx.save()
      ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`
      for (let j = 0; j < i * 6; j++) {
        ctx.beginPath()
        ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true)
        // 形成圈的关键代码
        ctx.rotate(Math.PI * 2 / (i * 6))
        ctx.fill()
      }
      ctx.restore()
    }
  }

  /**
   * 增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大
   */
  function drawScale () {
    const ctx = document.getElementById('demo15_scale').getContext('2d')

    // draw a simple rectangle, but scale it.
    ctx.save()
    ctx.scale(10, 3)
    ctx.fillRect(1, 10, 10, 10)
    ctx.restore()

    // mirror horizontally
    // 沿y轴翻转
    ctx.scale(-1, 1)
    ctx.font = '48px serif'
    ctx.fillText('MDN', -135, 120)
  }

  function drawTransforms () {
    const ctx = document.getElementById('demo15_transforms').getContext('2d')
    const sin = Math.sin(Math.PI / 6)
    const cos = Math.cos(Math.PI / 6)
    ctx.translate(100, 100)
    let c = 0
    for (let i = 0; i < 12; i++) {
      c = Math.floor(255 / 12 * i)
      ctx.fillStyle = `rgb(${c}, ${c}, ${c})`
      ctx.fillRect(0, 0, 100, 10)
      ctx.transform(cos, sin, -sin, cos, 0, 0)
    }
    ctx.setTransform(-1, 0, 0, 1, 100, 100)
    ctx.fillStyle = 'rgba(255, 128, 255, 0.5)'
    ctx.fillRect(0, 50, 100, 100)
  }
})()