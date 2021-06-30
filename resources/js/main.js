  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    myFunction();
    myFUnction2();
  };

  // Get the header
  var header = document.getElementById("main-nav");
  // Get the content area
  var topContainer = document.getElementById("topContainer");
  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      topContainer.classList.add("topPadding");
       // here you remove sticky -> also remove top padding
    } else {
      header.classList.remove("sticky");
      topContainer.classList.remove("topPadding");
    }
  }