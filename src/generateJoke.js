import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  // axios.get("https://icanhazdadjoke.com", config).then((res) => {
  //   document.getElementById("joke").innerHTML = res.data.joke;
  // });

  axios
    .get("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then((response) => {
      if (response.data.type === "twopart") {
        document.getElementById("joke").innerHTML = response.data.setup + '?';
        console.log("Joke Question:", response.data.setup); // Question part
        console.log("Joke Answer:", response.data.delivery); // Answer part
      } else {
        console.log("Joke:", response.data.joke); // For single-part jokes
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

export default generateJoke;
