// Then, write code that gathers each of these form input values and places them into one array.
// Front-end logic

$(document).ready(function() {
  $("#favoriteThings form").submit(function(event) {
    var favoriteThings = ["food", "sports", "movie", "book", "socialApp"];

    favoriteThings.forEach(function(favoriteThings) {
      var userInput = $("input#" + favoriteThings).val();
      $("." + favoriteThings).text(userInput);
      event.preventDefault();
    });
    // var newArray= favoriteThings.splice(1,0,2);
    // var newArray = [];
    // newArray[0] = favoriteThings[1];
    // newArray[1] = favoriteThings[0];
    // newArray[2] = favoriteThings[2];
    // var newArray = favoriteThings.map(function(favoriteThings) {
    //   return favoriteThings[1,0,2]
    // });
    $(".favoriteThings").show(newArray);




  });
  // , include code that builds a new array out of only the second, first and third elements of the first array, in that order.

  // var newArray = [favoriteThings];
  // $(newArray).show();

// After that, use square bracket notation to access each element of the original array, and use the push() method to add these elements to the new array.

});
