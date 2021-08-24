(function () {
  window.onload = function () {
    drawImg ()
    drawScaling ()
    drawSlicing()
  }

  function drawImg () {
    const ctx = document.getElementById('demo13_image').getContext('2d')
    const img = new Image()
    img.onload = function (){
      // 添加图片
      ctx.drawImage(img,0,0)
      ctx.beginPath()
      ctx.moveTo(30,96)
      ctx.lineTo(70,66)
      ctx.lineTo(103,76)
      ctx.lineTo(170,15)
      ctx.stroke()
    }
    img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png'
  }

  function drawScaling () {
    const ctx = document.getElementById('demo13_scaling').getContext('2d')
    const img = new Image()
    img.onload = function(){
      for (var i=0;i<4;i++){
        for (var j=0;j<3;j++){
          ctx.drawImage(img,j*50,i*38,50,38)
        }
      }
    };
    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
  }

  function drawSlicing () {
    const canvas = document.getElementById('demo13_slicing')
    const ctx = canvas.getContext('2d')

    // Draw slice
    ctx.drawImage(document.getElementById('source'),
                  33,71,104,124,21,20,87,104)

    // Draw frame
    ctx.drawImage(document.getElementById('frame'),0,0)
  }
})()