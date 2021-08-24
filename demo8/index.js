(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo8')
    const ctx = canvas.getContext('2d')

    const rectangle = new Path2D()
    rectangle.rect(10, 10, 50, 50)
    ctx.stroke(rectangle)

    const circle = new Path2D()
    circle.moveTo(125, 35)
    circle.arc(100, 35, 25, 0, 2 * Math.PI)
    ctx.fill(circle)

    let p = new Path2D('M10 80 h 80 v 80 h -80 Z')
    ctx.fill(p)
  }
})()