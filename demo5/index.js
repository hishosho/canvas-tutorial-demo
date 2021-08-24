(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo5')
    const ctx = canvas.getContext('2d')

    const radius = 20,
          startAngle = 0

    let x,
        y,
        endAngle,
        anticlockwise

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath()
        x = 25 + j * 50
        y = 25 + i * 50
        endAngle = Math.PI +  (Math.PI * j) / 2
        anticlockwise = i % 2 == 0 ? false : true
        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
        i > 1 ? ctx.fill() : ctx.stroke()
      }
    }
  }
})()