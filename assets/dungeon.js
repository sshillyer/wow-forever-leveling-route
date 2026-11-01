// Renders a dungeon page from window.DUNGEON (set by each page before this script loads).
// Item "t" codes: armor cloth|leather|mail|plate, shield, offhand (held in off hand), neck|finger|trinket|back|bag,
// weapons dagger|fist|sword1h|sword2h|axe1h|axe2h|mace1h|mace2h|staff|polearm|bow|gun|crossbow|thrown|wand.
(function () {
  const D = window.DUNGEON;
  const WH = 'https://www.wowhead.com/forever/';

  const CLASSES = [
    { n: 'Warrior', c: '#C69B6D' }, { n: 'Paladin', c: '#F48CBA' }, { n: 'Hunter', c: '#AAD372' },
    { n: 'Rogue', c: '#d9c84a' }, { n: 'Priest', c: '#9a9a9a' }, { n: 'Shaman', c: '#2a8cff' },
    { n: 'Mage', c: '#3FC7EB' }, { n: 'Warlock', c: '#8788EE' }, { n: 'Druid', c: '#FF7C0A' }
  ];
  // What each class would reasonably want. Leans generous: armor a class can wear and might use
  // while leveling, every weapon type it can equip, and jewelry/cloaks for everyone.
  const ALL = ['neck', 'finger', 'trinket', 'back', 'bag', 'misc'];
  const USE = {
    Warrior: ['leather', 'mail', 'plate', 'shield', 'dagger', 'fist', 'sword1h', 'sword2h', 'axe1h', 'axe2h', 'mace1h', 'mace2h', 'staff', 'polearm', 'bow', 'gun', 'crossbow', 'thrown'],
    Paladin: ['cloth', 'leather', 'mail', 'plate', 'shield', 'offhand', 'sword1h', 'sword2h', 'axe1h', 'axe2h', 'mace1h', 'mace2h', 'polearm'],
    Hunter: ['leather', 'mail', 'dagger', 'fist', 'sword1h', 'sword2h', 'axe1h', 'axe2h', 'staff', 'polearm', 'bow', 'gun', 'crossbow', 'thrown'],
    Rogue: ['leather', 'dagger', 'fist', 'sword1h', 'mace1h', 'bow', 'gun', 'crossbow', 'thrown'],
    Priest: ['cloth', 'offhand', 'dagger', 'mace1h', 'staff', 'wand'],
    Shaman: ['cloth', 'leather', 'mail', 'shield', 'offhand', 'dagger', 'fist', 'axe1h', 'axe2h', 'mace1h', 'mace2h', 'staff'],
    Mage: ['cloth', 'offhand', 'dagger', 'sword1h', 'staff', 'wand'],
    Warlock: ['cloth', 'offhand', 'dagger', 'sword1h', 'staff', 'wand'],
    Druid: ['cloth', 'leather', 'offhand', 'dagger', 'fist', 'mace1h', 'mace2h', 'staff']
  };
  const TYPE = {
    cloth: 'Cloth', leather: 'Leather', mail: 'Mail', plate: 'Plate', shield: 'Shield', offhand: 'Held in off hand',
    neck: 'Neck', finger: 'Ring', trinket: 'Trinket', back: 'Cloak', bag: 'Container', misc: 'Other',
    dagger: 'Dagger', fist: 'Fist weapon', sword1h: 'One-hand sword', sword2h: 'Two-hand sword', axe1h: 'One-hand axe', axe2h: 'Two-hand axe',
    mace1h: 'One-hand mace', mace2h: 'Two-hand mace', staff: 'Staff', polearm: 'Polearm', bow: 'Bow', gun: 'Gun', crossbow: 'Crossbow', thrown: 'Thrown', wand: 'Wand'
  };

  let cls = '', fac = 'Horde';
  try { const s = JSON.parse(localStorage.getItem('route-filters') || '{}'); if (s.cls) cls = s.cls; if (s.fac) fac = s.fac; } catch (e) {}

  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const slug = s => s.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const search = q => `${WH}search?q=${encodeURIComponent(q)}`;
  // Stat profile from the item's stat lines: physical (Str/Agi/AP), caster (Int/Spi/spell power/mp5), or neutral.
  const PHYS = /Strength|Agility|Attack Power/i, CAST = /Intellect|Spirit|spells|healing|mana per 5/i;
  const profile = it => { const t = (it.s || []).join(' '); const p = PHYS.test(t), c = CAST.test(t); return p && !c ? 'phys' : c && !p ? 'cast' : 'any'; };
  const WANTS = { Warrior: 'phys', Rogue: 'phys', Hunter: 'phys', Mage: 'cast', Warlock: 'cast', Priest: 'cast' };
  const statOk = it => { const w = WANTS[cls], pr = profile(it); return !w || pr === 'any' || pr === w; };
  // Hunters and Shamans learn Mail, and Warriors and Paladins learn Plate, at level 40.
  // Below that, hide those pieces for them (dungeon default level used when an item has none).
  const LEARN = { mail: { Hunter: 40, Shaman: 40 }, plate: { Warrior: 40, Paladin: 40 } };
  const levelOk = it => { const need = (LEARN[it.t] || {})[cls]; return !need || (it.req || D.req || 0) >= need; };
  const usable = it => !cls || ((ALL.includes(it.t) || USE[cls].includes(it.t)) && statOk(it) && levelOk(it));
  const typeLabel = it => (it.slot ? `${TYPE[it.t] || it.t} · ${it.slot}` : (TYPE[it.t] || it.t));

  const ITEMS = [];
  function itemLink(it) {
    const k = ITEMS.push(it) - 1;
    return it.id
      ? `<a class="q${it.q || 1}" data-tt="${k}" href="${WH}item=${it.id}/${slug(it.n)}" target="_blank" rel="noopener">${esc(it.n)}</a>`
      : `<span class="nolink">${esc(it.n)}</span> <a class="find" href="${search(it.n)}" target="_blank" rel="noopener" title="Search Wowhead for ${esc(it.n)}">search ↗</a>`;
  }
  function itemList(items) {
    const shown = items.filter(usable);
    if (!items.length) return '<p class="none">Experience only.</p>';
    if (!shown.length) return `<p class="none">Nothing here for a ${esc(cls)}.</p>`;
    return `<ul class="items">${shown.map(it => `<li>${itemLink(it)}<span class="ty">${esc(typeLabel(it))}</span></li>`).join('')}</ul>`;
  }
  const npc = (name, where, id) => (id
    ? `<a href="${WH}npc=${id}/${slug(name)}" target="_blank" rel="noopener">${esc(name)}</a>`
    : `<span class="nolink">${esc(name)}</span>`) + (where ? `, ${esc(where)}` : '');

  function render() {
    ITEMS.length = 0;
    // filters
    document.getElementById('f-class').innerHTML =
      `<span class="lbl">Class</span><button type="button" class="chip noicon" data-cls="" aria-pressed="${!cls}">All</button>` +
      CLASSES.map(c => `<button type="button" class="chip" style="--cc:${c.c}" data-cls="${c.n}" aria-pressed="${cls === c.n}">` +
        `${window.CLASS_ICONS && CLASS_ICONS[c.n] ? `<img src="${CLASS_ICONS[c.n]}" alt="">` : ''}${c.n}</button>`).join('');
    document.getElementById('f-fac').innerHTML =
      `<span class="lbl">Quests</span>` + ['Horde', 'Alliance', 'Both'].map(f =>
        `<button type="button" class="chip noicon" data-fac="${f}" aria-pressed="${fac === f}">${f}</button>`).join('');

    // quests
    const qs = D.quests.filter(q => fac === 'Both' || q.f === fac);
    document.getElementById('quests').innerHTML = qs.map(q => `<article class="card">
      <h3><a href="${WH}quest=${q.id}/${slug(q.n)}" target="_blank" rel="noopener">${esc(q.n)}</a>
        ${fac === 'Both' ? `<span class="fac ${q.f}">${q.f}</span>` : ''}${q.lv ? `<span class="qlv">level ${q.qlv || '?'} · req. ${q.lv}</span>` : ''}</h3>
      <p class="sub giver">${q.giver ? `From ${npc(q.giver, q.where, q.giverId)}` : esc(q.start)}</p>
      ${q.turnin ? `<p class="sub">Turn in: ${npc(q.turnin, q.turninWhere, q.turninId)}</p>` : ''}
      <p>${esc(q.obj)}</p>
      ${itemList(q.rewards)}
    </article>`).join('');

    // bosses
    document.getElementById('bosses').innerHTML = D.bosses.map((b, i) => `<article class="card">
      <h3>${b.id ? `<a class="boss" href="${WH}npc=${b.id}/${slug(b.n)}" target="_blank" rel="noopener">${esc(b.n)}</a>` : esc(b.n)}${b.final ? '<span class="final">Final boss</span>' : ''}</h3>
      ${b.note ? `<p class="sub">${esc(b.note)}</p>` : ''}
      ${itemList(b.loot)}
      ${b.also ? `<p class="sub">Also drops: ${b.also.filter(usable).map(itemLink).join(', ') || '—'}</p>` : ''}
    </article>`).join('');

    // Wowhead re-scan after re-render (only exists when the tooltip script loaded)
    if (window.$WowheadPower && $WowheadPower.refreshLinks) $WowheadPower.refreshLinks();
  }

  // Built-in tooltip for places where Wowhead's script can't load (e.g. a Claude artifact).
  const tip = document.createElement('div');
  tip.className = 'tt'; tip.hidden = true; tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);
  function showTip(a) {
    if (document.documentElement.classList.contains('wh-on')) return;
    const it = ITEMS[+a.dataset.tt]; if (!it) return;
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

  document.addEventListener('click', e => {
    const c = e.target.closest('[data-cls]'), f = e.target.closest('[data-fac]');
    if (!c && !f) return;
    if (c) cls = c.dataset.cls; if (f) fac = f.dataset.fac;
    try { localStorage.setItem('route-filters', JSON.stringify({ cls, fac })); } catch (err) {}
    render();
  });
  render();
})();
