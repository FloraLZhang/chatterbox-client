// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  // selects the HTML element with the id of 'chats'
  $chat: $('#chats'),

  initialize: function() {
    this.render();
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // ie, set css properties, event handlers, etc...
  },

  // response properties
  // campus, created_at, github_handle, message_id, roomname, text, updated_at, username


  render: function() {
    // TODO: Render _all_ the messages.
    // retrieve data and store in a variable
    // for each message (however many we want to display) use a Underscore template to render and append message to $('#chats')
    // render properties: created_at, username, text
    //App.fetch((data) => {return data;})
    this.$chat.empty();
    const data = Messages.data;
    _.each(data, (message) => {
      this.renderMessage(message);
    });
  },
  // data[message][createdAt]
  // <%= variableName %>


  renderMessage: function(message) {
    // create a new DOM element with template
    const messageT = MessageView.render(message);
    // append new element to chat
    this.$chat.append(messageT);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};