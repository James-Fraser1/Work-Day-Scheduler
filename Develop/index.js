$(document).ready(function () {

  $(".saveButton").on("click", function () {
    var text = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");
  })
})