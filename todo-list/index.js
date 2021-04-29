$(() => {
  $("#add").on("click", function () {
    const val = $("input").val();
    if (val !== '') {
      //we create a new element
      const elem = $("<li class='item'></li>").text(val);
      $(elem).append("<button class='rem'>X</button>");
      $("#mylist").append(elem);
      $("input").val(""); //clear the input
      //"this" refers to the same object (in our case it is the "x" button), parent () is our "<li>", and remove () removes the object that calls it and all its descendants
      $(".rem").on("click", function () {
        $(this).parent().remove();
      });
    }
  });
})
