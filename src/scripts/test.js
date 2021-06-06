function wyswietlDivaz() {
  if (document.getElementById('block1').style.display === 'none') {
    document.getElementById('block1').style.display = 'block';
  } else {
    document.getElementById('block1').style.display = 'none';
  }
}

function wpiszNaglowek(infoGlowne, info2nd) {
  document.getElementById('mainHeader').innerHTML = infoGlowne;
  document.getElementById('2ndHeader').innerHTML = info2nd;
}

function roundTo(value, places) {
  var power = Math.pow(10, places);
  return Math.round(value * power) / power;
}

function przeliczBMI() {
  var wynik12 = document.getElementById('wynikBmi');
  var waga = document.getElementById('bmiWaga').value;
  var wzrost = document.getElementById('bmiWzrost').value;
  var obliczenie = 0;
  var opisSytuacji = '';

  if (waga > 0 && wzrost > 0) {
    obliczenie = roundTo(waga / Math.pow(wzrost / 100, 2), 1);
    if (obliczenie < 18.5) {
      opisSytuacji = 'NIEDOWAGA';
    } else {
      if (obliczenie >= 18.5 && obliczenie < 24.9) {
        opisSytuacji = 'PRAWIDŁOWA WAGA';
      } else {
        if (obliczenie >= 25 && obliczenie < 29.9) {
          opisSytuacji = 'NADWAGA';
        } else {
          if (obliczenie >= 30 && obliczenie < 34.9) {
            opisSytuacji = 'OTYŁOŚĆ I stopnia';
          } else {
            if (obliczenie >= 35 && obliczenie < 39.9) {
              opisSytuacji = 'OTYŁOŚĆ II stopnia';
            } else {
              if (obliczenie >= 40) {
                opisSytuacji = 'OTYŁOŚĆ III stopnia';
              }
            }
          }
        }
      }
    }
  } else {
    obliczenie = 'nie wprowadzono poprawnych danych';
  }

  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}

function przeliczKalorie() {
  var wynik12 = document.getElementById('wynikBmr');
  var sex = document.getElementById('sexWybor').value;
  var wiek = document.getElementById('bmrWiek').value;
  var waga = document.getElementById('bmrWaga').value;
  var wzrost = document.getElementById('bmrWzrost').value;
  var wyborAktywnosci = document.getElementById('wyborAktywnosci').value;
  var tygodniowo = document.getElementById('bmrTygodniowo').value;
  var ubytek = document.getElementById('bmrUbytek').value;

  var obliczenie = 0;
  var opisSytuacji = '';
  var PPM = 0;
  var CPM = 0;
  if ((sex.value = 1))
    (PPM = 66), 47 + (13, 7 * waga) + 5 * wzrost - (6, 76 * wiek);
  else (PPM = 665), 09 + (9, 56 * waga) + (1, 85 * wzrost) - (4, 67 * wiek);

  obliczenie = 0;

  if (waga > 0 && wzrost > 0) {
    obliczenie = roundTo(waga / Math.pow(wzrost / 100, 2), 1);
    if (obliczenie < 18.5) {
      opisSytuacji = 'NIEDOWAGA';
    } else {
      if (obliczenie >= 18.5 && obliczenie < 24.9) {
        opisSytuacji = 'PRAWIDŁOWA WAGA';
      } else {
        if (obliczenie >= 25 && obliczenie < 29.9) {
          opisSytuacji = 'NADWAGA';
        } else {
          if (obliczenie >= 30 && obliczenie < 34.9) {
            opisSytuacji = 'OTYŁOŚĆ I stopnia';
          } else {
            if (obliczenie >= 35 && obliczenie < 39.9) {
              opisSytuacji = 'OTYŁOŚĆ II stopnia';
            } else {
              if (obliczenie >= 40) {
                opisSytuacji = 'OTYŁOŚĆ III stopnia';
              }
            }
          }
        }
      }
    }
  } else {
    obliczenie = 'nie wprowadzono poprawnych danych';
  }

  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wskaznik2 h5" >' +
    obliczenie2 +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}

function przeliczBMR() {
  var wynik12 = document.getElementById('wynikBmr');
  var sex = $("input[type='radio'][name='sexWybor']:checked").val();
  var wiek = document.getElementById('bmrWiek').value;
  var waga = document.getElementById('bmrWaga').value;
  var wzrost = document.getElementById('bmrWzrost').value;
  var wyborAktywnosci = document.getElementById('wyborAktywnosci').value;
  var tygodniowo = document.getElementById('bmrTygodniowo').value;
  var ubytek = document.getElementById('bmrUbytek').value;
  var blad = false;
  var ileKaloriiDziennieUbytek = 0;
  var CPMPoProcesie = 0;

  var obliczenie = 0;
  var obliczenie2 = '';
  var opisSytuacji = '';
  var PPM = 0;
  var CPM = 0;

  obliczenie = 0;
  // s0prawdzenie czy sa wartosci
  if (wiek < 1 || waga < 1 || wzrost < 1) {
    obliczenie = 'Sprawdź wprowadzone wartości bo coś jest nie tak';
    blad = true;
  }
  switch (sex) {
    case 'woman':
      PPM = 665.1 + 9.563 * waga + 1.85 * wzrost - 4.676 * wiek;

      break;

    case 'man':
      PPM = 66.5 + 13.75 * waga + 5.003 * wzrost - 6.775 * wiek;
      break;

    default:
      obliczenie = 'Wybierz Płeć';
      blad = true;
  }
  if (!blad) {
    CPM = PPM * wyborAktywnosci;
    obliczenie2 =
      '( CPM = ' + Math.round(CPM) + '  <-> PPM = ' + Math.round(PPM) + ')* ';
    switch (document.getElementById('wyborCelu').value) {
      case 'schudnac':
        if (tygodniowo < 0.1 || ubytek < 1) {
          alert('Uzupełnij wagi w celu analizy progresu chudnięcia');
          document.getElementById('bmrTygodniowo').focus();
          return;
        }
        ileKaloriiDziennieUbytek = (tygodniowo * 7250) / 7;
        CPMPoProcesie = CPM - ileKaloriiDziennieUbytek;
        obliczenie = Math.round(CPMPoProcesie) + ' kalorii ';
        opisSytuacji =
          'Czas trwania procesu chudnięcia: ' +
          roundTo(ubytek / tygodniowo, 1) +
          ' tygodnii';
        break;

      case 'przytyc':
        if (tygodniowo < 0.1 || ubytek < 1) {
          alert('Uzupełnij wagi w celu analizy progresu chudnięecia');
          document.getElementById('bmrTygodniowo').focus();
          return;
        }
        ileKaloriiDziennieUbytek = (tygodniowo * 7250) / 7;
        CPMPoProcesie = CPM + ileKaloriiDziennieUbytek;
        obliczenie = Math.round(CPMPoProcesie) + ' kalorii ';
        opisSytuacji =
          'Czas trwania procesu zwiększania wagi: ' +
          roundTo(ubytek / tygodniowo, 1) +
          ' tygodnii';
        break;

      default: {
        obliczenie = Math.round(CPM) + ' kalorii';
      }
    }
  }
  console.log(blad);
  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wskaznik2 h5" >' +
    obliczenie2 +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}

function przeliczWode() {
  var obliczenie = 0;
  var obliczenie2 = '';
  var opisSytuacji = '';

  var waga = document.getElementById('wodaWaga').value;
  var wynik12 = document.getElementById('wynikWoda');

  if (waga < 1) {
    obliczenie = 'Sprawdź wprowadzone wartości bo coś jest nie tak';
  } else {
    obliczenie = waga * 30;
  }

  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wskaznik2 h5" >' +
    obliczenie2 +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}

function przeliczWHR() {
  var obliczenie = 0;
  var obliczenie2 = '';
  var opisSytuacji = '';
  var blad = false;

  var talia = document.getElementById('whrTalia').value;
  var biodra = document.getElementById('whrBiodra').value;
  var wynik12 = document.getElementById('wynikWHR');
  var sex = $("input[type='radio'][name='sexWyborWHR']:checked").val();

  if (biodra < 1 || talia < 1) {
    obliczenie = 'Sprawdź wprowadzone wartości bo coś jest nie tak';
    obliczenie2 = '';
    blad = true;
  } else {
    obliczenie = roundTo(talia / biodra, 1);
    blad = false;
  }

  switch (sex) {
    case 'woman':
      if (!blad) {
        if (obliczenie < 0.8) {
          obliczenie2 = ' typ gynoidalny (gruszka)';
        } else {
          obliczenie2 = 'typ androidalny (jabłko)';
        }
      }

      break;

    case 'man':
      if (!blad) {
        if (obliczenie < 1) {
          obliczenie2 = ' typ gynoidalny (gruszka)';
        } else {
          obliczenie2 = 'typ androidalny (jabłko)';
        }
      }

      break;

    default:
      obliczenie = 'Wybierz Płeć';
      obliczenie2 = '';
      blad = true;
  }

  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wskaznik2 h5" >' +
    obliczenie2 +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}
