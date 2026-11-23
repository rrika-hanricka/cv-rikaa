/* js/bintang.js */
/* js/bintang.js - Bintang bertaburan di sekitar kursor. */

(function(){
  if (kurangiGerak) return;
  const cv = document.getElementById('bintang'), cx = cv.getContext('2d');
  let w, h, p = [], raf = 0, last = 0;
  const warna = ['255,215,220','240,163,174','255,255,255','224,86,107'];
  function ukuran(){ w = cv.width = innerWidth; h = cv.height = innerHeight; }
  function tambah(x, y){
    for (let i = 0; i < 2; i++) p.push({x, y, vx:(Math.random()-.5)*1.4, vy:Math.random()*.8+.2,
      s:3+Math.random()*5, l:1, r:Math.random()*6.28, c:warna[Math.floor(Math.random()*warna.length)]});
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function loop(){
    cx.clearRect(0, 0, w, h);
    p = p.filter(a => a.l > 0);
    for (const a of p){
      a.x += a.vx; a.y += a.vy; a.vy += .02; a.l -= .018; a.r += .04;
      cx.fillStyle = 'rgba(' + a.c + ',' + Math.max(a.l, 0) + ')';
      cx.save(); cx.translate(a.x, a.y); cx.rotate(a.r); cx.beginPath();
      for (let k = 0; k < 8; k++){ const rad = k % 2 ? a.s*.4 : a.s, t = k*.7854; cx.lineTo(Math.cos(t)*rad, Math.sin(t)*rad); }
      cx.closePath(); cx.fill(); cx.restore();
    }
    if (p.length) raf = requestAnimationFrame(loop); else { raf = 0; cx.clearRect(0, 0, w, h); }
  }
  addEventListener('resize', ukuran); ukuran();
  addEventListener('pointermove', e => { const n = performance.now(); if (n - last > 25){ last = n; tambah(e.clientX, e.clientY); } });
})();
