/* js/menu.js */
/* js/menu.js - Menandai menu yang sedang aktif. */

(function(){
  const links = document.querySelectorAll('nav a');
  const ob = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('aktif', l.getAttribute('href') === '#' + e.target.id));
  }), {rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('main section').forEach(s => ob.observe(s));
})();
