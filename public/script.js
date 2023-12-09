const socket = io();

function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name && message) {
    socket.emit("chat message", { name, message });
    document.getElementById("message").value = "";
  } else {
    alert("Please enter your name and message.");
  }
  return false;
}
socket.on("chat message", (data) => {
  const messages = document.getElementById("messages");
  const li = document.createElement("li");

  li.style.padding = "10px"

  const name = document.createElement("span");
  name.style.color = "black";
  name.style.fontFamily = "arial";
  name.appendChild(document.createTextNode(`${data.name} : `));

  const message = document.createElement("span");
  message.style.color = "green";
  message.appendChild(document.createTextNode(data.message));

  li.appendChild(name);
  li.appendChild(message);
  messages.appendChild(li);
});
