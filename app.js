//loops through the five colors on each click event

// let color = ["blue", "red", "yellow", "green", "orange"];

// let i = 0;

// document.getElementById("box").addEventListener("click", function() {
//   i = i < color.length ? ++i : 0;
//   document.getElementById("box").style.background = color[i];
// });


document.getElementById("box").addEventListener("mouseover", function(){
    let color = document.getElementById("box").style.background = "blue";
})
document.getElementById("box").addEventListener("mouseout", function(){
    let color = document.getElementById("box").style.background = "red";
}) 

document.getElementById("box").addEventListener("mouseup",function(){
    let color = document.getElementById("box").style.background = "yellow";
})
document.getElementById("box").addEventListener("dblclick", function(){
    let color = document.getElementById("box").style.background = "green";
}) 

document.getElementById("box").addEventListener("wheel", function(){
    let color = document.getElementById("box").style.background = "orange";
})
