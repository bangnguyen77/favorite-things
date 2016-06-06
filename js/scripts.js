// Then, write code that gathers each of these form input values and places them into one array.
// Front-end logic

$(document).ready(function() {
  $("#favoriteThings form").submit(function(event) {
    var favoriteThings = ["food", "sports", "movie", "book", "socialApp"];

    favoriteThings.forEach(function(favoriteThings) {
      var userInput = $("input#" + favoriteThings).val();
      $("." + favoriteThings).text(userInput);
    });

    $(".favoriteThings").show();

    event.preventDefault();
  });
});
