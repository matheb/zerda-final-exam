//4. task: Create a function that returns how many letters in the word: "duck" (it is four)

function sumLetters(word) {
  var counter = 0;
  if (typeof(word) == 'string' && !word.includes(' ')) {
    for (var i = 0; i < word.length; i++) {
      counter++;
    }
    return counter;
  } else {
    console.error('please give only one word as an input')
  }
}

console.log(sumLetters('duck'));
console.log(sumLetters('d uck'));


//20. task: Create a function that takes a list of numbers and returns the second biggest element from it

function secondBiggest(lista) {
  var current;
  console.log(lista.length);
  for (var j = 0; j < lista.length ; j++) {
    for (var i = 0, current; i < lista.length ; i++) {
      if (lista[i] > lista[i + 1]) {
        current = lista[i + 1];
        console.log(current);
        lista[i + 1] = lista[i];
        lista[i] = current;
      };
    };
    return lista
  };
};


console.log(secondBiggest([6,1,8,4,3,5]));
