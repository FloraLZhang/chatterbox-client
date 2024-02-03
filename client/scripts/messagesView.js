// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  // selects the HTML element with the id of 'chats'
  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // ie, set css properties, event handlers, etc...
  },

  // response properties
  // campus, created_at, github_handle, message_id, roomname, text, updated_at, username

  //template in messageView.js
  // messageTemplate: _.template(
  //   "<div class='message-div'>" +
  //     "<span class='created-at'>" +
  //       "<%=message[createdAt]%>" +
  //     "</span>" +
  //     "<span class='username'>" +
  //       "<%=message[username]%>" +
  //     "</span>" +
  //     "<p class='text'>" +
  //       "<%=message[text]%>" +
  //     "</span>" +
  //   "</div>"
  // ),

  render: function() {
    // TODO: Render _all_ the messages.
    // retrieve data and store in a variable
    // for each message (however many we want to display) use a Underscore template to render and append message to $('#chats')
    // render properties: created_at, username, text
    //App.fetch((data) => {return data;})
    const data = App.data;
    const $chat = $('#chats');
    _.each(data, (message) => {
      debugger;
      let messageT = MessagesView.messageTemplate(message);
      $chat.append(messageT);
    });
  },
  // data[message][createdAt]
  // <%= variableName %>


  renderMessage: function(message) {
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};