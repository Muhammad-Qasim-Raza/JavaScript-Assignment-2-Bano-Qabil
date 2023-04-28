let A = [24, 53, 78, 91, 12];
let smallest1 = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest1) {
        smallest1 = A[i];
    }
}
document.write("The smallest number is: " + smallest1);



document.write("<br>");



let arr1 = prompt("Enter a list of numbers separated by commas:");
let arr2 = arr1.split(",");
let arr = arr2.map(Number);

let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
document.write("The smallest number is: " + smallest);