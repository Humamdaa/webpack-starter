import generateJoke from "./generateJoke";
import "./styles/main.scss";
import img from "./assets/Passport_of_Syria.jpg";

const passImg = document.getElementById("passImg");
passImg.src = img;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
