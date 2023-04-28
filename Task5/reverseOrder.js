let word = prompt("Please enter a word to reverse its order:");
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

document.write("The word in reverse order is: " + reversedWord);