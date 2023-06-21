console.log("Hello hai");
var i, j, result, btnID, equation;
i = "";
j = "";
function isNumBtn() {
  const buttons = document.getElementsByTagName("input");

  const buttonPressed = (e) => {
    btnID = e.target.id;
    console.log(btnID);
  };

  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
  }
  return btnID;
}

function commify(n) {
  n = n.replace(/,/gm, "");
  console.log(n);
  var parts = n.toString().split(".");
  console.log(n);
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "")
  );
}

const num = [];

function display(value) {
  if (document.getElementById("result").value == 0) {
    //Delete the zero and replace it with the inputted value
    document.getElementById("result").value = "";
  }
  j = isNumBtn();
  // console.log(j);
  if (i.charAt(i.length - 1) === "%" && j === "number") {
    document.getElementById("result").value += "×";
  }
  document.getElementById("result").value += value;
  i = document.getElementById("result").value;
  i = commify(i);
  document.getElementById("result").value = i;
  console.log(i);
}

function compute() {
  result = document.getElementById("result").value;
  console.log(result);
  if (
    result.includes("÷") === true ||
    result.includes("×") === true ||
    result.includes("%") === true ||
    result.includes(",") === true
  ) {
    result = result.replace("÷", "/");
    result = result.replace("×", "*");
    result = result.replace("%", "/100");
    result = result.replace(/,/gm, "");
  }
  console.log(result);
  result = eval(result);
  console.log(result);
  result = result.toString();
  console.log(result);
  result = commify(result);
  console.log(result);
  document.getElementById("result").value = result;
}

let isPressed = false;
function bracket() {
  if (isPressed == false) {
    display("(");
  } else {
    display(")");
  }
  isPressed = !isPressed;
}

function back() {
  equation = document.getElementById("result").value;
  document.getElementById("result").value = equation.substr(
    0,
    equation.length - 1
  );
}

function clr() {
  document.getElementById("result").value = 0;
}
