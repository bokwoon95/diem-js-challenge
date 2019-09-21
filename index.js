// What's your name?
const name = document.querySelector("#name");
const nameOutput = document.querySelector("#nameOutput");
name.addEventListener("focus", function() {
  if (nameOutput.innerHTML === "") {
    nameOutput.innerHTML = "Hello there! What's your name?";
  }
});
name.addEventListener("blur", function() {
  if (name.value === "") {
    nameOutput.innerHTML = "Hello there! What's your name?";
  } else {
    nameOutput.innerHTML = `Hi, ${name.value}!`;
  }
});

// Your age is...
const date = document.querySelector("#date");
const ageOutput = document.querySelector("#ageOutput");
date.addEventListener("focus", function() {
  if (ageOutput.innerHTML === "") {
    ageOutput.innerHTML = "Lemme guess, your age is...";
  }
});
date.addEventListener("blur", function() {
  if (date.value === "") {
    ageOutput.innerHTML = "Would you mind entering your birthday?";
  } else {
    const now = new Date();
    const birthday = new Date(date.value);
    let age = now.getFullYear() - birthday.getFullYear();
    if (birthday.getMonth() > now.getMonth()) {
      age -= 1;
    }
    ageOutput.innerHTML = `Your age is ${age} years old!`;
  }
});

// Light or Dark?
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const colorbox = document.querySelector("#themeOutput").parentNode.parentNode;
const themeOutput = document.querySelector("#themeOutput");
light.addEventListener("click", function() {
  colorbox.classList.remove("bg-dark", "text-white");
  colorbox.classList.add("bg-light", "text-black");
  themeOutput.innerHTML = "You chose Light Mode!";
});
dark.addEventListener("click", function() {
  colorbox.classList.remove("bg-light", "text-black");
  colorbox.classList.add("bg-dark", "text-white");
  themeOutput.innerHTML = "You chose Dark Mode!";
});

// Skills
const skillsInput = document.querySelector("#html").parentNode;
const skillsOutput = document.querySelector("#skillsOutput");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javascript = document.querySelector("#javascript");
function toggleSkill(event) {
  const element = event.currentTarget;
  element.classList.remove("btn-danger");
  element.classList.add("btn-success");
  element.classList.add("mr-1");
  if (element.parentNode === skillsInput) {
    skillsOutput.appendChild(element);
  } else if (element.parentNode === skillsOutput) {
    skillsInput.appendChild(element);
  }
}
function makeRed(event) {
  const element = event.currentTarget;
  element.classList.remove("btn-success");
  element.classList.add("btn-danger");
}
function makeGreen(event) {
  const element = event.currentTarget;
  element.classList.remove("btn-danger");
  element.classList.add("btn-success");
}
for (skill of [html, css, javascript]) {
  skill.addEventListener("click", toggleSkill);
  skill.addEventListener("mouseenter", makeRed);
  skill.addEventListener("mouseleave", makeGreen);
}
