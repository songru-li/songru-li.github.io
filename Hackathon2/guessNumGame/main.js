const startBtn = document.querySelector("#start_btn");
const showAnsBtn = document.querySelector("#show_answer_btn");
const restartBtn = document.querySelector("#restart_btn");
const guessHistoryList = document.querySelector("#guess_history_list");
let answer;
const guessInput = document.querySelector("#guess_input");
const guessBtn = document.querySelector("#guess_btn");
const gameMsgToast = document.querySelector("#game_msg_toast");
const toastBootstrap = new bootstrap.Toast(gameMsgToast, {
    delay: 1000,
});

const modalBootstrap = new bootstrap.Modal(document.querySelector("#end_game_modal"));

const endGameBtn = document.querySelector("#end_game_btn");

guessNumGame();

gameMsgToast.addEventListener("hide.bs.toast", () => {
    console.log("toast hide");
})


function initGame(){
    //產出Answer
    answer = generateAns();
    //清空紀錄
    guessHistoryList.innerHTML = "";
}

function generateAns() {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArr.sort((a, b) => getRandomArbitrary(-1,1));

    return numArr.slice(0,4).join("");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


startBtn.addEventListener("click", () => {
    initGame();
    showAnsBtn.disabled = false;
    restartBtn.disabled = false;
})

restartBtn.addEventListener("click", () => {
    initGame();
})

showAnsBtn.addEventListener("click", () => {
    showHint(`answer: ${answer}`);
});

guessBtn.addEventListener("click", () => {
    const val = guessInput.value.trim();
    // console.log(val);
    //驗證輸入的合法性
    if(val === "" || isNaN(val)) {
        showHint("請輸入合法的數字")
        return;
    }
    //輸入的是不重複的4個數字
    if(val.length > 4 || new Set(val).size !== 4){
        showHint("請確認輸入數字的數量!")
        guessInput.value = "";
        return;
    }

    //a,b
    let a = 0, b = 0;
    for(let i = 0; i < answer.length; i++) {
        if(val[i] === answer[i]){
            a++;
        } else if(answer.includes(val[i])) {
            b++;
        }
    }
    if(a === 4) {
        //過關
        modalBootstrap.show();
    }
    guessInput.value = "";

    appendHistory(a, b, val);

})

function appendHistory(a, b, input) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const span = document.createElement("span");
    const badgeColor = a === 4 ? "bg-success" : "bg-danger";
    span.classList.add("badge", badgeColor);
    span.textContent = `${a}A${b}B`;
    li.append(span, input);
    guessHistoryList.append(li);
}

function showHint(msg) {
    gameMsgToast.querySelector(".toast-body").textContent = msg;
    // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(gameMsgToast);
    toastBootstrap.show();
}

endGameBtn.addEventListener("click", () => {
    restartBtn.innerHTML = "重新開始";
    modalBootstrap.hide();
})

function guessNumGame() {
    alert("遊戲規則\n\n點擊開始後生成一組四碼不重複的數字。每猜一組數會根據這個數字給出提示，提示以XAYB形式呈現，直到猜中呈現4A0B為止。其中X表示位置正確的數字的個數，而Y表示數字正確而位置不對的個數。\n\n例如，當謎底為8123，而猜謎者猜1052時，出題者必須提示0A2B。\n例如，當謎底為5637，而猜謎者猜4931時，出題者必須提示1A0B。")
}