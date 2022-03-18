const createdTime = document.getElementById("date");
const form = document.querySelector("#toDoForm");
const input = form.querySelector(".todoInput");
const ul = document.querySelector("#list");
const newDate = new Date();
createdTime.innerText = newDate.toDateString();

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(input.value);
  const li = document.createElement("li");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-square-check";

  li.innerText = input.value;
  ul.appendChild(li);
  li.prepend(icon);
  input.value = "";
};

form.addEventListener("submit", handleSubmit);
