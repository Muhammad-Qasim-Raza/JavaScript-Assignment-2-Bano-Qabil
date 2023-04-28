// Multiples of 5 ranging 1 to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    if (i === 100) {
      document.write(i + " ");
    } else {
      document.write(i + ", ");
    }
  }
}