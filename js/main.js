let quote   = document.getElementById("quote");
let writter = document.getElementById("writter");
let btn     = document.getElementById("btn");
let url     = "https://api.quotable.io/random";


//  Function to Generate Random Quote:
let getQuote = () => {
    fetch (url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText   = item.content;
        writter.innerText = item.author;
    });
};



//  Trigger Function When Window is loaded:
window.addEventListener("load", getQuote);



//  Trigger Function When Button Clicked:
btn.addEventListener("click", getQuote);