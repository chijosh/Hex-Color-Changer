const colors = ["yellow", "green", "blue", "rgba(125,125,125,0.5)", "pink"];

const btn = document
  .getElementById("btn")
  .addEventListener("click", function() {
    let random = Math.floor(Math.random() * colors.length);
    const body = document.body;
    body.style.backgroundColor = colors[random];
    console.log(random);
  });
