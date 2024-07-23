const prevYearBtn = document.querySelector("#prevyearbtn");
const nextYearBtn = document.querySelector("#nextyearbtn");
const yearDisplay = document.querySelector("#yeardisplay");
const yearDropdown = document.querySelector("#yeardropdown");
const prevMonthBtn = document.querySelector("#prevmonthbtn");
const nextNonthBtn = document.querySelector("#nextmonthbtn");
const monthDisplay = document.querySelector("#monthdisplay");
const monthDropdown = document.querySelector("#monthdropdown");
const dateTemplate = document.querySelector("#date_template");
const addAllEvent = document.querySelector("#add-all-event");
const dates = document.querySelector("#dates");
const addConfirm = document.querySelector("#add-confirm");
const eventDateTime = document.querySelector("#datetime");
const eventTitleInput = document.querySelector("#event-title");
const eventContentInput = document.querySelector("#event-content");
const eventColor = document.querySelector("#event-color");
const Modal = document.querySelector("#modal-item");
const myModal = new bootstrap.Modal(Modal);
const deleteBtn = document.querySelector("#delete_btn");
const updateBtn = document.querySelector("#update_btn");
const clearBtn = document.querySelector("#clear_btn");
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
let nowdate = new Date();
let yearofdate = nowdate.getFullYear();
let monthofdate = nowdate.getMonth();

window.addEventListener("DOMContentLoaded", () => reloadrendering());
//更新年份
function updateYearDisplay() {
    yearDisplay.textContent = `${yearofdate}年`;
    generateYearDropdown(yearofdate);
    monthDisplay.textContent = `${monthofdate + 1}月`;
    generateMonthDropdown(monthofdate);
}
//前一年按鈕
prevYearBtn.addEventListener("click", function () {
    yearofdate -= 1;
    if (yearofdate === 0) {
        yearofdate = -1
    }
    updateYearDisplay();
    add_hidden(yearofdate,monthofdate);
});
//後一年按鈕
nextYearBtn.addEventListener("click", function () {
    yearofdate += 1;
    if (yearofdate === 0) {
        yearofdate = 1
    }
    updateYearDisplay();
    add_hidden(yearofdate,monthofdate);
});
//年份選單點選並更新年份
yearDropdown.addEventListener("click", function (e) {
    const selectedYear = parseInt(e.target.textContent);
    if (!isNaN(selectedYear)) {
        yearofdate = selectedYear;
        updateYearDisplay();
    }
    add_hidden(yearofdate,monthofdate);
});
//年份下拉式選單，顯示±??年
function generateYearDropdown(Year) {
    yearDropdown.innerHTML = "";
    for (let y = -10; y <= 10; y++) {
        const year = Year + y;
        const li = document.createElement("li");
        const a = document.createElement("a");
        yearDropdown.appendChild(li);
        if (year === 0) {
            a.textContent = null;
        } else {
            a.classList.add("dropdown-item");
            a.textContent = `${year}年`;
            a.href = "#";
            li.appendChild(a);
        }
    }
}
//前一個月按鈕
prevMonthBtn.addEventListener("click", function () {
    monthofdate = monthofdate - 1;
    if (monthofdate < 0) {
        monthofdate = 11;
        yearofdate = yearofdate - 1;
        if (yearofdate === 0) {
            yearofdate = -1
        }
    }
    updateYearDisplay();
    add_hidden(yearofdate,monthofdate);
});
//後一個月按鈕
nextNonthBtn.addEventListener("click", function () {
    monthofdate = monthofdate + 1;
    if (monthofdate > 11) {
        monthofdate = 0;
        yearofdate = yearofdate + 1;
        if (yearofdate === 0) {
            yearofdate = 1
        }
    }
    updateYearDisplay();
    add_hidden(yearofdate,monthofdate);
});
//月份選單點選並更新月份
monthDropdown.addEventListener("click", function (e) {
    const selectMonth = parseInt(e.target.textContent);
    if (!isNaN(selectMonth)) {
        monthofdate = selectMonth - 1;
        updateYearDisplay();
        add_hidden(yearofdate,monthofdate);
    }
})
//月份下拉式選單，顯示1~12月
function generateMonthDropdown() {
    monthDropdown.innerHTML = "";
    for (let y = 1; y <= 12; y++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("dropdown-item");
        a.textContent = `${y}月`;
        a.href = "#";
        li.appendChild(a);
        monthDropdown.appendChild(li);
    }
}
//克隆日子數量
function clonedates() {
    for (let i = 1; i <= 42; i++) {
        const clonedate = dateTemplate.content.querySelector(".day").cloneNode(true);
        dates.append(clonedate);
    }
}
//不顯示非本月格子&顯示日期
function add_hidden(yearofdate, monthofdate) {
    let firstdate = new Date(yearofdate, monthofdate, 1);
    let lastdate = new Date(yearofdate, monthofdate + 1, 0);
    //先移除所有的visually-hidden、invisible
    for (let i = 1; i <= 42; i++) {
        const day = document.querySelector(`.day:nth-of-type(${i})`);
        day.classList.remove("invisible");
        day.classList.remove("visually-hidden");
    }
    //再去對對應的年月隱藏多餘的日(後)
    for (let i = 1; i <= 42 - (firstdate.getDay() + lastdate.getDate()); i++) {
        const day = document.querySelector(`.day:nth-last-child(${i})`);
        day.classList.add("visually-hidden");
    }
    //再去對對應的年月隱藏不符合本年月的日(前)
    for (let i = 1; i <= firstdate.getDay(); i++) {
        const day = document.querySelector(`.day:nth-of-type(${i})`);
        day.classList.add("invisible");
    }
    // 填入每個月份的日期
    for (let i = 1; i <= lastdate.getDate(); i++) {
        const date = document.querySelector(`.day:nth-of-type(${i + firstdate.getDay()}) .date-title .date`);
        date.textContent = firstdate.getDate() + i - 1;
        //每日事件的監聽器
        const addEvent = document.querySelector(`.day:nth-of-type(${i + firstdate.getDay()}) .date-title .add-event`);
        addEvent.addEventListener("click", () => {
            eventDateTime.value = `${yearofdate}-${(monthofdate + 1).toString().padStart(2, '0')}-${(firstdate.getDate() + i - 1).toString().padStart(2, '0')}T00:00`;
            eventColor.value = color16();
            clearModal();
        })

        const localStorageData = getTodoListFromStorage();
        const datetime = `${yearofdate}-${(monthofdate + 1).toString().padStart(2, '0')}-${(firstdate.getDate() + i - 1).toString().padStart(2, '0')}`
        date.closest(".day").querySelector("ul").innerHTML= ""
        const localStorage_datetime = localStorageData.filter((x) => x.time.substr(0, 10) == datetime);
        if(localStorage_datetime.length > 0){
            localStorage_datetime.forEach((x) => {
                const li = document.createElement("li");
                li.classList.add("todo");
                li.innerHTML = `${x.time.substr(11, 5)} | ${x.title}`;
                li.style["background-image"] = `linear-gradient(to right, ${x.color} 0%, ${complementaryColors(x.color)} 60%)`;
                date.closest(".day").querySelector("ul").append(li);
                //對比色
                function complementaryColors(hexcolor){
                    var r = 255 - parseInt(hexcolor.substr(1,2),16);
                    var g = 255 - parseInt(hexcolor.substr(3,2),16);
                    var b = 255 - parseInt(hexcolor.substr(5,2),16);
                    // var yiq = ((r*299)+(g*587)+(b*114))/1000;
                    // return (yiq >= 128) ? 'black' : 'white';
                    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                }
                li.setAttribute("data-bs-toggle", "modal");
                li.setAttribute("data-bs-target", "#modal-item")
                li.addEventListener("click", function() {
                    eventDateTime.value = x.time;
                    eventTitleInput.value = x.title;
                    eventContentInput.value = x.content;
                    eventColor.value = x.color;
                    deleteBtn.classList.remove("d-none");
                    updateBtn.classList.remove("d-none");
                    deleteBtn.setAttribute("data-id", `${x.id}`)
                    updateBtn.setAttribute("data-id", `${x.id}`)
                    addConfirm.innerHTML = "複製";
                })
                // 對 <ul> 內的 <li> 進行排序
                const ul = date.closest(".day").querySelector("ul");
                const listItems = Array.from(ul.querySelectorAll("li"));
                listItems.sort((a, b) => {
                    const timeA = a.textContent.split(" | ")[0];
                    const timeB = b.textContent.split(" | ")[0];
                    return timeA.localeCompare(timeB);
                });
                ul.innerHTML = "";
                listItems.forEach(li => ul.appendChild(li));
            })
        }
        // console.log(nowdate.format("yyyy-MM-dd"));
    }
}
//掛"今日"的監聽器
addAllEvent.addEventListener("click", () => {
    let nowYear = nowdate.getFullYear();
    let nowMonth = nowdate.getMonth();
    let nowDay = nowdate.getDate().toString().padStart(2, '0');
    let nowHours = nowdate.getHours().toString().padStart(2, '0');
    let nowMinute = nowdate.getMinutes().toString().padStart(2, '0');
    eventDateTime.value = `${nowYear}-${(nowMonth + 1).toString().padStart(2, '0')}-${nowDay}T${nowHours}:${nowMinute}`;
    eventColor.value = color16();
    clearModal();
});
//清空modal
function clearModal() {
    deleteBtn.classList.add("d-none");
    updateBtn.classList.add("d-none");
    addConfirm.innerHTML = "新增";
    eventTitleInput.value = "";
    eventContentInput.value = "";
}
//新增按鈕
addConfirm.addEventListener("click", function () {
    //儲存代辦事項
    const todoList = {
        id: new Date().valueOf(),
        time: eventDateTime.value,
        title: eventTitleInput.value.trim(),
        content: eventContentInput.value,
        color: eventColor.value,
    }
    if(!eventTitleInput.value) {
        alert("標題不可空白");
        return;
    };
    const localStorageData = getTodoListFromStorage();
    if(localStorageData.some((local) => local.time === todoList.time)) {
        alert("同時間內不可做兩件事哦\n建議修改時間");
    }
    localStorageData.push(todoList);
    eventTitleInput.value = "";
    eventContentInput.value = "";
    updateLocalStorage(localStorageData);
    reloadrendering();
    myModal.hide();
})
//取得資料
function getTodoListFromStorage() {
    const localStorageItem = localStorage.getItem("key");
    return localStorageItem ? JSON.parse(localStorageItem) : [];
}
//轉JSON字串傳回localStorage
function updateLocalStorage(localStorageData) {
    const JSONdata = JSON.stringify(localStorageData);
    window.localStorage.setItem("key", JSONdata);
}
//重新載入
function reloadrendering() {
    dates.innerHTML = "";
    clonedates();
    add_hidden(yearofdate, monthofdate);
    updateYearDisplay();
    CALENDAR_List();
}
//刪除按鈕
const removeBtn = document.querySelector("#remove_btn");
removeBtn.addEventListener("click", () => {
    const localStorageData = getTodoListFromStorage();
    let deleteId = parseInt(deleteBtn.getAttribute("data-id"));
    const findtodoId = localStorageData.findIndex((item) => item.id === deleteId);
    localStorageData.splice(findtodoId, 1);
    updateLocalStorage(localStorageData);
    reloadrendering();
    myModal.hide();
})
//更新按鈕
updateBtn.addEventListener("click", () => {
    const localStorageData = getTodoListFromStorage();
    let updateId = parseInt(updateBtn.getAttribute("data-id"));
    const findtodoId = localStorageData.find((item) => item.id === updateId);
    console.log(findtodoId);
    findtodoId.time = eventDateTime.value;
    findtodoId.title = eventTitleInput.value.trim();
    findtodoId.content = eventContentInput.value;
    findtodoId.color = eventColor.value;
    if(!eventTitleInput.value) {
        alert("標題不可空白");
        return;
    };
    updateLocalStorage(localStorageData);
    reloadrendering();
    myModal.hide();
})
//一鍵清空按鈕
clearBtn.addEventListener("click", () => {
    const localStorageData = getTodoListFromStorage();
    localStorageData.splice(0, 1000);
    updateLocalStorage(localStorageData);
    reloadrendering();
    myModal.hide();
    window.location.reload();
})
//滾輪上下滑動月份
addEventListener("wheel", function (event) {
    if(event.deltaY < 80) {
        monthofdate = monthofdate - 1;
        if (monthofdate < 0) {
            monthofdate = 11;
            yearofdate = yearofdate - 1;
            if (yearofdate === 0) {
                yearofdate = -1
            }
        }
    }
    if(event.deltaY > 80) {
        monthofdate = monthofdate + 1;
        if (monthofdate > 11) {
            monthofdate = 0;
            yearofdate = yearofdate + 1;
            if (yearofdate === 0) {
                yearofdate = 1
            }
        }
    }
    updateYearDisplay();
    add_hidden(yearofdate,monthofdate);
});
//顏色隨機
function color16() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    return color;
}
// navbar.addEventListener("click", () => {
//     reloadrendering();
// })
//新增漢堡清單列表
function CALENDAR_List() {
    navbarNav.innerHTML = "";
    const localStorageData = getTodoListFromStorage();
    localStorageData.forEach((x) => {
        const li = document.createElement("li");
        li.classList.add("nav-item", "mb-2", "p-1");
        li.innerHTML = `${x.time.substr(0, 10)} | ${x.time.substr(11, 5)} | ${x.title}`;
        li.style["background-image"] = `linear-gradient(to right, ${x.color} 30%, ${complementaryColors(x.color)} 50%)`;
        navbarNav.append(li);
        //對比色
        function complementaryColors(hexcolor){
            var r = 255 - parseInt(hexcolor.substr(1,2),16);
            var g = 255 - parseInt(hexcolor.substr(3,2),16);
            var b = 255 - parseInt(hexcolor.substr(5,2),16);
            // var yiq = ((r*299)+(g*587)+(b*114))/1000;
            // return (yiq >= 128) ? 'black' : 'white';
            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
        li.setAttribute("data-bs-toggle", "modal");
        li.setAttribute("data-bs-target", "#modal-item")
        li.addEventListener("click", function() {
            eventDateTime.value = x.time;
            eventTitleInput.value = x.title;
            eventContentInput.value = x.content;
            eventColor.value = x.color;
            deleteBtn.classList.remove("d-none");
            updateBtn.classList.remove("d-none");
            deleteBtn.setAttribute("data-id", `${x.id}`)
            updateBtn.setAttribute("data-id", `${x.id}`)
            addConfirm.innerHTML = "複製";
        })
        // 對 <ul> 內的 <li> 進行排序
        const listItems = Array.from(navbarNav.querySelectorAll("li"));
        listItems.sort((a, b) => {
            const timeA = a.textContent.split(" | ")[0];
            const timeB = b.textContent.split(" | ")[0];
            return timeA.localeCompare(timeB);
        });
        navbarNav.innerHTML = "";
        listItems.forEach(li => navbarNav.appendChild(li));
    })
}