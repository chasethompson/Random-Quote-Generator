/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//Object array of philosophy quotes from different philosophy branches.

var quotes = [ 
  { 
    quote: 'The only absolute knowledge attainable by man is that life is meaninglessness.',
    name: 'Leo Tolstoy',
    date: 1882,
    tag: 'Nihilism'
  },
  {
    quote: 'I think human consciousness is a tragic misstep in evolution. We became too self-aware.',
    name: 'Rustin Cohle True Detective',
    date: 2014,
    tag: 'Nihilism'
  },
  {
    quote: 'Waste no more time arguing what a good man should be. Be One.',
    name: 'Marcus Aurelius',
    date: '161 AD',
    tag: 'Stoicism'
  },
  {
    quote: 'If a man knows not which port he sails, no wind is favorable.',
    name: 'Seneca',
    date: '40 AD',
    tag: 'Stoicism'
  },
  {
    quote: 'Man suffers only because he takes seriously what the gods made for fun.',
    name: 'Alan Wilson Watts',
    date: 2004,
    tag: 'Taoism'
  },
  {
    quote: 'Do you really want to be happy? You can begin by being appreciative of who you are and what you have got.',
    name: 'Benjamin Hoff',
    date: 1982,
    tag: 'Taoism'
  }
];


var i;
var timer;
//Background colors courtesy of The Visme Blog article on Flat Web Design
var backgroundColors = [ '#E27D60','#85DCB','#E8A87C','#C38D9E','#41B3A3',];


//This function will create a random quote from array
function getRandomQuote(){
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

//This function changes the background color using color array
function colorChange(){
  var randomColor = Math.floor(Math.random() * backgroundColors.length);
  document.querySelector('body').style.backgroundColor = backgroundColors[randomColor];
}

//Function generates quote to display on page
function printQuote(){
  colorChange();
  var j = getRandomQuote();
  while(i === j.quote){
    j = getRandomQuote();
  }
  i = j.quote;
  var messageToPrint = '<p class="quote">' + j.quote  + '</p>';
  messageToPrint += '<p class="name">' + j.name;
  if(j['date']){
    messageToPrint += '<span class="date">' + j.date +  '</span>';
  }
  messageToPrint += '</p>';
  messageToPrint += '<p class="tag">Tag: ' + j.tag +  '</p>';
  
  document.getElementById('quote-box').innerHTML = messageToPrint;
  intervalTimer();
}

//Function executes random quote and starts interval timer
printQuote();

function intervalTimer() {
  clearInterval(timer);
  timer = setInterval(printQuote, 7000);
}

//Event Listener on button which will call print func
document.getElementById('loadQuote').addEventListener("click", printQuote, false);