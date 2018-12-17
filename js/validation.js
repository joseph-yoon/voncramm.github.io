$(document).ready(function () {
  $("#contact-form").on("submit", function() {
    var formValid = true;

    var validName = $("#name").prop("validity").valid;
<<<<<<< HEAD
    if(validName) { 
=======
    if(validName) {
>>>>>>> b76467d180b7fd64ed7f6c5b52446b4a79c0eb58
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
       formValid = false;
    }

    var validEmail = $("#email").prop("validity").valid;
    if(validEmail) {
      $("#emailError").addClass("hidden");
    } else {
      $("#emailError").removeClass("hidden");
      formValid = false;
    }

    var validSubject = $("#subject").prop("validity").valid;
    if(validSubject) {
      $("#subjectError").addClass("hidden");
    } else {
      $("#subjectError").removeClass("hidden");
      formValid = false;
    }

    var validMessage = $("#message").prop("validity").valid;
    if(validMessage) {
      $("#messageError").addClass("hidden");
    } else {
      $("#messageError").removeClass("hidden");
      formValid = false;
    }

    return formValid;
  });

});
