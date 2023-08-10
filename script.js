const inputForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const inputList = document.querySelector("#item-list");
const submit_button = document.querySelector("button");

document.querySelector("#item-list").innerHTML = "";
// input.addEventListener("keydown", retrieveEntry);

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = itemInput.value;
  if (userInput === "") {
    alert("Please enter an item you wish to add.");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput));
  const button = document.createElement("button");
  button.classList.add("remove-item", "btn-link", "text-red");
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-xmark");
  button.appendChild(i);
  li.appendChild(button);

  document.querySelector("#item-list").appendChild(li);
  itemInput.value = "";

  //li.innerText = userInput;
  console.log(li);
});

// function retrieveEntry(e) {
//   console.log(e.target.value);
//   return e.target.value;
// }
