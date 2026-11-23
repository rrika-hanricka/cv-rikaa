/* js/video.js */
/* js/video.js - Video latar HANYA untuk bagian Idol. Diputar saat bagian Idol terlihat dan dijeda saat tidak. */

(function(){
  const v = document.querySelector('#idol .idol-bg video');
  if (!v) return;
  if (kurangiGerak) { v.pause(); return; }
  new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
  }), {threshold:.05}).observe(document.getElementById('idol'));
})();
