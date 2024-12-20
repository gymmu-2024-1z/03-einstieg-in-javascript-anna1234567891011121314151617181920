import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt}
      result.push(currentElement)
    }
  }
  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //upperCase steht für Großbuchstaben
    //also speicher ich jetzt einen Grossbuchstaben
    const upperCase = currentElement.toUpperCase()
    result.push(upperCase)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)
export function aufgabe03(args) {
  const input = args
  const result = []
  // count steht für einen Zähler und wird hier auf 0 gesetzt
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wenn es ein e oder ein E ist, dann erhöhen wir den Zähler
    // wir müssen das kleine e und das grosse E beachten
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  } //Hier geben wir den Zähler zurück
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  // Wir möchten die iengabe so filtern, dass nur noch Buchstaben und Leerzeichen übrig bleiben

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ascii steht für American Standart Code und ist dafür da, dass alle Zeichen die es gibt nummeriert sind
    const ascii = currentElement.charCodeAt(0)
    //charCodeAt(0) gibt den Wert von einem Buchstaben an
    if (ascii >= 65 && ascii <= 90) {
      //das ist z.B der ascii code von A bis Z
      //Großbuchstaben
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      //das ist z.B der ascii code von a bis z
      //Kleinbuchstaben
      result.push(currentElement)
    } else if (currentElement === " ") {
      //Leerzeichen
      result.push(currentElement)
    }
  }
  // Jetzt können wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern
  const result2 = []

  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      //hier sind zwei Leereichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    } //jetzt können wir die Leerzeichen zählen
    let count = 0
    for (let i = 0; i < result2.length; i++) {
      const currentElement = result2[i]
      if (currentElement === " ") {
        count++
      }
    }
    // Da es ein Wort mit mehr wie Leerzeichen gibt, geben wir das Leerzeichen +1 zurück
    return count + 1
  }
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []
  //

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()
    if (currentElement === " ") {
    } else if (currentElement === ".") {
    } else if (currentElement === upperCaseLetter) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  let istSonderzeichen = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()

    const lowerCase = currentElement.toLowerCase()

    if (lowerCase === upperCaseLetter) {
      istSonderzeichen = true
    }
  }
  return istSonderzeichen
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  let istund = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u" || currentElement === "U") {
      const nextElement = input[i + 1]
      if (nextElement === "n") {
        const lastElement = input[i + 2]
        if (lastElement === "d") {
          istund = true
        }
      }
    }
  }
  return istund
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e entdeckst, dann schreib eine 3
    if (currentElement === "e" || currentElement === "E") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }

  // schreibe eine funktion, die alle e's in input ersetzt durch 3
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Wenn input genau sechs Zeichen lang ist gebe wahr zurück, sonst falsch
  if (input.length === 6) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Teste, ob die Eingabe ein korrekter RGB Hexcode ist
    if (input[i] === "#") {
      return true
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe12(args) {
  const input = args
  const result = []

  // Erstelle eine variable für die position des ersten es
  let ePosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      // Spiechere die position
      ePosition = i
      return ePosition
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []
  // Erstelle eine variable für die position des letzten es
  let ePosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      // Spiechere die position
      ePosition = i
    }
  }
  return ePosition
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
      // Wenn count genau 3 ist, dann speichere die position
      if (count === 3) {
        return i
      }
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein leerzeichen findest, dann gebe result zurück
    if (currentElement === " ") {
      return result.join("")
    }
    // Hänge das aktuelle zeichen ans resultat an
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []

  const result1 = []
  const result2 = []

  let dollarfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wenn du ein dollar findest
    if (currentElement === "$") {
      dollarfound = true
    }
    // wenn dollar falsch ist, dann hänge currentElement an result1 an
    if (dollarfound === false) {
      result1.push(currentElement)
    }
    // wenn dollar wahr ist, dann hange currentElement an result2 an
    if (dollarfound === true) {
      result2.push(currentElement)
    }
  }
  return [result1.join(""), result2.join("")]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn wir auf ein Leerzeichen treffen, dann schreiben wir alles was wir bis jetzt haben, in die totalList

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  //Wir schreiben alles was wir noch bis zum Ende gelesen haben, in die Liste
  totalList.push(currentList.join(""))
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  // Aufgabe 17 wird hier verwendet um eine Liste zu bekommen
  const nameAge = aufgabe17(input)
  // Es wird hier unsere Aufgabeliste generiert.¨
  const result = []
  //Hier werden ganze Worte in die Liste geschrieben, das ist auch möglich
  result.push("Sie heissen")
  // Die Liste wird so zusamen gesetzt, dass der Name und das Alter an der richtigen Stelle eingefügt werden.
  result.push(nameAge[0])
  result.push("und sind")
  result.push(nameAge[1])
  result.push("Jahre alt")
  //das Resultat wird wie immer als Text zurück gegeben
  return result.join(" ")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  //wenn due ein Zeichen findest
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn du ein Buchstaben findest
    if (currentElement >= "a" && currentElement <= "z") {
    } //dann  verdopple es
    result.push(currentElement + currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //wenn du ein Punkt findest
    const currentElement = input[i]
    if (currentElement === ".") {
      //dann teste ob du ein Lehrschlag dahinter findest
      const nextElement = input[i + 1] //wenn du ein Lehrschlag findest
      if (nextElement === " ") {
        //dann gebe true zurueck
      } else {
        //wenn nicht gebe false zurueck}
        return false
      }
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  //erstelle zwei Listen
  let kfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wenn du ein k findest
    if (kfound === true) {
      result.push(currentElement)
    }
    // wenn k falsch ist, dann hänge currentElement an result1 an
    if (kfound === false) {
      result.push("_")
    }
    // wenn k wahr ist, dann hange currentElement an result2 an
    if (currentElement === "k") {
      kfound = true
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  //speichere das erste zeichen
  const firstElement = input[0]
  //Hänge das erste Zeichen vor und am Schluss der Ausgabe an
  result.push(firstElement)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //hänge aktuelles Zeichen an
    result.push(currentElement)
  }
  //hange das erste Zeichen an den schluss der Ausgabe
  result.push(firstElement)
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []
  //speichere das erste und das letzte zeichen der eingabe
  const firstElement = input[0]
  const lastElement = input[input.length - 1]

  //hänge das letzte Zeichen ganz an den Anfang der Ausgabe an
  result.push(lastElement)
  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  //hänge das erste Zeichen am Schluss der Ausgabe an
  result.push(firstElement)
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe26(args) {
  const input = args
  const result = []

  const firstElement = input[0]
  const nextElement = input[1]

  //wenn der ascii wert vom nächsten Element kleiner ist, dann vertausche die Elemente
  if (firstElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    result.push(nextElement)
    result.push(firstElement)
  } else {
    result.push(firstElement)
    result.push(nextElement)
  }

  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascci = currentElement.charCodeAt(0)

    if (ascci >= 48 && ascci <= 57) {
      //wir geben den ascii wert von zahlen ein, um diese zu erkennen und darin beim nächsten Schritt als true kennzuzeichnen
      return true
      //wenn es eine zahl ist, wird uns true angezeigt
    } else {
      return false
      //wenn nicht falsch
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function franz(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascci = currentElement.charCodeAt(0)

    if (ascci >= 97 && ascci <= 122) {
      //dann ist es ein Kleinbuchstabe
      //dann ersetzte ihn mit einem Grundbuchstaben
      result.push(currentElement.toUpperCase())
      //wenn nicht dann ist es kein kleinbuchstabe
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=franz]", franz)

export function fritzli(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "T") {
      //dann ersetze es mit dem Wort "Ente"
      result.push("Ente")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=fritzli]", fritzli)

export function henriette(args) {
  const input = args
  const result = []

  let isthenri = false
  //hier muss jeder Buchstabe einzel getestet werden, ob dieser vorhanden ist und ob diese in der richtigen Reihenfolge vorhanden sind
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "h" || currentElement === "H") {
      if (input[i + 1] === "e") {
        if (input[i + 2] === "n") {
          if (input[i + 3] === "r") {
            if (input[i + 4] === "i") {
              isthenri = true
            }
          }
        }
      }
    }
  }
  return isthenri
}
linkupExerciseHandler("[data-click=henriette]", henriette)

export function bubblesortalgorithmus(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}
linkupExerciseHandler(
  "[data-click=bubblesortalgorithmus]",
  bubblesortalgorithmus,
)

export function selectionSort(args) {
  const input = args.split("")
  const result = []

  for (let i = 0; i < input.length; i++) {
    //suche das kleinste Element in der Eingabe
    let min = input[i]
    let minIndex = i

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < min) {
        min = input[j]
        minIndex = j
      }
    }
    const tmp = input[i]
    input[i] = min
    input[minIndex] = tmp
    //vertausche es mit dem ersten Element der Eingabe

    for (let k = i + 1; k < input.length; k++) {
      if (input[k] < min) {
        min = input[k]
        minIndex = k
      }
    }

    result.push(input[i])
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=selectionsort]", selectionSort)
