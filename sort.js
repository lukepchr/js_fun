let changes = false;
let strings = ['brown', 'bro', 'apple', 'watch', 'xeroz', 'xeroa',
  'will', 'willy', 'hello', 'hell', 'xerox', 'app'];

let swapWords = () => {
  let s0 = strings[a];
  let s1 = strings[a + 1];
  strings[a] = s1;
  strings[a + 1] = s0;
  changes = true;
};

let compareLetters = (currentDepth = 0) => {
  let fromFirst = strings[a][currentDepth];
  let fromSecond = strings[a + 1][currentDepth];

  // do these chars exist at all?
  if (!fromSecond) { // char evaluates as null when past the end of a word
    if (fromFirst) {
      swapWords(); // i.e. word "app" goes before "apple"
    }
  } else {

    if (fromFirst > fromSecond) {
      swapWords();
    } else if (fromFirst == fromSecond) {
      compareLetters(currentDepth + 1);
    }
  }
};

do {
  changes = false;
  for (var a = 0; a <= strings.length; a++) {
    if (a + 1 < strings.length) {
      // take the string [a] to study the characters.
      compareLetters();
    }
  }
}
while (changes);

strings.forEach(function (element) {
  document.write('<h3>' + element + '</h3><br>');
});
