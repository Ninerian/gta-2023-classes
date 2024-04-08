// @ts-check

import { Item } from "./item";

export class Schild extends Item {
  /**
   * @param {string | undefined} [name]
   */
  constructor(name, verteidigungspunkte = 10) {
    super(name, 0, verteidigungspunkte);
  }
}
