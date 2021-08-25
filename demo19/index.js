(function () {
  window.onload = function () {
    let raf
    const canvas = document.getElementById('demo19')
    const ctx = canvas.getContext('2d')
    const ball = {
      x: 100,
      y: 100,
      vx: 5,
      vy: 2,
      radius: 25,
      color: 'blue',
      draw: function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, true)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    function draw () {
      clear()
      ball.draw()
      
      // 第二步，给球位移增加边界，到达边界后反向移动
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx
      }
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy
      }

      // 第三步，逐帧减少垂直方向的速度，所以小球最终将只会在地板上弹跳
      ball.vy *= .99
      ball.vy += .25

      // 第一步，给球添加位移动画，但是没有边界，会超出画布
      ball.x += ball.vx
      ball.y += ball.vy
      
      raf = window.requestAnimationFrame(draw)
    }

    function clear () {
      // ctx.clearRect(0, 0, canvas.width, canvas.height)
      // 第四步，长尾效果，用有透明度的fillRect替代clearRect
      ctx.fillStyle = 'rgba(255,255,255,0.3)'
      ctx.fillRect(0,0,canvas.width,canvas.height)
    }

    canvas.addEventListener('mouseover', function (e) {
      raf = window.requestAnimationFrame(draw)
    })
    
    canvas.addEventListener('mouseout', function(){
      window.cancelAnimationFrame(raf)
    })

    ball.draw()
  }
})()