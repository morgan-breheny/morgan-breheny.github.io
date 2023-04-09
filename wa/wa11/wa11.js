const quotes = "https://api.quotable.io/random";

const button = document.querySelector(".button");
let quote = document.getElementById("text");
let author = document.getElementById("source");

function newQuote()
{
	fetch(quotes)
    .then((data) => data.json())
    .then((item) => {
      text.innerText = item.content;
      source.innerText = item.author;
    });
}

button.addEventListener("click", newQuote);
newQuote(newQuote);


