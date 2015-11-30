"use strict";

var socket = io();

var username;
$(window).load(function() {
    username = prompt("Please enter your name");
    socket.emit('log on', username);
});

$(window).on('beforeunload', function() {
  socket.emit('log off', username);
});


function userActivity(name, joinedOrLeft) {
  alert(name + " " + joinedOrLeft + " the game");
}
socket.on('log on', function(name) {
  userActivity(name, "joined");
});
socket.on('log off', function(name) {
  userActivity(name, "left");
});