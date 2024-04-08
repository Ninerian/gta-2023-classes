//@ts-check

export class Item {
  /**
   * @param {string | undefined} [name]
   */
  constructor(name, angriffspunkte = 0, verteidigungspunkte = 0) {
    this.name = name;
    this.angriffspunkte = angriffspunkte;
    this.verteidigungspunkte = verteidigungspunkte;
  }
}
