//@ts-check
export class Figur {
  constructor(name = "unbekannt") {
    this.name = name;
    this.position = { x: 0, y: 0 };
  }

  bewegeNachLinks(anzahl = 1) {
    this.position.x -= anzahl;
  }

  bewegeNachRechts(anzahl = 1) {
    this.position.x += anzahl;
  }

  bewegeNachOben(anzahl = 1) {
    this.position.y += anzahl;
  }

  bewegeNachUnten(anzahl = 1) {
    this.position.y -= anzahl;
  }
}
