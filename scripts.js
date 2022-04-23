const q = document.querySelector('.q-form');

q.addEventListener('submit', event => {
    event.preventDefault();
    const question = event.target["input"].value.trim();
    console.log(question);
    if (question === '') {
        return false;
    }

    const url = `https://8ball.delegator.com/magic/JSON/${question}`;

    axios.get(url).then(response => {
        console.log(response);

        const answerArea = document.querySelector(".q-answer");
        answerArea.innerHTML = "";
        const answer = response.data.magic.answer;
        const quest = response.data.magic.question;

        const answerBox = document.createElement('p');
        answerBox.classList.add('fade-in');
        answerBox.innerText = `You asked The Magic Axolotl: ${question}
The Magic Axolotl has decided: ${answer}`;
        answerArea.appendChild(answerBox);
    }).catch(error => {
        console.log(error);
    });
})