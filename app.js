let list = document.getElementById("task-list");
let itemId = 0;

function addItem() {
  if (document.getElementById("input-task-text").value.trim() === "") {
    alert("Please, enter a new task!");
    return;
  }
  let getText = document.getElementById("input-task-text").value; // get task as text
  let newItem = document.createElement("div"); // create element
  newItem.innerHTML += `<div id="list-item-${itemId}">
  <input type="text" id="task-text" placeholder="${getText}" readonly />
  <input type="button" class="gray" id="done-${itemId}" value="Done" onclick="changeStatus(event)"/>
  <input type="button" class="orange" id="undone-${itemId}" value="Undone" onclick="changeStatus(event)"/>
  //
  <input
    type="button"
    class="orange"
    id="remove-${itemId}"
    value="Remove"
    onclick="removeItem(event)"
  />
</div>`;
  itemId++;
  list.appendChild(newItem);
  document.getElementById("input-task-text").value = "";
}

function removeItem(event) {
  let itemId = event.currentTarget.id;
  let listItemToDelete = itemId.replace("remove", "list-item");
  let item = document.getElementById(listItemToDelete);
  item.remove();
}

function changeStatus(event) {
  let itemId = event.currentTarget.id;
  let itemValue = event.currentTarget.value;
  let theItem = document.getElementById(itemId);
  let theNextItem = document.getElementById(nextItemId);
  if (itemValue === "Done") {
    let nextItemId = itemId.replace("done", "undone");
    if (theItem.className == "gray") {
      theItem.className = "orange";
      theNextItem.className = "gray";
    } else if (theItem.className == "orange") {
      theItem.className = "gray";
      theNextItem.className = "orange";
    }
  }
  if (itemValue === "Undone") {
    let nextItemId = itemId.replace("undone", "done");
    if (theItem.className == "gray") {
      theItem.className = "orange";
      theNextItem.className = "gray";
    } else if (theItem.className == "orange") {
      theItem.className = "gray";
      theNextItem.className = "orange";
    }
  }
}
