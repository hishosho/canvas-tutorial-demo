(function () {
  window.onload = function () {
    draw()
  }

  function draw () {
    const canvas = document.getElementById('demo2')
    const ctx = canvas.getContext('2d')

    // 实心矩形：函数绘制了一个边长为100px的黑色正方形。
    ctx.fillRect(25, 25, 100, 100)
    // 空白矩形：函数从正方形的中心开始擦除了一个60*60px的正方形
    ctx.clearRect(45, 45, 60, 60)
    // 有边框的空心矩形：在清除区域内生成一个50*50的正方形边框
    ctx.strokeRect(50, 50, 50, 50)

  }
})()