const number = Number(prompt("몇 명이 참가하나요?"));
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; // 제시어
let newWord; // 현재 단어

function onButton() {
  if (!word || word[word.length - 1] === newWord[0]) {
    // 제시어가 비어 있거나 입력한 단어가 올바른가?
    word = newWord; // 입력한 단어가 제시어
    $word.textContent = word; // 화면에 제시어 표시
    let order;
    order = Number($order.textContent);
    if (order + 1 > number) {
      //다음 순서가 인원수보다 크면
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    alert("틀림!");
  }
  $input.value = ""; // 입력 후 입력란 비우기
  $input.focus(); // 입력 후 커서 뜨게 하기
}

function onInput(event) {
  newWord = event.target.value;
}

$button.addEventListener("click", onButton);
$input.addEventListener("input", onInput);
