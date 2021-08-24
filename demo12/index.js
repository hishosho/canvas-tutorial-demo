(function () {
  window.onload = function () {
    const ctx = document.getElementById('demo12').getContext('2d')
    ctx.font = '48px serif'
    // 实心
    ctx.fillText('Hello world', 10, 50)
    // 空心
    ctx.strokeText("Hello world", 10, 50)
    const text = ctx.measureText("foo")
    console.log(text.width)
  }
})()