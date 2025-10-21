function jeSude(input){ // funkce má jeden vstup "input", budeme předpokládat že je vždy číslo protože kontrolova toho je složitěljší a ještě jsem ji nevysvětloval
  let jesude = true; // budeme předpokládat že vstup je sudé číslo
  if (input % 2 == 1){  // kontrolujeme jestli je liché číslo
    jesude = false; // když je číslo liché tak měníme výstup na to že je to sudé číslo (false)
  }
  return jesude; //vrátíme true nebo false s tím že true je že je to sudé a false je že liché
}

console.log(jeSude(4)); // true
console.log(jeSude(7)); // false
