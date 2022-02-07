// 1. 1~6까지의 랜덤 숫자를 생성한다.
// 2. img 태그의 속성인 src에 그 숫자를 스트링으로 넣어준다.
// 3. 플레이어 1과 2의 숫자를 비교한다.
// 4. 플레이어 1이 이기면, h1에 '🚩player 1 wins'를, 
// 5. 플레이어 2가 이기면, 'player 2 wins 🚩'를,
// 6. 둘이 동점이면 'Draw!'를 출력한다.

const playerOneNum = Math.floor(Math.random()*6) + 1;
const playerTwoNum = Math.floor(Math.random()*6) + 1;
const imgOne = document.querySelector(".img1");
const imgTwo = document.querySelector(".img2");
const h1 = document.querySelector("h1");

imgOne.setAttribute("src", `images/dice${playerOneNum}.png`);
imgTwo.setAttribute("src", `images/dice${playerTwoNum}.png`);

if(playerOneNum > playerTwoNum){
    h1.innerHTML = "🚩player 1 wins";
} else if(playerOneNum < playerTwoNum){
    h1.innerHTML = "player 2 wins 🚩";
} else {
    h1.innerText = "Draw!!";
}



