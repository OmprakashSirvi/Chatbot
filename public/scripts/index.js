const URL =
  `http://{process.env.HOST}:{process.env.PORT}` ||
  'http://127.0.0.1:5000/chat';

const speak = async (input) => {
  try {
    const res = await axios.post('http://127.0.0.1:5000/chat', {
      id: 1,
      message: input,
    });

    // const res = await axios('http://127.0.0.1:8080/');
    console.log(res);

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

document
  .querySelector('.mesger-input-area')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    // const input = document.querySelector('#msg-input').value;
    const input = document.getElementsByClassName('msger-input')[0];
    console.log(input);
    const output = await speak(input.value);

    console.log(output);

    const outTemplate = `
      <div class="msg left-msg">
      <div class="msg-img"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">FriendBot</div>
          <div class="msg-info-time" id="msg-info-time"></div>
        </div>

        <div class="msg-text">
          ${output}
        </div>
      </div>
    </div>
    `;
    msgerChat.insertAdjacentHTML('beforeend', outTemplate);
    msgerChat.scrollTop += 500;

    input.value = '';
  });
