// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  // insert vairables with <%= variableName %>
  render: _.template(
    "<div class='message-div'>" +
      "<span class='created-at'>" +
        "<%-created_at%>" +
      "</span>" +
      "<span class='username'>" +
        "<%-username%>" +
      "</span>" +
      "<p class='text'>" +
        "<%-text%>" +
      "</span>" +
    "</div>"
  ),


};