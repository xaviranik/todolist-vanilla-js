const todoInput = document.querySelector("#todo-input");
const addTaskBtn = document.querySelector("#task-add-btn");
const todos = document.querySelector(".todos");

addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let text = todoInput.value;
  addTask(text);
});

todos.addEventListener("click", function (e) {
  let item = e.target;
  if (item.classList.contains("compBtn")) {
    console.log("complete");
    item.parentElement.classList.toggle("toggleTodo");
  } else if (item.classList.contains("trashBtn")) {
    console.log("trash");
    item.parentElement.remove();
  }
});

function addTask(text) {
  // Icons
  let checkIcon = `<svg class="h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;
  let trashIcon = `<svg class="h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;

  // Create main div
  let div = document.createElement("div");
  div.classList.add(
    "flex",
    "items-center",
    "shadow-sm",
    "justify-center",
    "bg-white",
    "px-6",
    "py-4",
    "rounded-lg",
    "w-full",
    "mt-4",
    "hover:shadow-lg",
    "transition",
    "duration-500",
    "ease-in-out"
  );
  todos.appendChild(div);

  // Add li items for todos
  let li = document.createElement("li");
  li.classList.add("w-full");
  li.innerText = text;
  div.appendChild(li);

  // Add complete button
  let compBtn = document.createElement("button");
  compBtn.classList.add(
    "compBtn",
    "border-2",
    "border-gray-700",
    "px-2",
    "py-1",
    "text-white",
    "rounded-lg",
    "ml-2",
    "focus:outline-none",
    "text-sm",
    "text-gray-700"
  );
  compBtn.innerHTML = checkIcon;
  div.appendChild(compBtn);

  // Add trash button
  let trashBtn = document.createElement("button");
  trashBtn.classList.add(
    "trashBtn",
    "border-2",
    "border-red-400",
    "px-2",
    "py-1",
    "text-white",
    "rounded-lg",
    "ml-2",
    "focus:outline-none",
    "text-sm",
    "text-red-400"
  );
  trashBtn.innerHTML = trashIcon;
  div.appendChild(trashBtn);

  // Clear and focus todo input
  todoInput.value = "";
  todoInput.focus();
}
