// todo: work inside self invoked function to make its variable local

(function () {
  // todo: calling HTML Elements to place the quotes content inside it later
  var quoteDesc = document.getElementById("quoteDesc");
  var author = document.getElementById("authorName");

  //   todo: calling the btn, which when clicked one quote will be appeared
  var quoteBtn = document.getElementById("quoteBtn");

  // todo: create array of object that contains the quotes with their quthors
  var quotes = [
    {
      quoteContent: "“Be yourself; everyone else is already taken.”",
      authorName: "― Oscar Wilde",
    },
    {
      quoteContent: "“A room without books is like a body without a soul.”",
      authorName: "― Marcus Tullius Cicero",
    },
    {
      quoteContent:
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      authorName: "― Bernard M. Baruch",
    },
    {
      quoteContent:
        "“You only live once, but if you do it right, once is enough.”",
      authorName: "― Mae West",
    },
    {
      quoteContent:
        "“If you tell the truth, you don't have to remember anything.”",
      authorName: "― Mark Twain",
    },
    {
      quoteContent:
        "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      authorName: "― Maya Angelou",
    },
    {
      quoteContent:
        "“A friend is someone who knows all about you and still loves you.”",
      authorName: "― Elbert Hubbard",
    },
    {
      quoteContent: "“Be the change that you wish to see in the world.”",
      authorName: "― Mahatma Gandhi",
    },
    {
      quoteContent:
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
      authorName: "― Ralph Waldo Emerson",
    },
    {
      quoteContent:
        "“A woman is like a tea bag; you never know how strong it is until it's in hot water.”",
      authorName: "― Eleanor Roosevelt",
    },
    {
      quoteContent: "“That which does not kill us makes us stronger.”",
      authorName: "― Friedrich Nietzsche",
    },
    {
      quoteContent: "“It is never too late to be what you might have been.”",
      authorName: "― George Eliot",
    },
    {
      quoteContent: "“If you judge people, you have no time to love them.”",
      authorName: "― Mother Teresa",
    },
    {
      quoteContent:
        "“Love is that condition in which the happiness of another person is essential to your own.”",
      authorName: "― Robert A. Heinlein, Stranger in a Strange Land",
    },
    {
      quoteContent:
        "“Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.”",
      authorName: "― Markus Zusak, I Am the Messenger",
    },
  ];

  // todo: create a function declaration that gets random quotes without repetition
  var currentRandom;
  function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    while (randomNumber === currentRandom) {
      randomNumber = Math.floor(Math.random() * quotes.length);
    }
    currentRandom = randomNumber;
    return randomNumber;
  }

  //   todo: function to get random number and insert the quote of index equal to that number inside their corresponding HTML Element
  function getRandomQuotes() {
    var randomQuotes = quotes[getRandomNumber()];
    quoteDesc.innerHTML = randomQuotes.quoteContent;
    author.innerHTML = randomQuotes.authorName;
  }

  //  todo: get quotes when click on btn
  quoteBtn.onclick = getRandomQuotes;
})();
