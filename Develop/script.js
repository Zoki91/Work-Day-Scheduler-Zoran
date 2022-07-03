//Showing today's date in MM Do YYYY, h:mm:ss a format from Moment Js
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

const hourToColor = {'1': 'red', '2': 'blue'};

$(".btn").on("click", function () {
  //get nearby values.
  console.log(this);
  //this below is from the "enter-note" in the HTML
  var text = $(this).siblings(".enter-note").val(); 
  // this below is taken from teh id from the HTML
  var time = $(this).parent().attr("id"); 

  //save items in local storage.
  localStorage.setItem(time, text);
})

$("#9AM .enter-note").val(localStorage.getItem("9AM"));
$("#10AM .enter-note").val(localStorage.getItem("10AM"));
$("#11AM .enter-note").val(localStorage.getItem("11AM"));
$("#12PM .enter-note").val(localStorage.getItem("12PM"));
$("#1PM .enter-note").val(localStorage.getItem("1PM"));
$("#2PM .enter-note").val(localStorage.getItem("2PM"));
$("#3PM .enter-note").val(localStorage.getItem("3PM"));
$("#4PM .enter-note").val(localStorage.getItem("4PM"));
$("#5PM .enter-note").val(localStorage.getItem("5PM"));
$("#6PM .enter-note").val(localStorage.getItem("6PM"));

