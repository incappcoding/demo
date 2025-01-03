var text = document.getElementById("text");

function color() {
    text.style.color = "red";
}

function bold() {
    text.style.fontWeight = "900";
}

function italic(){
    text.style.fontStyle =  "italic";
}

function underline(){
    text.style.textDecoration = "underline";
}

function uppercase(){
    text.style.textDecoration = "uppercase";
}

function Strike(){
    text.style.textDecoration = "line-through";
}

function mark(){
    text.style.backgroundColor = "yellow";
}

function left(){
    text.style.textAlign = "left";
}
 
function right(){
    text.style.textAlign = "right";
}

function center(){
    text.style.textAlign = "center";
}

function load(){
    open("index.html");
}