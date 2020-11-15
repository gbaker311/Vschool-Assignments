document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");
    const newMessage = document.querySelector(".input").value;
    const clearBtn = document.createElement("button");
    clearBtn.id = "clear";
    clearBtn.innerText = "X";
    const edit = document.createElement("button");
    edit.innerText = "edit";
    newDiv.classList.add("addItem");
    newDiv.innerText = newMessage;
    document.querySelector("#list").appendChild(newLi);
    document.querySelector("#list").appendChild(newDiv);
    document.querySelector("#list").appendChild(edit);
    document.querySelector("#list").appendChild(clearBtn);


}
const clear = document.getElementById("clear")
console.log("clear")
var ul = document.querySelector("#list");
console.log(ul)
var listLength = ul.children.length;
clear.addEventListener("click", function clearBtn() {
    for (i = 0; i < listLength; i++) {
        ul.removeChild(ul.childNodes[i]);
        console.log(ul.removeChild(ul.childNodes[i]));
        console.log('fired');
    }
});

