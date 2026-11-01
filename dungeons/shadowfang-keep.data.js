// Shadowfang Keep: quests, loot, IDs, quality and stats from Wowhead Forever (read Nov 1).
window.DUNGEON_DATA = window.DUNGEON_DATA || {};
window.DUNGEON_DATA['shadowfang-keep'] = {
 "req": 22,
 "quests": [
  {
   "f": "Horde",
   "id": 1013,
   "n": "The Book of Ur",
   "qlv": 26,
   "lv": 16,
   "giver": "Keeper Bel'dugur",
   "giverId": 2934,
   "where": "Undercity (53, 53)",
   "obj": "Bring the Book of Ur to Keeper Bel'dugur at the Apothecarium in the Undercity.",
   "rewards": [
    {
     "n": "Grizzled Boots",
     "id": 6335,
     "q": 2,
     "t": "leather",
     "ilvl": 28,
     "slot": "Feet",
     "s": [
      "+7 Stamina",
      "+20 Armor"
     ]
    },
    {
     "n": "Steel-clasped Bracers",
     "id": 4534,
     "q": 2,
     "t": "mail",
     "ilvl": 28,
     "slot": "Wrist",
     "s": [
      "+4 Stamina",
      "+4 Spirit"
     ]
    },
    {
     "n": "Tattered Mittens",
     "id": 270030,
     "q": 2,
     "t": "cloth",
     "ilvl": 28,
     "slot": "Hands",
     "s": [
      "+6 Stamina"
     ]
    }
   ]
  },
  {
   "f": "Horde",
   "id": 1014,
   "n": "Arugal Must Die",
   "qlv": 27,
   "lv": 18,
   "giver": "Dalar Dawnweaver",
   "giverId": 1938,
   "where": "Silverpine Forest (44, 40)",
   "obj": "Kill Arugal and bring his head to Dalar Dawnweaver at the Sepulcher.",
   "rewards": [
    {
     "n": "Seal of Sylvanas",
     "id": 6414,
     "q": 3,
     "t": "finger",
     "ilvl": 29
    }
   ]
  },
  {
   "f": "Horde",
   "id": 1098,
   "n": "Deathstalkers in Shadowfang",
   "qlv": 25,
   "lv": 18,
   "giver": "High Executor Hadrec",
   "giverId": 1952,
   "where": "Silverpine Forest (43, 41)",
   "turnin": "Deathstalker Vincent",
   "turninId": 4444,
   "turninWhere": "Shadowfang Keep",
   "obj": "Find the Deathstalker Adamant and Deathstalker Vincent.",
   "rewards": [
    {
     "n": "Ghostly Mantle",
     "id": 3324,
     "q": 2,
     "t": "cloth",
     "ilvl": 27,
     "slot": "Shoulder",
     "s": [
      "+6 Spirit"
     ]
    },
    {
     "n": "Tanned Shoulderpads",
     "id": 270023,
     "q": 2,
     "t": "leather",
     "ilvl": 27,
     "slot": "Shoulder",
     "s": [
      "+3 Strength",
      "+6 Intellect"
     ]
    },
    {
     "n": "Bronzed Shoulderguards",
     "id": 270024,
     "q": 2,
     "t": "mail",
     "ilvl": 27,
     "slot": "Shoulder",
     "s": [
      "+4 Stamina",
      "+5 Spirit"
     ]
    }
   ]
  }
 ],
 "bosses": [
  {
   "n": "Rethilgore",
   "id": 3914,
   "loot": [
    {
     "n": "Rugged Spaulders",
     "id": 5254,
     "q": 3,
     "t": "leather",
     "ilvl": 22,
     "req": 17,
     "slot": "Shoulder",
     "s": [
      "+20 Armor",
      "+2 to all resistances"
     ],
     "pct": 81.6
    }
   ]
  },
  {
   "n": "Razorclaw the Butcher",
   "id": 3886,
   "loot": [
    {
     "n": "Butcher's Cleaver",
     "id": 1292,
     "q": 3,
     "t": "axe1h",
     "ilvl": 25,
     "req": 20,
     "dmg": "19–36 Damage · Speed 1.70 · 16.18 DPS",
     "s": [
      "+5 Strength",
      "+2 Agility"
     ],
     "pct": 9.8
    },
    {
     "n": "Bloody Apron",
     "id": 6226,
     "q": 3,
     "t": "cloth",
     "ilvl": 24,
     "req": 19,
     "slot": "Chest",
     "s": [
      "+10 Stamina",
      "Equip: Increases healing done by up to 13 and damage done by up to 4 for all magical spells and effects."
     ],
     "pct": 41.7
    },
    {
     "n": "Butcher's Slicer",
     "id": 6633,
     "q": 3,
     "t": "sword1h",
     "ilvl": 23,
     "req": 18,
     "dmg": "30–57 Damage · Speed 2.90 · 15 DPS",
     "s": [
      "+3 Stamina",
      "Equip: +6 Attack Power."
     ],
     "pct": 39.5
    }
   ]
  },
  {
   "n": "Baron Silverlaine",
   "id": 3887,
   "loot": [
    {
     "n": "Silverlaine's Family Seal",
     "id": 6321,
     "q": 3,
     "t": "finger",
     "ilvl": 26,
     "req": 21,
     "s": [
      "+2 Stamina",
      "Equip: Increases movement speed by 2% in Tirisfal Glades, Silverpine Forest, and Shadowfang Keep."
     ],
     "pct": 19.3
    },
    {
     "n": "Baron's Scepter",
     "id": 6323,
     "q": 3,
     "t": "mace1h",
     "ilvl": 26,
     "req": 21,
     "dmg": "28–52 Damage · Speed 2.40 · 16.67 DPS",
     "s": [
      "+2 Strength",
      "+3 Stamina",
      "Equip: Cause party members within 30 yds to regenerate 4 health every 5 sec."
     ],
     "pct": 37.9
    }
   ]
  },
  {
   "n": "Commander Springvale",
   "id": 4278,
   "loot": [
    {
     "n": "Arced War Axe",
     "id": 3191,
     "q": 3,
     "t": "axe2h",
     "ilvl": 26,
     "req": 21,
     "dmg": "57–86 Damage · Speed 3.30 · 21.67 DPS",
     "s": [
      "+9 Strength",
      "+9 Stamina"
     ],
     "pct": 33.5
    },
    {
     "n": "Commander's Crest",
     "id": 6320,
     "q": 3,
     "t": "shield",
     "ilvl": 26,
     "req": 21,
     "s": [
      "12 Block",
      "+5 Strength",
      "+3 Stamina"
     ],
     "pct": 28.7
    },
    {
     "n": "Eerie Stable Lantern",
     "id": 6341,
     "q": 3,
     "t": "offhand",
     "ilvl": 21,
     "req": 19,
     "s": [
      "+4 Shadow Resistance"
     ],
     "pct": 9.4
    }
   ]
  },
  {
   "n": "Odo the Blindwatcher",
   "id": 4279,
   "loot": [
    {
     "n": "Odo's Ley Staff",
     "id": 6318,
     "q": 3,
     "t": "staff",
     "ilvl": 26,
     "req": 21,
     "dmg": "37–56 Damage · Speed 2.90 · 16.03 DPS",
     "s": [
      "+5 Stamina",
      "+12 Spirit",
      "Equip: Increases healing done by up to 52 and damage done by up to 17 for all magical spells and effects."
     ],
     "pct": 33.3
    },
    {
     "n": "Girdle of the Blindwatcher",
     "id": 6319,
     "q": 3,
     "t": "leather",
     "ilvl": 26,
     "req": 21,
     "slot": "Waist",
     "s": [
      "+5 Stamina",
      "Equip: Increases damage and healing done by magical spells and effects by up to 7.",
      "Equip: Increases your effective stealth detection level by 1."
     ],
     "pct": 57.2
    }
   ]
  },
  {
   "n": "Fel Steed",
   "id": 3864,
   "loot": [
    {
     "n": "Fel Steed Saddlebags",
     "id": 932,
     "q": 2,
     "t": "bag",
     "ilvl": 25,
     "pct": 17.5
    },
    {
     "n": "Eerie Stable Lantern",
     "id": 6341,
     "q": 3,
     "t": "offhand",
     "ilvl": 21,
     "req": 19,
     "s": [
      "+4 Shadow Resistance"
     ],
     "pct": 7.1
    }
   ]
  },
  {
   "n": "Deathsworn Captain",
   "id": 3872,
   "loot": [
    {
     "n": "Haunting Blade",
     "id": 6641,
     "q": 3,
     "t": "sword2h",
     "ilvl": 27,
     "req": 22,
     "dmg": "68–102 Damage · Speed 3.80 · 22.37 DPS",
     "s": [
      "Equip: Increases healing done by up to 33 and damage done by up to 11 for all magical spells and effects."
     ],
     "pct": 56.8
    },
    {
     "n": "Phantom Armor",
     "id": 6642,
     "q": 3,
     "t": "mail",
     "ilvl": 27,
     "req": 22,
     "slot": "Chest",
     "s": [
      "+3 Strength",
      "+12 Stamina",
      "+5 Spirit"
     ],
     "pct": 34.6
    }
   ],
   "note": "Rare spawn."
  },
  {
   "n": "Fenrus the Devourer",
   "id": 4274,
   "loot": [
    {
     "n": "Black Wolf Bracers",
     "id": 3230,
     "q": 3,
     "t": "leather",
     "ilvl": 27,
     "req": 22,
     "slot": "Wrist",
     "s": [
      "+7 Stamina",
      "+20 Armor",
      "Equip: +4 Attack Power."
     ],
     "pct": 18.4
    },
    {
     "n": "Fenrus' Hide",
     "id": 6340,
     "q": 3,
     "t": "back",
     "ilvl": 27,
     "req": 22,
     "s": [
      "+4 Agility",
      "+6 Stamina"
     ],
     "pct": 71.1
    }
   ]
  },
  {
   "n": "Wolf Master Nandos",
   "id": 3927,
   "loot": [
    {
     "n": "Feline Mantle",
     "id": 3748,
     "q": 3,
     "t": "cloth",
     "ilvl": 28,
     "req": 23,
     "slot": "Shoulder",
     "s": [
      "+2 Agility",
      "+8 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 4.",
      "Equip: Reduces damage from falling."
     ],
     "pct": 56.1
    },
    {
     "n": "Wolfmaster Cape",
     "id": 6314,
     "q": 3,
     "t": "back",
     "ilvl": 27,
     "req": 22,
     "s": [
      "+3 Stamina",
      "Equip: +10 Attack Power.",
      "Equip: +9 Attack Power against Beasts."
     ],
     "pct": 37.3
    }
   ]
  },
  {
   "n": "Archmage Arugal",
   "id": 4275,
   "loot": [
    {
     "n": "Meteor Shard",
     "id": 6220,
     "q": 3,
     "t": "dagger",
     "ilvl": 28,
     "req": 23,
     "dmg": "22–42 Damage · Speed 1.80 · 17.78 DPS",
     "s": [
      "+3 Fire Resistance",
      "Chance on hit: Blasts a target for 42 Fire damage."
     ],
     "pct": 18.4
    },
    {
     "n": "Robes of Arugal",
     "id": 6324,
     "q": 3,
     "t": "cloth",
     "ilvl": 28,
     "req": 23,
     "slot": "Chest",
     "s": [
      "+5 Stamina",
      "+6 Spirit",
      "+8 Shadow Resistance",
      "Equip: Increases healing done by up to 18 and damage done by up to 6 for all magical spells and effects."
     ],
     "pct": 34.6
    },
    {
     "n": "Belt of Arugal",
     "id": 6392,
     "q": 3,
     "t": "cloth",
     "ilvl": 28,
     "req": 23,
     "slot": "Waist",
     "s": [
      "+2 Agility",
      "+3 Intellect",
      "+5 Spirit",
      "Equip: Increases damage and healing done by magical spells and effects by up to 9."
     ],
     "pct": 34.1
    }
   ],
   "note": "Drops Head of Arugal for a quest.",
   "final": true
  }
 ]
};
