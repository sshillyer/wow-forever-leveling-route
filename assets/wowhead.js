// Loads Wowhead's hover tooltips where the page is allowed to run outside scripts.
// On GitHub Pages (or a local copy) every link to wowhead.com/forever/item=…, quest=… or npc=…
// gets a tooltip. Elsewhere (for example a Claude artifact, which blocks outside scripts)
// nothing is loaded and the links stay plain links that open Wowhead.
(function () {
  var host = location.hostname;
  var allowed = location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || /\.github\.io$/.test(host);
  if (!allowed) return;
  window.whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: false };
  var s = document.createElement('script');
  s.src = 'https://wow.zamimg.com/js/tooltips.js';
  s.async = true;
  document.head.appendChild(s);
  document.documentElement.classList.add('wh-on');
})();
