let webSocket = new WebSocket('wws://vps-3102527-x.dattaweb.com:9000');

// Send text to all users through the server
function sendHi(uuid) {
    // Construct a msg object containing the data the server needs to process the message from the chat client.
    const msg = {"type": "hi", "uuid": uuid};
  
    // Send the msg object as a JSON-formatted string.
//    webSocket.send(JSON.stringify(msg));

    console.log(uuid)
  
    // Blank the text input element, ready to receive the next line of text from the user.
    document.getElementById("dadiv").innerHTML = uuid;
  }
