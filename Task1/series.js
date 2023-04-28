// Reverse counting
document.write("Reverse counting: ");
for (let i = 10; i > 0; i--) {
    if (i === 1) {
        document.write(i + " ");
    } else {
        document.write(i + ", ");
    }
}

document.write("<br>");

// Even numbers
document.write("Even: ");
for (let i = 0; i <= 20; i += 2) {
    if (i === 20) {
        document.write(i + " ");
    } else {
        document.write(i + ", ");
    }
}

document.write("<br>");

// Odd numbers
document.write("Odd: ");
for (let i = 1; i <= 19; i += 2) {
    if (i === 19) {
        document.write(i + " ");
    } else {
        document.write(i + ", ");
    }
}