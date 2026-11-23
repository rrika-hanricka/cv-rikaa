/* js/reveal.js */
/* js/reveal.js - Elemen muncul halus saat digulir. */

(function(){
  const target = document.querySelectorAll('.kaca, .polaroid, h2, .sub');
  target.forEach(el => el.classList.add('tunggu'));
  const ob = new IntersectionObserver((es, o) => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('tampil'); o.unobserve(e.target);
      setTimeout(() => e.target.classList.remove('tunggu', 'tampil'), 800);   // kembalikan gaya asli (miring, hover)
    }
  }), {threshold:.15});
  target.forEach(el => ob.observe(el));
})();
