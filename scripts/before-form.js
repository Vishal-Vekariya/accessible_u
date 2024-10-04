/*
 * JavaScript for Accessible University Demo Site
 * http://uw.edu/accesscomputing/AU
 *
 * before-form.js = Custom inaccessible form validation
 */

$(document).ready(function(event) {
  
  // Prevent default form submission to display error messages
  $('#submit').on('click', function(event) {
    var heading = $('<div>').addClass('errorHeading').text('ERROR');
    var errorMsg = $('<p>')
      .text('Your form has errors. Please correct them and resubmit.');
    $('#error').html(heading).append(errorMsg).show();
    $(document).scrollTop(1); // Scroll up to show the error message!
    event.preventDefault();
  });

  // Navigate to the next form field on Enter key press
  $('input').on('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Move focus to the next input
      var nextInput = $(this).closest('form').find(':input:eq(' + 
        ($(this).index(':input') + 1) + ')');
      if (nextInput.length) {
        nextInput.focus();
      } else {
        // If it's the last input, focus on the submit button
        $('#submit').focus();
      }
    }
  });
});

