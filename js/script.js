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
  source: 'Tony Robbins',
  tags: ['inspirational', 'life', 'power', 'experiance']
}, {
  quote: 'This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.',
  source: 'Dalai Lama',
  citation: '"The Dalai Lama: A Policy of Kindness" - book',
  year: 1990,
  tags: ['kindness', 'heart', 'simple', 'religion']
}, {
  quote: 'Believe you can and you\'re halfway there.',
  source: 'Theodore Roosevelt',
  tags: ['inspirational', 'you', 'believe', 'halfway']
}, {
  quote: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
  source: 'John F. Kennedy',
  citation: 'Speach at City Hall in New Orleans, Louisiana',
  year: 1963,
  tags: ['change', 'life', 'future', 'past']
}, {
  quote: 'We can do anything we want to if we stick to it long enough.',
  source: 'Helen Keller',
  tags: ['long', 'enough', 'want', 'stick']
}, {
  quote: 'The future belongs to those who believe in the beauty of their dreams.',
  source: 'Eleanor Roosevelt',
  tags: ['beauty', 'dreams', 'future', 'believe', 'who']
}];

let currentQuoteIndex;

//function to return quote based on random number
function getRandomQuote() {
  let randomIndex;
  //to prevent displaying the same quote twice in the row
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (currentQuoteIndex === randomIndex);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];

}

//function to display quote on the screen
function printQuote() {
  const quoteData = getRandomQuote();
  const quoteP = document.querySelector('.quote');
  const sourceP = document.querySelector('.source');
  const quoteContainer = document.getElementById('quote-box');
  let tagsString = '';
  let tagContainer;

  function printQuoteMainSection() {
    let sourceString = quoteData.source;
    //building citation string
    if (quoteData.citation) {
      sourceString += `<span class="citation">${quoteData.citation}</span>`;
    }
    if (quoteData.year) {
      sourceString += `<span class="year">${quoteData.year}</span>`;
    }

    //updating quote text
    quoteP.textContent = quoteData.quote;

    //updating quote citation
    sourceP.innerHTML = sourceString;
  }

  function appendTags() {
    //checking if tags container doesn't exist then create one and attach to the quote container
    if (!document.querySelector('.tags-container')) {
      tagContainer = document.createElement('div');
      tagContainer.className = 'tags-container';
      quoteContainer.appendChild(tagContainer);
    }
    //building tags string
    for (let i = 0; i < quoteData.tags.length; i++) {
      tagsString += `<span class="tag">${quoteData.tags[i]}</span>`;
    }
    document.querySelector('.tags-container').innerHTML = tagsString;
  }

  function changeBodyColor() {
    const body = document.getElementsByTagName('body');
    //function to generate random color
    function getRandomColor() {
      let rgbColor = `RGB(`;
      for (let i = 0; i < 3; i++) {
        const randomColorValue = Math.floor(Math.random() * 256);
        if (i === 2) {
          rgbColor += `${randomColorValue})`;
        } else {
          rgbColor += `${randomColorValue},`;
        }
      }
      return rgbColor;
    }
    body[0].style.backgroundColor = getRandomColor();
  }

  printQuoteMainSection();
  appendTags();
  changeBodyColor();
}

//calling printQuote function to replace default quote on the page load 
printQuote();

//setting interval function to refresh quotes every 15 seconds
setInterval(printQuote, 15000);

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);