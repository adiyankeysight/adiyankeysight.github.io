$( "input[type='submit']" ).click(function(event) {
  event.preventDefault();
  $.ajax({
    url: "https://formspree.io/adiyan.kaul@yahoo.com",
    method: "POST",
    data: {message: "I am " + $( "input[name='email']" ).val() + ". " +$( "textarea[name='message']" ).val()},
    dataType: "json"
});
  alert("Message Sent!");
});
