let red = document.getElementById("red");
let green = document.getElementById("green");

const array1 = [1,2,3,4,5,6];
const array2 = [7,7,8,9];

for (i=0; i<array1.length; i++){
    if(array1[i] % 2 !== 0){
        red.innerHTML += array1[i] + " ";
    } else {
        green.innerHTML += array1[i] + " ";
    }
}

for (i=0; i<array2.length; i++){
    if(array2[i] % 2 !== 0){
        red.innerHTML += array2[i] + " ";
    } else {
        green.innerHTML += array2[i] + " ";
    }
}