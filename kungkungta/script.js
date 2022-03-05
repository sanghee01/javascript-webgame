const number = Number(prompt("몇 명이 참가하나요?"));
if (number) {
  const $input = document.querySelector("input");
  const $button = document.querySelector("button");
  const $order = document.querySelector("#order");
  const $word = document.querySelector("#word");
  let word;
  let newWord;

  function onButton() {
    if (
      newWord.length === 3 &&
      (!word || word[word.length - 1] === newWord[0])
    ) {
      // 항상 세글자 이므로, 조건에서 세글자인 것을 &&로 디폴트 해놓음
      word = newWord;
      $word.textContent = word;
      let order = Number($order.textContent);
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      alert(
        "세글자, 그리고 입력하신 단어의 첫글자가 제시어의 마지막 글자와 일치하게 입력하세요."
      );
    }
    $input.value = "";
    $input.focus();
  }

  function onInput(event) {
    newWord = event.target.value;
  }

  $input.addEventListener("input", onInput);
  $button.addEventListener("click", onButton);
} else {
}
