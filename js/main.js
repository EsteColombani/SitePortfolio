document.addEventListener('DOMContentLoaded', () => {
  const selectors = [
    '.presentation',
    '.formation',
    '.formation-item',
    '.passion',
    '.competence-column',
    '.projets-section'
  ];

  const elements = selectors.flatMap((sel) => Array.from(document.querySelectorAll(sel)));
  elements.forEach((el) => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
