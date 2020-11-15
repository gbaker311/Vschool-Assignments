const form = document["mom-list"];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const listItem = form.listItem.value;

  if (form.listItem.value != "") {
    form.listItem.value = "";
    const li = document.createElement("li");
    document.getElementById("list").append(li);

    const div = document.createElement("div");
    div.textContent = listItem;
    li.append(div);

    const button1 = document.createElement("button");
    button1.textContent = "edit";
    button1.setAttribute("id", "button_click");
    li.append(button1);
    button1.addEventListener("click", function(e) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("name", "edit-item");
      console.log(input);
      li.append(input)
      
        });

    const button2 = document.createElement("button");
    button2.textContent = "X";
    li.append(button2);
    button2.addEventListener("click", function(e) {
      e.target.parentNode.remove();
      console.log(e);
    });
  }
});
