let add = document.getElementById("s+");
let mul = document.getElementById("s*");
let div = document.getElementById("s/");
let sub = document.getElementById("s-");
let delate = document.getElementById("d");
let per = document.getElementById("s%");
let delall = document.getElementById("c");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let n0 = document.getElementById("n0");
let n00 = document.getElementById("n00");
let dot = document.getElementById("dot");
let operations = document.getElementById("operations");
let result = document.getElementById("get-result");



let num1;
let sigen;
let num2;



n1.addEventListener("click", function one() {
    operations.innerHTML += 1;
})
n2.addEventListener("click", function two() {

    operations.innerHTML += 2;
})
n3.addEventListener("click", function three() {

    operations.innerHTML += 3;
})
n4.addEventListener("click", function four() {
    operations.innerHTML += 4;
})
n5.addEventListener("click", function five() {
    operations.innerHTML += 5;
})
n6.addEventListener("click", function six() {
    operations.innerHTML += 6;
})
n7.addEventListener("click", function seven() {
    operations.innerHTML += 7;
})
n8.addEventListener("click", function eight() {
    operations.innerHTML += 8;
})
n9.addEventListener("click", function nine() {
    operations.innerHTML += 9;
})
n0.addEventListener("click", function zero() {
    operations.innerHTML += 0;
})
n00.addEventListener("click", function zero00() {
    operations.innerHTML += "00";
})
dot.addEventListener("click", function one() {
    operations.innerHTML += ".";
})


delall.addEventListener("click", function dd() {
    operations.innerHTML = "";
    result.innerHTML = "";
})
per.addEventListener("click", function () {
    result.innerHTML = (result.innerHTML + "%");
})


add.addEventListener("click", function add() {
    sigen = "+";
    operations.innerHTML += "+";
})

sub.addEventListener("click", function sub() {
    sigen = "-";
    operations.innerHTML += "-";
})

mul.addEventListener("click", function mul() {
    sigen = "*";
    operations.innerHTML += "*";
})

div.addEventListener("click", function div() {
    sigen = "/";
    operations.innerHTML += "/";
})

delate.addEventListener("click", () => {
    result.innerHTML = result.innerHTML.slice(0, 0);
    operations.innerHTML = operations.innerHTML.slice(0, -1);


});

function equal() {


    let parts = operations.innerHTML.split(sigen);

    num1 = parseFloat(parts[0]);
    num2 = parseFloat(parts[1]);

    if (sigen == "+") {
        result.innerHTML = num1 + num2;
    }
    else if (sigen == "-") {
        result.innerHTML = num1 - num2;
    }
    else if (sigen == "*") {
        result.innerHTML = num1 * num2;
    }
    else if (sigen == "/") {
        result.innerHTML = num1 / num2;
    }


}
