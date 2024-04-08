//@ts-check
import { Figur } from "./figur.js";
import { Item } from "./item.js";

export class Held extends Figur {
  /**
   * @type {Item[]}
   */
  items = [];

  /**
   * @param {string | undefined} [name]
   */
  constructor(
    name,
    lebenspunkte = 100,
    angriffspunkte = 10,
    verteidigungspunkte = 0,
  ) {
    super(name);
    this.lebenspunkte = lebenspunkte;
    this.angriffspunkte = angriffspunkte;
    this.verteidigungspunkte = verteidigungspunkte;
  }

  /**
   * @param {Item} item
   */
  ausruesten(item) {
    this.items = [...this.items, item];
  }

  /**
   * @returns {number}
   */
  berechneAngriffspunkte() {
    return this.items.reduce(
      (acc, item) => acc + (item.angriffspunkte ?? 0),
      this.angriffspunkte,
    );
  }

  /**
   * @returns {number}
   */
  berechneVerteidigungspunkte() {
    return this.items.reduce(
      (acc, item) => acc + (item.verteidigungspunkte ?? 0),
      this.verteidigungspunkte,
    );
  }

  /**
   * @returns {boolean}
   */
  istTot() {
    return this.lebenspunkte <= 0;
  }

  /**
   * @param {Held} ziel
   */
  angriff(ziel) {
    const angriffspunkte = this.berechneAngriffspunkte();
    const vereidigungspunkte = ziel.berechneVerteidigungspunkte();
    console.log(angriffspunkte, vereidigungspunkte);
    ziel.lebenspunkte -= angriffspunkte - vereidigungspunkte;
  }
}
