(function () {
  window.onload = function () {
    
    function clock () {
     const now = new Date()
     const ctx = document.getElementById('demo18').getContext('2d')
     // 绘画时要注意保存(save)绘画状态与状态还原(restore)，
     // 只有这样才能保证在相同原点进行不同元素的绘制
     ctx.save()
     // 因为每帧都会渲染，所以每次都要清空画布
     ctx.clearRect(0, 0, 150, 150)
     ctx.translate(75, 75)
     ctx.scale(0.4, 0.4)
     ctx.rotate(-Math.PI / 2)
     ctx.strokeStyle = 'black'
     ctx.fillStyle = 'white'
     ctx.lineWidth = 8
     ctx.lineCap = 'round'

    // 画12个刻度
     ctx.save()
     for (let i = 0; i < 12; i++) {
      ctx.beginPath()
      ctx.rotate(Math.PI / 6)
      ctx.moveTo(100, 0)
      ctx.lineTo(120, 0)
      ctx.stroke()
     }
     ctx.restore()

    // 画每分钟的刻度
     ctx.save()
     ctx.lineWidth = 5
     for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath()
        ctx.moveTo(117, 0)
        ctx.lineTo(120, 0)
        ctx.stroke()
      }
      ctx.rotate(Math.PI / 30)
     }
     ctx.restore()

     const sec = now.getSeconds()
     const min = now.getMinutes()
     let hr = now.getHours()
     hr = hr > 12 ? hr - 12 : hr

     ctx.fillStyle = 'black'

     // 画时针
     ctx.save()
     ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI/21600) * sec)
     ctx.lineWidth = 14
     ctx.beginPath()
     ctx.moveTo(-20, 0)
     ctx.lineTo(80, 0)
     ctx.stroke()
     ctx.restore()

     // 画分针
     ctx.save()
     ctx.rotate((Math.PI / 30) * min + (Math.PI/1800) * sec)
     ctx.lineWidth = 10
     ctx.beginPath()
     ctx.moveTo(-20, 0)
     ctx.lineTo(112, 0)
     ctx.stroke()
     ctx.restore()

     // 画秒针
     ctx.save()
     ctx.rotate(sec * Math.PI/30)
     ctx.strokeStyle = '#D40000'
     ctx.fillStyle = '#D40000'
     ctx.lineWidth = 6
     ctx.beginPath()
     ctx.moveTo(-30,0)
     ctx.lineTo(83,0)
     ctx.stroke()
     ctx.beginPath()
     ctx.arc(0,0,10,0,Math.PI*2, true)
     ctx.fill()
     ctx.beginPath()
     ctx.arc(95,0,10,0,Math.PI*2, true)
     ctx.stroke()
     ctx.fillStyle = 'rgba(0,0,0,0)'
     ctx.arc(0,0,3,0,Math.PI*2, true)
     ctx.fill()
     ctx.restore()

     // 画最外层边框
     ctx.beginPath()
     ctx.lineWidth = 14
     ctx.strokeStyle = '#325FA2'
     ctx.arc(0,0,142,0,Math.PI*2,true)
     ctx.stroke()

     ctx.restore()

     window.requestAnimationFrame(clock)
   }
   window.requestAnimationFrame(clock)
  }
})()