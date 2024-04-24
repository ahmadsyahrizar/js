// let tutorial = document.getElementById("app");
// tutorial.innerText = "Tutorial Javascript";
// tutorial.style.color = "red";
// tutorial.style.fontSize = "32px";


// let paragraphEl = document.getElementsByClassName("paragraph")[1];

// let elButton = document.createElement("button");
// elButton.innerText = "Submit"
// document.body.append(elButton);
// paragraphEl.remove();

// console.log({paragraphEl});

// event listener;

const bgColorEl = document.getElementById("bg-color");
const textColorEl = document.getElementById("text-color")
const heading = document.getElementById("heading-1")

bgColorEl.addEventListener("change", (event)=> {
  let val = event.target.value;
  heading.style.backgroundColor = val;

})