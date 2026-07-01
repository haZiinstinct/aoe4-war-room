// Zentrale JSDoc-Typdefinitionen für WAR ROOM. Reine Typ-Datei ohne Laufzeit-
// Export; wird per `import("../types.js").TypName` in JSDoc-Kommentaren genutzt
// und von `tsc --checkJs` ausgewertet.

/**
 * @typedef {Object} Modifier
 * @property {number} value          Bonusschaden.
 * @property {string} [property]     Betroffene Eigenschaft (z. B. "meleeAttack").
 * @property {string[][]} groups     Ziel-Klassengruppen (UND je Untergruppe).
 */

/**
 * @typedef {Object} Weapon
 * @property {string} name
 * @property {"melee"|"ranged"|"siege"|string} type
 * @property {number} damage
 * @property {number} speed          Sekunden je Angriff.
 * @property {number} range          Maximale Reichweite in Feldern.
 * @property {Modifier[]} modifiers
 */

/**
 * @typedef {Object} Armor
 * @property {number} melee
 * @property {number} ranged
 */

/**
 * @typedef {Object} Costs
 * @property {number} food
 * @property {number} wood
 * @property {number} gold
 * @property {number} stone
 * @property {number} oliveoil
 * @property {number} total
 * @property {number} popcap
 * @property {number} time
 */

/**
 * Daten-getriebene Kampf-Flags. Werden zur Build-Zeit in
 * `scripts/generate-units.mjs` gesetzt, damit die Laufzeitlogik keine
 * ID-Regexe mehr braucht.
 * @typedef {Object} UnitFlags
 * @property {boolean} splash            Flächenschaden (Belagerung u. Ä.).
 * @property {boolean} antiInfantryMelee Nahkampf-Spezialist gegen Infanterie.
 * @property {boolean} formation         Zusammengesetzte Formations-Einheit.
 */

/**
 * @typedef {"infanterie"|"kavallerie"|"fernkampf"|"belagerung"|"marine"|"support"|"sonstige"} UnitCategory
 */

/**
 * @typedef {Object} Unit
 * @property {string} id
 * @property {string} name
 * @property {boolean} unique
 * @property {string[]} civs
 * @property {number} minAge
 * @property {string} [icon]
 * @property {string} description
 * @property {string[]} displayClasses
 * @property {string[]} classes
 * @property {UnitCategory} category
 * @property {number} hp
 * @property {Armor} armor
 * @property {number} movement
 * @property {Costs} costs
 * @property {Weapon[]} weapons
 * @property {UnitFlags} flags
 */

/**
 * @typedef {Object} Civilization
 * @property {string} code
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} expansion
 */

/**
 * @typedef {"resources"|"even"} MatchupMode
 * @typedef {"offen"|"engpass"|"wald"} Terrain
 * @typedef {"amove"|"solide"|"stark"} MicroLevel
 */

/**
 * @typedef {Object} MatchupSettings
 * @property {MatchupMode} mode
 * @property {number} budget
 * @property {Terrain} terrain
 * @property {MicroLevel} micro
 * @property {number} upgrades
 * @property {number} age
 */

/**
 * @typedef {Object} Verdict
 * @property {string} key
 * @property {string} label
 * @property {string} short
 * @property {"positive"|"neutral"|"negative"} tone
 */

/**
 * @typedef {Object} SideStrength
 * @property {Weapon & {bonus:number, armor:number, dps:number}} weapon
 * @property {number} count
 * @property {number} value
 * @property {number} tactical
 */

/**
 * @typedef {Object} Reason
 * @property {string} title
 * @property {string} text
 * @property {boolean} good
 */

/**
 * @typedef {Object} MatchupResult
 * @property {boolean} comparable
 * @property {Verdict} verdict
 * @property {number} ratio
 * @property {number} confidence
 * @property {SideStrength} [attacker]
 * @property {SideStrength} [defender]
 * @property {Reason[]} reasons
 */

/**
 * @typedef {Object} CounterCandidate
 * @property {Unit} unit
 * @property {MatchupResult} result
 */

export {};
