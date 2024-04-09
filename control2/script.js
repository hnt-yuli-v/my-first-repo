document.addEventListener("DOMContentLoaded", function() {

  let array = [];
  for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  array.sort((a, b) => b - a);

  let sortedArrayOutput = array.join(", ");
  document.getElementById("blockContainer").innerHTML = `<p>${sortedArrayOutput}</p>`;
});

function generateBlock() {
  
  let width = document.getElementById("widthSelector").value;


  let block = document.createElement("div");
  block.style.backgroundColor = "red";
  block.style.width = width + "px";
  block.style.height = "30px";
  block.style.position = "relative"; 
  block.style.marginTop = "20px";
  document.getElementById("blockContainer").appendChild(block);


  let moveUpButton = document.createElement("button");
  moveUpButton.textContent = "Посунути уверх";
  moveUpButton.onclick = function() {
    block.style.top = (parseInt(block.style.top) || 0) - 20 + "px";
  };

  let moveDownButton = document.createElement("button");
  moveDownButton.textContent = "Посунути вниз";
  moveDownButton.onclick = function() {
    block.style.top = (parseInt(block.style.top) || 0) + 20 + "px";
  };

  document.body.appendChild(moveUpButton);
  document.body.appendChild(moveDownButton);
}

