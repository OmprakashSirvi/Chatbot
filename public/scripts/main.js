var today = new Date();
var date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes();

document.getElementById('msg-info-time').innerHTML = date + '|' + time;

const msgerForm = get('.mesger-input-area');
const msgerInput = get('.msger-input');
const msgerChat = get('.mesger-chat');

// Icons made by Freepik from www.flaticon.com
const BOT_IMG =
  'https://www.bing.com/th/id/OGC.7d9b1d662b28cd365b33a01a3d0288e1?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f37530%2fscreenshots%2f2937858%2fdrib_blink_bot.gif&ehk=1yjNTYFN6fWsTeZWeFa%2f99z2a3HPdxXf9AvD0rhixvU%3d';
const PERSON_IMG =
  'https://th.bing.com/th/id/OIP.tUQUao6VkI8Jf-hjQ_kUCwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7';
const BOT_NAME = 'ChatBot';
const PERSON_NAME = 'You';

msgerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, 'right', msgText);
  msgerInput.value = msgText;
  // botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
<div class="msg ${side}-msg">
<div class="msg-img" style="background-image: url(${img})" ></div>
<div class="msg-bubble">
<div class="msg-info">
  <div class="msg-info-name">${name}</div>
  <div class="msg-info-time">${formatDate(new Date())}</div>
</div>
<div class="msg-text">${text}</div>
</div>
</div>`;

  msgerChat.insertAdjacentHTML('beforeend', msgHTML);
  msgerChat.scrollTop += 500;
}

// function botResponse(rawText) {
//   // Bot Response
//   $.get("/get", { msg: rawText }).done(function (data) {
//     console.log(rawText);
//     console.log(data);
//     const msgText = data;
//     appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
//   });
// }

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = '0' + date.getHours();
  const m = '0' + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}
