$(document).ready( ()=> {
	
  //Fade classes in
  $( '.hero-make, .hero-believe' ).css( 'opacity', '1.0' );

  // toggle nav menu dropdown
  const $menuButton = $('.menu-button');
  const $closeButton = $('.close-menu-button, #work-link, #contact-link');
  const $navDropdown = $('#nav-dropdown');
  const $letsTalk = $('.talk');
  /*const $workLink = $('#work-link');*/

  $menuButton.on('click', () => {
    $navDropdown.show();
    $menuButton.hide();
    $closeButton.show();
  })
  $closeButton.on('click', () => {
    $navDropdown.hide();
    $closeButton.hide();
    $menuButton.show();
  })
  $letsTalk.on('click', () => {
    $navDropdown.show();
    $menuButton.hide();
    $closeButton.show();
  })
  /*$ctaButton.on('click', () => {
    $navDropdown.show();
    $menuButton.hide();
    $closeButton.show();
  })
  $workLink.on('click', () => {
    $navDropdown.hide();
  })*/
  
// Chevron button smooth scroll to intro
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
 
});

