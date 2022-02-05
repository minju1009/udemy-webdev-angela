'use strict';

const input = document.querySelector("textarea");
const form = document.querySelector("form");
const result = document.querySelector("h4");


function countLetters(event){
    event.preventDefault();
    if(input.value.length > 100){
    input.value = (input.value.slice(0,100));
    result.innerText = `100자 이하로 입력해주세요👎`
    } else  {
        const leftLetters = 100 - input.value.length;
        result.innerText = `현재까지 ${input.value.length}자 입력하셨습니다. 앞으로 ${leftLetters}자 더 입력가능합니다😄`
    }
}

form.addEventListener("submit", countLetters);

