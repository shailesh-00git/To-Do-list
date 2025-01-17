let inputs = document.querySelector("#input");
let btn = document.querySelector("button");
let text = document.querySelector(".text");
function getVal() {
  if (inputs.value === "") {
    alert("Please! enter your task");
  } 
  else{
    // console.log(inputs.value);
    let newTask = document.createElement("li");
    newTask.innerHTML = `${inputs.value} <i  class="fa-solid fa-trash"></i>`;
    text.appendChild(newTask);
    inputs.value = "";
    newTask.classList.add("newClass");
    //remove of text element when the trash icon is clicked
    document.querySelector(".text").addEventListener("click", function(e){
        console.log(e);
        
        if(e.target.tagName === "I"){
            let removeIt = e.target.parentElement;
            removeIt.remove(); 
        }
    });
  }
}
btn.addEventListener("click", getVal);
