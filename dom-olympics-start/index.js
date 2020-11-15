const h1 = document.createElement("h1");

document.querySelector("body");
document.body.style.backgroundColor = "grey";

h1.textContent = "JavaScript made this!!";
h1.style.border = "1px solid";
h1.style.backgroundColor = "";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("subTitle");
subTitle.innerHTML = '<span class="name">Greg</span> wrote the Javascript';
document.getElementById("header").appendChild(subTitle);

// let selectedOption = document.getElementById("them-drop-down").value;
// let leftHandValue = document.getElementById('theme-drop-down').value.split(' ')[0];
// function changeTheme(event) {
//     let previousValues = selectedOption;
//     selectedOption = event.target.value;
//     previousValues = previousValues.split(' ');f
// }

const messages = document.getElementsByClassName("message");
messages[0].textContent = "I'm so glad I understand how this works!";
messages[1].textContent = "Oh, I bet you faked it until you made it, right?";
messages[2].textContent = "OH ABSOLUTELY!";
messages[3].textContent = "you're great";

let clear = document.getElementById("clear-button");
clear.onclick = function() {
  myfunction();
};
function myfunction() {
  const messages = document.getElementsByClassName("message");
  messages[0].textContent = "";
  messages[1].textContent = "";
  messages[2].textContent = "";
  messages[3].textContent = "";
}
const dropDown = document.getElementById("theme-drop-down");
dropDown.addEventListener("change", function(e) {
  console.log(e.target.value);
  if (e.target.value == "theme-one") {
    
  }

  // if the selected value === theme-one
  // change the chat bg colors to blue/block
});
