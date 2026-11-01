// Razorfen Kraul: quests, loot, IDs, quality and stats from Wowhead Forever (read Nov 1).
window.DUNGEON_DATA = window.DUNGEON_DATA || {};
window.DUNGEON_DATA['razorfen-kraul'] = {
 "req": 29,
 "quests": [
  {
   "f": "Horde",
   "id": 1102,
   "n": "A Vengeful Fate",
   "qlv": 34,
   "lv": 29,
   "giver": "Auld Stonespire",
   "giverId": 4451,
   "where": "Thunder Bluff (36, 60)",
   "obj": "Bring Razorflank's Heart to Auld Stonespire in Thunder Bluff.",
   "rewards": [
    {
     "n": "Berylline Pads",
     "id": 4197,
     "q": 3,
     "t": "cloth",
     "ilvl": 36,
     "slot": "Shoulder",
     "s": [
      "+5 Stamina",
      "+10 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 7."
     ]
    },
    {
     "n": "Stonefist Girdle",
     "id": 6742,
     "q": 3,
     "t": "mail",
     "ilvl": 36,
     "slot": "Waist",
     "s": [
      "+6 Strength",
      "+5 Stamina",
      "+100 Armor"
     ]
    },
    {
     "n": "Marbled Buckler",
     "id": 6725,
     "q": 3,
     "t": "shield",
     "ilvl": 36,
     "s": [
      "17 Block",
      "+5 Strength",
      "+5 Agility",
      "+5 Stamina",
      "+5 Spirit"
     ]
    },
    {
     "n": "Quilboar Blaster",
     "id": 274084,
     "q": 3,
     "t": "gun",
     "ilvl": 36,
     "dmg": "36–68 Damage · Speed 2.80 · 18.57 DPS",
     "s": [
      "+4 Agility",
      "+4 Spirit"
     ]
    }
   ]
  },
  {
   "f": "Horde",
   "id": 1109,
   "n": "Going, Going, Guano!",
   "qlv": 33,
   "lv": 30,
   "giver": "Master Apothecary Faranell",
   "giverId": 2055,
   "where": "Undercity (48, 69)",
   "obj": "Bring 1 pile of Kraul Guano to Master Apothecary Faranell in the Undercity.",
   "rewards": []
  },
  {
   "f": "Horde",
   "id": 6522,
   "n": "An Unholy Alliance",
   "qlv": 36,
   "lv": 28,
   "start": "Starts from the Small Scroll (drops from Charlga Razorflank).",
   "turnin": "Varimathras",
   "turninId": 2425,
   "turninWhere": "Undercity (56, 92)",
   "obj": "Starts from the Small Scroll Charlga Razorflank drops. Take it to Varimathras in the Undercity. Rewards come from the follow-up quest.",
   "rewards": [
    {
     "n": "Skullbreaker",
     "id": 17039,
     "q": 2,
     "t": "mace1h",
     "ilvl": 38,
     "dmg": "23–43 Damage · Speed 2.40 · 13.75 DPS",
     "s": [
      "+3 Stamina",
      "+5 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 30."
     ]
    },
    {
     "n": "Nail Spitter",
     "id": 17042,
     "q": 2,
     "t": "gun",
     "ilvl": 38,
     "dmg": "21–40 Damage · Speed 1.90 · 16.05 DPS",
     "s": [
      "+3 Strength",
      "+4 Stamina"
     ]
    },
    {
     "n": "Zealot's Robe",
     "id": 17043,
     "q": 2,
     "t": "cloth",
     "ilvl": 38,
     "slot": "Chest",
     "s": [
      "+7 Intellect",
      "+7 Spirit",
      "Equip: Increases damage and healing done by magical spells and effects by up to 11."
     ]
    },
    {
     "n": "Cultist's Chestguard",
     "id": 270054,
     "q": 2,
     "t": "leather",
     "ilvl": 38,
     "slot": "Chest",
     "s": [
      "+8 Strength",
      "+8 Stamina",
      "+6 Spirit"
     ]
    }
   ]
  },
  {
   "f": "Both",
   "id": 1144,
   "n": "Willix the Importer",
   "qlv": 30,
   "lv": 22,
   "giver": "Willix the Importer",
   "giverId": 4508,
   "where": "Razorfen Kraul",
   "obj": "Escort Willix the Importer out of Razorfen Kraul.",
   "rewards": [
    {
     "n": "Monkey Ring",
     "id": 6748,
     "q": 2,
     "t": "finger",
     "ilvl": 32,
     "s": [
      "+5 Agility",
      "+5 Spirit"
     ]
    },
    {
     "n": "Snake Hoop",
     "id": 6750,
     "q": 2,
     "t": "finger",
     "ilvl": 32,
     "s": [
      "+5 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 6."
     ]
    },
    {
     "n": "Tiger Band",
     "id": 6749,
     "q": 2,
     "t": "finger",
     "ilvl": 32,
     "s": [
      "+5 Strength",
      "+5 Spirit"
     ]
    },
    {
     "n": "Boar Signet",
     "id": 274078,
     "q": 2,
     "t": "finger",
     "ilvl": 32,
     "s": [
      "+5 Stamina",
      "Equip: Increases your chance to Block attacks with a shield by 1.0%."
     ]
    }
   ]
  },
  {
   "f": "Both",
   "id": 1221,
   "n": "Blueleaf Tubers",
   "qlv": 26,
   "lv": 20,
   "giver": "Mebok Mizzyrix",
   "giverId": 3446,
   "where": "The Barrens (62, 38)",
   "obj": "Grab a Crate with Holes, a Snufflenose Command Stick and the Snufflenose Owner's Manual, then use your snufflenose gopher to dig up Blueleaf Tubers.",
   "rewards": [
    {
     "n": "A Small Container of Gems",
     "id": 6755,
     "q": 1,
     "t": "misc",
     "ilvl": 25
    }
   ]
  },
  {
   "f": "Alliance",
   "id": 1101,
   "n": "The Crone of the Kraul",
   "qlv": 34,
   "lv": 29,
   "giver": "Falfindel Waywarder",
   "giverId": 4048,
   "where": "Feralas (89, 46)",
   "obj": "Bring Razorflank's Medallion to Falfindel Waywarder in Thalanaar.",
   "rewards": [
    {
     "n": "Berylline Pads",
     "id": 4197,
     "q": 3,
     "t": "cloth",
     "ilvl": 36,
     "slot": "Shoulder",
     "s": [
      "+5 Stamina",
      "+10 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 7."
     ]
    },
    {
     "n": "Stonefist Girdle",
     "id": 6742,
     "q": 3,
     "t": "mail",
     "ilvl": 36,
     "slot": "Waist",
     "s": [
      "+6 Strength",
      "+5 Stamina",
      "+100 Armor"
     ]
    },
    {
     "n": "Marbled Buckler",
     "id": 6725,
     "q": 3,
     "t": "shield",
     "ilvl": 36,
     "s": [
      "17 Block",
      "+5 Strength",
      "+5 Agility",
      "+5 Stamina",
      "+5 Spirit"
     ]
    },
    {
     "n": "Quilboar Blaster",
     "id": 274084,
     "q": 3,
     "t": "gun",
     "ilvl": 36,
     "dmg": "36–68 Damage · Speed 2.80 · 18.57 DPS",
     "s": [
      "+4 Agility",
      "+4 Spirit"
     ]
    }
   ]
  },
  {
   "f": "Alliance",
   "id": 1142,
   "n": "Mortality Wanes",
   "qlv": 30,
   "lv": 25,
   "giver": "Heralath Fallowbrook",
   "giverId": 4510,
   "where": "Razorfen Kraul",
   "turnin": "Treshala Fallowbrook",
   "turninId": 4521,
   "turninWhere": "Darnassus (69, 66)",
   "obj": "Find and return Treshala's Pendant to Treshala Fallowbrook in Darnassus.",
   "rewards": [
    {
     "n": "Mourning Shawl",
     "id": 6751,
     "q": 2,
     "t": "back",
     "ilvl": 32,
     "s": [
      "+8 Stamina"
     ]
    },
    {
     "n": "Lancer Boots",
     "id": 6752,
     "q": 2,
     "t": "leather",
     "ilvl": 32,
     "slot": "Feet",
     "s": [
      "+5 Agility",
      "+6 Stamina",
      "+4 Spirit"
     ]
    },
    {
     "n": "Sentinel's Boots",
     "id": 270047,
     "q": 2,
     "t": "mail",
     "ilvl": 32,
     "slot": "Feet",
     "s": [
      "+4 Strength",
      "+4 Stamina",
      "+6 Spirit"
     ]
    }
   ]
  }
 ],
 "bosses": [
  {
   "n": "Razorfen Spearhide",
   "id": 4438,
   "loot": [
    {
     "n": "Armor Piercer",
     "id": 6679,
     "q": 2,
     "t": "polearm",
     "ilvl": 29,
     "req": 24,
     "dmg": "41–62 Damage · Speed 2.60 · 19.81 DPS",
     "s": [
      "+11 Agility"
     ],
     "pct": 61.9
    }
   ]
  },
  {
   "n": "Aggem Thorncurse",
   "id": 4424,
   "loot": [
    {
     "n": "Thornspike",
     "id": 6681,
     "q": 3,
     "t": "dagger",
     "ilvl": 32,
     "req": 27,
     "dmg": "24–46 Damage · Speed 1.70 · 20.59 DPS",
     "s": [
      "Chance on hit: Hurl spikes at the target, dealing 45 Physical damage and jumping to 1 additional nearby enemy. Each jump reduces the damage by 50%."
     ],
     "pct": 44.8
    }
   ]
  },
  {
   "n": "Death Speaker Jargba",
   "id": 4428,
   "loot": [
    {
     "n": "Death Speaker Scepter",
     "id": 2816,
     "q": 3,
     "t": "mace1h",
     "ilvl": 33,
     "req": 28,
     "dmg": "28–52 Damage · Speed 2.80 · 14.29 DPS",
     "s": [
      "Equip: Increases healing done by magical spells and effects by up to 68.",
      "Equip: Increases damage done by Shadow spells and effects by up to 28."
     ],
     "pct": 11.7
    },
    {
     "n": "Death Speaker Robes",
     "id": 6682,
     "q": 3,
     "t": "cloth",
     "ilvl": 31,
     "req": 26,
     "slot": "Chest",
     "s": [
      "+4 Stamina",
      "+11 Intellect",
      "Equip: Increases healing done by up to 20 and damage done by up to 7 for all magical spells and effects."
     ],
     "pct": 42
    },
    {
     "n": "Death Speaker Mantle",
     "id": 6685,
     "q": 3,
     "t": "cloth",
     "ilvl": 32,
     "req": 27,
     "slot": "Shoulder",
     "s": [
      "+11 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 6."
     ],
     "pct": 42.7
    }
   ]
  },
  {
   "n": "Overlord Ramtusk",
   "id": 4420,
   "loot": [
    {
     "n": "Tusken Helm",
     "id": 6686,
     "q": 3,
     "t": "mail",
     "ilvl": 34,
     "req": 29,
     "slot": "Head",
     "s": [
      "+13 Strength",
      "+120 Armor"
     ],
     "pct": 60
    },
    {
     "n": "Corpsemaker",
     "id": 6687,
     "q": 3,
     "t": "axe2h",
     "ilvl": 34,
     "req": 29,
     "dmg": "88–132 Damage · Speed 3.80 · 28.95 DPS",
     "s": [
      "+15 Strength",
      "+8 Stamina"
     ],
     "pct": 34
    }
   ]
  },
  {
   "n": "Blind Hunter",
   "id": 4425,
   "loot": [
    {
     "n": "Stygian Bone Amulet",
     "id": 6695,
     "q": 3,
     "t": "neck",
     "ilvl": 34,
     "req": 29,
     "s": [
      "+4 Stamina",
      "Equip: Increases damage and healing done by magical spells and effects by up to 5.",
      "Equip: Increases damage done to Undead by magical spells and effects by up to 12."
     ],
     "pct": 26
    },
    {
     "n": "Nightstalker Bow",
     "id": 6696,
     "q": 3,
     "t": "bow",
     "ilvl": 34,
     "req": 29,
     "dmg": "20–38 Damage · Speed 1.70 · 17.06 DPS",
     "s": [
      "+3 Agility",
      "+5 Shadow Resistance"
     ],
     "pct": 32.7
    },
    {
     "n": "Batwing Mantle",
     "id": 6697,
     "q": 3,
     "t": "cloth",
     "ilvl": 34,
     "req": 29,
     "slot": "Shoulder",
     "s": [
      "+3 Agility",
      "+11 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 6."
     ],
     "pct": 34.4
    }
   ],
   "note": "Rare spawn."
  },
  {
   "n": "Earthcaller Halmgar",
   "id": 4842,
   "loot": [
    {
     "n": "Whisperwind Headdress",
     "id": 6688,
     "q": 3,
     "t": "leather",
     "ilvl": 34,
     "req": 29,
     "slot": "Head",
     "s": [
      "+11 Stamina",
      "+11 Spirit",
      "Equip: Increases damage and healing done by magical spells and effects by up to 7."
     ],
     "pct": 46.8
    },
    {
     "n": "Wind Spirit Staff",
     "id": 6689,
     "q": 3,
     "t": "staff",
     "ilvl": 34,
     "req": 29,
     "dmg": "56–85 Damage · Speed 3.30 · 21.36 DPS",
     "s": [
      "+6 Stamina",
      "+16 Spirit",
      "Equip: Increases healing done by up to 71 and damage done by up to 23 for all magical spells and effects."
     ],
     "pct": 48
    }
   ],
   "note": "Rare spawn."
  },
  {
   "n": "Agathelos the Raging",
   "id": 4422,
   "loot": [
    {
     "n": "Ferine Leggings",
     "id": 6690,
     "q": 3,
     "t": "leather",
     "ilvl": 34,
     "req": 29,
     "slot": "Legs",
     "s": [
      "+12 Intellect",
      "Equip: +26 Attack Power."
     ],
     "pct": 59.5
    },
    {
     "n": "Swinetusk Shank",
     "id": 6691,
     "q": 3,
     "t": "dagger",
     "ilvl": 35,
     "req": 30,
     "dmg": "16–30 Damage · Speed 1.50 · 15.33 DPS",
     "s": [
      "+6 Stamina",
      "+4 Spirit",
      "Equip: Increases damage and healing done by magical spells and effects by up to 40."
     ],
     "pct": 33.6
    }
   ]
  },
  {
   "n": "Charlga Razorflank",
   "id": 4421,
   "loot": [
    {
     "n": "Pronged Reaver",
     "id": 6692,
     "q": 3,
     "t": "axe1h",
     "ilvl": 35,
     "req": 30,
     "dmg": "38–72 Damage · Speed 2.40 · 22.92 DPS",
     "s": [
      "+5 Strength",
      "+5 Spirit"
     ],
     "pct": 18.6
    },
    {
     "n": "Agamaggan's Clutch",
     "id": 6693,
     "q": 3,
     "t": "finger",
     "ilvl": 35,
     "req": 30,
     "s": [
      "+5 Stamina",
      "+6 Spirit",
      "Equip: Increases movement speed by 3% in The Barrens, Thousand Needles, Razorfen Kraul, and Razorfen Downs."
     ],
     "pct": 34.9
    },
    {
     "n": "Heart of Agamaggan",
     "id": 6694,
     "q": 3,
     "t": "shield",
     "ilvl": 35,
     "req": 30,
     "s": [
      "17 Block",
      "+7 Stamina",
      "Equip: Increases healing done by up to 15 and damage done by up to 5 for all magical spells and effects."
     ],
     "pct": 33.5
    }
   ],
   "note": "Drops Razorflank's Heart, Small Scroll for a quest.",
   "final": true
  }
 ]
};
