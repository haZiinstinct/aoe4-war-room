// Auto-generated from aoe4world/data @ b2cd382. Do not edit by hand.
export const units = [
  {
    "id": "akinji",
    "name": "Akinji",
    "unique": true,
    "civs": [
      "ot"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/akinji-2.png",
    "description": "Highly mobile long ranged cavalry which fires two arrows in quick succession. \n+ High mobility\n- Weak vs ranged units",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 95,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 80,
      "wood": 80,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 1,
      "time": 24
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 7,
        "speed": 2.625,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "amir-warrior",
    "name": "Amir Warrior",
    "unique": false,
    "civs": [
      "tug"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/amir-warrior-1.png",
    "description": "Powerful Heavy Infantry trained for free that excels in combat near to Tughlaqabad Forts. \n+ No population cost\n+ High health and armor\n- Rapidly loses strength away from Tughlaqabad Forts\n- Countered by Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 180,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.125,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 80,
      "popcap": 0,
      "time": 20.5
    },
    "weapons": [
      {
        "name": "Khanda",
        "type": "melee",
        "damage": 12,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Kilij",
        "type": "melee",
        "damage": 15,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "arbaletrier",
    "name": "Arbalétrier",
    "unique": false,
    "civs": [
      "by",
      "fr",
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/arbaletrier-3.png",
    "description": "High damage ranged unit with a defensive pavise shield. Best used when supported by others.\n+ Anti-heavy specialist\n+ Comes with melee armor\n- Low health\n- Countered by Horsemen\n\nMercenary that can be purchased per 4 units for a total of 440 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 80,
    "armor": {
      "melee": 1,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 110,
      "total": 110,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Crossbow",
        "type": "ranged",
        "damage": 11,
        "speed": 2.125,
        "range": 5,
        "modifiers": [
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "archer",
    "name": "Archer",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "fr",
      "gol",
      "hr",
      "je",
      "kt",
      "ma",
      "mo",
      "ot",
      "ru",
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/archer-2.png",
    "description": "Cheap ranged infantry with good damage vs. unarmored targets.\n+ High rate of fire\n- Weak against high ranged armor targets\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 70,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 30,
      "wood": 50,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 80,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 5,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "atakebune",
    "name": "Atakebune",
    "unique": true,
    "civs": [
      "ja",
      "sen"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/atakebune-4.png",
    "description": "Large sailed war vessel armed with rockets.\n+ Anti-structure specialist\n- Vulnerable vs. Incendiary Ships\n- Low movement speed",
    "displayClasses": [
      "Warship"
    ],
    "classes": [
      "gunpowder",
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 650,
    "armor": {
      "melee": 0,
      "ranged": 5
    },
    "movement": 1.25,
    "costs": {
      "food": 100,
      "wood": 220,
      "gold": 220,
      "stone": 0,
      "oliveoil": 0,
      "total": 540,
      "popcap": 5,
      "time": 45
    },
    "weapons": [
      {
        "name": "Rocket",
        "type": "siege",
        "damage": 40,
        "speed": 5.5,
        "range": 9,
        "modifiers": [
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "atgeirmadr",
    "name": "Atgeirmaðr",
    "unique": true,
    "civs": [
      "mac"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/atgeirmadr-1.png",
    "description": "Infantry best used against mounted units. Attacks faster with nearby Varangians.\n+ Anti-cavalry specialist\n+ Additional damage against Elephants\n- Weak against armored infantry\n- Countered by Archers",
    "displayClasses": [
      "Light Melee Varangian Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 70,
      "wood": 20,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 90,
      "popcap": 1,
      "time": 17
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 7,
        "speed": 1.875,
        "range": 0.4425,
        "modifiers": [
          {
            "value": 17,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "attack-ship",
    "name": "Attack Ship",
    "unique": false,
    "civs": [
      "mac"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/attack-ship-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 110,
      "wood": 200,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 340,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      },
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 40,
        "speed": 4.125,
        "range": 8,
        "modifiers": [
          {
            "value": 45,
            "property": "siegeAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 80,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "baghlah",
    "name": "Baghlah",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "de",
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/baghlah-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 110,
      "wood": 200,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 340,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "ballista-elephant",
    "name": "Ballista Elephant",
    "unique": true,
    "civs": [
      "tug"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/ballista-elephant-3.png",
    "description": "Ballista mounted elephant effective at dealing with melee infantry and hitting multiple targets.\n+ High health and armor\n+ Bonus damage vs. melee\n- Slow movement speed",
    "displayClasses": [
      "Heavy Cavalry",
      "Elephant"
    ],
    "classes": [
      "armored",
      "cavalry",
      "elephant",
      "heavy",
      "military",
      "siege",
      "war_elephant"
    ],
    "category": "belagerung",
    "hp": 400,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1,
    "costs": {
      "food": 300,
      "wood": 0,
      "gold": 350,
      "stone": 0,
      "oliveoil": 0,
      "total": 650,
      "popcap": 4,
      "time": 45
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 18,
        "speed": 3.125,
        "range": 7.5,
        "modifiers": [
          {
            "value": 13,
            "property": "rangedAttack",
            "groups": [
              [
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 65,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "baochuan",
    "name": "Baochuan",
    "unique": false,
    "civs": [
      "ch",
      "gol",
      "jin",
      "mo",
      "zx"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/baochuan-4.png",
    "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
    "displayClasses": [
      "Warship"
    ],
    "classes": [
      "gunpowder",
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 700,
    "armor": {
      "melee": 0,
      "ranged": 5
    },
    "movement": 1.25,
    "costs": {
      "food": 200,
      "wood": 200,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 5,
      "time": 38
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 45,
        "speed": 5.625,
        "range": 9,
        "modifiers": [
          {
            "value": 70,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "battering-ram",
    "name": "Battering Ram",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "jin",
      "kt",
      "ma",
      "mo",
      "od",
      "ot",
      "ru",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/battering-ram-3.png",
    "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Takes bonus damage from melee attacks\n- Can only attack buildings\n- Slow movement speed",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege",
      "ranged"
    ],
    "category": "belagerung",
    "hp": 370,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 200,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Ram",
        "type": "siege",
        "damage": 200,
        "speed": 5.125,
        "range": 0.5375,
        "modifiers": [
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "wall"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "batu-khan",
    "name": "Batu Khan",
    "unique": true,
    "civs": [
      "gol"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/batu-khan-2.png",
    "description": "Melee cavalry leader that buffs the attack damage of nearby allies while the Khan is attacking. Can only be recruited from the Golden Tent.\n+ Durable heavy cavalry\n+ Automatically improves with each Age\n- Only one Khan per Golden Horde player",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 190,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 140,
      "oliveoil": 0,
      "total": 140,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Mace",
        "type": "melee",
        "damage": 10,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 20,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      },
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 5,
        "speed": 0.875,
        "range": 0,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "bed-crossbow",
    "name": "Bed Crossbow",
    "unique": true,
    "civs": [
      "jin"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/bed-crossbow-2.png",
    "description": "Anti-melee infantry siege weapon. Fires a burst of bolts that pierce multiple units.\n+ Does not require setup to fire\n+ Bonus damage vs. melee infantry\n- Weak to melee attacks",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 85,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.91,
    "costs": {
      "food": 0,
      "wood": 125,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 225,
      "popcap": 2,
      "time": 15
    },
    "weapons": [
      {
        "name": "Bed Crossbow",
        "type": "ranged",
        "damage": 7,
        "speed": 3.125,
        "range": 7.5,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "bedouin-skirmisher",
    "name": "Bedouin Skirmisher",
    "unique": true,
    "civs": [
      "ay"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/bedouin-skirmisher-2.png",
    "description": "Ranged infantry wielding a javelin to fend off lightly armored enemies.\n+ Bonus against light infantry\n+ Long Range\n- Weak against cavalry\n\nRequires the Trade Wing - Bazaar",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.25,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Javelin",
        "type": "ranged",
        "damage": 8,
        "speed": 2.125,
        "range": 6,
        "modifiers": [
          {
            "value": 8,
            "property": "rangedAttack",
            "groups": [
              [
                "infantry",
                "light"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "bedouin-swordsman",
    "name": "Bedouin Swordsman",
    "unique": true,
    "civs": [
      "ay"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/bedouin-swordsman-1.png",
    "description": "Master Swordsman who excels in melee combat\n+ Bonus vs Melee units\n- Weak to ranged units\n\nRequires the Trade Wing - Bazaar",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 160,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 60,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 60,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Short Sword",
        "type": "melee",
        "damage": 11,
        "speed": 1.125,
        "range": 0.295,
        "modifiers": [
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "melee"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "black-rider",
    "name": "Black Rider",
    "unique": true,
    "civs": [
      "hr"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/black-rider-4.png",
    "description": "Expensive cavalry with high armor and a powerful arquebus. Effective against melee units. Has the Caracole ability.\nOnly 5 Riders can be trained for each standing Keep built.\n+ Heavy armor\n- Countered by Crossbowmen",
    "displayClasses": [
      "Heavy Ranged Gunpowder Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "gunpowder",
      "heavy",
      "horse",
      "knight",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 225,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 150,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 300,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 45,
        "speed": 2.125,
        "range": 4,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "bogmadr",
    "name": "Bogmaðr",
    "unique": true,
    "civs": [
      "mac"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/bogmadr-2.png",
    "description": "Ranged infantry with good damage vs. unarmored targets. Has an ability to pierce enemy armor for reduced move speed.\n+ High rate of fire\n- Weak against armored targets\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Varangian Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 80,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 40,
      "wood": 50,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 90,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 5,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "bombard",
    "name": "Bombard",
    "unique": false,
    "civs": [
      "by",
      "ch",
      "de",
      "en",
      "gol",
      "ja",
      "jin",
      "ma",
      "mac",
      "mo",
      "ru",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/bombard-4.png",
    "description": "Intimidating siege gun excellent against buildings or any stubborn targets.\n+ High damage\n- Must be set up to fire",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 210,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 350,
      "gold": 500,
      "stone": 0,
      "oliveoil": 0,
      "total": 850,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 55,
        "speed": 5.375,
        "range": 10,
        "modifiers": [
          {
            "value": 410,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 375,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          },
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "buddhist-monk",
    "name": "Buddhist Monk",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/buddhist-monk-3.png",
    "description": "Support unit with the ability to decrease enemy attack damage. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Reduced cost\n+ Conversion enhances friendly unit damage\n+ Automatically reduces enemy attack damage\n+ Heals units",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 80,
      "popcap": 1,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "camel-archer",
    "name": "Camel Archer",
    "unique": true,
    "civs": [
      "ab",
      "by"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/camel-archer-2.png",
    "description": "Highly mobile and durable ranged unit.\n+Bonus damage vs Spearmen\n-High cost",
    "displayClasses": [
      "Light Ranged Cavalry",
      "Camel"
    ],
    "classes": [
      "archer",
      "camel",
      "cavalry",
      "cavalry_archer",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 150,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 170,
      "wood": 60,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 11,
        "speed": 1.375,
        "range": 3.75,
        "modifiers": [
          {
            "value": 11,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 11,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "camel-lancer",
    "name": "Camel Lancer",
    "unique": true,
    "civs": [
      "ay"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/camel-lancer-3.png",
    "description": "Higher mobility Lancer with a more powerful charge, but less powerful melee attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "camel",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 210,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 130,
      "wood": 0,
      "gold": 110,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 22,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 32,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "camel-rider",
    "name": "Camel Rider",
    "unique": true,
    "civs": [
      "ab",
      "by"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/camel-rider-3.png",
    "description": "Highly mobile and durable melee unit effective against all cavalry.\n+Bonus damage to cavalry\n+Causes enemy cavalry to deal less damage\n-High cost",
    "displayClasses": [
      "Light Melee Cavalry",
      "Camel"
    ],
    "classes": [
      "camel",
      "cavalry",
      "cavalry_light",
      "melee",
      "military"
    ],
    "category": "kavallerie",
    "hp": 270,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 130,
      "wood": 45,
      "gold": 45,
      "stone": 0,
      "oliveoil": 0,
      "total": 220,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 14,
        "speed": 1.125,
        "range": 0.42,
        "modifiers": [
          {
            "value": 14,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "cannon",
    "name": "Cannon",
    "unique": false,
    "civs": [
      "by",
      "fr",
      "je",
      "mac"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/cannon-4.png",
    "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 190,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 900,
      "total": 900,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 60,
        "speed": 5.375,
        "range": 10,
        "modifiers": [
          {
            "value": 500,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 450,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 55,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          },
          {
            "value": 55,
            "property": "siegeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "carrack",
    "name": "Carrack",
    "unique": false,
    "civs": [
      "by",
      "en",
      "fr",
      "hl",
      "hr",
      "je",
      "od",
      "ot"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/carrack-4.png",
    "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
    "displayClasses": [
      "Warship"
    ],
    "classes": [
      "gunpowder",
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 700,
    "armor": {
      "melee": 0,
      "ranged": 5
    },
    "movement": 1.25,
    "costs": {
      "food": 200,
      "wood": 200,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 5,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 45,
        "speed": 5.625,
        "range": 9,
        "modifiers": [
          {
            "value": 70,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "cataphract",
    "name": "Cataphract",
    "unique": true,
    "civs": [
      "by",
      "mac"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/cataphract-3.png",
    "description": "Expensive cavalry with high damage and a powerful Trample ability that charges through enemies.\n+ Heavy armor\n+ Trample deals area damage\n- No base charge attack\n- Slower move speed\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 360,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 180,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 330,
      "popcap": 1,
      "time": 40
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 27,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 36,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "cheirosiphon",
    "name": "Cheirosiphon",
    "unique": true,
    "civs": [
      "by",
      "mac"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/cheirosiphon-3.png",
    "description": "Durable infantry transport equipped with Greek Fire, effective against Buildings and Walls.\n+ Greek Fire persists on ground\n+ High ranged armor\n+ High health\n- Only attacks buildings\n- Slow move speed",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 310,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 200,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 260,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Greek Fire",
        "type": "siege",
        "damage": 10,
        "speed": 8.25,
        "range": 2.5,
        "modifiers": [
          {
            "value": 5,
            "property": "siegeAttack",
            "groups": [
              [
                "wall"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "chevalier-confrere",
    "name": "Chevalier Confrere",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/chevalier-confrere-2.png",
    "description": "Heavy cavalry with high damage. Gains health from nearby Heavy Cavalry.\n+ Cheaper than a regular knight\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 160,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1.625,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 170,
      "popcap": 1,
      "time": 26
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 14,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 21,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "clocktower-battering-ram",
    "name": "Clocktower Battering Ram",
    "unique": false,
    "civs": [
      "ch"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/clocktower-battering-ram-3.png",
    "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Takes bonus damage from melee attacks\n- Can only attack buildings\n- Slow movement speed",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 370,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 200,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Ram",
        "type": "siege",
        "damage": 200,
        "speed": 5.125,
        "range": 0.5375,
        "modifiers": [
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "wall"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "clocktower-bombard",
    "name": "Clocktower Bombard",
    "unique": false,
    "civs": [
      "ch"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/clocktower-bombard-4.png",
    "description": "Intimidating siege gun excellent against buildings or any stubborn targets.\n+ High damage\n- Must be set up to fire",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 210,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 350,
      "gold": 500,
      "stone": 0,
      "oliveoil": 0,
      "total": 850,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 55,
        "speed": 5.375,
        "range": 10,
        "modifiers": [
          {
            "value": 410,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 375,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          },
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "clocktower-counterweight-trebuchet",
    "name": "Clocktower Counterweight Trebuchet",
    "unique": false,
    "civs": [
      "ch"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/clocktower-counterweight-trebuchet-3.png",
    "description": "Powerful siege engine effective at destroying buildings and walls over a great distance.\n+ Bonus damage vs buildings\n- Must be set up to fire\n- Inaccurate against units",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 140,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.625,
    "costs": {
      "food": 0,
      "wood": 400,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 550,
      "popcap": 2,
      "time": 30
    },
    "weapons": [
      {
        "name": "Trebuchet",
        "type": "siege",
        "damage": 40,
        "speed": 11.375,
        "range": 16,
        "modifiers": [
          {
            "value": 350,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "clocktower-nest-of-bees",
    "name": "Clocktower Nest of Bees",
    "unique": true,
    "civs": [
      "ch"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/clocktower-nest-of-bees-3.png",
    "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 120,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.8125,
    "costs": {
      "food": 0,
      "wood": 300,
      "gold": 300,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 3,
      "time": 40
    },
    "weapons": [
      {
        "name": "Rocket Arrow",
        "type": "siege",
        "damage": 6,
        "speed": 6.5,
        "range": 7.5,
        "modifiers": [
          {
            "value": 4,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 2,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "clocktower-springald",
    "name": "Clocktower Springald",
    "unique": false,
    "civs": [
      "ch"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/clocktower-springald-3.png",
    "description": "Anti-unit siege weapon. Fires bolts that pierce multiple units.\n+ Does not require setup to fire\n+ Bonus damage vs. melee infantry\n- Trivial damage vs. buildings",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 85,
    "armor": {
      "melee": 3,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 150,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 250,
      "popcap": 2,
      "time": 20
    },
    "weapons": [
      {
        "name": "Springald",
        "type": "ranged",
        "damage": 15,
        "speed": 3.125,
        "range": 7.5,
        "modifiers": [
          {
            "value": 12,
            "property": "rangedAttack",
            "groups": [
              [
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 65,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "condottiero",
    "name": "Condottiero",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/condottiero-4.png",
    "description": "Fast Heavy Infantry that deals more and takes less damage from Gunpowder units.\n+ High damage\n+ Moves quickly\n- High Gold cost",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 195,
    "armor": {
      "melee": 2,
      "ranged": 3
    },
    "movement": 1.4375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 120,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 19
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 16,
        "speed": 1.125,
        "range": 0.295,
        "modifiers": [
          {
            "value": 16,
            "property": "meleeAttack",
            "groups": [
              [
                "gunpowder"
              ]
            ]
          },
          {
            "value": 16,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "counterweight-trebuchet",
    "name": "Counterweight Trebuchet",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "en",
      "fr",
      "hl",
      "hr",
      "ja",
      "je",
      "kt",
      "ma",
      "mac",
      "od",
      "ot",
      "ru",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/counterweight-trebuchet-3.png",
    "description": "Powerful siege engine effective at destroying buildings and walls over a great distance.\n+ Bonus damage vs buildings\n- Must be set up to fire\n- Inaccurate against units",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 140,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.625,
    "costs": {
      "food": 0,
      "wood": 400,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 550,
      "popcap": 2,
      "time": 30
    },
    "weapons": [
      {
        "name": "Trebuchet",
        "type": "siege",
        "damage": 40,
        "speed": 11.375,
        "range": 16,
        "modifiers": [
          {
            "value": 350,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "crossbowman",
    "name": "Crossbowman",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "en",
      "gol",
      "hl",
      "hr",
      "jin",
      "kt",
      "mac",
      "mo",
      "ot",
      "ru",
      "tug",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/crossbowman-3.png",
    "description": "High damage ranged unit best against heavy targets.\n+ Anti-heavy specialist\n- Low health\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 80,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Crossbow",
        "type": "ranged",
        "damage": 11,
        "speed": 2.125,
        "range": 5,
        "modifiers": [
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "culverin",
    "name": "Culverin",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "hl",
      "hr",
      "od"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/culverin-4.png",
    "description": "Long-range mobile cannon with bonus vs buildings.\n+ Effective against Defenses\n+ Does not require setup to fire",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 200,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.625,
    "costs": {
      "food": 0,
      "wood": 325,
      "gold": 550,
      "stone": 0,
      "oliveoil": 0,
      "total": 875,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 40,
        "speed": 3.625,
        "range": 10.5,
        "modifiers": [
          {
            "value": 230,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 215,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          },
          {
            "value": 35,
            "property": "siegeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "daimyo",
    "name": "Daimyo",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/daimyo-2.png",
    "description": "High health and damage melee cavalry that provides an aura that increases attack speed of nearby military units. Effective against melee units. Limited to one per Daimyo Estate built.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 240,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1.625,
    "costs": {
      "food": 140,
      "wood": 0,
      "gold": 110,
      "stone": 0,
      "oliveoil": 0,
      "total": 250,
      "popcap": 1,
      "time": 25
    },
    "weapons": [
      {
        "name": "Katana",
        "type": "melee",
        "damage": 18,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 24,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "demolition-ship",
    "name": "Demolition Ship",
    "unique": false,
    "civs": [
      "by",
      "en",
      "fr",
      "hl",
      "hr",
      "je",
      "kt",
      "ma",
      "mac",
      "od",
      "ot"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/demolition-ship-2.png",
    "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
    "displayClasses": [
      "Incendiary Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ship"
    ],
    "category": "marine",
    "hp": 145,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 2,
    "costs": {
      "food": 0,
      "wood": 80,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 2,
      "time": 15
    },
    "weapons": [
      {
        "name": "Incendiaries",
        "type": "siege",
        "damage": 95,
        "speed": 0.125,
        "range": 2,
        "modifiers": [
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "massive"
              ]
            ]
          },
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "dervish",
    "name": "Dervish",
    "unique": true,
    "civs": [
      "ay"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/dervish-2.png",
    "description": "Mounted Religious unit. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Uses a powerful Mass Heal ability to heal friendly units in an area.\n+ Gains increased Healing when carrying a relic.\n+ High speed.",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "camel",
      "cavalry",
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 120,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 60,
      "wood": 0,
      "gold": 140,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 40
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "desert-raider",
    "name": "Desert Raider",
    "unique": true,
    "civs": [
      "ay",
      "by"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/desert-raider-2.png",
    "description": "Versatile Cavalry unit that can swap between ranged and melee attacks with a toggle.\n+ Effective against Light Infantry in Ranged Mode\n+ Effective against Cavalry in Melee Mode\n- High cost\n- Weak to Ranged units",
    "displayClasses": [
      "Light Ranged and Melee Camel"
    ],
    "classes": [
      "archer",
      "camel",
      "cavalry",
      "cavalry_archer",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 120,
    "armor": {
      "melee": 5,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 80,
      "wood": 50,
      "gold": 50,
      "stone": 0,
      "oliveoil": 0,
      "total": 180,
      "popcap": 1,
      "time": 30
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 13,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 13,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      },
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 7,
        "speed": 1.25,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "dhow",
    "name": "Dhow",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "de",
      "ot",
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/dhow-2.png",
    "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
    "displayClasses": [
      "Archer Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 300,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.75,
    "costs": {
      "food": 80,
      "wood": 150,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 3,
      "time": 25
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.5,
        "range": 6.5,
        "modifiers": [
          {
            "value": 18,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "donso",
    "name": "Donso",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/donso-1.png",
    "description": "Infantry best used against mounted units. Periodically throws a javelin when attacking from ranged.\n+ Anti-cavalry specialist\n+ Additional damage against Elephants\n+ Comes with melee armor\n- Weak against heavy infantry\n- Countered by Archers and Longbowmen",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 80,
    "armor": {
      "melee": 1,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 60,
      "wood": 30,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 90,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 7,
        "speed": 1.875,
        "range": 0.295,
        "modifiers": [
          {
            "value": 17,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      },
      {
        "name": "Javelin",
        "type": "ranged",
        "damage": 5,
        "speed": 0.75,
        "range": 6.5,
        "modifiers": [
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "dromon",
    "name": "Dromon",
    "unique": true,
    "civs": [
      "by",
      "mac"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/dromon-2.png",
    "description": "Military ship equipped a flamethrower that can be upgraded to use Greek Fire.\n+ Strong against Arrow Ships\n- Low weapon range\n- Countered by Demolition Ships",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 500,
    "armor": {
      "melee": 0,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 100,
      "wood": 200,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 360,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Greek Fire",
        "type": "siege",
        "damage": 7,
        "speed": 3,
        "range": 4,
        "modifiers": [
          {
            "value": 8,
            "property": "siegeAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 3,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "earls-guard",
    "name": "Earl's Guard",
    "unique": true,
    "civs": [
      "hl"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/earls-guard-1.png",
    "description": "Tough infantry with good damage. Periodically throws Daggers at nearby enemies.\n+ High armor\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 155,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.25,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 110,
      "popcap": 1,
      "time": 20.5
    },
    "weapons": [
      {
        "name": "War Hammer",
        "type": "melee",
        "damage": 12,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Dagger",
        "type": "ranged",
        "damage": 16,
        "speed": 1.25,
        "range": 6.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "earls-retinue",
    "name": "Earl's Retinue",
    "unique": false,
    "civs": [
      "hl"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/earls-retinue-4.png",
    "description": "Produces an army of 6 Demilancers and 2 Hobelar.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 650,
      "wood": 0,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 850,
      "popcap": 8,
      "time": 50
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "eruptor",
    "name": "Eruptor",
    "unique": true,
    "civs": [
      "jin"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/eruptor-4.png",
    "description": "Expensive mid-range gunpowder infantry that deals high single target damage.",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 155,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 120,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 270,
      "popcap": 1,
      "time": 40
    },
    "weapons": [
      {
        "name": "Eruptor",
        "type": "ranged",
        "damage": 42,
        "speed": 2.125,
        "range": 3.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "explosive-dhow",
    "name": "Explosive Dhow",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "de",
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/explosive-dhow-2.png",
    "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
    "displayClasses": [
      "Incendiary Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ship"
    ],
    "category": "marine",
    "hp": 145,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 2,
    "costs": {
      "food": 0,
      "wood": 80,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 2,
      "time": 15
    },
    "weapons": [
      {
        "name": "Incendiaries",
        "type": "siege",
        "damage": 95,
        "speed": 0.125,
        "range": 2,
        "modifiers": [
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "massive"
              ]
            ]
          },
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "explosive-junk",
    "name": "Explosive Junk",
    "unique": false,
    "civs": [
      "ch",
      "gol",
      "ja",
      "jin",
      "mo",
      "sen",
      "zx"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/explosive-junk-2.png",
    "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
    "displayClasses": [
      "Incendiary Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ship"
    ],
    "category": "marine",
    "hp": 145,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 2,
    "costs": {
      "food": 0,
      "wood": 80,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 2,
      "time": 13
    },
    "weapons": [
      {
        "name": "Incendiaries",
        "type": "siege",
        "damage": 95,
        "speed": 0.125,
        "range": 2,
        "modifiers": [
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "massive"
              ]
            ]
          },
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "fire-lancer",
    "name": "Fire Lancer",
    "unique": true,
    "civs": [
      "ch"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/fire-lancer-3.png",
    "description": "Cavalry wielding explosive-tipped lances.\n+ Charge deals area damage\n+ Effective at raiding buildings and siege engines\n+ Good ranged armor\n- Weak in melee combat\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military"
    ],
    "category": "kavallerie",
    "hp": 155,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.625,
    "costs": {
      "food": 120,
      "wood": 20,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Fire Lance",
        "type": "melee",
        "damage": 13,
        "speed": 1.625,
        "range": 0.375,
        "modifiers": [
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      },
      {
        "name": "Charge",
        "type": "melee",
        "damage": 15,
        "speed": 0.5,
        "range": 1.0375,
        "modifiers": [
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "fishing-boat",
    "name": "Fishing Boat",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "jin",
      "kt",
      "ma",
      "mac",
      "mo",
      "od",
      "ot",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/fishing-boat-2.png",
    "description": "Small boat that gathers Food from either Deep Water Fish or Shoreline Fish. Drops off gathered resources at the Dock.\n+ Can repair\n- No combat",
    "displayClasses": [
      "Worker",
      "Ship"
    ],
    "classes": [
      "naval_unit",
      "ship",
      "ranged",
      "military"
    ],
    "category": "marine",
    "hp": 150,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5,
    "costs": {
      "food": 0,
      "wood": 75,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 75,
      "popcap": 1,
      "time": 30
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 4,
        "speed": 1.875,
        "range": 4,
        "modifiers": [
          {
            "value": 1,
            "property": "rangedAttack",
            "groups": [
              [
                "ship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "freeborn-warrior",
    "name": "Freeborn Warrior",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/freeborn-warrior-3.png",
    "description": "Infantry with high ranged armor and bonus against ranged.\n+ Strong against ranged units\n-weak against heavy melee units",
    "displayClasses": [
      "Melee Infantry"
    ],
    "classes": [
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 175,
    "armor": {
      "melee": 0,
      "ranged": 5
    },
    "movement": 1.375,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 35,
      "stone": 0,
      "oliveoil": 0,
      "total": 115,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Khanda",
        "type": "melee",
        "damage": 9,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 4,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "galleass",
    "name": "Galleass",
    "unique": true,
    "civs": [
      "fr",
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/galleass-3.png",
    "description": "Large oared vessel with a powerful forward mounted bombard.\n+ Long Range\n+ Anti-structure specialist",
    "displayClasses": [
      "Gunpowder Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 700,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1,
    "costs": {
      "food": 0,
      "wood": 360,
      "gold": 300,
      "stone": 0,
      "oliveoil": 0,
      "total": 660,
      "popcap": 5,
      "time": 50
    },
    "weapons": [
      {
        "name": "Bombard",
        "type": "ranged",
        "damage": 130,
        "speed": 5.125,
        "range": 8,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "galley",
    "name": "Galley",
    "unique": false,
    "civs": [
      "by",
      "en",
      "fr",
      "hl",
      "hr",
      "je",
      "kt",
      "mac",
      "od"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/galley-2.png",
    "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
    "displayClasses": [
      "Archer Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 300,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.75,
    "costs": {
      "food": 80,
      "wood": 150,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 3,
      "time": 25
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.5,
        "range": 6.5,
        "modifiers": [
          {
            "value": 18,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "garrison-command",
    "name": "Garrison Command",
    "unique": false,
    "civs": [
      "hl"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/garrison-command-4.png",
    "description": "Produces an army of 8 Spearman and 1 Earl's Guard.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 300,
      "wood": 200,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 500,
      "popcap": 9,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "genitour",
    "name": "Genitour",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/genitour-3.png",
    "description": "Highly mobile ranged cavalry that throws javelins.\n+ High mobility\n+ Exceptional versus ranged units\n+ High ranged armor\n- Weak versus Melee",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 105,
    "armor": {
      "melee": 0,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 60,
      "wood": 60,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Javelin",
        "type": "ranged",
        "damage": 6,
        "speed": 1.625,
        "range": 6.5,
        "modifiers": [
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "genoese-crossbowman",
    "name": "Genoese Crossbowman",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/genoese-crossbowman-3.png",
    "description": "High damage ranged unit effective against Melee Infantry.\n+ High damage\n- Low health\n- Countered by Horseman",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 110,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.06,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 90,
      "stone": 0,
      "oliveoil": 0,
      "total": 170,
      "popcap": 1,
      "time": 26
    },
    "weapons": [
      {
        "name": "Crossbow",
        "type": "ranged",
        "damage": 21,
        "speed": 2.625,
        "range": 6,
        "modifiers": [
          {
            "value": 9,
            "property": "rangedAttack",
            "groups": [
              [
                "melee",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "ghazi-raider",
    "name": "Ghazi Raider",
    "unique": true,
    "civs": [
      "de"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/ghazi-raider-2.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering ranged units.\n+ High movement speed\n+ Increased effectiveness against heavy units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 135,
    "armor": {
      "melee": 0,
      "ranged": 2
    },
    "movement": 1.875,
    "costs": {
      "food": 110,
      "wood": 30,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 140,
      "popcap": 1,
      "time": 25
    },
    "weapons": [
      {
        "name": "Mace",
        "type": "melee",
        "damage": 12,
        "speed": 2,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 12,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 2,
            "property": "meleeAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          },
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "ghulam",
    "name": "Ghulam",
    "unique": true,
    "civs": [
      "ab",
      "ay",
      "by"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/ghulam-3.png",
    "description": "Tough infantry that deal two attacks in rapid succession.\n+ High armor\n+ Higher attack damage on charge\n- Lower base attack damage than a Man-at-Arms\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 195,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.1875,
    "costs": {
      "food": 110,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 140,
      "popcap": 1,
      "time": 25
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 10,
        "speed": 1.125,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-archer",
    "name": "Gilded Archer",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/gilded-archer-2.png",
    "description": "Ranged infantry with good damage vs. unarmored targets and increased fire rate and longer weapon range than standard Archers.\n+ Increased weapon range\n+ Faster attack speed\n- Weak against armored targets\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 125,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 60,
      "wood": 100,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 2,
      "time": 18
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1,
        "range": 5.5,
        "modifiers": [
          {
            "value": 6,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 6,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-crossbowman",
    "name": "Gilded Crossbowman",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/gilded-crossbowman-3.png",
    "description": "Crossbowmen with increased range and exceptionally high damage against heavy units.\n+ Anti-heavy specialist\n+ Long range\n- Low health\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 140,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 160,
      "wood": 0,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 2,
      "time": 27
    },
    "weapons": [
      {
        "name": "Crossbow",
        "type": "ranged",
        "damage": 15,
        "speed": 1.75,
        "range": 6,
        "modifiers": [
          {
            "value": 19,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      },
      {
        "name": "(translation not found) (undefined)",
        "type": "ranged",
        "damage": 15,
        "speed": 1.75,
        "range": 6,
        "modifiers": [
          {
            "value": 19,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          },
          {
            "value": 20,
            "property": "rangedAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-handcannoneer",
    "name": "Gilded Handcannoneer",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/gilded-handcannoneer-4.png",
    "description": "More powerful all-purpose ranged infantry with increased attack speed.\n+ High damage\n+ Increased attack speed\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 250,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 240,
      "wood": 0,
      "gold": 240,
      "stone": 0,
      "oliveoil": 0,
      "total": 480,
      "popcap": 2,
      "time": 35
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 41,
        "speed": 1.125,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-horseman",
    "name": "Gilded Horseman",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/gilded-horseman-2.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering ranged units.\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 250,
    "armor": {
      "melee": 0,
      "ranged": 2
    },
    "movement": 1.875,
    "costs": {
      "food": 200,
      "wood": 40,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 2,
      "time": 27
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 15,
        "speed": 1.75,
        "range": 0.375,
        "modifiers": [
          {
            "value": 15,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 15,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-knight",
    "name": "Gilded Knight",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/gilded-knight-3.png",
    "description": "Expensive cavalry with a powerful charge.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 400,
    "armor": {
      "melee": 5,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 280,
      "wood": 0,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 480,
      "popcap": 2,
      "time": 42
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 36,
        "speed": 1.25,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 45,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-landsknecht",
    "name": "Gilded Landsknecht",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/gilded-landsknecht-3.png",
    "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "armored",
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 185,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 120,
      "wood": 0,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 320,
      "popcap": 2,
      "time": 27
    },
    "weapons": [
      {
        "name": "Zweihander",
        "type": "melee",
        "damage": 21,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Halberd",
        "type": "melee",
        "damage": 21,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": true,
      "formation": false
    }
  },
  {
    "id": "gilded-man-at-arms",
    "name": "Gilded Man-at-Arms",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/gilded-man-at-arms-2.png",
    "description": "Tough infantry with good damage.\n+ High armor\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 220,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.125,
    "costs": {
      "food": 180,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 220,
      "popcap": 2,
      "time": 25
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 14,
        "speed": 1.125,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Ax",
        "type": "melee",
        "damage": 15,
        "speed": 1.125,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gilded-spearman",
    "name": "Gilded Spearman",
    "unique": true,
    "civs": [
      "od"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/gilded-spearman-1.png",
    "description": "Infantry best used against mounted units.\n+ Anti-cavalry specialist\n+ Additional damage against Elephants\n- Weak against heavy infantry\n- Countered by Archers",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 160,
    "armor": {
      "melee": 1,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 120,
      "wood": 40,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 2,
      "time": 18
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 10,
        "speed": 1.875,
        "range": 0.295,
        "modifiers": [
          {
            "value": 34,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 6,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 40,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "grand-galley",
    "name": "Grand Galley",
    "unique": true,
    "civs": [
      "ot"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/grand-galley-3.png",
    "description": "Large oared vessel which can be upgraded into a naval Military School.\n+ Large hold which can be garrisoned by any unit once upgraded into a Military School\n+ Very long range\n- Lower damage",
    "displayClasses": [
      "Gunpowder Ship"
    ],
    "classes": [
      "gunpowder",
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 750,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1,
    "costs": {
      "food": 135,
      "wood": 360,
      "gold": 300,
      "stone": 0,
      "oliveoil": 0,
      "total": 795,
      "popcap": 5,
      "time": 50
    },
    "weapons": [
      {
        "name": "Bombard",
        "type": "siege",
        "damage": 35,
        "speed": 4,
        "range": 9.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "great-bombard",
    "name": "Great Bombard",
    "unique": true,
    "civs": [
      "ot"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/great-bombard-4.png",
    "description": "Largest cannon that can be fielded. Excellent against buildings or groups of targets.\n+ High damage\n+ Area damage\n+ Long Range\n- Must be set up to fire",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 250,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 450,
      "gold": 800,
      "stone": 0,
      "oliveoil": 0,
      "total": 1250,
      "popcap": 4,
      "time": 60
    },
    "weapons": [
      {
        "name": "Great Bombard",
        "type": "siege",
        "damage": 70,
        "speed": 7,
        "range": 11,
        "modifiers": [
          {
            "value": 525,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 580,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 125,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "grenadier",
    "name": "Grenadier",
    "unique": false,
    "civs": [
      "by",
      "ch",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/grenadier-4.png",
    "description": "Advanced ranged infantry with thrown explosive canisters that deal damage in a small area.\n+ Deals area damage\n- Low single target damage\n- Slow movement speed\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nRequires the Silk Road Contract.",
    "displayClasses": [
      "Light Ranged Gunpowder Infantry",
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 150,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 240,
      "total": 240,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Grenade",
        "type": "siege",
        "damage": 12,
        "speed": 1.625,
        "range": 3.5,
        "modifiers": [
          {
            "value": 20,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "gunpowder-contingent",
    "name": "Gunpowder Contingent",
    "unique": false,
    "civs": [
      "hl"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/gunpowder-contingent-4.png",
    "description": "Produces an army of 2 Ribauldequins and 1 Culverin.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 0,
      "wood": 850,
      "gold": 1050,
      "stone": 0,
      "oliveoil": 0,
      "total": 1900,
      "popcap": 9,
      "time": 65
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "handcannon-ashigaru",
    "name": "Handcannon Ashigaru",
    "unique": false,
    "civs": [
      "ja"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/handcannon-ashigaru-4.png",
    "description": "Powerful all-purpose ranged infantry.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 130,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 120,
      "wood": 0,
      "gold": 120,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 38,
        "speed": 2.125,
        "range": 4,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "handcannoneer",
    "name": "Handcannoneer",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "je",
      "mac",
      "mo",
      "tug"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/handcannoneer-4.png",
    "description": "Powerful all-purpose ranged infantry.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 130,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 120,
      "wood": 0,
      "gold": 120,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 38,
        "speed": 2.125,
        "range": 4,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "healer-elephant",
    "name": "Healer Elephant",
    "unique": true,
    "civs": [
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/healer-elephant-2.png",
    "description": "Support elephant with two mounted Imams that individually heal allied units. Gains additional damage from nearby melee infantry and captures Sacred Sites.\n+ High health and armor\n- Slow movement speed\n- Countered by Spearman & Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry",
      "Elephant"
    ],
    "classes": [
      "armored",
      "cavalry",
      "elephant",
      "heavy",
      "melee",
      "military",
      "war_elephant"
    ],
    "category": "support",
    "hp": 400,
    "armor": {
      "melee": 3,
      "ranged": 1
    },
    "movement": 1,
    "costs": {
      "food": 150,
      "wood": 0,
      "gold": 220,
      "stone": 0,
      "oliveoil": 0,
      "total": 370,
      "popcap": 3,
      "time": 40
    },
    "weapons": [
      {
        "name": "Tusks",
        "type": "melee",
        "damage": 15,
        "speed": 3,
        "range": 0.75,
        "modifiers": [
          {
            "value": 15,
            "property": "meleeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "heavy-spearman",
    "name": "Heavy Spearman",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/heavy-spearman-3.png",
    "description": "Heavy Infantry excellent against mounted units.\n+ Stronger when close to Fortresses\n+ Anti-cavalry specialist\n+ High armor\n+ Has a stronger spearwall\n- Countered by Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 140,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.125,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 110,
      "popcap": 1,
      "time": 19
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 11,
        "speed": 1.875,
        "range": 0.295,
        "modifiers": [
          {
            "value": 25,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 8,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 28,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      },
      {
        "name": "Spearwall",
        "type": "melee",
        "damage": 15,
        "speed": 1.125,
        "range": 1.045,
        "modifiers": [
          {
            "value": 23,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 8,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hippodrome-horseman",
    "name": "Hippodrome Horseman",
    "unique": true,
    "civs": [
      "mac"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/hippodrome-horseman-1.png",
    "description": "Fast cavalry that enhances damage of nearby cavalry.\n+ High movement speed\n+ Health regeneration\n- Weak against melee units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 200,
    "armor": {
      "melee": 2,
      "ranged": 3
    },
    "movement": 1.875,
    "costs": {
      "food": 130,
      "wood": 30,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 190,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 13,
        "speed": 1.75,
        "range": 0.375,
        "modifiers": [
          {
            "value": 13,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 13,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hippodrome-riddari",
    "name": "Hippodrome Riddari",
    "unique": true,
    "civs": [
      "mac"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/hippodrome-riddari-1.png",
    "description": "Elite varangian cavalry that can enhance the movement speed of nearby infantry. \n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 250,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.7,
    "costs": {
      "food": 150,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 300,
      "popcap": 1,
      "time": 30
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 29,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Rhomphaia",
        "type": "melee",
        "damage": 32,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Throwing Axe",
        "type": "melee",
        "damage": 18,
        "speed": 1.75,
        "range": 3.25,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hippodrome-scout",
    "name": "Hippodrome Scout",
    "unique": true,
    "civs": [
      "mac"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/hippodrome-scout-1.png",
    "description": "Lightly armed cavalry with increased vision and damage. Comes with an aura that increases damage of torches.\n+ Able to see into Stealth Forests\n+ Health regeneration\n+ High movement speed\n- Very weak in combat",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 200,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 100,
      "wood": 0,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "(translation not found) (undefined)",
        "type": "melee",
        "damage": 0,
        "speed": 1.625,
        "range": 0.4125,
        "modifiers": []
      },
      {
        "name": "Short Sword",
        "type": "melee",
        "damage": 5,
        "speed": 2,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "scout"
              ]
            ]
          },
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      },
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 3,
        "speed": 1.75,
        "range": 2.875,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hobelar",
    "name": "Hobelar",
    "unique": true,
    "civs": [
      "hl"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/hobelar-2.png",
    "description": "Cheap cavalry effective at raiding, flanking, and countering ranged units.\n+ Cheaper than a normal Horseman\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 100,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.875,
    "costs": {
      "food": 75,
      "wood": 0,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 95,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Short Sword",
        "type": "melee",
        "damage": 7,
        "speed": 1.5,
        "range": 0.375,
        "modifiers": [
          {
            "value": 7,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 7,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      },
      {
        "name": "Spear Charge",
        "type": "melee",
        "damage": 7,
        "speed": 1.5,
        "range": 0.5375,
        "modifiers": [
          {
            "value": 7,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 7,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "horse-archer",
    "name": "Horse Archer",
    "unique": false,
    "civs": [
      "by",
      "ru"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/horse-archer-3.png",
    "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units\n\nMercenary that can be purchased per 3 units for a total of 330 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 85,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 110,
      "total": 110,
      "popcap": 1,
      "time": 60
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 10,
        "speed": 1.75,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "horseman",
    "name": "Horseman",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "en",
      "fr",
      "gol",
      "hr",
      "ja",
      "je",
      "jin",
      "kt",
      "mac",
      "mo",
      "ru",
      "zx"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/horseman-2.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering ranged units.\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 125,
    "armor": {
      "melee": 0,
      "ranged": 2
    },
    "movement": 1.875,
    "costs": {
      "food": 100,
      "wood": 20,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 9,
        "speed": 1.75,
        "range": 0.375,
        "modifiers": [
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hospitaller-knight",
    "name": "Hospitaller Knight",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/hospitaller-knight-2.png",
    "description": "Tough infantry with good damage, heals friendly units.\n+ High armor\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry",
      "Healer"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 145,
    "armor": {
      "melee": 2,
      "ranged": 1
    },
    "movement": 1.25,
    "costs": {
      "food": 50,
      "wood": 0,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 110,
      "popcap": 1,
      "time": 21
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 10,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "huihui-pao",
    "name": "Huihui Pao",
    "unique": false,
    "civs": [
      "by",
      "mac",
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/huihui-pao-4.png",
    "description": "Massive siege engine with incredible range, extra effective at destroying buildings and walls.\n+ Extremely long range\n- Must be set up to fire\n\nMercenary that can be purchased for 1000 Olive Oil.",
    "displayClasses": [
      "Siege",
      "Khaganate Unit"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 260,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 1000,
      "total": 1000,
      "popcap": 2,
      "time": 69
    },
    "weapons": [
      {
        "name": "Huihui Pao",
        "type": "siege",
        "damage": 75,
        "speed": 13.625,
        "range": 18,
        "modifiers": [
          {
            "value": 600,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      },
      {
        "name": "Greek Fire",
        "type": "siege",
        "damage": 75,
        "speed": 13.625,
        "range": 18,
        "modifiers": [
          {
            "value": 600,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hulk",
    "name": "Hulk",
    "unique": false,
    "civs": [
      "en",
      "hl",
      "hr",
      "kt",
      "od",
      "ot"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/hulk-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 99,
      "wood": 180,
      "gold": 27,
      "stone": 0,
      "oliveoil": 0,
      "total": 306,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "hunting-canoe",
    "name": "Hunting Canoe",
    "unique": false,
    "civs": [
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/hunting-canoe-2.png",
    "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
    "displayClasses": [
      "Archer Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 300,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.75,
    "costs": {
      "food": 80,
      "wood": 150,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 3,
      "time": 25
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.5,
        "range": 6.5,
        "modifiers": [
          {
            "value": 18,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "ikko-ikki-monk",
    "name": "Ikko-ikki Monk",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/ikko-ikki-monk-3.png",
    "description": "Warrior Monk with strong combat capabilities that heals nearby units when attacking. Does not have a targeted heal ability.\n+ Can heal themselves\n- Slow move speed",
    "displayClasses": [
      "Religious Melee Infantry"
    ],
    "classes": [
      "infantry",
      "melee",
      "melee_infantry",
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 160,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 100,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 13,
        "speed": 1.375,
        "range": 0.75,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "imam",
    "name": "Imam",
    "unique": false,
    "civs": [
      "ab",
      "ma",
      "ot",
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/imam-3.png",
    "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 150,
      "popcap": 1,
      "time": 30
    },
    "weapons": [
      {
        "name": "(translation not found) (undefined)",
        "type": "ranged",
        "damage": 0,
        "speed": 10002.725,
        "range": 7.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "imperial-guard",
    "name": "Imperial Guard",
    "unique": true,
    "civs": [
      "zx"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/imperial-guard-4.png",
    "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRequires Dynastic Protectors researched at Zhu Xi's Library.",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 340,
    "armor": {
      "melee": 10,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 140,
      "wood": 0,
      "gold": 140,
      "stone": 0,
      "oliveoil": 0,
      "total": 280,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 28,
        "speed": 1.625,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 45,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "iron-pagoda",
    "name": "Iron Pagoda",
    "unique": true,
    "civs": [
      "jin"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/iron-pagoda-2.png",
    "description": "Expensive cavalry with moderate area splash damage and high melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 200,
    "armor": {
      "melee": 4,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 115,
      "wood": 0,
      "gold": 125,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Podao",
        "type": "melee",
        "damage": 16,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 24,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "janissary",
    "name": "Janissary",
    "unique": true,
    "civs": [
      "ot"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/janissary-3.png",
    "description": "Powerful infantry effective against cavalry and can repair siege engines.\n+ High damage\n+ Bonus damage against cavalry\n- High cost\n- Slow movement speed\n- Receives additional damage from Archers.",
    "displayClasses": [
      "Light Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 60,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 1,
      "time": 24
    },
    "weapons": [
      {
        "name": "Trench Gun",
        "type": "ranged",
        "damage": 16,
        "speed": 1.5,
        "range": 3.5,
        "modifiers": [
          {
            "value": 11,
            "property": "rangedAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "javelin-thrower",
    "name": "Javelin Thrower",
    "unique": false,
    "civs": [
      "by",
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/javelin-thrower-2.png",
    "description": "Ranged infantry effective against other ranged units.\n+ Anti-ranged specialist\n+ Increased weapon range\n+ Comes with ranged armor\n- Low health\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 70,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.25,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 115,
      "total": 115,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Javelin",
        "type": "ranged",
        "damage": 8,
        "speed": 2.125,
        "range": 6,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeanne-darc-blast-cannon",
    "name": "Jeanne d'Arc - Blast Cannon",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/jeanne-darc-blast-cannon-4.png",
    "description": "Elite siege cavalry leader with high damage. Exceptionally effective vs buildings. If Jeanne is defeated, she will reappear at a Town Center. \n+ Heavy armor\n+ Good damage vs buildings\n- Countered only by superior numbers",
    "displayClasses": [
      "Heavy Siege Cavalry",
      "Hero"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "gunpowder",
      "heavy",
      "horse",
      "knight",
      "leader",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 480,
    "armor": {
      "melee": 5,
      "ranged": 5
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 1000,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "siege",
        "damage": 40,
        "speed": 2.125,
        "range": 1.25,
        "modifiers": [
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeanne-darc-hunter",
    "name": "Jeanne d'Arc - Hunter",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/jeanne-darc-hunter-2.png",
    "description": "Strong ranged infantry with good damage vs unarmored targets, and bonus damage vs spearmen. If Jeanne is defeated, she can be brought back at a Town Center.\n+ High rate of fire\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry",
      "Hero"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "leader",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 225,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 250,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 5,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 8,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 14,
            "property": "rangedAttack",
            "groups": [
              [
                "animal",
                "huntable"
              ]
            ]
          }
        ]
      },
      {
        "name": "(translation not found) (undefined)",
        "type": "ranged",
        "damage": 8,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 8,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 14,
            "property": "rangedAttack",
            "groups": [
              [
                "gaia"
              ]
            ]
          },
          {
            "value": 11,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeanne-darc-knight",
    "name": "Jeanne d'Arc - Knight",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/jeanne-darc-knight-3.png",
    "description": "Powerful heavy cavalry leader with high damage and health. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Heavy armor\n+ Fast movement\n- Countered by Spearmen",
    "displayClasses": [
      "Heavy Melee Cavalry",
      "Hero"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "leader",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 360,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 500,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 16,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "animal",
                "huntable"
              ]
            ]
          }
        ]
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 24,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "animal",
                "huntable"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeanne-darc-markswoman",
    "name": "Jeanne d'Arc - Markswoman",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/jeanne-darc-markswoman-4.png",
    "description": "Elite heavy siege cavalry leader with high damage. Exceptionally effective vs buildings. If Jeanne is defeated, she will reappear at a Town Center.\n+ Heavy armor \n+ Long range \n+ Good damage vs buildings\n- Countered only by superior buildings",
    "displayClasses": [
      "Siege Cavalry",
      "Hero"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "gunpowder",
      "horse",
      "knight",
      "leader",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 400,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 1000,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 28,
        "speed": 2.125,
        "range": 7,
        "modifiers": [
          {
            "value": 200,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeanne-darc-mounted-archer",
    "name": "Jeanne d'Arc - Mounted Archer",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/jeanne-darc-mounted-archer-3.png",
    "description": "A powerful cavalry archer with exceptional range and damage. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Long range\n+ Good damage\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Cavalry",
      "Hero"
    ],
    "classes": [
      "archer",
      "armored",
      "cavalry",
      "cavalry_archer",
      "cavalry_armored",
      "horse",
      "knight",
      "leader",
      "melee",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 280,
    "armor": {
      "melee": 1,
      "ranged": 1
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 500,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 15,
        "speed": 1.625,
        "range": 6,
        "modifiers": [
          {
            "value": 8,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 14,
            "property": "rangedAttack",
            "groups": [
              [
                "animal",
                "huntable"
              ]
            ]
          }
        ]
      },
      {
        "name": "(translation not found) (undefined)",
        "type": "ranged",
        "damage": 15,
        "speed": 1.625,
        "range": 6,
        "modifiers": [
          {
            "value": 8,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 14,
            "property": "rangedAttack",
            "groups": [
              [
                "gaia"
              ]
            ]
          },
          {
            "value": 11,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeanne-darc-woman-at-arms",
    "name": "Jeanne d'Arc - Woman-at-Arms",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/jeanne-darc-woman-at-arms-2.png",
    "description": "Strong heavy infantry leader with good armor and health. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Heavy armor\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry",
      "Hero"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "leader",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 225,
    "armor": {
      "melee": 3,
      "ranged": 2
    },
    "movement": 1.375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 250,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 10,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "animal",
                "huntable"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeannes-champion",
    "name": "Jeanne's Champion",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/jeannes-champion-3.png",
    "description": "Tough infantry that excels at countering Spearmen.\n+ High armor\n+ Bonus damage against Spearmen\n- Slow move speed\n- Countered by Knights, Lancers, and Crossbowmen\n\nUpgrades to Elite when Jeanne reaches level 4.",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 175,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.125,
    "costs": {
      "food": 150,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 190,
      "popcap": 1,
      "time": 28
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 13,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 8,
            "property": "meleeAttack",
            "groups": [
              [
                "spearman"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "jeannes-rider",
    "name": "Jeanne's Rider",
    "unique": true,
    "civs": [
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/jeannes-rider-3.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering Crossbowmen.\n+ High movement speed\n+ Bonus damage against Crossbowmen\n- Weak against melee units\n- Countered by Spearmen\n\nUpgrades to Elite when Jeanne reaches level 4.",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 170,
    "armor": {
      "melee": 0,
      "ranged": 6
    },
    "movement": 1.875,
    "costs": {
      "food": 180,
      "wood": 0,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 30
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 13,
        "speed": 1.75,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 7,
            "property": "meleeAttack",
            "groups": [
              [
                "crossbowman"
              ]
            ]
          },
          {
            "value": 13,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "junk",
    "name": "Junk",
    "unique": false,
    "civs": [
      "ch",
      "ja",
      "jin",
      "sen",
      "zx"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/junk-2.png",
    "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
    "displayClasses": [
      "Archer Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 300,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.75,
    "costs": {
      "food": 80,
      "wood": 150,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 3,
      "time": 21
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.5,
        "range": 6.5,
        "modifiers": [
          {
            "value": 18,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "kanabo-samurai",
    "name": "Kanabo Samurai",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/kanabo-samurai-2.png",
    "description": "Tough infantry with good damage. Deals +6% of enemy max health as bonus damage.\n+ High health\n+ Strong against high health units \n- Slow move speed\n- Countered by Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 185,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.125,
    "costs": {
      "food": 130,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 1,
      "time": 24
    },
    "weapons": [
      {
        "name": "Kanabo",
        "type": "melee",
        "damage": 3,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "katana-bannerman",
    "name": "Katana Bannerman",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/katana-bannerman-2.png",
    "description": "Samurai with an aura that increases damage of melee infantry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Heavy armor\n+ Increased move speed\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "support",
    "hp": 155,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Katana",
        "type": "melee",
        "damage": 8,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "keshik",
    "name": "Keshik",
    "unique": false,
    "civs": [
      "by",
      "gol",
      "mo"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/keshik-2.png",
    "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n+ Restores health after every attack\n- Less health than Lancers\n- Countered by Spearmen and Crossbowmen\n\nMercenary that can be purchased per 2 units for a total of 380 Olive Oil.\n\nRequires the Eastern Mercenary Contract.",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 150,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 190,
      "total": 190,
      "popcap": 1,
      "time": 66
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 15,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 23,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khaganate-horse-archer",
    "name": "Khaganate Elite Horse Archer",
    "unique": false,
    "civs": [
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/horse-archer-4.png",
    "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units\n\nRandomly spawns 5 at the time from the Khaganate Palace.",
    "displayClasses": [
      "Light Ranged Cavalry",
      "Khaganate Unit"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 100,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 5,
      "time": 55
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 12,
        "speed": 1.75,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khaganate-knight",
    "name": "Khaganate Elite Knight",
    "unique": false,
    "civs": [
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/knight-4.png",
    "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRandomly spawns 3 at the time from the Khaganate Palace.",
    "displayClasses": [
      "Heavy Melee Cavalry",
      "Khaganate Unit"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 270,
    "armor": {
      "melee": 5,
      "ranged": 5
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 3,
      "time": 66
    },
    "weapons": [
      {
        "name": "Poleax",
        "type": "melee",
        "damage": 29,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khaganate-mangudai",
    "name": "Khaganate Elite Mangudai",
    "unique": true,
    "civs": [
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/mangudai-4.png",
    "description": "Confounding mobile ranged cavalry that can fire at a slower rate while moving.\n+ High rate of fire\n- Low weapon range\n\nRandomly spawns from the Khaganate Palace.",
    "displayClasses": [
      "Light Ranged Cavalry",
      "Khaganate Unit"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 120,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 55
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 8,
        "speed": 0.875,
        "range": 3.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khaganate-palace-guard",
    "name": "Khaganate Elite Palace Guard",
    "unique": false,
    "civs": [
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/palace-guard-4.png",
    "description": "Tough infantry with good damage. Move faster than Men-At-Arms, but with reduced armor.\n+ Heavy armor\n- Countered by Knights, Lancers, and Crossbowmen.\n\nRandomly spawns 5 at the time from the Khaganate Palace.",
    "displayClasses": [
      "Heavy Melee Infantry",
      "Khaganate Unit"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 180,
    "armor": {
      "melee": 4,
      "ranged": 5
    },
    "movement": 1.375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 5,
      "time": 55
    },
    "weapons": [
      {
        "name": "Guandao",
        "type": "melee",
        "damage": 14,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khaganate-nest-of-bees",
    "name": "Khaganate Nest of Bees",
    "unique": false,
    "civs": [
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
    "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded\n\nRandomly spawns from the Khaganate Palace.",
    "displayClasses": [
      "Siege",
      "Gunpowder",
      "Khaganate Unit"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 120,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.8125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 3,
      "time": 55
    },
    "weapons": [
      {
        "name": "Rocket Arrow",
        "type": "siege",
        "damage": 6,
        "speed": 6.5,
        "range": 7.5,
        "modifiers": [
          {
            "value": 4,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 2,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khaganate-warrior-monk",
    "name": "Khaganate Warrior Monk",
    "unique": false,
    "civs": [
      "mo"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/warrior-monk-1.png",
    "description": "Military-minded support unit that improves combat capabilities of nearby units after it attacks. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n+ High utility in large armies\n- Low damage\n\nRandomly spawns 2 at the time from the Khaganate Palace.",
    "displayClasses": [
      "Religious Cavalry",
      "Khaganate Unit"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 190,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 2,
      "time": 44
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 11,
        "speed": 1.75,
        "range": 0.75,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khan",
    "name": "Khan",
    "unique": true,
    "civs": [
      "mo"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/khan-1.png",
    "description": "Ranged Cavalry Leader able to use Signal Arrows to enhance nearby military units. Reappears at a Town Center if killed.\n+ Vision and herding of a Scout\n+ Automatically improves with each Age\n- Only one Khan per Mongol player",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 0,
      "time": 18
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 2,
        "speed": 2,
        "range": 5,
        "modifiers": [
          {
            "value": 1,
            "property": "rangedAttack",
            "groups": [
              [
                "animal",
                "huntable"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "khans-hunter",
    "name": "Khan's Hunter",
    "unique": true,
    "civs": [
      "mo"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/khans-hunter-2.png",
    "description": "Supporting Cavalry Archer that can fire while moving. Has the Khan's Hunter Aura that improves the range of nearby ranged units.\n+High Mobility\n+Excellent Vision\n-Low Health",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 75,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5625,
    "costs": {
      "food": 0,
      "wood": 60,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 4,
        "speed": 2,
        "range": 4.25,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "kharash",
    "name": "Kharash",
    "unique": true,
    "civs": [
      "gol"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/kharash-2.png",
    "description": "Low health and damage melee infantry that passively increases the armor of nearby units.\n+ Low cost and large recruitment batch \n- Weak against all types",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 50,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 50,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 50,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 6,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "king",
    "name": "King",
    "unique": true,
    "civs": [
      "en"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/king-2.png",
    "description": "A mighty King, a powerful heavy cavalry unit. Heals nearby out of combat units by 2 health every 1 seconds.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "leader",
      "melee",
      "military"
    ],
    "category": "kavallerie",
    "hp": 220,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1.6875,
    "costs": {
      "food": 100,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 50
    },
    "weapons": [
      {
        "name": "Great Sword",
        "type": "melee",
        "damage": 16,
        "speed": 2.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 24,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "kipchak-archer",
    "name": "Kipchak Archer",
    "unique": true,
    "civs": [
      "gol"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/kipchak-archer-3.png",
    "description": "Highly mobile ranged cavalry effective against slower melee units and will cause units hit to bleed. Any healing will remove the bleed.\n+ High mobility\n- Low damage\n- Weak vs ranged units",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "military_cavalry",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 105,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 80,
      "wood": 70,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 150,
      "popcap": 1,
      "time": 48
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 10,
        "speed": 2.125,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "knight",
    "name": "Knight",
    "unique": false,
    "civs": [
      "en",
      "hl",
      "hr",
      "ru"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/knight-3.png",
    "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 230,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 140,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 24,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "lancer",
    "name": "Lancer",
    "unique": false,
    "civs": [
      "ab",
      "ch",
      "de",
      "ot",
      "tug",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/lancer-3.png",
    "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 230,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 140,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 24,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "landsknecht",
    "name": "Landsknecht",
    "unique": false,
    "civs": [
      "by",
      "hr"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/landsknecht-3.png",
    "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers\n\nMercenary that can be purchased per 3 units for a total of 480 Olive Oil.\n\nRequires the Western Mercenary Contract.",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "armored",
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 160,
      "total": 160,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Zweihander",
        "type": "melee",
        "damage": 17,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": true,
      "formation": false
    }
  },
  {
    "id": "light-junk",
    "name": "Light Junk",
    "unique": false,
    "civs": [
      "gol",
      "mo"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/light-junk-2.png",
    "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
    "displayClasses": [
      "Archer Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 300,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.75,
    "costs": {
      "food": 80,
      "wood": 150,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 3,
      "time": 25
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.5,
        "range": 6.5,
        "modifiers": [
          {
            "value": 18,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "limitanei",
    "name": "Limitanei",
    "unique": true,
    "civs": [
      "by"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/limitanei-1.png",
    "description": "Infantry best used against cavalry. Can enter Shield Wall to take reduced ranged damage.\n+ Anti-cavalry specialist\n+ Additional damage against Elephants\n+ Increased health\n- Shield Wall reduces move speed\n- Weak vs heavy infantry\n- Countered by Archers",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 80,
      "wood": 10,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 90,
      "popcap": 1,
      "time": 17
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 7,
        "speed": 1.875,
        "range": 0.4425,
        "modifiers": [
          {
            "value": 17,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "lodya-attack-ship",
    "name": "Lodya Attack Ship",
    "unique": true,
    "civs": [
      "ru"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/lodya-attack-ship-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 110,
      "wood": 200,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 340,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "lodya-demolition-ship",
    "name": "Lodya Demolition Ship",
    "unique": true,
    "civs": [
      "ru"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/lodya-demolition-ship-2.png",
    "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n+ The Lodya can be converted to any other type of ship\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
    "displayClasses": [
      "Incendiary Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ship"
    ],
    "category": "marine",
    "hp": 145,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 2,
    "costs": {
      "food": 0,
      "wood": 80,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 2,
      "time": 15
    },
    "weapons": [
      {
        "name": "Incendiaries",
        "type": "siege",
        "damage": 95,
        "speed": 0.125,
        "range": 2,
        "modifiers": [
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "massive"
              ]
            ]
          },
          {
            "value": 300,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "lodya-galley",
    "name": "Lodya Galley",
    "unique": true,
    "civs": [
      "ru"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/lodya-galley-2.png",
    "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
    "displayClasses": [
      "Archer Ship"
    ],
    "classes": [
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 300,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1.75,
    "costs": {
      "food": 80,
      "wood": 150,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 230,
      "popcap": 3,
      "time": 25
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.5,
        "range": 6.5,
        "modifiers": [
          {
            "value": 18,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "fireship"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "longbowman",
    "name": "Longbowman",
    "unique": false,
    "civs": [
      "by",
      "en"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/longbowman-2.png",
    "description": "Cheap long-ranged infantry with good damage vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen\n\nMercenary that can be purchased per 5 units for a total of 525 Olive Oil.\n\nRequires the Western Mercenary Contract.",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry",
      "infantry_light"
    ],
    "category": "fernkampf",
    "hp": 70,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 105,
      "total": 105,
      "popcap": 1,
      "time": 75
    },
    "weapons": [
      {
        "name": "Longbow",
        "type": "ranged",
        "damage": 6,
        "speed": 1.625,
        "range": 7,
        "modifiers": [
          {
            "value": 6,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 6,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "lord-of-lancaster",
    "name": "Lord of Lancaster",
    "unique": true,
    "civs": [
      "hl"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/lord-of-lancaster-2.png",
    "description": "A powerful Lord of Lancaster, fights effectively and grants nearby military units +5% max health.\n+ High health.\n+ Improves nearby units.\n- Slow movement.\n- Countered by Knights, Lancers, and Crossbowmen.",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "leader",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 170,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1.125,
    "costs": {
      "food": 100,
      "wood": 0,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 160,
      "popcap": 1,
      "time": 25
    },
    "weapons": [
      {
        "name": "Great Sword",
        "type": "melee",
        "damage": 14,
        "speed": 2.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Sword",
        "type": "melee",
        "damage": 14,
        "speed": 1.375,
        "range": 0.545,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "man-at-arms",
    "name": "Man-at-Arms",
    "unique": false,
    "civs": [
      "de",
      "en",
      "fr",
      "gol",
      "hr",
      "je",
      "jin",
      "kt",
      "mo",
      "ot",
      "ru",
      "tug"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/man-at-arms-3.png",
    "description": "Tough infantry with good damage.\n+ High armor\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 155,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.125,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 110,
      "popcap": 1,
      "time": 20.5
    },
    "weapons": [
      {
        "name": "Khanda",
        "type": "melee",
        "damage": 12,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Kilij",
        "type": "melee",
        "damage": 15,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mangonel",
    "name": "Mangonel",
    "unique": false,
    "civs": [
      "ab",
      "by",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "kt",
      "ma",
      "mac",
      "mo",
      "od",
      "ot",
      "ru",
      "sen",
      "tug"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/mangonel-3.png",
    "description": "Fires multiple projectiles dealing damage in an area.\n+ Effective against massed units\n- Must be set up to fire",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 130,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 400,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 3,
      "time": 40
    },
    "weapons": [
      {
        "name": "Mangonel",
        "type": "siege",
        "damage": 10,
        "speed": 6.875,
        "range": 8,
        "modifiers": [
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 10,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      },
      {
        "name": "Adjustable Crossbars",
        "type": "siege",
        "damage": 10,
        "speed": 6.875,
        "range": 9,
        "modifiers": [
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 10,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mangudai",
    "name": "Mangudai",
    "unique": false,
    "civs": [
      "by",
      "mo"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/byzantines/mangudai-2.png",
    "description": "Confounding mobile ranged cavalry that can fire at a slower rate while moving.\n+ High rate of fire\n- Low weapon range\n\nMercenary that can be purchased per 3 units for a total of 435 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 85,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 145,
      "total": 145,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 5,
        "speed": 0.875,
        "range": 3.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "manjaniq",
    "name": "Manjaniq",
    "unique": true,
    "civs": [
      "ay"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/manjaniq-3.png",
    "description": "Fires multiple projectiles dealing damage in an area.\n+ Effective against massed units\n+ Can use Incendiary projectiles for devastating area damage\n - Must be set up to fire",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 130,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.75,
    "costs": {
      "food": 0,
      "wood": 400,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 3,
      "time": 40
    },
    "weapons": [
      {
        "name": "Mangonel",
        "type": "siege",
        "damage": 10,
        "speed": 6.875,
        "range": 8,
        "modifiers": [
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 10,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      },
      {
        "name": "Adjustable Crossbars",
        "type": "siege",
        "damage": 10,
        "speed": 6.875,
        "range": 9,
        "modifiers": [
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 30,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 10,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mansa-javelineer",
    "name": "Mansa Javelineer",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/mansa-javelineer-2.png",
    "description": "Ranged infantry effective against other ranged units. Moves faster and deals poison damage.\n+ Anti-ranged specialist\n+ Increased weapon range\n+ Comes with ranged armor\n- Low health\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 70,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.3125,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Javelin",
        "type": "ranged",
        "damage": 8,
        "speed": 2.125,
        "range": 6,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mansa-musofadi-warrior",
    "name": "Mansa Musofadi Warrior",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/mansa-musofadi-warrior-2.png",
    "description": "Infantry effective at ambush attacks and countering heavy targets. Has additional melee armor and health.\n+ Can enter stealth\n+ Anti-heavy specialist\n- Low health\n- Countered by Archers\n- Capital Town Centers, Outposts, and Scouts can spot stealth",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 105,
    "armor": {
      "melee": 4,
      "ranged": 0
    },
    "movement": 1.375,
    "costs": {
      "food": 45,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 75,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Khanda",
        "type": "melee",
        "damage": 9,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mehter",
    "name": "Mehter",
    "unique": true,
    "civs": [
      "ot"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/mehter-2.png",
    "description": "War drummer that enhances units in an area, except Villagers and Traders.\n+ War drum military enhancements\n+ High movement speed\n- No weapons",
    "displayClasses": [
      "Light Cavalry"
    ],
    "classes": [
      "cavalry",
      "horse",
      "military"
    ],
    "category": "support",
    "hp": 160,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.875,
    "costs": {
      "food": 100,
      "wood": 0,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 180,
      "popcap": 1,
      "time": 28
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 0,
        "speed": 2.125,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "militia",
    "name": "Militia",
    "unique": false,
    "civs": [
      "ru"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/militia-2.png",
    "description": "Light melee infantry equipped with a polearm.\n+ Fast moving\n- Countered by Archers\n- Can't garrison\n- Loses life over time",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 85,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5,
    "costs": {
      "food": 20,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 0,
      "time": 0
    },
    "weapons": [
      {
        "name": "Militia Axe",
        "type": "melee",
        "damage": 6,
        "speed": 1.625,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 4,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "militia-halberdier",
    "name": "Militia Halberdier",
    "unique": true,
    "civs": [
      "ru"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/militia-halberdier-2.png",
    "description": "Light melee infantry equipped with a polearm.\n+ Fast moving\n- Countered by Archers\n- Can't garrison\n- Loses life over time",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 85,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Militia Axe",
        "type": "melee",
        "damage": 6,
        "speed": 1.625,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 4,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mohe-tribesman",
    "name": "Mohe Tribesman",
    "unique": true,
    "civs": [
      "jin"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/mohe-tribesman-2.png",
    "description": "Cheap ranged cavalry excellent versus light melee infantry.\n+ Fast\n+ Cheap and quick to produce\n- Weak in melee",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 60,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 35,
      "wood": 35,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 70,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 4,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 7,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          },
          {
            "value": 1,
            "property": "rangedAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "monk",
    "name": "Monk",
    "unique": false,
    "civs": [
      "by",
      "ch",
      "en",
      "fr",
      "hl",
      "je",
      "jin",
      "kt",
      "mac",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/monk-3.png",
    "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Slow movement speed",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 150,
      "popcap": 1,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mounted-samurai",
    "name": "Mounted Samurai",
    "unique": true,
    "civs": [
      "ja",
      "sen"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/mounted-samurai-3.png",
    "description": "Expensive cavalry with high damage and a powerful charge attack. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Heavy armor\n+ Deflective Armor recharges out of combat\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 230,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 140,
      "wood": 0,
      "gold": 110,
      "stone": 0,
      "oliveoil": 0,
      "total": 250,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Katana",
        "type": "melee",
        "damage": 24,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 36,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "mounted-samurai-levy",
    "name": "Mounted Samurai Levy",
    "unique": false,
    "civs": [
      "sen"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/mounted-samurai-levy-3.png",
    "description": "Expensive cavalry with high damage and a powerful charge attack.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 230,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Katana",
        "type": "melee",
        "damage": 24,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 36,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      },
      {
        "name": "Odachi",
        "type": "melee",
        "damage": 24,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 4,
            "property": "meleeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "musofadi-gunner",
    "name": "Musofadi Gunner",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/musofadi-gunner-4.png",
    "description": "Powerful ranged infantry effective at ambush attacks.\n+ Increased movement speed\n+ Can enter stealth\n+ High damage\n- High cost",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 130,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 110,
      "wood": 0,
      "gold": 130,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 41,
        "speed": 2.125,
        "range": 4,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "musofadi-warrior",
    "name": "Musofadi Warrior",
    "unique": false,
    "civs": [
      "by",
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/musofadi-warrior-2.png",
    "description": "Infantry effective at ambush attacks and countering heavy targets.\n+ Can enter stealth\n+ Anti-heavy specialist\n- Low health\n- Countered by Archers\n- Capital Town Centers, Outposts, and Scouts can spot stealth\n\nMercenary that can be purchased per 5 units for a total of 360 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "infantry_light"
    ],
    "category": "infanterie",
    "hp": 95,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 72,
      "total": 72,
      "popcap": 1,
      "time": 68
    },
    "weapons": [
      {
        "name": "Khanda",
        "type": "melee",
        "damage": 8,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "naginata-samurai",
    "name": "Naginata Samurai",
    "unique": false,
    "civs": [
      "sen"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/naginata-samurai-1.png",
    "description": "Heavy infantry with good damage and defense.\n+ Heavy armor\n- Slow move speed\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 100,
    "armor": {
      "melee": 2,
      "ranged": 3
    },
    "movement": 1.125,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 20.5
    },
    "weapons": [
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 8,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "naginata-samurai-levy",
    "name": "Naginata Samurai Levy",
    "unique": false,
    "civs": [
      "sen"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/naginata-samurai-levy-1.png",
    "description": "Heavy infantry with good damage and defense.\n+ Heavy armor\n- Slow move speed\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 100,
    "armor": {
      "melee": 2,
      "ranged": 3
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 8,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Yumi",
        "type": "ranged",
        "damage": 8,
        "speed": 0.75,
        "range": 6.5,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "nest-of-bees",
    "name": "Nest of Bees",
    "unique": false,
    "civs": [
      "by",
      "ch",
      "jin",
      "mac",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
    "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded\n\nMercenary that can be purchased for 600 Olive Oil.",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 120,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.8125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 600,
      "total": 600,
      "popcap": 3,
      "time": 40
    },
    "weapons": [
      {
        "name": "Rocket Arrow",
        "type": "siege",
        "damage": 6,
        "speed": 6.5,
        "range": 7.5,
        "modifiers": [
          {
            "value": 4,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 2,
            "property": "siegeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "onna-bugeisha",
    "name": "Onna-Bugeisha",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/onna-bugeisha-2.png",
    "description": "Light melee infantry with fast attack speed and long weapon range.\n+ Fast attack speed\n+ Fast move speed\n+ Long weapon range\n- Weak against heavy targets\n- Countered by Archers, Knights",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 85,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.5,
    "costs": {
      "food": 60,
      "wood": 0,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 80,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 6,
        "speed": 0.9,
        "range": 1,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "onna-musha",
    "name": "Onna-Musha",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/onna-musha-3.png",
    "description": "Highly mobile ranged cavalry effective against heavy units.\n+ Fast move speed\n+ Long weapon range\n+ Bonus damage vs. heavy units\n- Weak vs ranged units",
    "displayClasses": [
      "Light Ranged Cavalry"
    ],
    "classes": [
      "archer",
      "cavalry",
      "cavalry_archer",
      "horse",
      "military",
      "ranged"
    ],
    "category": "kavallerie",
    "hp": 80,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 140,
      "popcap": 1,
      "time": 24
    },
    "weapons": [
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 10,
        "speed": 2.125,
        "range": 5.5,
        "modifiers": [
          {
            "value": 9,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      },
      {
        "name": "Yumi Incendiary",
        "type": "ranged",
        "damage": 10,
        "speed": 2.125,
        "range": 5.5,
        "modifiers": [
          {
            "value": 9,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "ozutsu",
    "name": "Ozutsu",
    "unique": true,
    "civs": [
      "ja",
      "sen"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/ozutsu-4.png",
    "description": "Ranged infantry equipped with a huge gunpowder weapon that has good weapon range, siege, and splash damage.\n+ Anti-building\n+ Area damage\n- Slow move speed\n- Slow attack speed\n- Countered by Horsemen and Crossbowmen",
    "displayClasses": [
      "Heavy Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "heavy",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 160,
    "armor": {
      "melee": 0,
      "ranged": 4
    },
    "movement": 1,
    "costs": {
      "food": 85,
      "wood": 0,
      "gold": 155,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Ozutsu",
        "type": "ranged",
        "damage": 28,
        "speed": 4.75,
        "range": 6.5,
        "modifiers": [
          {
            "value": 130,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "palace-guard",
    "name": "Palace Guard",
    "unique": true,
    "civs": [
      "ch",
      "zx"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/palace-guard-3.png",
    "description": "Tough infantry with good damage. Move faster than Men-At-Arms, but with reduced armor.\n+ Heavy armor\n- Countered by Knights, Lancers, and Crossbowmen.",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 155,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 25,
      "stone": 0,
      "oliveoil": 0,
      "total": 115,
      "popcap": 1,
      "time": 20.5
    },
    "weapons": [
      {
        "name": "Guandao",
        "type": "melee",
        "damage": 12,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "prelate",
    "name": "Prelate",
    "unique": true,
    "civs": [
      "hr",
      "od"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/prelate-1.png",
    "description": "Support unit with no combat capability. Automatically inspires Villagers to greatly improve their gather rate. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 100,
      "popcap": 1,
      "time": 20
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "raider-elephant",
    "name": "Raider Elephant",
    "unique": true,
    "civs": [
      "tug"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/raider-elephant-2.png",
    "description": "Fast elephant effective at raiding, flanking, and countering ranged units. Can use the Trample ability to bypass any unit to deal damage in an area.\n+ High health\n+ Fast movement speed\n+ Charges longer distances\n- Countered by Spearmen",
    "displayClasses": [
      "Light Cavalry",
      "Elephant"
    ],
    "classes": [
      "armored",
      "cavalry",
      "elephant",
      "melee",
      "military",
      "war_elephant"
    ],
    "category": "kavallerie",
    "hp": 235,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.6,
    "costs": {
      "food": 180,
      "wood": 40,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 220,
      "popcap": 2,
      "time": 25
    },
    "weapons": [
      {
        "name": "Tusks",
        "type": "melee",
        "damage": 18,
        "speed": 2.375,
        "range": 0.75,
        "modifiers": [
          {
            "value": 18,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 18,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "ribauldequin",
    "name": "Ribauldequin",
    "unique": false,
    "civs": [
      "en",
      "fr",
      "ja",
      "je",
      "ot"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/ribauldequin-4.png",
    "description": "Five-barreled gunpowder weapon effective against massed units. Deals little damage to buildings.\n+ Can hit multiple targets in a single volley\n- Short range\n- Low ranged armor",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 215,
    "armor": {
      "melee": 10,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 350,
      "gold": 500,
      "stone": 0,
      "oliveoil": 0,
      "total": 850,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Ribauldequin",
        "type": "ranged",
        "damage": 42,
        "speed": 5.25,
        "range": 3.75,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "riddari",
    "name": "Riddari",
    "unique": true,
    "civs": [
      "mac"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/riddari-3.png",
    "description": "Cavalry with high damage and melee armor. Has an ability to throw axes from range.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Varangian Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 230,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.7,
    "costs": {
      "food": 130,
      "wood": 0,
      "gold": 110,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 24,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Rhomphaia",
        "type": "melee",
        "damage": 27,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Throwing Axe",
        "type": "melee",
        "damage": 15,
        "speed": 1.75,
        "range": 3.25,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "royal-cannon",
    "name": "Royal Cannon",
    "unique": false,
    "civs": [
      "by",
      "fr",
      "je",
      "mac"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/royal-cannon-4.png",
    "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings\n\nMercenary that can be purchased for 900 Olive Oil.",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 190,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 900,
      "total": 900,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 60,
        "speed": 5.375,
        "range": 10,
        "modifiers": [
          {
            "value": 500,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 450,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 55,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          },
          {
            "value": 55,
            "property": "siegeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "royal-culverin",
    "name": "Royal Culverin",
    "unique": false,
    "civs": [
      "fr",
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/royal-culverin-3.png",
    "description": "Long-range mobile cannon with bonus vs buildings.\n+ Effective against Defenses\n+ Does not require setup to fire",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 200,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.625,
    "costs": {
      "food": 0,
      "wood": 325,
      "gold": 550,
      "stone": 0,
      "oliveoil": 0,
      "total": 875,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 40,
        "speed": 3.625,
        "range": 10.5,
        "modifiers": [
          {
            "value": 230,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          },
          {
            "value": 215,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 50,
            "property": "siegeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          },
          {
            "value": 35,
            "property": "siegeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "royal-knight",
    "name": "Royal Knight",
    "unique": false,
    "civs": [
      "by",
      "fr",
      "je"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/royal-knight-2.png",
    "description": "Gain bonus damage for 5 seconds after charging. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nMercenary that can be purchased per 2 units for a total of 460 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 190,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 230,
      "total": 230,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 19,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "royal-ribauldequin",
    "name": "Royal Ribauldequin",
    "unique": false,
    "civs": [
      "fr",
      "je"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/royal-ribauldequin-3.png",
    "description": "Five-barreled gunpowder weapon effective against massed units. Deals little damage to buildings.\n+ Can hit multiple targets in a single volley\n- Short range\n- Low ranged armor",
    "displayClasses": [
      "Siege",
      "Gunpowder"
    ],
    "classes": [
      "gunpowder",
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 215,
    "armor": {
      "melee": 10,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 350,
      "gold": 500,
      "stone": 0,
      "oliveoil": 0,
      "total": 850,
      "popcap": 3,
      "time": 45
    },
    "weapons": [
      {
        "name": "Ribauldequin",
        "type": "ranged",
        "damage": 42,
        "speed": 5.25,
        "range": 3.75,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": true,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "rus-tribute",
    "name": "Rus Tribute",
    "unique": false,
    "civs": [
      "gol"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/rus-tribute-3.png",
    "description": "Rus heavy infantry called into service by the Golden Horde.\n+ Faster than other heavy infantry\n+ Faster attack speed\n+ Additional damage against cavalry\n- Less armored\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 200,
    "armor": {
      "melee": 2,
      "ranged": 3
    },
    "movement": 1.25,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 5
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 12,
        "speed": 1.125,
        "range": 0.295,
        "modifiers": [
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "samurai",
    "name": "Samurai",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/samurai-1.png",
    "description": "Heavy infantry with good damage and defense. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Heavy armor\n+ Deflective Armor recharges out of combat\n- Slow move speed\n- Countered by Knights, Lancers, and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 100,
    "armor": {
      "melee": 2,
      "ranged": 3
    },
    "movement": 1.125,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 8,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Odachi",
        "type": "melee",
        "damage": 8,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 4,
            "property": "meleeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "scholar",
    "name": "Scholar",
    "unique": true,
    "civs": [
      "de"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/scholar-2.png",
    "description": "Support unit with no combat capability. Can be garrisoned in a Mosque or Madrasa to research technology more quickly. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 135,
      "stone": 0,
      "oliveoil": 0,
      "total": 135,
      "popcap": 1,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "scout",
    "name": "Scout",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "jin",
      "kt",
      "ma",
      "mac",
      "mo",
      "od",
      "ot",
      "ru",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/scout-1.png",
    "description": "Lightly armed cavalry effective at exploring the world, hunting wildlife, and herding Sheep.\n+ Able to see into Stealth Forests\n+ Health regeneration\n+ High movement speed\n- Very weak in combat",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 110,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 65,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 65,
      "popcap": 1,
      "time": 23
    },
    "weapons": [
      {
        "name": "Short Sword",
        "type": "melee",
        "damage": 1,
        "speed": 2,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "scout"
              ]
            ]
          },
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "serjeant",
    "name": "Serjeant",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/serjeant-2.png",
    "description": "Sturdy infantry that throws axes which deal melee damage from range.\n+ Strong versus melee units\n- Weak versus ranged units",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 105,
    "armor": {
      "melee": 4,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 70,
      "wood": 0,
      "gold": 50,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 20.5
    },
    "weapons": [
      {
        "name": "Throwing Axe",
        "type": "melee",
        "damage": 10,
        "speed": 2,
        "range": 4,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "shaman",
    "name": "Shaman",
    "unique": false,
    "civs": [
      "gol",
      "mo"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/shaman-3.png",
    "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 150,
      "popcap": 1,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "shaolin-monk",
    "name": "Shaolin Monk",
    "unique": true,
    "civs": [
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/shaolin-monk-3.png",
    "description": "Monk with strong combat capabilities.\n+ Strong against ranged units \n+ Can heal themselves\n- Cannot heal others",
    "displayClasses": [
      "Battle Monk"
    ],
    "classes": [
      "infantry",
      "melee_infantry",
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 170,
    "armor": {
      "melee": 2,
      "ranged": 0
    },
    "movement": 1.1875,
    "costs": {
      "food": 200,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 200,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "Bo Staff",
        "type": "melee",
        "damage": 15,
        "speed": 0.75,
        "range": 0.3325,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "shinobi",
    "name": "Shinobi",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
    "description": "Melee infantry that specializes in scouting, sabotage, and assassination.\n+ Disguise as enemy Villagers\n+ Bonus damage vs. melee\n+ Health regeneration\n- Capital Town Centers, Outposts, and Scouts can spot disguises\n\nHeals passively.",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 80,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 20
    },
    "weapons": [
      {
        "name": "Wakizashi",
        "type": "melee",
        "damage": 20,
        "speed": 1.25,
        "range": 0.295,
        "modifiers": [
          {
            "value": 5,
            "property": "meleeAttack",
            "groups": [
              [
                "melee"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "shinto-priest",
    "name": "Shinto Priest",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/shinto-priest-3.png",
    "description": "Support unit with unique privileges to hold and deposit Yorishiro into buildings. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Yorishiro provide unique bonuses\n+ Heals friendly units\n- Slow move speed",
    "displayClasses": [
      "Religious"
    ],
    "classes": [
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 150,
      "stone": 0,
      "oliveoil": 0,
      "total": 150,
      "popcap": 1,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "siege-tower",
    "name": "Siege Tower",
    "unique": false,
    "civs": [
      "by",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "jin",
      "kt",
      "ma",
      "mac",
      "mo",
      "od",
      "ot",
      "ru",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/siege-tower-3.png",
    "description": "Tall infantry transport with no combat capability. Allows garrisoned infantry to be unloaded directly onto Stone Walls.\n+ High ranged armor\n- Cannot attack\n- Slow movement speed",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 480,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.8125,
    "costs": {
      "food": 0,
      "wood": 125,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 125,
      "popcap": 1,
      "time": 30
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "sipahi",
    "name": "Sipahi",
    "unique": false,
    "civs": [
      "by",
      "ot"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/sipahi-2.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Can gain attack speed at the cost of melee defense.\n+ High movement speed\n+ Strong against ranged units\n- Weak against melee units\n- Countered by Spearmen\n\nMercenary that can be purchased per 3 units for a total of 450 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military"
    ],
    "category": "kavallerie",
    "hp": 145,
    "armor": {
      "melee": 0,
      "ranged": 2
    },
    "movement": 1.75,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 150,
      "total": 150,
      "popcap": 1,
      "time": 80
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 12,
        "speed": 1.75,
        "range": 0.75,
        "modifiers": [
          {
            "value": 12,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "sofa",
    "name": "Sofa",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/sofa-2.png",
    "description": "Cheaper heavy cavalry for reduced health and armor.\n+ High movement speed\n+ Cheaper cost\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "heavy",
      "horse",
      "melee",
      "military"
    ],
    "category": "kavallerie",
    "hp": 160,
    "armor": {
      "melee": 2,
      "ranged": 2
    },
    "movement": 1.725,
    "costs": {
      "food": 120,
      "wood": 0,
      "gold": 60,
      "stone": 0,
      "oliveoil": 0,
      "total": 180,
      "popcap": 1,
      "time": 26
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 17,
        "speed": 1.625,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 2,
            "property": "meleeAttack",
            "groups": [
              [
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "spearman",
    "name": "Spearman",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "jin",
      "kt",
      "mo",
      "ot",
      "ru",
      "sen",
      "tug",
      "zx"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/spearman-1.png",
    "description": "Infantry best used against mounted units.\n+ Anti-cavalry specialist\n+ Additional damage against Elephants\n- Weak against heavy infantry\n- Countered by Archers",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 80,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 60,
      "wood": 20,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 80,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 7,
        "speed": 1.875,
        "range": 0.295,
        "modifiers": [
          {
            "value": 17,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "spearman-levy",
    "name": "Spearman Levy",
    "unique": false,
    "civs": [
      "sen"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/spearman-levy-1.png",
    "description": "Infantry best used against mounted units.\n+ Anti-cavalry specialist\n+ Additional damage against Elephants\n- Weak against heavy infantry\n- Countered by Archers",
    "displayClasses": [
      "Light Melee Infantry"
    ],
    "classes": [
      "infantry",
      "infantry_light",
      "light_melee_infantry",
      "melee",
      "melee_infantry",
      "military",
      "spearman"
    ],
    "category": "infanterie",
    "hp": 80,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.25,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 7,
        "speed": 1.875,
        "range": 0.295,
        "modifiers": [
          {
            "value": 17,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 3,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 20,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "springald",
    "name": "Springald",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "by",
      "ch",
      "de",
      "en",
      "fr",
      "gol",
      "hl",
      "hr",
      "ja",
      "je",
      "kt",
      "ma",
      "mac",
      "mo",
      "od",
      "ot",
      "ru",
      "sen",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/springald-3.png",
    "description": "Anti-unit siege weapon. Fires bolts that pierce multiple units.\n+ Does not require setup to fire\n+ Bonus damage vs. melee infantry\n- Trivial damage vs. buildings",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 85,
    "armor": {
      "melee": 3,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 150,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 250,
      "popcap": 2,
      "time": 20
    },
    "weapons": [
      {
        "name": "Springald",
        "type": "ranged",
        "damage": 15,
        "speed": 3.125,
        "range": 7.5,
        "modifiers": [
          {
            "value": 12,
            "property": "rangedAttack",
            "groups": [
              [
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 65,
            "property": "rangedAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "streltsy",
    "name": "Streltsy",
    "unique": false,
    "civs": [
      "by",
      "ru"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/streltsy-4.png",
    "description": "Most powerful ranged infantry with reasonable melee capabilities. Increased attack speed while stationary.\n+ High damage\n+ Lower cost than Handcannoneer\n- Slow movement speed\n\nMercenary that can be purchased per 3 units for a total of 720 Olive Oil.\n\nRequires the Western Mercenary Contract.",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 130,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 240,
      "total": 240,
      "popcap": 1,
      "time": 90
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 38,
        "speed": 2.125,
        "range": 4,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "sultans-elite-tower-elephant",
    "name": "Sultan's Elite Tower Elephant",
    "unique": true,
    "civs": [
      "de"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/sultans-elite-tower-elephant-3.png",
    "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with Handcannoneers\n+ Capable of attacking Stone Walls\n- Slow movement speed",
    "displayClasses": [
      "Ranged Cavalry",
      "Elephant"
    ],
    "classes": [
      "cavalry",
      "cavalry_archer",
      "elephant",
      "gunpowder",
      "melee",
      "military",
      "ranged",
      "war_elephant"
    ],
    "category": "kavallerie",
    "hp": 600,
    "armor": {
      "melee": 0,
      "ranged": 7
    },
    "movement": 0.875,
    "costs": {
      "food": 400,
      "wood": 0,
      "gold": 600,
      "stone": 0,
      "oliveoil": 0,
      "total": 1000,
      "popcap": 3,
      "time": 200
    },
    "weapons": [
      {
        "name": "Tusks",
        "type": "melee",
        "damage": 30,
        "speed": 2.875,
        "range": 1,
        "modifiers": [
          {
            "value": 40,
            "property": "meleeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      },
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 38,
        "speed": 1.625,
        "range": 5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "szlachta-cavalry",
    "name": "Szlachta Cavalry",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/szlachta-cavalry-4.png",
    "description": "Expensive cavalry with high damage and ranged armor. Slows enemy's attack speed when attacking.\n+ Heavy armor\n+ Strong versus Light Infantry\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 330,
    "armor": {
      "melee": 2,
      "ranged": 8
    },
    "movement": 1.725,
    "costs": {
      "food": 180,
      "wood": 0,
      "gold": 120,
      "stone": 0,
      "oliveoil": 0,
      "total": 300,
      "popcap": 1,
      "time": 40
    },
    "weapons": [
      {
        "name": "War Hammer",
        "type": "melee",
        "damage": 30,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 8,
            "property": "meleeAttack",
            "groups": [
              [
                "infantry",
                "light"
              ]
            ]
          }
        ]
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 45,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": [
          {
            "value": 8,
            "property": "meleeAttack",
            "groups": [
              [
                "infantry",
                "light"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "tanegashima-ashigaru",
    "name": "Tanegashima Ashigaru",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/tanegashima-ashigaru-3.png",
    "description": "Powerful ranged infantry that is effective against armored units.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 95,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 70,
      "wood": 0,
      "gold": 70,
      "stone": 0,
      "oliveoil": 0,
      "total": 140,
      "popcap": 1,
      "time": 24
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 15,
        "speed": 2.5,
        "range": 4.5,
        "modifiers": [
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "tanegashima-ashigaru-levy",
    "name": "Tanegashima Ashigaru Levy",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/tanegashima-ashigaru-levy-3.png",
    "description": "Powerful ranged infantry that is effective against armored units.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Ranged Gunpowder Infantry"
    ],
    "classes": [
      "gunpowder",
      "handcannon",
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 90,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Handcannon",
        "type": "ranged",
        "damage": 15,
        "speed": 2.5,
        "range": 4.5,
        "modifiers": [
          {
            "value": 10,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "templar-brother",
    "name": "Templar Brother",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/templar-brother-3.png",
    "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 275,
    "armor": {
      "melee": 4,
      "ranged": 4
    },
    "movement": 1.625,
    "costs": {
      "food": 120,
      "wood": 0,
      "gold": 140,
      "stone": 0,
      "oliveoil": 0,
      "total": 260,
      "popcap": 1,
      "time": 38
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 24,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 36,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "teutonic-knight",
    "name": "Teutonic Knight",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/teutonic-knight-4.png",
    "description": "Extremely powerful and Expensive Heavy Infantry. Lowers the armor of nearby enemy units. Becomes more powerful after defeating an enemy.\n+ Excellent in melee combat\n- Weak to Crossbowmen\n- Low Mobility",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 310,
    "armor": {
      "melee": 6,
      "ranged": 6
    },
    "movement": 0.975,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 180,
      "popcap": 1,
      "time": 28
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 24,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "torguud",
    "name": "Torguud",
    "unique": true,
    "civs": [
      "gol"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/torguud-2.png",
    "description": "Expensive cavalry with high health and melee armor. Effective against melee units. Protects the Khan when nearby by redirecting damage to themselves and can heal the Khan while out of combat. \n+ Heavy armor\n+ High Health\n+ Automatically improves with each Age\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 220,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 75,
      "wood": 0,
      "gold": 0,
      "stone": 100,
      "oliveoil": 0,
      "total": 175,
      "popcap": 1,
      "time": 60
    },
    "weapons": [
      {
        "name": "Mace",
        "type": "melee",
        "damage": 10,
        "speed": 1.375,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Lance",
        "type": "melee",
        "damage": 15,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "tower-elephant",
    "name": "Tower Elephant",
    "unique": false,
    "civs": [
      "by",
      "de"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/tower-elephant-4.png",
    "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with powerful Archers\n+ Capable of attacking Stone Walls\n- Slow movement speed\n\nMercenary that can be purchased for 1000 Olive Oil.\n\nRequires the Eastern Mercenary Contract.",
    "displayClasses": [
      "Ranged Cavalry",
      "Elephant"
    ],
    "classes": [
      "cavalry",
      "elephant",
      "melee",
      "military",
      "ranged",
      "war_elephant",
      "cavalry_archer"
    ],
    "category": "kavallerie",
    "hp": 600,
    "armor": {
      "melee": 0,
      "ranged": 7
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 1000,
      "total": 1000,
      "popcap": 3,
      "time": 130
    },
    "weapons": [
      {
        "name": "Tusks",
        "type": "melee",
        "damage": 30,
        "speed": 2.875,
        "range": 1,
        "modifiers": [
          {
            "value": 40,
            "property": "meleeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      },
      {
        "name": "Bow",
        "type": "ranged",
        "damage": 15,
        "speed": 1.375,
        "range": 5,
        "modifiers": []
      },
      {
        "name": "Crossbow",
        "type": "ranged",
        "damage": 15,
        "speed": 1.375,
        "range": 5,
        "modifiers": [
          {
            "value": 12,
            "property": "rangedAttack",
            "groups": [
              [
                "heavy"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "tower-of-the-sultan",
    "name": "Tower of the Sultan",
    "unique": true,
    "civs": [
      "ay"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/tower-of-the-sultan-3.png",
    "description": "Massive infantry transport effective against buildings and walls. Move speed increases for each unit garrisoned inside.\n+ Fires arrows\n+ High ranged armor\n+ High health\n- Slow move speed when empty",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 800,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.5,
    "costs": {
      "food": 0,
      "wood": 650,
      "gold": 350,
      "stone": 0,
      "oliveoil": 0,
      "total": 1000,
      "popcap": 3,
      "time": 140
    },
    "weapons": [
      {
        "name": "Ram",
        "type": "siege",
        "damage": 600,
        "speed": 8.125,
        "range": 0.5375,
        "modifiers": [
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "wall"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "traction-trebuchet",
    "name": "Traction Trebuchet",
    "unique": true,
    "civs": [
      "gol",
      "jin",
      "mo"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/traction-trebuchet-3.png",
    "description": "Powerful siege engine effective at destroying buildings and walls over a long distance.\n+ Bonus damage vs buildings\n+ High mobility\n- Must be set up to fire\n- Inaccurate against units",
    "displayClasses": [
      "Siege"
    ],
    "classes": [
      "military",
      "siege"
    ],
    "category": "belagerung",
    "hp": 125,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0.875,
    "costs": {
      "food": 0,
      "wood": 300,
      "gold": 100,
      "stone": 0,
      "oliveoil": 0,
      "total": 400,
      "popcap": 2,
      "time": 30
    },
    "weapons": [
      {
        "name": "Trebuchet",
        "type": "siege",
        "damage": 40,
        "speed": 8.625,
        "range": 14,
        "modifiers": [
          {
            "value": 190,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 190,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "uma-bannerman",
    "name": "Uma Bannerman",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/uma-bannerman-2.png",
    "description": "Mounted Samurai with an aura that increases damage of cavalry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Fast move speed\n+ Heavy armor\n- Countered by Spearmen and Crossbowmen",
    "displayClasses": [
      "Heavy Melee Cavalry"
    ],
    "classes": [
      "armored",
      "cavalry",
      "cavalry_armored",
      "heavy",
      "horse",
      "knight",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "support",
    "hp": 230,
    "armor": {
      "melee": 3,
      "ranged": 3
    },
    "movement": 1.625,
    "costs": {
      "food": 140,
      "wood": 0,
      "gold": 110,
      "stone": 0,
      "oliveoil": 0,
      "total": 250,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Katana",
        "type": "melee",
        "damage": 16,
        "speed": 1.5,
        "range": 0.2875,
        "modifiers": []
      },
      {
        "name": "Naginata",
        "type": "melee",
        "damage": 24,
        "speed": 0.525,
        "range": 1.0375,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "varangian-guard",
    "name": "Varangian Guard",
    "unique": true,
    "civs": [
      "by",
      "mac"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/varangian-guard-3.png",
    "description": "Tough infantry with good damage. Can use Berserking to increase damage for reduced armor.\n+ Heavy armor\n+ Increases armor of Transports\n+ Disembarking from Transport Ships grants move speed\n+ Increased armor near allied Wonders\n- Slow move speed\n- Countered by Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry",
      "Heavy Melee Varangian Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 140,
    "armor": {
      "melee": 5,
      "ranged": 4
    },
    "movement": 1.125,
    "costs": {
      "food": 80,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 13,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      },
      {
        "name": "Ax",
        "type": "melee",
        "damage": 13,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": true,
      "formation": false
    }
  },
  {
    "id": "venetian-galley",
    "name": "Venetian Galley",
    "unique": true,
    "civs": [
      "kt"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/venetian-galley-4.png",
    "description": "Large oared vessel with a long range forward mounted Trebuchet.\n+ Long Range\n+ Anti-structure specialist",
    "displayClasses": [
      "Trebuchet Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 700,
    "armor": {
      "melee": 0,
      "ranged": 1
    },
    "movement": 1,
    "costs": {
      "food": 0,
      "wood": 360,
      "gold": 300,
      "stone": 0,
      "oliveoil": 0,
      "total": 660,
      "popcap": 5,
      "time": 50
    },
    "weapons": [
      {
        "name": "Trebuchet",
        "type": "siege",
        "damage": 25,
        "speed": 11.375,
        "range": 16,
        "modifiers": [
          {
            "value": 200,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          },
          {
            "value": 100,
            "property": "siegeAttack",
            "groups": [
              [
                "naval",
                "unit"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "war-canoe",
    "name": "War Canoe",
    "unique": false,
    "civs": [
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/war-canoe-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 110,
      "wood": 200,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 340,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "war-cog",
    "name": "War Cog",
    "unique": true,
    "civs": [
      "fr",
      "je"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/war-cog-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 4
    },
    "movement": 1.375,
    "costs": {
      "food": 75,
      "wood": 200,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 305,
      "popcap": 3,
      "time": 30
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      },
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 40,
        "speed": 4.125,
        "range": 8,
        "modifiers": [
          {
            "value": 45,
            "property": "siegeAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 80,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "war-elephant",
    "name": "War Elephant",
    "unique": false,
    "civs": [
      "by",
      "de",
      "tug"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/war-elephant-3.png",
    "description": "Heavy cavalry effective against cavalry, siege engines, walls, and buildings.\n+ High health and armor\n+ Mounted with an advanced Spearman\n+ Capable of attacking Stone Walls\n- Slow movement speed\n\nMercenary that can be purchased for 680 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Heavy Melee Cavalry",
      "Elephant"
    ],
    "classes": [
      "armored",
      "cavalry",
      "elephant",
      "heavy",
      "melee",
      "military",
      "war_elephant"
    ],
    "category": "kavallerie",
    "hp": 800,
    "armor": {
      "melee": 4,
      "ranged": 5
    },
    "movement": 1,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 680,
      "total": 680,
      "popcap": 3,
      "time": 100
    },
    "weapons": [
      {
        "name": "Tusks",
        "type": "melee",
        "damage": 50,
        "speed": 2.875,
        "range": 1,
        "modifiers": [
          {
            "value": 45,
            "property": "meleeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      },
      {
        "name": "Charge",
        "type": "melee",
        "damage": 80,
        "speed": 1.375,
        "range": 1,
        "modifiers": []
      },
      {
        "name": "Spear",
        "type": "melee",
        "damage": 25,
        "speed": 1.875,
        "range": 1.25,
        "modifiers": [
          {
            "value": 40,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          },
          {
            "value": 6,
            "property": "meleeAttack",
            "groups": [
              [
                "war",
                "elephant"
              ]
            ]
          },
          {
            "value": 34,
            "property": "meleeAttack",
            "groups": [
              [
                "worker",
                "elephant"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "war-junk",
    "name": "War Junk",
    "unique": false,
    "civs": [
      "ch",
      "gol",
      "ja",
      "jin",
      "mo",
      "sen",
      "zx"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/war-junk-2.png",
    "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
    "displayClasses": [
      "Springald Ship"
    ],
    "classes": [
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 450,
    "armor": {
      "melee": 0,
      "ranged": 3
    },
    "movement": 1.375,
    "costs": {
      "food": 110,
      "wood": 200,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 340,
      "popcap": 3,
      "time": 25
    },
    "weapons": [
      {
        "name": "Ballista",
        "type": "ranged",
        "damage": 35,
        "speed": 4.125,
        "range": 6,
        "modifiers": [
          {
            "value": 45,
            "property": "rangedAttack",
            "groups": [
              [
                "archer",
                "ship"
              ]
            ]
          },
          {
            "value": 55,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "warrior-monk",
    "name": "Warrior Monk",
    "unique": true,
    "civs": [
      "ru"
    ],
    "minAge": 3,
    "icon": "https://data.aoe4world.com/images/units/warrior-monk-3.png",
    "description": "Military-minded support unit that improves combat capabilities of nearby units after it attacks. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n+ High utility in large armies\n- Low damage",
    "displayClasses": [
      "Religious Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "military",
      "monk"
    ],
    "category": "support",
    "hp": 190,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.625,
    "costs": {
      "food": 40,
      "wood": 0,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 240,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 11,
        "speed": 1.75,
        "range": 0.75,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "warrior-scout",
    "name": "Warrior Scout",
    "unique": true,
    "civs": [
      "ma"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/warrior-scout-2.png",
    "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak in combat",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 110,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.75,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 90,
      "popcap": 1,
      "time": 14
    },
    "weapons": [
      {
        "name": "Tamba",
        "type": "melee",
        "damage": 7,
        "speed": 2,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "scout"
              ]
            ]
          },
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "warship",
    "name": "Warship",
    "unique": false,
    "civs": [
      "mac"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/warship-4.png",
    "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
    "displayClasses": [
      "Warship"
    ],
    "classes": [
      "gunpowder",
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 700,
    "armor": {
      "melee": 0,
      "ranged": 5
    },
    "movement": 1.25,
    "costs": {
      "food": 200,
      "wood": 200,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 5,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 45,
        "speed": 5.625,
        "range": 9,
        "modifiers": [
          {
            "value": 70,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      },
      {
        "name": "Chain Shot",
        "type": "ranged",
        "damage": 35,
        "speed": 5.625,
        "range": 9,
        "modifiers": [
          {
            "value": 70,
            "property": "rangedAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "wynguard-army",
    "name": "Wynguard Army",
    "unique": false,
    "civs": [
      "en",
      "hl"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/wynguard-army-1.png",
    "description": "Produces an army of 2 Spearmen, 2 Crossbowmen, and a Trebuchet.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 100,
      "wood": 100,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 400,
      "popcap": 6,
      "time": 55
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "wynguard-footman",
    "name": "Wynguard Footman",
    "unique": false,
    "civs": [
      "en"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/wynguard-footman-4.png",
    "description": "Specialized man at arms with high health and pierce armor.\n- Slow movement\n- Countered by Crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 280,
    "armor": {
      "melee": 3,
      "ranged": 6
    },
    "movement": 1.125,
    "costs": {
      "food": 60,
      "wood": 0,
      "gold": 40,
      "stone": 0,
      "oliveoil": 0,
      "total": 100,
      "popcap": 1,
      "time": 35
    },
    "weapons": [
      {
        "name": "Ax",
        "type": "melee",
        "damage": 20,
        "speed": 1.625,
        "range": 0.295,
        "modifiers": [
          {
            "value": 5,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "wynguard-footmen",
    "name": "Wynguard Footmen",
    "unique": false,
    "civs": [
      "en"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/wynguard-footmen-1.png",
    "description": "Produces an army of 6 Wynguard Footmen.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 300,
      "wood": 0,
      "gold": 400,
      "stone": 0,
      "oliveoil": 0,
      "total": 700,
      "popcap": 6,
      "time": 45
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "wynguard-raiders",
    "name": "Wynguard Raiders",
    "unique": false,
    "civs": [
      "en"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/wynguard-raiders-1.png",
    "description": "Produces an army of 3 Horsemen and 3 Knights.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 650,
      "wood": 0,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 850,
      "popcap": 6,
      "time": 25
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "wynguard-ranger",
    "name": "Wynguard Ranger",
    "unique": true,
    "civs": [
      "en"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/wynguard-ranger-4.png",
    "description": "Master longbowmen with increased range and damage, good vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 125,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 40,
      "wood": 50,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 90,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Longbow",
        "type": "ranged",
        "damage": 12,
        "speed": 1.625,
        "range": 8,
        "modifiers": [
          {
            "value": 12,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 12,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "wynguard-rangers",
    "name": "Wynguard Rangers",
    "unique": false,
    "civs": [
      "en"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/wynguard-rangers-1.png",
    "description": "Produces an army of 6 Wynguard Rangers.",
    "displayClasses": [
      "Mixed Force Army"
    ],
    "classes": [
      "archer",
      "infantry",
      "military",
      "ranged"
    ],
    "category": "support",
    "hp": 0,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 0,
    "costs": {
      "food": 0,
      "wood": 450,
      "gold": 300,
      "stone": 0,
      "oliveoil": 0,
      "total": 750,
      "popcap": 6,
      "time": 45
    },
    "weapons": [],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": true
    }
  },
  {
    "id": "xebec",
    "name": "Xebec",
    "unique": false,
    "civs": [
      "ab",
      "ay",
      "de",
      "tug"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/xebec-4.png",
    "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
    "displayClasses": [
      "Warship"
    ],
    "classes": [
      "gunpowder",
      "massive",
      "military",
      "naval_military",
      "naval_unit",
      "ranged",
      "ship"
    ],
    "category": "marine",
    "hp": 700,
    "armor": {
      "melee": 0,
      "ranged": 5
    },
    "movement": 1.25,
    "costs": {
      "food": 200,
      "wood": 200,
      "gold": 200,
      "stone": 0,
      "oliveoil": 0,
      "total": 600,
      "popcap": 5,
      "time": 45
    },
    "weapons": [
      {
        "name": "Cannon",
        "type": "siege",
        "damage": 45,
        "speed": 5.625,
        "range": 9,
        "modifiers": [
          {
            "value": 70,
            "property": "siegeAttack",
            "groups": [
              [
                "building"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yari-cavalry",
    "name": "Yari Cavalry",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/yari-cavalry-2.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Bonus damage against cavalry.\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 135,
    "armor": {
      "melee": 0,
      "ranged": 2
    },
    "movement": 1.875,
    "costs": {
      "food": 115,
      "wood": 30,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 145,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 9,
        "speed": 1.75,
        "range": 0.375,
        "modifiers": [
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          },
          {
            "value": 2,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yari-cavalry-levy",
    "name": "Yari Cavalry Levy",
    "unique": false,
    "civs": [
      "sen"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/yari-cavalry-levy-1.png",
    "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Bonus damage against cavalry.\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military",
      "military_cavalry"
    ],
    "category": "kavallerie",
    "hp": 135,
    "armor": {
      "melee": 0,
      "ranged": 2
    },
    "movement": 1.875,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Spear",
        "type": "melee",
        "damage": 9,
        "speed": 1.75,
        "range": 0.375,
        "modifiers": [
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "ranged"
              ]
            ]
          },
          {
            "value": 9,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          },
          {
            "value": 2,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yeoman",
    "name": "Yeoman",
    "unique": true,
    "civs": [
      "hl"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/yeoman-2.png",
    "description": "Quick and long-ranged infantry with good damage vs. unarmored targets.\n+ Long Range\n+ Fast movement speed\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 70,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.3125,
    "costs": {
      "food": 50,
      "wood": 45,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 95,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Longbow",
        "type": "ranged",
        "damage": 5,
        "speed": 1.625,
        "range": 6,
        "modifiers": [
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yuan-raider",
    "name": "Yuan Raider",
    "unique": true,
    "civs": [
      "zx"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/yuan-raider-4.png",
    "description": "Extremely swift light cavalry which deals bonus damage to economic units.\n+ Fast move speed\n+ Bonus damage vs Villagers\n- Weak in melee combat\n- Countered by Spearmen\n\nRequires Dynastic Protectors researched at Zhu Xi's Library.",
    "displayClasses": [
      "Light Melee Cavalry"
    ],
    "classes": [
      "cavalry",
      "cavalry_light",
      "horse",
      "melee",
      "military"
    ],
    "category": "kavallerie",
    "hp": 200,
    "armor": {
      "melee": 0,
      "ranged": 4
    },
    "movement": 2,
    "costs": {
      "food": 80,
      "wood": 20,
      "gold": 20,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 22.5
    },
    "weapons": [
      {
        "name": "Sword",
        "type": "melee",
        "damage": 15,
        "speed": 1.625,
        "range": 0.2875,
        "modifiers": [
          {
            "value": 5,
            "property": "meleeAttack",
            "groups": [
              [
                "worker"
              ]
            ]
          },
          {
            "value": 10,
            "property": "meleeAttack",
            "groups": [
              [
                "siege"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yumi-ashigaru",
    "name": "Yumi Ashigaru",
    "unique": true,
    "civs": [
      "ja",
      "sen"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/yumi-ashigaru-2.png",
    "description": "Quick and cheap ranged infantry with good damage vs. unarmored targets.\n+ Increased move speed\n+ Cheaper than Archers\n- Reduced health\n- Weak against high ranged armor targets\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 65,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.375,
    "costs": {
      "food": 30,
      "wood": 35,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 65,
      "popcap": 1,
      "time": 13
    },
    "weapons": [
      {
        "name": "Yumi",
        "type": "ranged",
        "damage": 4,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      },
      {
        "name": "Yumi Incendiary",
        "type": "ranged",
        "damage": 4,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yumi-ashigaru-levy",
    "name": "Yumi Ashigaru Levy",
    "unique": true,
    "civs": [
      "sen"
    ],
    "minAge": 1,
    "icon": "https://data.aoe4world.com/images/units/yumi-ashigaru-levy-1.png",
    "description": "Quick and cheap ranged infantry with good damage vs. unarmored targets.\n+ Increased move speed\n+ Cheaper than Archers\n- Reduced health\n- Weak against high ranged armor targets\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 65,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.375,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 0,
      "total": 0,
      "popcap": 1,
      "time": 0
    },
    "weapons": [
      {
        "name": "Yumi",
        "type": "ranged",
        "damage": 4,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      },
      {
        "name": "Yumi Incendiary",
        "type": "ranged",
        "damage": 4,
        "speed": 1.625,
        "range": 5,
        "modifiers": [
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 4,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      },
      {
        "name": "Bow",
        "type": "siege",
        "damage": 3,
        "speed": 1.625,
        "range": 5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "yumi-bannerman",
    "name": "Yumi Bannerman",
    "unique": true,
    "civs": [
      "ja"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/yumi-bannerman-2.png",
    "description": "Ranged Samurai with an aura that increases damage of ranged infantry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Fast move speed\n- Weak against high ranged armor targets\n- Countered by Horsemen",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "archer",
      "armored",
      "heavy",
      "infantry",
      "infantry_light",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "support",
    "hp": 140,
    "armor": {
      "melee": 1,
      "ranged": 1
    },
    "movement": 1.375,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 30,
      "stone": 0,
      "oliveoil": 0,
      "total": 120,
      "popcap": 1,
      "time": 15
    },
    "weapons": [
      {
        "name": "Yumi",
        "type": "ranged",
        "damage": 5,
        "speed": 1.625,
        "range": 5.25,
        "modifiers": [
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      },
      {
        "name": "Yumi Incendiary",
        "type": "ranged",
        "damage": 5,
        "speed": 1.625,
        "range": 5.25,
        "modifiers": [
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "melee",
                "infantry"
              ]
            ]
          },
          {
            "value": 5,
            "property": "rangedAttack",
            "groups": [
              [
                "light",
                "gunpowder",
                "infantry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  },
  {
    "id": "zhanma-swordsman",
    "name": "Zhanma Swordsman",
    "unique": true,
    "civs": [
      "jin"
    ],
    "minAge": 4,
    "icon": "https://data.aoe4world.com/images/units/zhanma-swordsman-4.png",
    "description": "Elite heavy melee infantry, high damage and durability.\n+ Strong versus cavalry\n- Weak against crossbowmen",
    "displayClasses": [
      "Heavy Melee Infantry"
    ],
    "classes": [
      "armored",
      "heavy",
      "infantry",
      "manatarms",
      "melee",
      "melee_infantry",
      "military"
    ],
    "category": "infanterie",
    "hp": 250,
    "armor": {
      "melee": 5,
      "ranged": 5
    },
    "movement": 1.25,
    "costs": {
      "food": 90,
      "wood": 0,
      "gold": 80,
      "stone": 0,
      "oliveoil": 0,
      "total": 170,
      "popcap": 1,
      "time": 28
    },
    "weapons": [
      {
        "name": "Zhanmadao",
        "type": "melee",
        "damage": 20,
        "speed": 1.375,
        "range": 0.295,
        "modifiers": [
          {
            "value": 12,
            "property": "meleeAttack",
            "groups": [
              [
                "cavalry"
              ]
            ]
          }
        ]
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": true,
      "formation": false
    }
  },
  {
    "id": "zhuge-nu",
    "name": "Zhuge Nu",
    "unique": false,
    "civs": [
      "by",
      "ch",
      "zx"
    ],
    "minAge": 2,
    "icon": "https://data.aoe4world.com/images/units/zhuge-nu-2.png",
    "description": "Fires bolts with a ferocious damage potential against enemy units.\n+ High rate of fire\n- Ineffective vs high ranged armor targets\n- Countered by Horsemen\n\nMercenary that can be purchased per 5 units for a total of 360 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
    "displayClasses": [
      "Light Ranged Infantry"
    ],
    "classes": [
      "infantry",
      "military",
      "ranged",
      "ranged_infantry"
    ],
    "category": "fernkampf",
    "hp": 70,
    "armor": {
      "melee": 0,
      "ranged": 0
    },
    "movement": 1.125,
    "costs": {
      "food": 0,
      "wood": 0,
      "gold": 0,
      "stone": 0,
      "oliveoil": 72,
      "total": 72,
      "popcap": 1,
      "time": 67
    },
    "weapons": [
      {
        "name": "Repeater Crossbow",
        "type": "ranged",
        "damage": 4,
        "speed": 1.75,
        "range": 4.5,
        "modifiers": []
      }
    ],
    "flags": {
      "splash": false,
      "antiInfantryMelee": false,
      "formation": false
    }
  }
];

export const civilizations = [
  {
    "code": "ab",
    "id": "abbasid_dynasty",
    "name": "Abbasid Dynasty",
    "slug": "abbasid",
    "expansion": "base"
  },
  {
    "code": "ay",
    "id": "ayyubids",
    "name": "Ayyubids",
    "slug": "ayyubids",
    "expansion": "sultans-ascend"
  },
  {
    "code": "by",
    "id": "byzantines",
    "name": "Byzantines",
    "slug": "byzantines",
    "expansion": "sultans-ascend"
  },
  {
    "code": "ch",
    "id": "chinese",
    "name": "Chinese",
    "slug": "chinese",
    "expansion": "base"
  },
  {
    "code": "de",
    "id": "delhi_sultanate",
    "name": "Delhi Sultanate",
    "slug": "delhi",
    "expansion": "base"
  },
  {
    "code": "en",
    "id": "english",
    "name": "English",
    "slug": "english",
    "expansion": "base"
  },
  {
    "code": "fr",
    "id": "french",
    "name": "French",
    "slug": "french",
    "expansion": "base"
  },
  {
    "code": "gol",
    "id": "golden_horde",
    "name": "Golden Horde",
    "slug": "goldenhorde",
    "expansion": "dynasties-of-the-east"
  },
  {
    "code": "hr",
    "id": "holy_roman_empire",
    "name": "Holy Roman Empire",
    "slug": "hre",
    "expansion": "base"
  },
  {
    "code": "hl",
    "id": "house_of_lancaster",
    "name": "House of Lancaster",
    "slug": "lancaster",
    "expansion": "knights-of-cross-and-rose"
  },
  {
    "code": "ja",
    "id": "japanese",
    "name": "Japanese",
    "slug": "japanese",
    "expansion": "sultans-ascend"
  },
  {
    "code": "je",
    "id": "jeanne_darc",
    "name": "Jeanne d'Arc",
    "slug": "jeannedarc",
    "expansion": "sultans-ascend"
  },
  {
    "code": "jin",
    "id": "jin_dynasty",
    "name": "Jin Dynasty",
    "slug": "jindynasty",
    "expansion": "yue-feis-legacy"
  },
  {
    "code": "kt",
    "id": "knights_templar",
    "name": "Knights Templar",
    "slug": "templar",
    "expansion": "knights-of-cross-and-rose"
  },
  {
    "code": "mac",
    "id": "macedonian_dynasty",
    "name": "Macedonian Dynasty",
    "slug": "macedonian",
    "expansion": "dynasties-of-the-east"
  },
  {
    "code": "ma",
    "id": "malians",
    "name": "Malians",
    "slug": "malians",
    "expansion": "base"
  },
  {
    "code": "mo",
    "id": "mongols",
    "name": "Mongols",
    "slug": "mongols",
    "expansion": "base"
  },
  {
    "code": "od",
    "id": "order_of_the_dragon",
    "name": "Order of the Dragon",
    "slug": "orderofthedragon",
    "expansion": "sultans-ascend"
  },
  {
    "code": "ot",
    "id": "ottomans",
    "name": "Ottomans",
    "slug": "ottomans",
    "expansion": "base"
  },
  {
    "code": "ru",
    "id": "rus",
    "name": "Rus",
    "slug": "rus",
    "expansion": "base"
  },
  {
    "code": "sen",
    "id": "sengoku_daimyo",
    "name": "Sengoku Daimyo",
    "slug": "sengoku",
    "expansion": "dynasties-of-the-east"
  },
  {
    "code": "tug",
    "id": "tughlaq_dynasty",
    "name": "Tughlaq Dynasty",
    "slug": "tughlaq",
    "expansion": "dynasties-of-the-east"
  },
  {
    "code": "zx",
    "id": "zhu_xis_legacy",
    "name": "Zhu Xi's Legacy",
    "slug": "zhuxi",
    "expansion": "sultans-ascend"
  }
];
