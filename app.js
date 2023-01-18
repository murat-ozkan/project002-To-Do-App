let list = document.getElementById("task-list");
function addItem() {
  let getText = document.getElementById("input-task-text").value; // get task as text
  let newItem = document.createElement("li"); // create element
  newItem.innerHTML += `<input type="checkbox" id="task-tick" value="Task 1">
  <input type="text" id="task-text" placeholder="${getText}" readonly>`;
  list.appendChild(newItem);

  //   checkText.setAttribute("type", "checkbox");
  //   let entry = document.createElement("li");
  //   entry.appendChild(document.createTextNode(getText));
  //   list.appendChild(entry);
  //   list.appendChild(document.createElement("br"));
}

// const newPar = document.createElement("p");
// const text = document.createTextNode("Bu bir p elementidir.");
// newPar.appendChild(text);

// document.getElementById("input-task-add").addEventListener("click", () => {
//   let newTask = document.getElementById("input-task-text").value;
//   let textnode = document.createTextNode(newTask);
//   document.getElementById("task-list").appendChild(textnode);
//   let solo = document.createElement("div");
//   solo.innerHTML =
//     '<div class="task-list" id="task-list"> <input type="checkbox" id="task-tick" value="Task 1"><input type="text" id="task-text" placeholder="Task-1: Work Hard..." readonly></div>';
// });
// document.getElementById("input-task-add").addEventListener("click", () => {
//   let newTask = document.getElementById("input-task-text").value;
//   console.log(newTask);
//   let textnode = document.createTextNode(newTask)
//   document.getElementById("task-list").appendChild(textnode);
// })

// <!-- <input type="checkbox" id="task-tick" value="Task 1">
// <input type="text" id="task-text" placeholder="Task-1: Work Hard..." readonly> -->
