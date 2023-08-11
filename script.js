const inputForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const submit_button = document.querySelector("button");
const clear = document.querySelector("#clear");
const filter = document.querySelector("#filter");

document.querySelector("#item-list").innerHTML = "";

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
  checkUI();
  itemInput.value = "";

  console.log(li);
});

itemList.addEventListener("click", removeItem);

clear.addEventListener("click", clearAll);

filter.addEventListener("input", filterDown);

function filterDown(e) {
  const text = e.target.value.toLowerCase();
  let allList = Array.from(itemList.children);

  allList.forEach((item) => {
    const itemText = item.innerText.toLowerCase();

    if (itemText.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
}

function clearAll(e) {
  itemList.innerHTML = "";
  checkUI();
}

function checkUI() {
  if (itemList.innerHTML === "") {
    clear.style.display = "none";
    filter.style.display = "none";
  } else {
    clear.style.display = "block";
    filter.style.display = "block";
  }
}

checkUI();
