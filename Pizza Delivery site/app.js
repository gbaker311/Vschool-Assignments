var txt = "";

var person = {
    fname: "Greg",
    lname: "Baker",
    age: 37,
    state: "Utah",
    dogs: ["Timmy", "Nash", "Pippy"]

};

//The for/in statement loops through the properties of an object.

var x:

    for (x in person){
    txt += person[x] + "";
}
document.getElementById("demo").innerHTML = txt;







function myFunction() {
    document.getElementById("demo").addEventListener("click", myFunction);
    function myFunction() {
        document.getElementById("demo").