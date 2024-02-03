// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // $button.on('click', this.handleSubmit);
    RoomsView.$button.click(this.handleClick);

    const $newRoomInput = $('<input type="text" name="new-room-input" id="new-room-input">');
    const $newRoomSubmit = $('<button id="new-room-submit">Submit</button>');
    $newRoomSubmit.click(Rooms.addRoom);
    const $rooms = $('#rooms');
    $rooms.append($newRoomInput, $newRoomSubmit);
    Rooms.retrieveRooms();
    this.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    Rooms.roomList = [];
    for (let room in Rooms.roomList) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    const $option = $(`<option value="${roomname}">${roomname}</option>`);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    const $newRoomInput = $('#new-room-input');
    const $newRoomSubmit = $('#new-room-submit');
    $newRoomInput.css('display', 'inline');
    $newRoomSubmit.css('display', 'inline');
  }

};
