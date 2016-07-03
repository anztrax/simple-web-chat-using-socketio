$(function(){
  var socket = io();
  var user = '';

  var $messageTextInput = $("#messageTextInput");
  $('#messageForm').submit(function(){
    socket.emit('chat message',{
      user: user,
      text : $messageTextInput.val()
    });
    $messageTextInput.val('');
    return false;
  });

  $("#newUserForm").submit(function(){
    var usernameInput = $("#newUserTextInput").val().trim();
    if(usernameInput == ""){
      alert("hmm fill your name please");
    }else{
      //remove modal and send socket what is your name
      socket.emit('new joiner',usernameInput);
      user = usernameInput;
      hideModal();
      showStatuBar(usernameInput);
    }

    return false;
  });
  
  $("#statusBar").submit(function(){
    socket.emit('joiner leave',user);
    hideStatuBar();
    showModal();
    return false;
  });

  socket.on('chat message',function(payload){
    var usernameText = $('<strong />').text(payload.user + ' : ');
    var messageText = $('<span />').text(payload.text);
    var $listItem = $('<li />').append(usernameText).append(messageText);
    $('#messages').append($listItem);
  });

  socket.on('new joiner',function(msg){
    var $listItem = $('<li />',{
      class : 'new-joiner-list'
    }).text(msg);
    $('#messages').append($listItem);
  });
  socket.on('joiner leave',function(user){
    var $listItem = $('<li />',{
      class : 'joiner-leave-list'
    }).text(user);
    $('#messages').append($listItem);
  });
});

function showStatuBar(username){
  $("#statusBar #joinerName").text(username);
  $("#statusBar").show();
}
function hideStatuBar(){
  $("#statusBar #joinerName").text('');
  $("#statusBar").hide();
}
function hideModal(){
  var modal = $('.modal');
  modal.hide();
}
function showModal(){
  var modal = $('.modal');
  modal.show();
}