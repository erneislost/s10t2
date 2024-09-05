const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", () => {
    localStorage.setItem("text", inputText.value);
});