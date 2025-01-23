import axios from "axios";

function generateQues() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  // axios.get("https://icanhazdadjoke.com", config).then((res) => {
  //   document.getElementById("joke").innerHTML = res.data.joke;
  // });

  axios
    .get("https://opentdb.com/api.php?amount=1&category=18&type=multiple") // Category 18 is "Programming"
    .then((response) => {
      const question = response.data.results[0].question;
      const answers = response.data.results[0].incorrect_answers;
      answers.push(response.data.results[0].correct_answer); // Ensure the correct answer is in the list

      document.getElementById("joke").innerHTML = question;

      console.log("Programming Question:", question);
      console.log("Answers:", answers);
    })
    .catch((error) => {
      console.error("Error fetching programming question:", error);
    });
}

export default generateQues;
