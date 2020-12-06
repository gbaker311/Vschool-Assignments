
const colors = ["red", "blue", "green", "purple", "black"];

document.getElementById("add").addEventListener("click", function(e) {
  const inputField = document.getElementById("input");
  // console.log("this is inputField: ", inputField)
  // console.log("this is the value of inputField: ", inputField.value)
  const subItem = createSubItem(inputField.value);

  document.getElementById("list").appendChild(subItem);
});

function createDropDown() {
  const dropDown = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = colors[i];
    option.value = colors[i];
    dropDown.append(option);
  }

  dropDown.addEventListener("change", function(e) {
    console.log(e.target.value);
    // grab the value from the dropdown menu
    const newColor = e.target.value;

    // grab div element whose bg color you want to change
    const divWrapper = dropDown.parentNode;
    divWrapper.style.backgroundColor = newColor;
    // assign the background color of the div to the value selected
    // from the dropdown menu
    console.log(dropDown.parentNode);
    e.target.backgroundColor = "blue"
    console.log("i changed")
  });
  return dropDown;
}

function createSubItem(itemValue) {
  const subItem = document.createElement("div");
  console.log("this is itemValue: ", itemValue)
  subItem.textContent = itemValue;
  const dropDown = createDropDown();
  subItem.appendChild(dropDown);
  subItem.setAttribute("class", "subItem");
  return subItem;
}
