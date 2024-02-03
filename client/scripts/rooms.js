// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  roomList: [],
  selectedRoom: null,

  // list of existing rooms
  retrieveRooms() {
    // initalize an empty array for room list
    this.roomList = [];
    // itterate over Messages.data
    const data = Messages.data;
    _.each(data, (message) => {
      // for each message, if the room name is not on our array then push the room name to our array
      if (!this.roomList.includes(message.roomname)) {
        this.roomList.push(message.roomname);
      }
    });
  },
  // TODO: Define methods which allow you to add rooms, update the list,

  // mark a room as selected, etc.
  // addRoom(roomName) {
  //
  // }


  // method for adding room
  addRoom() {
    // add roomName to roomList
    const newRoomName = $('#new-room-input').val();
    Rooms.roomList.push(newRoomName);
    // invoke RoomsView.render to update the list of rooms
    RoomsView.render();
  },

  // set up roomlist to update automatically

  // functionality for marking a room as selected
  selectRoom() {
    // set Rooms.selectedRoom to selected room
    // display room name on website
    // display only messages from this room
  }

};