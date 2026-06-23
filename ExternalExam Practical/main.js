function checkNumber() {
  let num = document.getElementById("numberInput").value;
  let result = document.getElementById("result");

  if (num === "") {
    result.innerText = "Please enter a number!";
    result.className = "";
    return;
  }

  if (num % 2 === 0) {
    result.innerText = num + " is Even";
    result.className = "even";
  } else {
    result.innerText = num + " is Odd";
    result.className = "odd";
  }
}