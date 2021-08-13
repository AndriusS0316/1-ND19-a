// astuoniolikta d uzduotis



// PAPILDOMI KOMENTARAI:
// Iprastinio if panaudojimas pasirenkant langelius

if (r % 2 === 0) {
  cellHTML = whiteBlackCellHTML;
} else {
  cellHTML = blackWhiteCellHTML;
}
// Ternary operatoriaus panaudojimas pasirenkant langelius

cellHTML = r % 2 === 0 ? whiteBlackCellHTML : blackWhiteCellHTML;