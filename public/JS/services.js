angularApp.service('sharedata', function($http) {
  this.data = [
    {
      name: "Front End - 50 Shades of RGB:",
      pic: "http://i.imgur.com/r0h0ZVb.png",
      overlay: "HTML, CSS, Vanilla JS",
      play: "https://oskarahl.github.io/50Shades-of-RGB/",
      code: "https://github.com/OskarAhl/50Shades-of-RGB/tree/gh-pages",
      text: "'Guess the color' game",
      codetext: "HTML, CSS, Vanilla JS"
    },
    {
      name: "Front End - Patatap Clone:",
      pic: "http://i.imgur.com/UN4D0H6.png",
      overlay: "PaperJS, HowlerJS",
      play: "https://oskarahl.github.io/patatap-clone/",
      code: "https://github.com/OskarAhl/patatap-clone/tree/gh-pages",
      text: "User can create music and animations by pressing keys",
      codetext: "PaperJS, HowlerJS"
    },
    {
      name: "Full stack - Yelpcamp:",
      pic: "http://i.imgur.com/UvbfMOR.jpg",
      overlay: "NodeJS, MongoDB, ExpressJS, EJS, Mongoose, REST, PassportJS",
      play: "https://yelpcampreview.herokuapp.com/campgrounds",
      code: "https://github.com/OskarAhl/yelpcamp",
      text: "RESTful Yelp Clone for camp sites. User can sign up, login, add/edit/delete content.",
      codetext: "NodeJS, MongoDB, ExpressJS, EJS, Mongoose, REST, PassportJS"
    },
    {
      name: "Full stack - Oskarmovies:",
      pic: "http://i.imgur.com/0NEChJQ.png",
      overlay: "API, JSON, NodeJS, npm, ExpressJS, EJS, Semantic UI",
      play: "https://oskarmovies.herokuapp.com/",
      code: "https://github.com/OskarAhl/IMDB-vs-RottenTomatoes/tree/gh-pages",
      text: "User can compare IMDB-rating vs. Rottentomatoes for movies.",
      codetext: "OMDB API, NodeJS, npm, ExpressJS, EJS, Semantic UI"
    },
    {
      name: "Memory-Span Tester:",
      pic: "http://i.imgur.com/BFZZ4oH.png",
      overlay: "jQuery, HTML, CSS",
      play: "https://oskarahl.github.io/Memory-Span-Tester/",
      code: "https://github.com/OskarAhl/Memory-Span-Tester/tree/gh-pages",
      text: "Timer-based game inspired by the classic 'Simon Game'",
      codetext: "jQuery, HTML, CSS"
    }
  ];
});
