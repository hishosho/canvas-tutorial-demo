(function () {
  let offset = 0
   window.onload = function () {
     // 虚线
     march()
 
     // 渐变
     gradient()
 
     // 径向渐变
     radgrad()
 
     // 图案
     pattern()
 
     // 阴影
     shadow()
 
     // 填充规则
     fill()
   }
 
   function draw() {
     let canvas = document.getElementById('demo11_Dash')
     let ctx = canvas.getContext('2d')
     ctx.clearRect(0,0, 120, 120)
     // 实线与虚线间距
     ctx.setLineDash([4, 2])
     // 动态设置偏移量
     ctx.lineDashOffset = -offset
     ctx.strokeRect(10,10, 100, 100)
   }
 
   function march() {
     offset++
     if (offset > 16) {
       offset = 0
     }
     draw()
     setTimeout(march, 20)
   }
 
   function gradient () {
     const canvas = document.getElementById('demo11_gradient')
     const ctx = canvas.getContext('2d')
     // Create gradients
     const lingrad = ctx.createLinearGradient(0,0,0,150)
     lingrad.addColorStop(0, '#00ABEB')
     lingrad.addColorStop(0.5, '#fff')
     lingrad.addColorStop(0.5, '#26C000')
     lingrad.addColorStop(1, '#fff')
 
     const lingrad2 = ctx.createLinearGradient(0,50,0,95)
     lingrad2.addColorStop(0.5, '#000')
     lingrad2.addColorStop(1, 'rgba(0,0,0,0)')
 
     // assign gradients to fill and stroke styles
     ctx.fillStyle = lingrad
     ctx.strokeStyle = lingrad2
 
     // draw shapes
     ctx.fillRect(10,10,130,130)
     ctx.strokeRect(50,50,50,50)
   }
 
   function radgrad () {
     const canvas = document.getElementById('demo11_radgrad')
     const ctx = canvas.getContext('2d')
 
     // 创建渐变
     const radgrad = ctx.createRadialGradient(45,45,10,52,50,30)
     radgrad.addColorStop(0, '#A7D30C')
     radgrad.addColorStop(0.9, '#019F62')
     radgrad.addColorStop(1, 'rgba(1,159,98,0)')
 
     const radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50)
     radgrad2.addColorStop(0, '#FF5F98')
     radgrad2.addColorStop(0.75, '#FF0188')
     radgrad2.addColorStop(1, 'rgba(255,1,136,0)')
 
     const radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40)
     radgrad3.addColorStop(0, '#00C9FF')
     radgrad3.addColorStop(0.8, '#00B5E2')
     radgrad3.addColorStop(1, 'rgba(0,201,255,0)')
 
     const radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90)
     radgrad4.addColorStop(0, '#F4F201')
     radgrad4.addColorStop(0.8, '#E4C700')
     radgrad4.addColorStop(1, 'rgba(228,199,0,0)')
 
     ctx.fillStyle = radgrad4
     ctx.fillRect(0,0,150,150)
     ctx.fillStyle = radgrad3
     ctx.fillRect(0,0,150,150)
     ctx.fillStyle = radgrad2
     ctx.fillRect(0,0,150,150)
     ctx.fillStyle = radgrad
     ctx.fillRect(0,0,150,150)
   }
 
   function pattern () {
     const ctx = document.getElementById('demo11_pattern').getContext('2d')
 
     // 创建新 image 对象，用作图案
     const img = new Image()
     img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png'
     img.onload = function() { 
       // 创建图案
       const ptrn = ctx.createPattern(img, 'repeat')
       ctx.fillStyle = ptrn
       ctx.fillRect(0, 0, 150, 150)
     }
   }
 
   function shadow () {
     const ctx = document.getElementById('demo11_shadow').getContext('2d')
     ctx.shadowOffsetX = 2
     ctx.shadowOffsetY = 2
     ctx.shadowBlur = 2
     ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
 
     ctx.font = '20px Times New Roman'
     ctx.fillStyle = 'Black'
     ctx.fillText('Sample String', 5, 30)
   }
 
   function fill () {
     const ctx = document.getElementById('demo11_fill').getContext('2d')
     ctx.beginPath()
     ctx.arc(50, 50, 30, 0, Math.PI*2, true)
     ctx.arc(50, 50, 15, 0, Math.PI*2, true)
     ctx.fill('evenodd')
   }
 })()