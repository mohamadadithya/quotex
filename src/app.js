async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quoteText = document.getElementById('quote-text');
    const quoter = document.getElementById('quoter');
    quoteText.innerText = data.content;
    quoter.innerText = data.author;
}