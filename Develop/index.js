$(document).ready(function () {
  // upon clicking the save button, the following function gathers Jquery values for later use in local storage
  $(".saveButton").on("click", function () {
    var text = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  // Returns the text area details saved from local storage
  $("#0800 .text").val(localStorage.getItem("0800"));
  $("#0900 .text").val(localStorage.getItem("0900"));
  $("#1000 .text").val(localStorage.getItem("1000"));
  $("#1100 .text").val(localStorage.getItem("1100"));
  $("#1200 .text").val(localStorage.getItem("1200"));
  $("#1300 .text").val(localStorage.getItem("1300"));
  $("#1400 .text").val(localStorage.getItem("1400"));
  $("#1500 .text").val(localStorage.getItem("1500"));
  $("#1600 .text").val(localStorage.getItem("1600"));
  $("#1700 .text").val(localStorage.getItem("1700"));

  // Function to capture all hour blocks, run through each timeBlock, then change the style of the timeBlock based on time
  function hourTracker() {
    var currentHour = moment().hour();

    $(".timeBlock").each(function () {
      var eachHour = parseInt($(this).attr("id").split("hour")[1]);
      
      if (eachHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (eachHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  hourTracker();
})