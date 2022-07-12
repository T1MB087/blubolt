

// baseData 
const baseData = [
  {
    id: 1,
    value: "Value for ID 1"
  },
  {
    id: 2,
    value: "Value for ID 2"
  },
  {
    id: 3,
    value: "Value for ID 3"
  },
  {
    id: 4,
    value: "Value for ID 4"
  },
  {
    id: 5,
    value: "Value for ID 5"
  },
  {
    id: 6,
    value: "Value for ID 6"
  },
]

// Add on Data

const addOnData = {
  id: 20,
  value: "I am addon data"
}

console.log('JS Loaded and ready to log!')
console.log({baseData, addOnData})


/**
 * Your Event listners and Loggers should be added below
 */

const baseDataClick = document.getElementById("baseData"),
      reverseClick = document.getElementById("reverse"),
      noFirstElement = document.getElementById("noFirst"),
      allElement = document.getElementById("newLog"),
      baseDataPlusAddOn = document.getElementById("baseDataPlusAddOn"),
      replaceIndexTwo = document.getElementById("replace"),
      countFoxSelector = document.getElementById("foxOccurrence"),
      foxReverse = document.getElementById("foxReverse"),
      foxReplace = document.getElementById("foxReplace"),
      foxText = document.getElementById("stringText").textContent,
      inputVar = document.querySelector("input[type=text]");

function baseDataOutput() {
  console.log(baseData);
}

function reversebaseDataOutput() {
  console.log(baseData.slice().reverse());
}

function noFirstElementOutput() {
  const noFirst = baseData.slice(1,baseData.length);
  console.log(noFirst);
}

function allElementOutput() {
  for (key in baseData) {
    console.log(baseData[key])
  }
}

function addonPlusAllData() {
    const addOn = baseData.slice();
    addOn.unshift(addOnData);
    console.log(addOn);
}

function replaceIndex() {
    const replica = baseData.slice();
    replica[2] = addOnData;
    console.log(replica);
}

function countFox(input) {
  let re = new RegExp(input, 'g') ;
  let foxCount = (foxText.match(re)|| []).length;
  return foxCount;
}

function reverseFox() {
  console.log(document.getElementById("stringText").textContent.split(" ").reverse().join(" "));
}

function replaceFox() {
    document.getElementById("stringText").textContent = foxText.replace(/brown/g,"sandy");
}

function saveInput() {
  inputVar.value = localStorage.getItem("textInput");
}

baseDataClick.addEventListener("click", baseDataOutput, true);

reverseClick.addEventListener("click", reversebaseDataOutput, true);

noFirstElement.addEventListener("click", noFirstElementOutput, true);

allElement.addEventListener("click",allElementOutput, true);

baseDataPlusAddOn.addEventListener("click",addonPlusAllData, true);

replaceIndexTwo.addEventListener("click",replaceIndex, true);

countFoxSelector.addEventListener("click", function(){
  console.log(countFox("fox"));
}, true);

foxReverse.addEventListener("click",reverseFox, true);

foxReplace.addEventListener("click",replaceFox, true);

addEventListener("keyup", function(){
  localStorage.setItem("textInput", inputVar.value);
  saveInput();
});

window.onload = saveInput();