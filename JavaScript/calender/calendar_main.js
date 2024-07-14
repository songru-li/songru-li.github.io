const prevYearBtn = document.querySelector("#prevyearbtn");
const nextYearBtn = document.querySelector("#nextyearbtn");
const yearDisplay = document.querySelector("#yeardisplay");
const yearDropdown = document.querySelector("#yeardropdown");
const prevMonthBtn = document.querySelector("#prevmonthbtn");
const nextNonthBtn = document.querySelector("#nextmonthbtn");
const monthDisplay = document.querySelector("#monthdisplay");
const monthDropdown = document.querySelector("#monthdropdown");

let nowdate = new Date();
let yearofdate = nowdate.getFullYear();
let monthofdate = nowdate.getMonth();
let events = {};

updateYearDisplay();
updateMonthDisplay();

//更新年份
function updateYearDisplay() {
    yearDisplay.textContent = `${yearofdate}年`;
    generateYearDropdown(yearofdate);
    add_hidden(yearofdate, monthofdate);
}
//前一年按鈕
prevYearBtn.addEventListener("click", function () {
    yearofdate -= 1;
    updateYearDisplay();
});
//後一年按鈕
nextYearBtn.addEventListener("click", function () {
    yearofdate += 1;
    updateYearDisplay();
});
//年份下拉式選單點選並更新年份
yearDropdown.addEventListener("click", function (e) {
    const selectedYear = parseInt(e.target.textContent);
    if (!isNaN(selectedYear)) {
        yearofdate = selectedYear;
        updateYearDisplay();
    }
});
//年份下拉式選單，跑出±5年
function generateYearDropdown(nowYear) {
    yearDropdown.innerHTML = "";
    for (let y = -5; y <= 5; y++) {
        const year = nowYear + y;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("dropdown-item");
        a.textContent = `${year}年`;
        a.href = "#";
        li.appendChild(a);
        yearDropdown.appendChild(li);
    }
}
//更新月份
function updateMonthDisplay() {
    monthDisplay.textContent = `${monthofdate + 1}月`;
    add_hidden(yearofdate, monthofdate);
}
//前一個月按鈕
prevMonthBtn.addEventListener("click", function () {
    monthofdate = monthofdate - 1;
    if (monthofdate < 0) {
        monthofdate = 11;
        yearofdate = yearofdate - 1;
    }
    updateYearDisplay();
    updateMonthDisplay();
});
//後一個月按鈕
nextNonthBtn.addEventListener("click", function () {
    monthofdate = monthofdate + 1;
    if (monthofdate > 11) {
        monthofdate = 0;
        yearofdate = yearofdate + 1;
    }
    updateYearDisplay();
    updateMonthDisplay();
});
//月份下拉式選單
monthDropdown.addEventListener("click", function (e) {
    const selectMonth = parseInt(e.target.textContent);
    if (!isNaN(selectMonth)) {
        monthofdate = selectMonth - 1;
        updateMonthDisplay();
    }
})
//閏年暫時沒用到
// function getFebDays(year) {
//     return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28;
// }
function add_hidden(yearofdate, monthofdate) {
    let firstdate = new Date(yearofdate, monthofdate, 1);
    let lastdate = new Date(yearofdate, monthofdate + 1, 0);
    //先移除所有的visually-hidden
    for (let i = 1; i <= 42; i++) {
        const day = document.querySelector(`.day:nth-last-child(${i})`);
        day.classList.remove("visually-hidden");
    }
    //再去對對應的年月隱藏多餘的日(後)
    for (let i = 1; i <= 42 - (firstdate.getDay() + lastdate.getDate()); i++) {
        const day = document.querySelector(`.day:nth-last-child(${i})`);
        day.classList.add("visually-hidden");
    }
    //先移除所有的invisible
    for (let i = 1; i <= 42; i++) {
        const day = document.querySelector(`.day:nth-of-type(${i})`);
        day.classList.remove("invisible");
    }
    //再去對對應的年月隱藏不符合本年月的日(前)
    for (let i = 1; i <= firstdate.getDay(); i++) {
        const day = document.querySelector(`.day:nth-of-type(${i})`);
        day.classList.add("invisible");
    }
    //填入每個月份的日期
    for (let i = 1; i <= 31; i++) {
        const date = document.querySelector(`.day:nth-of-type(${i + firstdate.getDay()}) .date-title .date`);
        date.textContent = i;
    }
}
