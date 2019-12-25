$(document).ready(function() {
  var images = [
    "images/voncramm31.jpg", 
    "images/vc2.JPG",
    "images/vc1.jpg",
    "images/vc4.jpg", 
    "images/vc5.jpg"
  ];
  var currindex = 0;

  $("#ssnext").click(function() {
    currindex += 1;

    if(currindex >= images.length) {
      currindex = 0;
    }
    $("#slideshowimg").attr("src", images[currindex]);
  });

  $("#ssback").click(function() {
    currindex -= 1;

    if(currindex <= 0) {
      currindex = 4;
    } 
    $("#slideshowimg").attr("src", images[currindex]);
  });
carousel();

function carousel() {
    if (currindex >= images.length) {
      currindex = 0
    }
    else {
      currindex++;
    }
    $("#slideshowimg").attr("src", images[currindex]);
    setTimeout(carousel, 4000);
}
});
