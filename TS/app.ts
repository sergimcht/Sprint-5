const react = document.querySelector(".votes") as HTMLElement;
react.style.display = "none";
// APIs URLs
const DADJOKES = "https://icanhazdadjoke.com/";
const JOKEAPI = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const WEATHER = "https://api.openweathermap.org/data/2.5/weather?lat=41.38879&lon=2.15899&units=metric&appid=37f2111fdeb0f75bcb28fbd30c3c518c&lang=EN";
// JS
const reportJokes: any[] = [];

async function getJoke() {
    let request: any;
    let data: any;
    let random = Math.floor(Math.random() * 2) + 1;
      try {
          // If random is 1 -> Dad Jokes. 2 -> JokeAPI.
        if (random === 1) {
            request = await fetch(`${DADJOKES}`, {
                headers: {
                    Accept: "application/json",
                },
            });
            data = await request.json();
            document.querySelector("#joke")!.innerHTML = data.joke;
        }
        else {
            request = await fetch(`${JOKEAPI}`);
            data = await request.json();
            document.querySelector("#joke")!.innerHTML = data.joke;
        }
        react.style.display = "block";
    }
    catch (error) {
    console.log("Something went wrong:", error);
    }
}

  function voteJoke(score: number) {
    const joke = document.querySelector("#joke")!.innerHTML;
    const date = new Date();
    let dateISO = date.toISOString();
    reportJokes.push({
        joke: joke,
        score: score,
        date: dateISO,
    });
    react.style.display = "none";
    console.table(reportJokes);
  }

  window.onload = async function getWeather() {
    
    const weatherRequest = await fetch(`${WEATHER}`);
    const weatherData = await weatherRequest.json();
    let weather = document.querySelector("#weather") as HTMLImageElement;
    let weatherIcon = weatherData.weather[0].icon;
    let temp: any = Math.trunc(weatherData.main.temp);
    weather.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
    document.querySelector("#temperature")!.innerHTML = temp;
    document.querySelector("#weatherDesc")!.innerHTML = weatherData.weather[0].main;
   
};

