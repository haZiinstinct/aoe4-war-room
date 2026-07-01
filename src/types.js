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
 * @property {string} category  Siehe {@link UnitCategory} für erlaubte Werte.
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
 * Dokumentierte erlaubte Werte (die Felder in MatchupSettings sind als `string`
 * typisiert, weil sie aus untypisiertem React-State stammen).
 * @typedef {"resources"|"count"} MatchupMode
 * @typedef {"offen"|"engpass"|"wald"} Terrain
 * @typedef {"amove"|"solide"|"stark"} MicroLevel
 */

/**
 * @typedef {Object} MatchupSettings
 * @property {string} mode      Siehe {@link MatchupMode}.
 * @property {number} budget
 * @property {string} terrain   Siehe {@link Terrain}.
 * @property {string} micro     Siehe {@link MicroLevel}.
 * @property {number} upgrades
 * @property {number} age
 */

/**
 * @typedef {Object} Verdict
 * @property {string} key
 * @property {string} label
 * @property {string} short
 * @property {string} tone  "positive" | "neutral" | "negative"
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
