// get element
const input = document.getElementById("task"),
	btn = document.querySelector("button"),
	tasksElement = document.querySelector(".tasks");

// initialize data
const tasks = [
	"Learn HTML",
	"Learn CSS",
	"Learn JS",
];

// show task in the list
function showTask() {
  let newTask = '';
	tasks.forEach((task) =>
		newTask += `<li>${task}</li>`;
	});
	tasksElement.innerHTML += newTask;
}
showTask()

// add task to data
const addTask = () => {
	let inputTask = input.value;
  if (inputTask === "") {
    return alert("Please enter a task");
  } else {
    tasks.push(inputTask);
    tasksElement.innerHTML += `<li>${inputTask}</li>`
    input.value = '';
  }
};

// handle add task
btn.addEventListener("click", addTask);
input.addEventListener("keyup", (event) => {
  (event.key === "Enter") && addTask();
});

// handle actions
const taskElement = document.querySelectorAll(".tasks li");
taskElement.forEach((task) => {
	task.addEventListener("click", () => {
		task.classList.add("actions");
	});
})