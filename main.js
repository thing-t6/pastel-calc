let inputPlaceholder = document.querySelector(".input");
inputPlaceholder.innerHTML = "0";

function enterElem(key) {
  let clickedButton = String(key);
  console.log(clickedButton);
  if (clickedButton === "=") {
    calc();
  } else {
    appendElem(clickedButton);
  }
}

function appendElem(clickedButton) {
  if (clickedButton === "del") {
    deleteElem(inputPlaceholder);
  } else if (clickedButton === "C") {
    inputPlaceholder.innerHTML = "0";
  } else {
    let currentDisplay = inputPlaceholder.innerHTML;

    if (
      currentDisplay === "0" ||
      currentDisplay === "NaN" ||
      currentDisplay === "Error"
    ) {
      inputPlaceholder.innerHTML = clickedButton;
    } else {
      inputPlaceholder.innerHTML += clickedButton;
    }
  }
}

function deleteElem(inputPlaceholder) {
  let currentDisplay = inputPlaceholder.innerHTML;

  if (currentDisplay === "Error" || currentDisplay === "NaN") {
    inputPlaceholder.innerHTML = "0";
    return;
  }

  let newElem = currentDisplay.slice(0, -1);
  inputPlaceholder.innerHTML = newElem || "0";
}

function calc() {
  try {
    allValue = eval(inputPlaceholder.innerHTML);
    if (typeof allValue === "number" && allValue % 1 !== 0) {
        inputPlaceholder.innerHTML = allValue !==undefined ? allValue.toFixed(2) : String(allValue);
    }
    else {
        inputPlaceholder.innerHTML = allValue !== undefined ? String(allValue) : "0";
    }
  } catch (error) {
    inputPlaceholder.innerHTML = "Error";
  }
}
