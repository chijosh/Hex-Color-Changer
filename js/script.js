// const colors = ["yellow", "green", "blue", "rgba(125,125,125,0.5)", "pink"];

// const btn = document
//   .getElementById("btn")
//   .addEventListener("click", function() {
//     let random = Math.floor(Math.random() * colors.length);
//     const body = document.body;
//     body.style.backgroundColor = colors[random];
//     console.log(random);
//   });

(function() {
  const hexValue = document.getElementById("hex-value");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    const hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexValues.length);
      hexColor += hexValues[random];
    }
    document.body.style.backgroundColor = hexColor;
    hexValue.textContent = hexColor;
  });
})();
