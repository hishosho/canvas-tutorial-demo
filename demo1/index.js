
(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo1')
    const ctx = canvas.getContext('2d')

    // 这两行顺序颠倒，颜色不生效 
    ctx.fillStyle = 'rgb(200,0,0)'
    ctx.fillRect(10, 10, 50, 55)

    // 带透明度
    ctx.fillStyle = 'rgba(0,0,200, 0.5)'
    ctx.fillRect(30, 30, 50, 55)
    
  }
})()