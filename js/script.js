//Function
function scrollDown(){
    contentBox.scrollIntoView();
}
//Get Arrow Element
let titleBox = document.getElementsByClassName("title-box")[0];
let arrowDown = titleBox.querySelector("#arrow-icon").getElementsByClassName("arrow-down")[0];
//Get Content Box Element
let contentBox = document.getElementsByClassName("content")[0].querySelector("#content-box");
//Function Arrow
arrowDown.addEventListener('click',scrollDown );
