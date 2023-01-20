let list = document.getElementById("task-list");
let itemId = 001;

function addItem() {
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
  console.log(itemId);
  console.log(document.getElementById(itemId).className);
  if (document.getElementById(itemId).className == "gray") {
    document.getElementById(itemId).className = "green";
  } else if (document.getElementById(itemId).className == "green") {
    document.getElementById(itemId).className = "gray";
  }
}
