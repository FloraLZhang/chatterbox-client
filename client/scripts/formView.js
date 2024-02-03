// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  // creates a jQuery variable for the HTML form element
  $form: $('form'),

  // sets the funciton to excecute when 'submit' is clicked
  initialize: function() {
    this.$form.on('submit', this.handleSubmit);
  },

  // the function that is being assigned to the form's submit button.
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('click');
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    const text = $('#message').val();
    const username = '';
    const roomname = '';
    const message = {
      username: username,
      text: text,
      roomname: roomname
    };
    Parse.create(message);
    App.fetch();
  },


  setStatus: function(active) {
    var status = active ? 'true' : null;
    // disables the submit button if status === true, enables button if status === false
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};