import generateQues from "./generateQuestion";
import "./styles/main.scss";
import img from "./assets/ques.jpg";

const passImg = document.getElementById("passImg");
passImg.src = img;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateQues);
