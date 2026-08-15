// Loads the Vektr design system. Paths resolve relative to this file, so the app
// works at a domain root or in a sub-folder (e.g. GitHub Pages project sites).
(() => {
  const here = (document.currentScript && document.currentScript.src) || location.href;
  const base = new URL('ds/vektr/', here).href;
  for (const p of ["tokens/fonts.css","tokens/fig-tokens.css","tokens/typography.css","tokens/elevation.css","tokens/base.css","styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + 'bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
