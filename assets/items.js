// Shared helpers for Wowhead links and the built-in item tooltip. Used by the route overview and dungeon pages.
(function () {
  const WH = 'https://www.wowhead.com/forever/';
  const TYPE = {
    cloth: 'Cloth', leather: 'Leather', mail: 'Mail', plate: 'Plate', shield: 'Shield', offhand: 'Held in off hand',
    neck: 'Neck', finger: 'Ring', trinket: 'Trinket', back: 'Cloak', bag: 'Container', misc: 'Other',
    dagger: 'Dagger', fist: 'Fist weapon', sword1h: 'One-hand sword', sword2h: 'Two-hand sword', axe1h: 'One-hand axe', axe2h: 'Two-hand axe',
    mace1h: 'One-hand mace', mace2h: 'Two-hand mace', staff: 'Staff', polearm: 'Polearm', bow: 'Bow', gun: 'Gun', crossbow: 'Crossbow', thrown: 'Thrown', wand: 'Wand'
  };
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const slug = s => s.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const search = q => `${WH}search?q=${encodeURIComponent(q)}`;
  const ITEMS = [];

  function itemLink(it) {
    const k = ITEMS.push(it) - 1;
    return it.id
      ? `<a class="q${it.q || 1}" data-tt="${k}" href="${WH}item=${it.id}/${slug(it.n)}" target="_blank" rel="noopener">${esc(it.n)}</a>`
      : `<span class="nolink">${esc(it.n)}</span> <a class="find" href="${search(it.n)}" target="_blank" rel="noopener" title="Search Wowhead for ${esc(it.n)}">search ↗</a>`;
  }
  const questLink = q => `<a href="${WH}quest=${q.id}/${slug(q.n)}" target="_blank" rel="noopener">${esc(q.n)}</a>`;
  const npcLink = (name, id, cls) => id
    ? `<a${cls ? ` class="${cls}"` : ''} href="${WH}npc=${id}/${slug(name)}" target="_blank" rel="noopener">${esc(name)}</a>`
    : `<span class="nolink">${esc(name)}</span>`;
  function refresh() { if (window.$WowheadPower && $WowheadPower.refreshLinks) $WowheadPower.refreshLinks(); }

  // Built-in tooltip for places where Wowhead's script can't load (e.g. a Claude artifact).
  const tip = document.createElement('div');
  tip.className = 'tt'; tip.hidden = true; tip.setAttribute('role', 'tooltip');
  function showTip(a) {
    if (document.documentElement.classList.contains('wh-on')) return;
    const it = ITEMS[+a.dataset.tt]; if (!it) return;
    if (!tip.isConnected) document.body.appendChild(tip);
    tip.innerHTML = `<b class="q${it.q || 1}">${esc(it.n)}</b>` +
      (it.ilvl ? `<span class="tl">Item Level ${it.ilvl}</span>` : '') +
      `<span class="tr"><span>${esc(it.slot || '')}</span><span>${esc(TYPE[it.t] || '')}</span></span>` +
      (it.dmg ? `<span>${esc(it.dmg)}</span>` : '') +
      (it.s || []).map(x => `<span class="${/^(Equip|Use|Chance)/.test(x) ? 'tg' : ''}">${esc(x)}</span>`).join('');
    tip.hidden = false;
    const r = a.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    let x = Math.min(r.left, innerWidth - w - 12), y = r.bottom + 6;
    if (y + h > innerHeight - 8) y = r.top - h - 6;
    tip.style.left = Math.max(8, x) + 'px'; tip.style.top = Math.max(8, y) + 'px';
  }
  const hideTip = () => { tip.hidden = true; };
  document.addEventListener('mouseover', e => { const a = e.target.closest('a[data-tt]'); if (a) showTip(a); });
  document.addEventListener('mouseout', e => { if (e.target.closest('a[data-tt]')) hideTip(); });
  document.addEventListener('focusin', e => { const a = e.target.closest('a[data-tt]'); a ? showTip(a) : hideTip(); });
  addEventListener('scroll', hideTip, { passive: true });

  window.WHI = { WH, TYPE, esc, slug, search, ITEMS, itemLink, questLink, npcLink, refresh };
})();
