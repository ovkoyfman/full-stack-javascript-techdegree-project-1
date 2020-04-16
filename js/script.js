/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/*** 
 * `quotes` array 
 ***/
const quotes = [{
	quote: 'Only those who have learned the power of sincere and selfless contribution experience life’s deepest joy: true fulfillment.',
	author: 'Tony Robbins'
}, {
	quote: 'This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.',
	author: 'Dalai Lama',
	citation: '"The Dalai Lama: A Policy of Kindness" - book',
	year: 1990
}, {
	quote: 'Believe you can and you\'re halfway there.',
	author: 'Theodore Roosevelt'
}, {
	quote: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
	author: 'John F. Kennedy',
	citation: 'Speach at City Hall in New Orleans, Louisiana',
	year: 1963
}, {
	quote: 'We can do anything we want to if we stick to it long enough.',
	author: 'Helen Keller'
}, {
	quote: 'The future belongs to those who believe in the beauty of their dreams.',
	author: 'Eleanor Roosevelt'
}];
/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randomNumber];
}
/***
 * `printQuote` function
 ***/
function printQuote() {
	const quoteData = getRandomQuote();
	const quoteP = document.querySelector('.quote');
	const sourceP = document.querySelector('.source');
	let sourceString = quoteData.author;
	if (quoteData.citation) {
		sourceString += `<span class="citation">${quoteData.citation}</span>`;
	}
	if (quoteData.year) {
		sourceString += `<span class="year">${quoteData.year}</span>`;
	}
	quoteP.textContent = quoteData.quote;
	sourceP.innerHTML = sourceString;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);