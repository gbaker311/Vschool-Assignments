const color = ["red", "green", "blue", "purple", "black"]

document.getElementById("add").addEventListener("click", function (e) {
    const inputField = document.getElementById("input")
    const subItem = createSubItem(inputField.value)

    document.getElementById("list").appendChild(subItem)
});

function createDropDown() {
    const dropdown = document.getElementById("select")
    for (let i = 0; i < colors.length; i++) {
        
    }
}