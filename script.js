// Mobile menu
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

// Publication tabs
document.querySelectorAll('.tabs button').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(t => t.setAttribute('aria-selected', t === tab));
    document.querySelectorAll('.pubs').forEach(l => (l.hidden = l.id !== tab.dataset.tab));
  });
});

// Active nav link
const anchors = [...links.querySelectorAll('a[href^="#"]')];
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
anchors.forEach(a => {
  const s = document.querySelector(a.getAttribute('href'));
  if (s) io.observe(s);
});
