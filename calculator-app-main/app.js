// THEME
const blueTheme = document.querySelector("#one");
const whiteTheme = document.querySelector("#two");
const VioletTheme = document.querySelector("#three");
const ballBtn = document.querySelector(".ball");

blueTheme.addEventListener("change", () => {
  ballBtn.style.left = "4px";
  document.documentElement.setAttribute("data-theme", "blue");
});

whiteTheme.addEventListener("change", () => {
  ballBtn.style.left = "38px";
  document.documentElement.setAttribute("data-theme", "white");
});

VioletTheme.addEventListener("change", () => {
  ballBtn.style.left = "72px";
  document.documentElement.setAttribute("data-theme", "violet");
});

// FUNCTIONALITY


let buttons = document.getElementsByTagName('button');
[...buttons].forEach(item => {
  item.addEventListener('click', function(e){
      display.value === "Error" || display.value === "undefined"
      ? (display.value = "")
      : "";
  })
})


let display = document.getElementById("display");

// This function display values

function appendValue(value) {
  display.value += value;
  console.log(display);
}

// This function clear all the values
function clearScreen() {
  display.value = "";
}

// This function delete
function backSpace() {
  display.value = display.value.slice(0,-1);
}

// This function evaluates the expression and returns result

function calculate() {
  try {
    var problem = display.value;
  var result = eval(problem);
  display.value = result;
  } catch (error) {
    display.value = "Error";
}
}
