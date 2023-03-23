const eventKey = document.getElementById("eventKey");
const eventKeyCode = document.getElementById("eventKeyCode");
const eventCode = document.getElementById("eventCode");

window.addEventListener("keydown", (event) => {
  //   divInsert.innerHTML = `
  //     <div class = "key">
  //     ${event.key == " " ? "Space" : event.key}
  //     <small>event.key</small>
  //     </div>

  //     <div class = "key">
  //     ${event.keyCode}
  //     <small>event.keyCode</small>
  //     </div>

  //     <div class="key">
  //     ${event.code}
  //     <small>event.code</small>
  //     </div>
  //     `;

  eventKey.innerText = `${event.key == " " ? "Space" : event.key}`;
  eventKeyCode.innerText = `${event.keyCode}`;
  eventCode.innerText = `${event.code}`;
});
