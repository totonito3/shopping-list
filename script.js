const inputForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const submit_button = document.querySelector("button");
const clear = document.querySelector("#clear");
const filter = document.querySelector("#filter");
const itemArray = [];

document.querySelector("#item-list").innerHTML = "";

inputForm.addEventListener("submit", onAddItemSubmit);

itemList.addEventListener("click", removeItem);

clear.addEventListener("click", clearAll);

filter.addEventListener("input", filterDown);

itemList.addEventListener("click", editItem);

function editItem(e) {
  if (e.target.tagName === "LI") {
    itemInput.value = e.target.innerText;
    let yoo = itemInput.value;

    itemList.querySelectorAll("li").forEach((list) => {
      list.classList.remove("edit-mode");
    });
    e.target.classList.add("edit-mode");
    submit_button.innerHTML = '<i class="fa-solid fa-pen"></i>  Update Item';
    submit_button.style.backgroundColor = "#228B22";
    submit_button.addEventListener("click", (event) => {
      let editMode = isEditable();

      if (editMode) {
        const itemToEdit = itemList.querySelector(".edit-mode");

        itemArray.splice(itemArray.indexOf(itemToEdit), 1);
        itemToEdit.classList.remove("edit-mode");
        itemToEdit.remove();
        addItemToStorage(itemArray);
        editMode = false;
      }
      if (!isEditable()) {
        submit_button.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
        submit_button.style.backgroundColor = "#333";
      }

      addItemToStorage(itemArray);
    });
  }
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const userInput = itemInput.value;
  if (userInput === "") {
    alert("Please enter an item you wish to add.");
    return;
  }

  addItemToDom(userInput);

  addItemToStorage(itemArray);

  checkUI();
  itemInput.value = "";
  console.log("ITEM ARRAYY ", itemArray);
}

function addItemToDom(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = document.createElement("button");
  button.classList.add("remove-item", "btn-link", "text-red");
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-xmark");
  button.appendChild(i);
  li.appendChild(button);

  document.querySelector("#item-list").appendChild(li);
  itemArray.push(li);
}

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
      let currentList = e.target.parentElement.parentElement;
      currentList.remove();
      itemArray.splice(itemArray.indexOf(currentList), 1);
      addItemToStorage(itemArray);
    }
  }
  checkUI();
  console.log("DAMMNN ", itemArray);
}

function clearAll(e) {
  if (confirm("Are you sure? ")) {
    itemList.innerHTML = "";
    itemArray.splice(0, itemArray.length);
    addItemToStorage(itemArray);
    checkUI();
  }
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

function addItemToStorage(items) {
  localStorage.clear();
  let textArray = [];
  let text = "";
  items.forEach((i) => {
    text = i.innerText;
    textArray.push(text);
  });
  localStorage.setItem("items", JSON.stringify(textArray));
}

function fetchItemFromStorage() {
  let itemArrayFromStorage = JSON.parse(localStorage.getItem("items"));

  itemArrayFromStorage.forEach((item) => {
    addItemToDom(item);
  });
}

function isEditable() {
  let editing = false;
  itemArray.forEach((i) => {
    if (i.classList.contains("edit-mode")) {
      editing = true;
    }
  });

  return editing;

  // itemArray[1].classList.contains('edit-mode')
}

fetchItemFromStorage();
checkUI();
