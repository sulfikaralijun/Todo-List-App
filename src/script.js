const input = document.getElementById("text"),
	btn = document.querySelector("button"),
	taskElement = document.querySelector(".tasks");

const tasks = [
	"Learn HTML",
	// "Learn CSS",
	// "Learn JS",
	// "Learn Bootstrap",
	// "Learn Sass",
	// "Learn Angular",
	// "Learn React",
	// "Learn Vue",
	// "Learn Node",
	// "Learn MongoDB",
	// "Learn Firebase",
	// "Learn GraphQL",
	// "Learn Python",
	// "Learn C++",
	// "Learn C#",
	// "Learn Java",
	// "Learn PHP",
	// "Learn C",
];

function showTask() {
	tasks.forEach((task) => {
		taskElement.innerHTML += `<li>${task}</li>`;
		console.log(taskElement);
	});
}
showTask()

const addTask = () => {
	let inputTask = input.value;
  if (inputTask === "") {
    return alert("Please enter a task");
  }
  tasks.push(inputTask);
  showTask();
};

btn.addEventListener("click", addTask);
input.addEventListener("keyup", (event) => {
  (event.key === "Enter") && addTask();
});