(function () {
  window.onload = function () {
    const sun = new Image()
    const moon = new Image()
    const earth = new Image()

    function init () {
      sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
      moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
      earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
      window.requestAnimationFrame(draw)
    }

    function draw () {
      const ctx = document.getElementById('demo17').getContext('2d')

      // 图片合并：在现有的画布内容后面绘制新的图形
      ctx.globalCompositeOperation = 'destination-over'
      // 重新绘制图画前要先清空画布
      ctx.clearRect(0, 0, 600, 600)

      // 设置透明度防止遮盖
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.strokeStyle = 'rgba(0,153,255,0.4)'
      // save是保存之前的语句为默认状态
      ctx.save()
      ctx.translate(300, 300)

      // 地球
      // 计算旋转角度
      const time = new Date()
      ctx.rotate( ((2 * Math.PI) / 60) * time.getSeconds() + ((2 *  Math.PI) / 60000) * time.getMilliseconds())
      ctx.translate(105, 0)
      // 地球的北向太阳的阴影
      ctx.fillRect(0, -12, 50, 24)
      ctx.drawImage(earth, -12, -12)

      // 月球
      ctx.save()
      ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds())
      ctx.translate(0, 28.5)
      ctx.drawImage(moon, -3.5, -3.5)

      ctx.restore()

      ctx.restore()

      ctx.beginPath()
      ctx.arc(300,300,105,0,Math.PI * 2,false)
      ctx.stroke()
    
      ctx.drawImage(sun, 0, 0, 600, 600)
    
      window.requestAnimationFrame(draw)
    }

    init()
  }
})()