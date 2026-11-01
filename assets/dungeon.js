// Renders a dungeon page from window.DUNGEON_DATA[<body data-dungeon>], loaded from dungeons/<slug>.data.js.
// Item "t" codes: armor cloth|leather|mail|plate, shield, offhand (held in off hand), neck|finger|trinket|back|bag,
// weapons dagger|fist|sword1h|sword2h|axe1h|axe2h|mace1h|mace2h|staff|polearm|bow|gun|crossbow|thrown|wand.
(function () {
  const D = window.DUNGEON_DATA[document.body.dataset.dungeon];
  const { WH, TYPE, esc, slug, ITEMS, itemLink, questLink, npcLink } = window.WHI;

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

  let cls = '', fac = 'Horde';
  try { const s = JSON.parse(localStorage.getItem('route-filters') || '{}'); if (s.cls) cls = s.cls; if (s.fac) fac = s.fac; } catch (e) {}

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

  function itemList(items) {
    const shown = items.filter(usable);
    if (!items.length) return '<p class="none">Experience only.</p>';
    if (!shown.length) return `<p class="none">Nothing here for a ${esc(cls)}.</p>`;
    return `<ul class="items">${shown.map(it => `<li>${itemLink(it)}<span class="ty">${esc(typeLabel(it))}${it.pct ? ` · ${it.pct}%` : ''}</span></li>`).join('')}</ul>`;
  }
  const npc = (name, where, id) => npcLink(name, id) + (where ? `, ${esc(where)}` : '');

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
    const qs = D.quests.filter(q => fac === 'Both' || q.f === fac || q.f === 'Both');
    document.getElementById('quests').innerHTML = qs.map(q => `<article class="card">
      <h3>${questLink(q)}
        ${fac === 'Both' || q.f === 'Both' ? `<span class="fac ${q.f}">${q.f === 'Both' ? 'Both factions' : q.f}</span>` : ''}${q.lv ? `<span class="qlv">level ${q.qlv || '?'} · req. ${q.lv}</span>` : ''}</h3>
      <p class="sub giver">${q.giver ? `From ${npc(q.giver, q.where, q.giverId)}` : esc(q.start)}</p>
      ${q.turnin ? `<p class="sub">Turn in: ${npc(q.turnin, q.turninWhere, q.turninId)}</p>` : ''}
      <p>${esc(q.obj)}</p>
      ${itemList(q.rewards)}
    </article>`).join('');

    // bosses
    document.getElementById('bosses').innerHTML = D.bosses.map((b, i) => `<article class="card">
      <h3>${npcLink(b.n, b.id, 'boss')}${b.final ? '<span class="final">Final boss</span>' : ''}</h3>
      ${b.note ? `<p class="sub">${esc(b.note)}</p>` : ''}
      ${itemList(b.loot)}
      ${b.also ? `<p class="sub">Also drops: ${b.also.filter(usable).map(itemLink).join(', ') || '—'}</p>` : ''}
    </article>`).join('');

    window.WHI.refresh();
  }

  document.addEventListener('click', e => {
    const c = e.target.closest('[data-cls]'), f = e.target.closest('[data-fac]');
    if (!c && !f) return;
    if (c) cls = c.dataset.cls; if (f) fac = f.dataset.fac;
    try { localStorage.setItem('route-filters', JSON.stringify({ cls, fac })); } catch (err) {}
    render();
  });
  render();
})();
