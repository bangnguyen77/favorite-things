// Then, write code that gathers each of these form input values and places them into one array.
// Front-end logic

$(document).ready(function() {
  $("#favoriteThings form").submit(function(event) {
    var food = $("input#food").val();
    var sports = $("input#sports").val();
    var movie = $("input#movie").val();
    var book = $("input#book").val();
    var socialApp = $("input#socialApp").val();
    var favoriteThings = ["food", sports, movie, book, socialApp];

  });
  event.preventDefault();
});
// back-end logic
$(".favoriteThings").append(function(favoriteThings) {
$("#list").text();

});

var newArray=[]
