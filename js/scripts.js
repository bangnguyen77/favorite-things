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

    var newArray =[favoriteThings[1,0,2]];
  });
  // , include code that builds a new array out of only the second, first and third elements of the first array, in that order.

  // var newArray = [favoriteThings];
  // $(newArray).show();

// After that, use square bracket notation to access each element of the original array, and use the push() method to add these elements to the new array.

});
