/* js/zoom.js */
/* js/zoom.js - Pop-up: klik foto atau kartu untuk memperbesar. */

(function(){
  const z = document.getElementById('zoom'), isi = document.getElementById('zoomIsi');
  function tutup(){ z.classList.remove('buka'); isi.innerHTML = ''; document.body.style.overflow = ''; }
  function buka(el){
    const c = el.cloneNode(true);
    c.classList.remove('tunggu'); c.removeAttribute('tabindex'); c.removeAttribute('role');
    c.querySelectorAll('img').forEach(i => i.removeAttribute('loading'));
    isi.innerHTML = ''; isi.appendChild(c);
    z.classList.add('buka'); document.body.style.overflow = 'hidden';
    z.querySelector('.tutup').focus();
  }
  document.querySelectorAll('.grid .kaca, .polaroid').forEach(el => {
    el.tabIndex = 0; el.setAttribute('role', 'button');
    el.addEventListener('click', () => buka(el));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); buka(el); } });
  });
  z.addEventListener('click', e => { if (e.target === z || e.target.classList.contains('tutup')) tutup(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') tutup(); });
})();
