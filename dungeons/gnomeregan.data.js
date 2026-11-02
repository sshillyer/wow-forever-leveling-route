// Gnomeregan: quests, loot, IDs, quality and stats from Wowhead Forever (read Nov 1).
window.DUNGEON_DATA = window.DUNGEON_DATA || {};
window.DUNGEON_DATA['gnomeregan'] = {
 "req": 25,
 "quests": [
  {
   "f": "Horde",
   "id": 2841,
   "n": "Rig Wars",
   "qlv": 35,
   "lv": 25,
   "giver": "Nogg",
   "giverId": 3412,
   "where": "Orgrimmar (75, 25)",
   "obj": "Retrieve the Rig Blueprints and Thermaplugg's Safe Combination from Gnomeregan and bring them to Nogg in Orgrimmar.",
   "rewards": [
    {
     "n": "Civinad Robes",
     "id": 9623,
     "q": 3,
     "t": "cloth",
     "ilvl": 37,
     "slot": "Chest",
     "s": [
      "+7 Stamina",
      "+12 Spirit",
      "Equip: Increases healing done by up to 26 and damage done by up to 9 for all magical spells and effects."
     ]
    },
    {
     "n": "Triprunner Dungarees",
     "id": 9624,
     "q": 3,
     "t": "leather",
     "ilvl": 37,
     "slot": "Legs",
     "s": [
      "+3 Strength",
      "+18 Agility",
      "+6 Stamina"
     ]
    },
    {
     "n": "Dual Reinforced Leggings",
     "id": 9625,
     "q": 3,
     "t": "mail",
     "ilvl": 37,
     "slot": "Legs",
     "s": [
      "+12 Strength",
      "+120 Armor",
      "Equip: Increased Defense +5."
     ]
    }
   ]
  },
  {
   "f": "Horde",
   "id": 2842,
   "n": "Chief Engineer Scooty",
   "qlv": 35,
   "lv": 20,
   "giver": "Sovik",
   "giverId": 3413,
   "where": "Orgrimmar (75, 24)",
   "turnin": "Scooty",
   "turninId": 7853,
   "turninWhere": "Stranglethorn Vale (27, 77)",
   "obj": "Speak with Scooty in Booty Bay. Rewards come from the follow-up quest.",
   "rewards": [
    {
     "n": "Goblin Transponder",
     "id": 9173,
     "q": 1,
     "t": "misc",
     "ilvl": 1
    }
   ]
  },
  {
   "f": "Horde",
   "id": 2843,
   "n": "Gnomer-gooooone!",
   "qlv": 35,
   "lv": 20,
   "giver": "Scooty",
   "giverId": 7853,
   "where": "Stranglethorn Vale (27, 77)",
   "obj": "Wait for Scooty to calibrate the Goblin Transponder.",
   "rewards": [
    {
     "n": "Goblin Transponder",
     "id": 9173,
     "q": 1,
     "t": "misc",
     "ilvl": 1
    }
   ]
  },
  {
   "f": "Horde",
   "id": 2949,
   "n": "Return of the Ring",
   "qlv": 34,
   "lv": 28,
   "start": "Starts from The Sparklematic 5200.",
   "turnin": "Nogg",
   "turninId": 3412,
   "turninWhere": "Orgrimmar (75, 25)",
   "obj": "You may either keep the ring, or you may find the person responsible for the imprint and engravings on the inside of the band. Rewards come from the follow-up quest.",
   "rewards": [
    {
     "n": "Nogg's Gold Ring",
     "id": 9588,
     "q": 3,
     "t": "finger",
     "ilvl": 37,
     "s": [
      "+10 Stamina",
      "Equip: Increased Defense +3."
     ]
    }
   ]
  },
  {
   "f": "Both",
   "id": 2904,
   "n": "A Fine Mess",
   "qlv": 30,
   "lv": 20,
   "giver": "Kernobee",
   "giverId": 7850,
   "where": "Gnomeregan",
   "turnin": "Scooty",
   "turninId": 7853,
   "turninWhere": "Stranglethorn Vale (27, 77)",
   "obj": "Escort Kernobee to the Clockwerk Run exit and then report to Scooty in Booty Bay.",
   "rewards": [
    {
     "n": "Fire-welded Bracers",
     "id": 9535,
     "q": 2,
     "t": "mail",
     "ilvl": 32,
     "slot": "Wrist",
     "s": [
      "+4 Agility",
      "+1 Stamina",
      "+4 Spirit"
     ]
    },
    {
     "n": "Fairywing Mantle",
     "id": 9536,
     "q": 2,
     "t": "cloth",
     "ilvl": 32,
     "slot": "Shoulder",
     "s": [
      "+1 Stamina",
      "+6 Intellect",
      "Equip: Increases damage and healing done by magical spells and effects by up to 4."
     ]
    },
    {
     "n": "Technician's Bracers",
     "id": 270042,
     "q": 2,
     "t": "leather",
     "ilvl": 32,
     "slot": "Wrist",
     "s": [
      "+4 Strength",
      "+4 Stamina",
      "+4 Intellect"
     ]
    }
   ]
  },
  {
   "f": "Both",
   "id": 2945,
   "n": "Grime-Encrusted Ring",
   "qlv": 34,
   "lv": 28,
   "start": "Starts from the Grime-Encrusted Object (drops from Grubbis and the Dark Iron Ambassador).",
   "obj": "Figure out a way to remove the grime from the Grime-Encrusted Ring.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2922,
   "n": "Save Techbot's Brain!",
   "qlv": 26,
   "lv": 20,
   "giver": "Tinkmaster Overspark",
   "giverId": 7944,
   "where": "Ironforge (69, 50)",
   "obj": "Bring Techbot's Memory Core to Tinkmaster Overspark in Ironforge.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2923,
   "n": "Tinkmaster Overspark",
   "qlv": 26,
   "lv": 20,
   "giver": "Brother Sarno",
   "giverId": 7917,
   "where": "Stormwind City (40, 30)",
   "turnin": "Tinkmaster Overspark",
   "turninId": 7944,
   "turninWhere": "Ironforge (69, 50)",
   "obj": "Speak with Tinkmaster Overspark in Ironforge.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2924,
   "n": "Essential Artificials",
   "qlv": 30,
   "lv": 24,
   "giver": "Klockmort Spannerspan",
   "giverId": 6169,
   "where": "Ironforge (68, 47)",
   "obj": "Bring 12 Essential Artificials to Klockmort Spannerspan in Ironforge.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2925,
   "n": "Klockmort's Essentials",
   "qlv": 30,
   "lv": 24,
   "giver": "Mathiel",
   "giverId": 6142,
   "where": "Darnassus (59, 45)",
   "turnin": "Klockmort Spannerspan",
   "turninId": 6169,
   "turninWhere": "Ironforge (68, 47)",
   "obj": "Speak with Klockmort Spannerspan in Ironforge.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2926,
   "n": "Gnogaine",
   "qlv": 27,
   "lv": 20,
   "giver": "Ozzie Togglevolt",
   "giverId": 1268,
   "where": "Dun Morogh (46, 49)",
   "obj": "Use the Empty Leaden Collection Phial on Irradiated Invaders or Irradiated Pillagers to collect radioactive fallout. Once it is full, take it back to Ozzie Togglevolt in Kharanos.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2927,
   "n": "The Day After",
   "qlv": 27,
   "lv": 20,
   "giver": "Gnoarn",
   "giverId": 6569,
   "where": "Ironforge (69, 50)",
   "turnin": "Ozzie Togglevolt",
   "turninId": 1268,
   "turninWhere": "Dun Morogh (46, 49)",
   "obj": "Speak with Ozzie Togglevolt in Kharanos.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2928,
   "n": "Gyrodrillmatic Excavationators",
   "qlv": 30,
   "lv": 20,
   "giver": "Shoni the Shilent",
   "giverId": 6579,
   "where": "Stormwind City (55, 12)",
   "obj": "Bring twenty-four Robo-mechanical Guts to Shoni in Stormwind.",
   "rewards": [
    {
     "n": "Shoni's Disarming Tool",
     "id": 9608,
     "q": 2,
     "t": "axe1h",
     "ilvl": 32,
     "dmg": "22–41 Damage · Speed 1.90 · 16.58 DPS",
     "s": [
      "+4 Spirit",
      "Chance on hit: Disarm target's weapon for 5 sec."
     ]
    },
    {
     "n": "Shilly Mitts",
     "id": 9609,
     "q": 2,
     "t": "cloth",
     "ilvl": 32,
     "slot": "Hands",
     "s": [
      "+6 Spirit",
      "+40 Armor",
      "Equip: Increases damage and healing done by magical spells and effects by up to 5."
     ]
    },
    {
     "n": "Operator's Gloves",
     "id": 270045,
     "q": 2,
     "t": "leather",
     "ilvl": 32,
     "slot": "Hands",
     "s": [
      "+6 Strength",
      "+4 Stamina",
      "+4 Spirit"
     ]
    }
   ]
  },
  {
   "f": "Alliance",
   "id": 2929,
   "n": "The Grand Betrayal",
   "qlv": 35,
   "lv": 25,
   "giver": "High Tinker Mekkatorque",
   "giverId": 7937,
   "where": "Ironforge (69, 49)",
   "obj": "Venture to Gnomeregan and kill Mekgineer Thermaplugg. Return to High Tinker Mekkatorque when the task is complete.",
   "rewards": [
    {
     "n": "Civinad Robes",
     "id": 9623,
     "q": 3,
     "t": "cloth",
     "ilvl": 37,
     "slot": "Chest",
     "s": [
      "+7 Stamina",
      "+12 Spirit",
      "Equip: Increases healing done by up to 26 and damage done by up to 9 for all magical spells and effects."
     ]
    },
    {
     "n": "Triprunner Dungarees",
     "id": 9624,
     "q": 3,
     "t": "leather",
     "ilvl": 37,
     "slot": "Legs",
     "s": [
      "+3 Strength",
      "+18 Agility",
      "+6 Stamina"
     ]
    },
    {
     "n": "Dual Reinforced Leggings",
     "id": 9625,
     "q": 3,
     "t": "mail",
     "ilvl": 37,
     "slot": "Legs",
     "s": [
      "+12 Strength",
      "+120 Armor",
      "Equip: Increased Defense +5."
     ]
    }
   ]
  },
  {
   "f": "Alliance",
   "id": 2930,
   "n": "Data Rescue",
   "qlv": 30,
   "lv": 25,
   "giver": "Master Mechanic Castpipe",
   "giverId": 7950,
   "where": "Ironforge (69, 48)",
   "obj": "Bring a Prismatic Punch Card to Master Mechanic Castpipe in Ironforge.",
   "rewards": [
    {
     "n": "Repairman's Cape",
     "id": 9605,
     "q": 2,
     "t": "back",
     "ilvl": 32,
     "s": [
      "+3 Intellect",
      "+5 Spirit",
      "Equip: Increases healing done by up to 6 and damage done by up to 2 for all magical spells and effects."
     ]
    },
    {
     "n": "Mechanic's Pipehammer",
     "id": 9604,
     "q": 2,
     "t": "mace2h",
     "ilvl": 32,
     "dmg": "48–73 Damage · Speed 2.80 · 21.61 DPS",
     "s": [
      "+12 Intellect"
     ]
    }
   ]
  },
  {
   "f": "Alliance",
   "id": 2931,
   "n": "Castpipe's Task",
   "qlv": 28,
   "lv": 25,
   "giver": "Gaxim Rustfizzle",
   "giverId": 4077,
   "where": "Stonetalon Mountains (59, 67)",
   "turnin": "Master Mechanic Castpipe",
   "turninId": 7950,
   "turninWhere": "Ironforge (69, 48)",
   "obj": "Speak with Master Mechanic Castpipe in Ironforge. Rewards come from the follow-up quest.",
   "rewards": [
    {
     "n": "Repairman's Cape",
     "id": 9605,
     "q": 2,
     "t": "back",
     "ilvl": 32,
     "s": [
      "+3 Intellect",
      "+5 Spirit",
      "Equip: Increases healing done by up to 6 and damage done by up to 2 for all magical spells and effects."
     ]
    },
    {
     "n": "Mechanic's Pipehammer",
     "id": 9604,
     "q": 2,
     "t": "mace2h",
     "ilvl": 32,
     "dmg": "48–73 Damage · Speed 2.80 · 21.61 DPS",
     "s": [
      "+12 Intellect"
     ]
    }
   ]
  },
  {
   "f": "Alliance",
   "id": 2947,
   "n": "Return of the Ring",
   "qlv": 34,
   "lv": 28,
   "start": "Starts from The Sparklematic 5200.",
   "turnin": "Talvash del Kissel",
   "turninId": 6826,
   "turninWhere": "Ironforge (36, 3)",
   "obj": "You may either keep the ring, or you may find the person responsible for the imprint and engravings on the inside of the band.",
   "rewards": []
  },
  {
   "f": "Alliance",
   "id": 2962,
   "n": "The Only Cure is More Green Glow",
   "qlv": 30,
   "lv": 20,
   "giver": "Ozzie Togglevolt",
   "giverId": 1268,
   "where": "Dun Morogh (46, 49)",
   "obj": "Travel to Gnomeregan and bring back High Potency Radioactive Fallout. The fallout is unstable and collapses quickly.",
   "rewards": []
  }
 ],
 "bosses": [
  {
   "n": "Irradiated Horror",
   "id": 6220,
   "loot": [
    {
     "n": "Pattern: Truefaith Gloves",
     "id": 7091,
     "q": 2,
     "t": "misc",
     "pct": 5.7
    }
   ],
   "note": "Drops Robo-mechanical Guts for a quest."
  },
  {
   "n": "Grubbis",
   "id": 7361,
   "loot": [
    {
     "n": "Grubbis Paws",
     "id": 9445,
     "q": 3,
     "t": "mail",
     "ilvl": 34,
     "req": 29,
     "slot": "Hands",
     "s": [
      "+6 Strength",
      "+5 Agility",
      "+9 Spirit"
     ],
     "pct": 10.2
    }
   ],
   "note": "Drops Grime-Encrusted Object for a quest."
  },
  {
   "n": "Viscous Fallout",
   "id": 7079,
   "loot": [
    {
     "n": "Hydrocane",
     "id": 9452,
     "q": 3,
     "t": "staff",
     "ilvl": 32,
     "req": 27,
     "dmg": "44–67 Damage · Speed 2.80 · 19.82 DPS",
     "s": [
      "+15 Frost Resistance",
      "Equip: Increases damage and healing done by magical spells and effects by up to 36.",
      "Equip: Underwater Breath lasts 50% longer than normal."
     ],
     "pct": 20
    },
    {
     "n": "Toxic Revenger",
     "id": 9453,
     "q": 3,
     "t": "dagger",
     "ilvl": 32,
     "req": 27,
     "dmg": "27–51 Damage · Speed 1.90 · 20.53 DPS",
     "s": [
      "Chance on hit: Deals 14 Nature damage every 3 sec to any enemy in an 8 yard radius around the caster for 12 sec."
     ],
     "pct": 18.3
    },
    {
     "n": "Acidic Walkers",
     "id": 9454,
     "q": 3,
     "t": "cloth",
     "ilvl": 32,
     "req": 27,
     "slot": "Feet",
     "s": [
      "+8 Intellect",
      "+4 Spirit",
      "+5 Nature Resistance",
      "Equip: Increases damage and healing done by magical spells and effects by up to 5."
     ],
     "pct": 59
    }
   ]
  },
  {
   "n": "Electrocutioner 6000",
   "id": 6235,
   "loot": [
    {
     "n": "Electrocutioner Leg",
     "id": 9446,
     "q": 3,
     "t": "sword1h",
     "ilvl": 34,
     "req": 29,
     "dmg": "26–49 Damage · Speed 1.70 · 22.06 DPS",
     "s": [
      "Chance on hit: Blasts a target for 19 to 37 Nature damage. Mechanical targets take 2x damage."
     ],
     "pct": 16.9
    },
    {
     "n": "Electrocutioner Lagnut",
     "id": 9447,
     "q": 3,
     "t": "finger",
     "ilvl": 34,
     "req": 29,
     "s": [
      "+4 Stamina",
      "+7 Spirit",
      "Equip: Increases healing done by up to 9 and damage done by up to 3 for all magical spells and effects."
     ],
     "pct": 31.8
    },
    {
     "n": "Spidertank Oilrag",
     "id": 9448,
     "q": 3,
     "t": "cloth",
     "ilvl": 34,
     "req": 29,
     "slot": "Wrist",
     "s": [
      "Restores +3 mana per 5 sec.",
      "Equip: Increases damage and healing done by magical spells and effects by up to 9."
     ],
     "pct": 39.6
    }
   ],
   "note": "Drops Robo-mechanical Guts for a quest."
  },
  {
   "n": "Crowd Pummeler 9-60",
   "id": 6229,
   "loot": [
    {
     "n": "Manual Crowd Pummeler",
     "id": 9449,
     "q": 3,
     "t": "mace2h",
     "ilvl": 34,
     "req": 29,
     "dmg": "46–70 Damage · Speed 2.00 · 29 DPS",
     "s": [
      "+16 Strength",
      "+5 Agility",
      "Use: Increases your attack speed by 50% for 30 sec. (3 Min Cooldown)"
     ],
     "pct": 33
    },
    {
     "n": "Gnomebot Operating Boots",
     "id": 9450,
     "q": 3,
     "t": "leather",
     "ilvl": 34,
     "req": 29,
     "slot": "Feet",
     "s": [
      "+12 Stamina",
      "Equip: Increases healing done by up to 11 and damage done by up to 4 for all magical spells and effects."
     ],
     "pct": 64.1
    }
   ]
  },
  {
   "n": "Dark Iron Ambassador",
   "id": 6228,
   "loot": [
    {
     "n": "Emissary Cuffs",
     "id": 9455,
     "q": 3,
     "t": "leather",
     "ilvl": 35,
     "req": 30,
     "slot": "Wrist",
     "s": [
      "+6 Arcane Resistance"
     ],
     "pct": 42
    },
    {
     "n": "Glass Shooter",
     "id": 9456,
     "q": 3,
     "t": "gun",
     "ilvl": 35,
     "req": 30,
     "dmg": "36–68 Damage · Speed 2.90 · 17.93 DPS",
     "s": [
      "Equip: +12 Attack Power."
     ],
     "pct": 33.3
    },
    {
     "n": "Royal Diplomatic Scepter",
     "id": 9457,
     "q": 3,
     "t": "mace1h",
     "ilvl": 35,
     "req": 30,
     "dmg": "24–46 Damage · Speed 2.30 · 15.22 DPS",
     "s": [
      "+3 Stamina",
      "+7 Spirit",
      "Equip: Increases healing done by up to 75 and damage done by up to 25 for all magical spells and effects."
     ],
     "pct": 21.6
    }
   ],
   "note": "Rare spawn. Drops Grime-Encrusted Object for a quest."
  },
  {
   "n": "Mekgineer Thermaplugg",
   "id": 7800,
   "loot": [
    {
     "n": "Thermaplugg's Central Core",
     "id": 9458,
     "q": 3,
     "t": "shield",
     "ilvl": 36,
     "req": 31,
     "s": [
      "17 Block",
      "+3 Spirit",
      "Equip: When struck in combat has a 5% chance of inflicting 65 to 121 Nature damage to the attacker. (Proc chance: 5%)"
     ],
     "pct": 31.5
    },
    {
     "n": "Thermaplugg's Left Arm",
     "id": 9459,
     "q": 3,
     "t": "axe2h",
     "ilvl": 36,
     "req": 31,
     "dmg": "67–102 Damage · Speed 2.70 · 31.3 DPS",
     "s": [
      "+17 Strength",
      "+5 Stamina",
      "+4 Intellect"
     ],
     "pct": 18.6
    },
    {
     "n": "Charged Gear",
     "id": 9461,
     "q": 3,
     "t": "finger",
     "ilvl": 36,
     "req": 31,
     "s": [
      "+5 Arcane Resistance",
      "+5 Nature Resistance"
     ],
     "pct": 32.6
    },
    {
     "n": "Electromagnetic Gigaflux Reactivator",
     "id": 9492,
     "q": 3,
     "t": "cloth",
     "ilvl": 36,
     "req": 31,
     "slot": "Head",
     "s": [
      "+8 Intellect",
      "+9 Spirit",
      "Equip: Increases damage and healing done by magical spells and effects by up to 8.",
      "Use: Channels a bolt of lightning and hurls it towards all enemies in front of the caster causing 189 to 209 Nature damage. The caster is then surrounded by a barrier of electricity for 5 min. (5 Min Cooldown)"
     ],
     "pct": 9.9
    }
   ],
   "note": "Drops Thermaplugg's Safe Combination for a quest.",
   "final": true
  }
 ]
};
