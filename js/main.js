let value;
let input;
let result;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
  input = parseInt(document.getElementById("input").value);
  if (input) {
    value = parseInt(document.getElementById("line1").innerHTML);
    result = value + input;
    if (result < 0) {
      document.getElementById("line1").style.color = "red";
    } else {
      document.getElementById("line1").style.color = "black";
    }
    document.getElementById("line1").innerHTML = result;
  } else {
    alert("please enter number");
  }
});

minus.addEventListener("click", () => {
  input = parseInt(document.getElementById("input").value);
  if (input) {
    value = parseInt(document.getElementById("line1").innerHTML);
    result = value - input;
    if (result < 0) {
      document.getElementById("line1").style.color = "red";
    } else {
      document.getElementById("line1").style.color = "black";
    }
    document.getElementById("line1").innerHTML = result;
  } else {
    alert("please enter number");
  }
});
