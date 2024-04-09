function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let sortedArrayDiv = document.getElementById('sortedArray');

let array = [];
for (let i = 0; i < 20; i++) {
  array.push(getRandomInt(1, 100)); 
}

array = sortDescending(array);


let sortedArrayText = document.createTextNode("Відсортований масив у спадаючому порядку: " + array.join(", "));


sortedArrayDiv.appendChild(sortedArrayText);

