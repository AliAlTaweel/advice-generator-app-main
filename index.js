let adviceText = document.querySelector(".advice");
let adviceNumber = document.querySelector(".main h3");
let clickedImg = document.querySelector(".dais img");


async function func(event) {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
  
    if (!response.ok) {
      throw new Error("Website API response notOk");
    }
    let jsonData = await response.json();
    adviceText.textContent = `"${jsonData.slip.advice}"`;
    adviceNumber.textContent = `Advice #${jsonData.slip.id}`;
  } catch (error) {
    console.error("error catch");
  }
}
clickedImg.addEventListener("click", func);
