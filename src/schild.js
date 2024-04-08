// @ts-check

import { Item } from "./item";

export class Schwert extends Item {
  /**
   * @param {string | undefined} [name]
   */
  constructor(name, angriffspunkte = 10) {
    super(name, angriffspunkte, 0);
  }
}
