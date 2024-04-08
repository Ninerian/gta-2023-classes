import { assert, describe, expect, test } from "vitest";
import { Figur, Held, Schwert, Schild } from "../src/";

describe("Klasse Figur", () => {
  test("Die Klasse Figur ist vorhanden.", () => {
    const figur = new Figur();
    assert(figur instanceof Figur);
  });

  test("Die Klasse Figur hat die Eigenschaft `name` und kann bei der Instanzierung gesetzt werden.", () => {
    const figur = new Figur("Hans");
    expect(figur.name).toBe("Hans");
  });

  test("Die Eigenschaft `name` kann bei der Instanzierung individuell gesetzt werden.", () => {
    const figur = new Figur("Maria");
    expect(figur.name).toBe("Maria");
  });

  test("Die Klasse hat die Eigenschaft `position`, welche mit den Wert `{ x: 0, y: 0 }` hat.", () => {
    const figur = new Figur();
    expect(figur.position).toEqual({ x: 0, y: 0 });
  });

  describe("Bewegung", () => {
    test("Die Figur kann mit `bewegeNachLinks` bewegt werden. Die Postion X wird dabei verringert.", () => {
      const figur = new Figur();
      figur.bewegeNachLinks();
      expect(figur.position).toEqual({ x: -1, y: 0 });
    });

    test("Die Figur kann mit `bewegeNachRechts` bewegt werden. Die Postion X wird dabei erhoeht.", () => {
      const figur = new Figur();
      figur.bewegeNachRechts();
      expect(figur.position).toEqual({ x: 1, y: 0 });
    });

    test("Die Figur kann mit `bewegeNachOben` bewegt werden. Die Postion Y wird dabei verringert.", () => {
      const figur = new Figur();
      figur.bewegeNachOben();
      expect(figur.position).toEqual({ x: 0, y: 1 });
    });

    test("Die Figur kann mit `bewegeNachUnten` bewegt werden. Die Postion Y wird dabei erhoeht.", () => {
      const figur = new Figur();
      figur.bewegeNachUnten();
      expect(figur.position).toEqual({ x: 0, y: -1 });
    });

    test("Die Figur bewegt sich nach links und danach nach rechts. Sie ist wieder auf der urspruenglichen Position.", () => {
      const figur = new Figur();
      figur.bewegeNachLinks();
      figur.bewegeNachRechts();
      expect(figur.position).toEqual({ x: 0, y: 0 });
    });

    test("Die Figur bewegt sich nach oben und danach nach unten. Sie ist wieder auf der urspruenglichen Position.", () => {
      const figur = new Figur();
      figur.bewegeNachOben();
      figur.bewegeNachUnten();
      expect(figur.position).toEqual({ x: 0, y: 0 });
    });

    test("Die Figur geht mehrfach nach Links und X verringert sich um diese Anzahl.", () => {
      const figur = new Figur();
      figur.bewegeNachLinks();
      figur.bewegeNachLinks();
      figur.bewegeNachLinks();
      expect(figur.position).toEqual({ x: -3, y: 0 });
    });

    test("Die Methode `bewegeNachLinks` nutzt ein Argument `schritte`. Damit kann sich die Figur mit einem Befehl mehr als ein Feld auf einmal bewegen.", () => {
      const figur = new Figur();
      figur.bewegeNachLinks(3);
      expect(figur.position).toEqual({ x: -3, y: 0 });
    });

    test("Die Methode `bewegeNachRechts` nutzt ein Argument `schritte`. Damit kann sich die Figur mit einem Befehl mehr als ein Feld auf einmal bewegen.", () => {
      const figur = new Figur();
      figur.bewegeNachRechts(3);
      expect(figur.position).toEqual({ x: 3, y: 0 });
    });

    test("Die Methode `bewegeNachOben` nutzt ein Argument `schritte`. Damit kann sich die Figur mit einem Befehl mehr als ein Feld auf einmal bewegen.", () => {
      const figur = new Figur();
      figur.bewegeNachOben(3);
      expect(figur.position).toEqual({ x: 0, y: 3 });
    });

    test("Die Methode `bewegeNachUnten` nutzt ein Argument `schritte`. Damit kann sich die Figur mit einem Befehl mehr als ein Feld auf einmal bewegen.", () => {
      const figur = new Figur();
      figur.bewegeNachUnten(3);
      expect(figur.position).toEqual({ x: 0, y: -3 });
    });
  });
});

describe("Klasse Held", () => {
  test("Die Klasse `Held` ist vorhanden und `erweitert` die Klasse `Figur`", () => {
    const held = new Held();
    assert(held instanceof Figur);
  });

  test("Die Eigenschaft `name` kann bei der Initialisierung gesetzt werden.", () => {
    const held = new Held("Hans");
    expect(held.name).toBe("Hans");
  });

  test("Der Held kann sich mit den Methoden der Klasse `Figur` bewegen.", () => {
    const held = new Held();
    held.bewegeNachLinks();
    expect(held.position).toEqual({ x: -1, y: 0 });
  });

  describe("Eigenschaften", () => {
    test("Die Klasse Held hat die Eigenschaft `lebenspunkte`, welche auf `100` gesetzt sind.", () => {
      const held = new Held();
      expect(held.lebenspunkte).toBe(100);
    });

    test("Die Klasse Held hat die Eigenschaft `angriffspunkte`, welche auf `10` gesetzt sind.", () => {
      const held = new Held();
      expect(held.angriffspunkte).toBe(10);
    });

    test("Die Klasse Held hat die Eigenschaft `verteidigungspunkte`, welche auf `0` gesetzt sind.", () => {
      const held = new Held();
      expect(held.verteidigungspunkte).toBe(0);
    });
  });

  describe("Angriff", () => {
    test("Die Klasse Held hat die Methode `angriff`, welche das Argument `gegner` vom Typ `Held` nutzt. Es reduziert die `lebenspunkte` um die `angriffspunkte`", () => {
      const held = new Held();
      const gegner = new Held();
      held.angriff(gegner);
      expect(gegner.lebenspunkte).toBe(90);
    });

    test("Bei einem Angriff reduziert der `Gegner` die `angriffspunkte` des `Angreifers` um seine `verteidigungspunkte`.", () => {
      const held = new Held();
      const gegner = new Held("Gegner", 100, 10, 5);
      held.angriff(gegner);
      expect(gegner.lebenspunkte).toBe(95);
    });

    test("Die Klasse Held hat eine Methode `istTot`, welche `true` oder `false` zurueck gibt. Wenn die `lebenspunkte` 0 sind, ist der Held tot.", () => {
      const held = new Held();
      const gegner = new Held("Gegner", 10, 10, 0);
      expect(gegner.istTot()).toBe(false);
      held.angriff(gegner);
      expect(gegner.lebenspunkte).toBe(0);
      expect(gegner.istTot()).toBe(true);
    });
  });
});

describe("Schwert", () => {
  test("Die Klasse `Schwert` ist vorhanden", () => {
    const schwert = new Schwert();
    assert(schwert instanceof Schwert);
  });

  test("Die Klasse Schwert hat die Eigenschaft `name` und kann bei der Instanzierung gesetzt werden.", () => {
    const schwert = new Schwert("Excalibur");
    expect(schwert.name).toBe("Excalibur");
  });

  test("Die Klasse Schwert hat die Eigenschaft `angriffspunkte` und kann bei der Instanzierung gesetzt werden.", () => {
    const schwert = new Schwert("Excalibur", 10);
    expect(schwert.angriffspunkte).toBe(10);
  });
});

describe("Schild", () => {
  test("Die Klasse `Schild` ist vorhanden", () => {
    const schild = new Schild();
    assert(schild instanceof Schild);
  });

  test("Die Klasse Schild hat die Eigenschaft `name` und kann bei der Instanzierung gesetzt werden.", () => {
    const schild = new Schild("Holzschild");
    expect(schild.name).toBe("Holzschild");
  });

  test("Die Klasse Schwert hat die Eigenschaft `verteidigungspunkte` und kann bei der Instanzierung gesetzt werden.", () => {
    const schild = new Schild("Holzschild", 5);
    expect(schild.verteidigungspunkte).toBe(5);
  });
});

describe("Held mit Gegenstand", () => {
  test("Die Klasse Held hat die Eigenschaft `items`, welches ein leeres Array ist.", () => {
    const held = new Held();
    expect(held.items).toEqual([]);
  });

  test("Die Klasse Held hat die Methode `ausruesten`, welche das Argument `gegenstand` nutzt. Es fuegt diesen Gegenstand der Eigenschaft `items` hinzu.", () => {
    const held = new Held();
    const schwert = new Schwert("Excalibur", 10);
    held.ausruesten(schwert);
    expect(held.items).toContain(schwert);
  });

  test("Held kann `ausruesten` mehrfach mit verschiedenen Gegenstaenden aufrufen. Diese werden der Eigenschaft `items` hinzugefuegt.", () => {
    const held = new Held();
    const schwert = new Schwert("Excalibur", 10);
    const schild = new Schild("Holzschild", 5);
    held.ausruesten(schwert);
    held.ausruesten(schild);
    expect(held.items).toContain(schwert);
    expect(held.items).toContain(schild);
  });

  test("Mit einem `Schwert` erhoehen sich die `angriffspunkte` des Helden bei einem Angriff um die `angriffspunkte` des Schwertes.", () => {
    const held = new Held();
    const gegner = new Held("Gegner", 100, 10, 0);

    const schwert = new Schwert("Excalibur", 10);
    held.ausruesten(schwert);
    held.angriff(gegner);

    expect(gegner.lebenspunkte).toBe(80);
  });

  test("Mit einem `Schild` erhoehen sich die `verteidigungspunkte` des Helden bei einem Angriff um die `verteidigungspunkte` des Schildes.", () => {
    const held = new Held();
    const gegner = new Held("Gegner", 100, 10, 0);

    const schild = new Schild("Holzschild", 5);
    gegner.ausruesten(schild);
    held.angriff(gegner);

    expect(gegner.lebenspunkte).toBe(95);
  });
});
