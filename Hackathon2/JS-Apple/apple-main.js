const price = document.querySelector(".price");
const priceBuy = document.querySelector(".price-buy");
const elevenInch = document.querySelector("#eleven-inch");
const thirteenInch = document.querySelector("#thirteen-inch");
const iPadColorA = document.querySelector("#ipad-color-A");
const iPadColorB = document.querySelector("#ipad-color-B");
const iPadColorC = document.querySelector("#ipad-color-C");
const iPadColorD = document.querySelector("#ipad-color-D");
const carouselExampleControlsNoTouching = document.querySelector("#carouselExampleControlsNoTouching");
const photoTemplate = document.querySelector("#photo-template");
const rom = document.querySelector(".rom");
const iPadAir = document.querySelectorAll(".ipadAir");
const iPadPro = document.querySelectorAll(".ipadpro");
const h1last = document.querySelector("h1 span:last-child");
const capacityA = document.querySelector("#capacity-A");
const capacityB = document.querySelector("#capacity-B");
const capacityC = document.querySelector("#capacity-C");
const capacityD = document.querySelector("#capacity-D");
const ipadRomA = document.querySelector("#ipad-rom-A");
const ipadRomB = document.querySelector("#ipad-rom-B");
const ipadRomC = document.querySelector("#ipad-rom-C");
const ipadRomD = document.querySelector("#ipad-rom-D");
const capacity = document.getElementsByName("capacity");
const CheckoutA = document.querySelector("#Checkout-A");
const CheckoutB = document.querySelector("#Checkout-B");
const CheckoutC = document.querySelector("#Checkout-C");
const CheckoutD = document.querySelector("#Checkout-D");

const data = {
    info: {
        iPadAir11: {
            name : "iPad",
            price: "NT$19,900",
            imgUrl: [
                "./photo/iPadAir/ipad-air-model-unselect-gallery-1-202405.webp",
                "./photo/iPadAir/ipad-air-model-unselect-gallery-2-202405.webp",
                "./photo/iPadAir/ipad-air-model-unselect-gallery-3-202405.webp",
                "./photo/iPadAir/ipad-air-model-unselect-gallery-4-202405.webp",
            ]
        },
        iPadAir13: {
            name : "iPad",
            price: "NT$26,900",
        },
        iPadPro11: {
            name : "iPadPro",
            price: "NT$34,900",
            imgUrl: [
                "./photo/ipad-pro-model-select-gallery-1-202405_FMT_WHH.jfif",
                "./photo/ipad-pro-model-select-gallery-2-202405_FMT_WHH.jfif",
            ]
        },
        iPadPro13: {
            name : "iPadPro",
            price: "NT$45,900",
        },
        iPadAir11ROM: [
            {
                name: "11吋機型",
                ROM: "128",
                capacity: "GB¹",
                price: "NT$19,900",
            },
            {
                name: "11吋機型",
                ROM: "256",
                capacity: "GB¹",
                price: "NT$23,400",
            },
            {
                name: "11吋機型",
                ROM: "512",
                capacity: "GB¹",
                price: "NT$30,400",
            },
            {
                name: "11吋機型",
                ROM: "1",
                capacity: "TB¹",
                price: "NT$37,400",
            },
        ],
        iPadAir13ROM: [
            {
                name: "13吋機型",
                ROM: "128",
                capacity: "GB¹",
                price: "NT$26,900",
            },
            {
                name: "13吋機型",
                ROM: "256",
                capacity: "GB¹",
                price: "NT$30,400",
            },
            {
                name: "13吋機型",
                ROM: "512",
                capacity: "GB¹",
                price: "NT$37,400",
            },
            {
                name: "13吋機型",
                ROM: "1",
                capacity: "TB¹",
                price: "NT$44,400",
            },
        ],
        iPadPro11ROM: [
            {
                name: "11吋機型",
                ROM: "256",
                capacity: "GB¹",
                price: "NT$34,900",
            },
            {
                name: "11吋機型",
                ROM: "512",
                capacity: "GB¹",
                price: "NT$41,900",
            },
            {
                name: "11吋機型",
                ROM: "1",
                capacity: "TB¹",
                price: "NT$55,900",
            },
            {
                name: "11吋機型",
                ROM: "2",
                capacity: "TB¹",
                price: "NT$69,900",
            },
        ],
        iPadPro13ROM: [
            {
                name: "13吋機型",
                ROM: "256",
                capacity: "GB¹",
                price: "NT$45,900",
            },
            {
                name: "13吋機型",
                ROM: "512",
                capacity: "GB¹",
                price: "NT$52,900",
            },
            {
                name: "13吋機型",
                ROM: "1",
                capacity: "TB¹",
                price: "NT$66,900",
            },
            {
                name: "13吋機型",
                ROM: "2",
                capacity: "TB¹",
                price: "NT$80,900",
            },
        ],
        iPadAirColors: [
            {
                name: "太空灰色",
                img: "./photo/iPadAir/ipad-air-finish-space-gray-2024.png",
                imgUrl: [
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-space-gray.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-space-gray_AV1.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-space-gray_AV2.webp",
                ],
            },
            {
                name: "藍色",
                img: "./photo/iPadAir/ipad-air-finish-blue-2024.png",
                imgUrl: [
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-blue.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-blue_AV1.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-blue_AV2.webp",
                ],
            },
            {
                name: "紫色",
                img: "./photo/iPadAir/ipad-air-finish-purple-2024.png",
                imgUrl: [
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-purple.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-purple_AV1.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-purple_AV2.webp",
                ],
            },
            {
                name: "星光色",
                img: "./photo/iPadAir/ipad-air-finish-starlight-2024.png",
                imgUrl: [
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-starlight.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-starlight_AV1.webp",
                    "./photo/iPadAir/ipad-air-finish-select-gallery-202405-11inch-starlight_AV2.webp",
                ],
            },
        ],
        iPadProColors: [
            {
                name: "銀色",
                img: "./photo/iPadPro/ipad-pro-finish-silver-2024.png",
                imgUrl: [
                    "./photo/iPadPro/ipad-pro-finish-select-202405-11inch-silver.webp",
                    "./photo/iPadPro/ipad-pro-finish-select-202405-11inch-silver_AV1.webp",
                    "./photo/iPadPro/ipad-pro-finish-select-202405-11inch-silver_AV2.webp",
                ],
            },
            {
                name: "黑色",
                img: "./photo/iPadPro/ipad-pro-finish-space-black-2024.png",
                imgUrl: [
                    "./photo/iPadPro/ipad-pro-finish-select-202405-11inch-spaceblack.webp",
                    "./photo/iPadPro/ipad-pro-finish-select-202405-11inch-spaceblack_AV1.webp",
                    "./photo/iPadPro/ipad-pro-finish-select-202405-11inch-spaceblack_AV2.webp",
                ],
            },
        ],
    }
}

window.addEventListener("load", () => {
    iPadProcreate();
    clear();
})

function clear() {
    elevenInch.checked = false;
    thirteenInch.checked = false;
    iPadColorA.checked = false;
    iPadColorB.checked = false;
    ipadRomA.checked = false;
    ipadRomB.checked = false;
    ipadRomC.checked = false;
    ipadRomD.checked = false;
}

function iPadAircreate() {
    h1last.textContent = "iPad Air";
    CheckoutA.textContent = h1last.textContent;
    document.querySelector("#ipad-color-C + label").classList.remove("d-none");
    document.querySelector("#ipad-color-D + label").classList.remove("d-none");
    document.querySelector("#ipad-rom-A + label").classList.remove("col-lg-11");
    document.querySelector("#ipad-rom-B + label").classList.remove("col-lg-11");
    document.querySelector("#ipad-rom-C + label").classList.remove("col-lg-11");
    document.querySelector("#ipad-rom-D + label").classList.remove("col-lg-11");
    document.querySelector("#capacity-A").classList.add("flex-column");
    document.querySelector("#capacity-B").classList.add("flex-column");
    document.querySelector("#capacity-C").classList.add("flex-column");
    document.querySelector("#capacity-D").classList.add("flex-column");
    document.querySelector("#ipad-color-A + label img").src = data.info.iPadAirColors[0].img;
    document.querySelector("#ipad-color-B + label img").src = data.info.iPadAirColors[1].img;
    document.querySelector("#ipad-color-C + label img").src = data.info.iPadAirColors[2].img;
    document.querySelector("#ipad-color-D + label img").src = data.info.iPadAirColors[3].img;
    document.querySelector("#ipad-color-A + label .ipad-color").textContent = data.info.iPadAirColors[0].name;
    document.querySelector("#ipad-color-B + label .ipad-color").textContent = data.info.iPadAirColors[1].name;
    document.querySelector("#ipad-color-C + label .ipad-color").textContent = data.info.iPadAirColors[2].name;
    document.querySelector("#ipad-color-D + label .ipad-color").textContent = data.info.iPadAirColors[3].name;
    carouselExampleControlsNoTouching.textContent = "";
    const clonephoto = photoTemplate.content.querySelector(".carousel-inner").cloneNode(true);
    carouselExampleControlsNoTouching.append(clonephoto);
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    const img = document.createElement("img");
    img.classList.add("w-100");
    img.setAttribute("src", "");
    img.setAttribute("alt", "圖片等待中");
    div.append(img);
    const carouselInner = document.querySelector(".carousel-inner");
    const btn = document.querySelector(".carousel-control-prev");
    carouselInner.insertBefore(div, btn);
    carouselInner.querySelector(".carousel-item:nth-child(1) img").src = data.info.iPadAir11.imgUrl[0];
    carouselInner.querySelector(".carousel-item:nth-child(2) img").src = data.info.iPadAir11.imgUrl[1];
    carouselInner.querySelector(".carousel-item:nth-child(3) img").src = data.info.iPadAir11.imgUrl[2];
    carouselInner.querySelector(".carousel-item:nth-child(4) img").src = data.info.iPadAir11.imgUrl[3];
}

function iPadProcreate() {
    h1last.textContent = "iPad Pro";
    CheckoutA.textContent = h1last.textContent;
    document.querySelector("#ipad-color-C + label").classList.add("d-none");
    document.querySelector("#ipad-color-D + label").classList.add("d-none");
    document.querySelector("#ipad-rom-A + label").classList.add("col-lg-11");
    document.querySelector("#ipad-rom-B + label").classList.add("col-lg-11");
    document.querySelector("#ipad-rom-C + label").classList.add("col-lg-11");
    document.querySelector("#ipad-rom-D + label").classList.add("col-lg-11");
    document.querySelector("#capacity-A").classList.remove("flex-column");
    document.querySelector("#capacity-B").classList.remove("flex-column");
    document.querySelector("#capacity-C").classList.remove("flex-column");
    document.querySelector("#capacity-D").classList.remove("flex-column");
    document.querySelector("#ipad-color-A + label img").src = data.info.iPadProColors[0].img;
    document.querySelector("#ipad-color-B + label img").src = data.info.iPadProColors[1].img;
    document.querySelector("#ipad-color-A + label .ipad-color").textContent = data.info.iPadProColors[0].name;
    document.querySelector("#ipad-color-B + label .ipad-color").textContent = data.info.iPadProColors[1].name;
    carouselExampleControlsNoTouching.textContent = "";
    const clonephoto = photoTemplate.content.querySelector(".carousel-inner").cloneNode(true);
    carouselExampleControlsNoTouching.append(clonephoto);
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItemLast = document.querySelector(".carousel-item:nth-last-of-type(1)");
    carouselInner.removeChild(carouselItemLast);
    carouselInner.querySelector(".carousel-item:nth-child(1) img").src = data.info.iPadPro11.imgUrl[0];
    carouselInner.querySelector(".carousel-item:nth-child(2) img").src = data.info.iPadPro11.imgUrl[1];
}

document.querySelector(".ipad").addEventListener("click", () => {
    for(let i = 0; i <= 1; i++) {
        iPadAir[i].addEventListener("click", () => {
            clear();
            iPadAircreate();
            price.textContent = data.info.iPadAir11.price;
            priceBuy.textContent = data.info.iPadAir11.price;
            document.querySelector("#eleven-inch + label h4 + span").textContent = "";
            document.querySelector("#eleven-inch + label .size-price").textContent = data.info.iPadAir11.price;
            document.querySelector("#thirteen-inch + label h4 + span").textContent = "";
            document.querySelector("#thirteen-inch + label .size-price").textContent = data.info.iPadAir13.price;
            capacityA.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[0].ROM;
            capacityA.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[0].capacity;
            capacityA.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[0].price;
            capacityB.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[1].ROM;
            capacityB.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[1].capacity;
            capacityB.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[1].price;
            capacityC.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[2].ROM;
            capacityC.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[2].capacity;
            capacityC.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[2].price;
            capacityD.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[3].ROM;
            capacityD.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[3].capacity;
            capacityD.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[3].price;
        })
        iPadPro[i].addEventListener("click", () => {
            clear();
            iPadProcreate();
            price.textContent = data.info.iPadPro11.price;
            priceBuy.textContent = data.info.iPadPro11.price;
            document.querySelector("#eleven-inch + label h4 + span").textContent = "Ultra Retina XDR顯示器";
            document.querySelector("#eleven-inch + label .size-price").textContent = data.info.iPadPro11.price;
            document.querySelector("#thirteen-inch + label h4 + span").textContent = "Ultra Retina XDR顯示器";
            document.querySelector("#thirteen-inch + label .size-price").textContent = data.info.iPadPro13.price;
            capacityA.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[0].ROM;
            capacityA.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[0].capacity;
            capacityA.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[0].price;
            capacityB.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[1].ROM;
            capacityB.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[1].capacity;
            capacityB.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[1].price;
            capacityC.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[2].ROM;
            capacityC.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[2].capacity;
            capacityC.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[2].price;
            capacityD.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[3].ROM;
            capacityD.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[3].capacity;
            capacityD.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[3].price;
        })
    }
})

elevenInch.addEventListener("click", () => {
    CheckoutB.textContent = "11 吋機型";
    if(h1last.textContent === "iPad Air") {
        for(let i = 0; i <= 3; i++) {
            if(capacity[i].checked === true) {
                price.textContent = data.info.iPadAir11ROM[i].price;
                priceBuy.textContent = data.info.iPadAir11ROM[i].price;
                break;
            } else {
                price.textContent = data.info.iPadAir11.price;
                priceBuy.textContent = data.info.iPadAir11.price;
            }
        }
        capacityA.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[0].ROM;
        capacityA.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[0].capacity;
        capacityA.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[0].price;
        capacityB.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[1].ROM;
        capacityB.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[1].capacity;
        capacityB.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[1].price;
        capacityC.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[2].ROM;
        capacityC.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[2].capacity;
        capacityC.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[2].price;
        capacityD.querySelector(".rom-capacity-num").textContent = data.info.iPadAir11ROM[3].ROM;
        capacityD.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir11ROM[3].capacity;
        capacityD.querySelector(".rom-price").textContent = data.info.iPadAir11ROM[3].price;
    } else if(h1last.textContent === "iPad Pro") {
        for(let i = 0; i <= 3; i++) {
            if(capacity[i].checked === true) {
                price.textContent = data.info.iPadPro11ROM[i].price;
                priceBuy.textContent = data.info.iPadPro11ROM[i].price;
                break;
            } else {
                price.textContent = data.info.iPadPro11.price;
                priceBuy.textContent = data.info.iPadPro11.price;
            }
        }
        capacityA.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[0].ROM;
        capacityA.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[0].capacity;
        capacityA.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[0].price;
        capacityB.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[1].ROM;
        capacityB.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[1].capacity;
        capacityB.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[1].price;
        capacityC.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[2].ROM;
        capacityC.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[2].capacity;
        capacityC.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[2].price;
        capacityD.querySelector(".rom-capacity-num").textContent = data.info.iPadPro11ROM[3].ROM;
        capacityD.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro11ROM[3].capacity;
        capacityD.querySelector(".rom-price").textContent = data.info.iPadPro11ROM[3].price;
    } 
})

thirteenInch.addEventListener("click", () => {
    CheckoutB.textContent = "13 吋機型";
    if(h1last.textContent === "iPad Air") {
        for(let i = 0; i <= 3; i++) {
            if(capacity[i].checked === true) {
                price.textContent = data.info.iPadAir13ROM[i].price;
                priceBuy.textContent = data.info.iPadAir13ROM[i].price;
                break;
            } else {
                price.textContent = data.info.iPadAir13.price;
                priceBuy.textContent = data.info.iPadAir13.price;
            }
        }
        capacityA.querySelector(".rom-capacity-num").textContent = data.info.iPadAir13ROM[0].ROM;
        capacityA.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir13ROM[0].capacity;
        capacityA.querySelector(".rom-price").textContent = data.info.iPadAir13ROM[0].price;
        capacityB.querySelector(".rom-capacity-num").textContent = data.info.iPadAir13ROM[1].ROM;
        capacityB.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir13ROM[1].capacity;
        capacityB.querySelector(".rom-price").textContent = data.info.iPadAir13ROM[1].price;
        capacityC.querySelector(".rom-capacity-num").textContent = data.info.iPadAir13ROM[2].ROM;
        capacityC.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir13ROM[2].capacity;
        capacityC.querySelector(".rom-price").textContent = data.info.iPadAir13ROM[2].price;
        capacityD.querySelector(".rom-capacity-num").textContent = data.info.iPadAir13ROM[3].ROM;
        capacityD.querySelector(".rom-capacity-byte").textContent = data.info.iPadAir13ROM[3].capacity;
        capacityD.querySelector(".rom-price").textContent = data.info.iPadAir13ROM[3].price;
    } else if(h1last.textContent === "iPad Pro") {
        for(let i = 0; i <= 3; i++) {
            if(capacity[i].checked === true) {
                price.textContent = data.info.iPadPro13ROM[i].price;
                priceBuy.textContent = data.info.iPadPro13ROM[i].price;
                break;
            } else {
                price.textContent = data.info.iPadPro13.price;
                priceBuy.textContent = data.info.iPadPro13.price;
            }
        }
        capacityA.querySelector(".rom-capacity-num").textContent = data.info.iPadPro13ROM[0].ROM;
        capacityA.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro13ROM[0].capacity;
        capacityA.querySelector(".rom-price").textContent = data.info.iPadPro13ROM[0].price;
        capacityB.querySelector(".rom-capacity-num").textContent = data.info.iPadPro13ROM[1].ROM;
        capacityB.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro13ROM[1].capacity;
        capacityB.querySelector(".rom-price").textContent = data.info.iPadPro13ROM[1].price;
        capacityC.querySelector(".rom-capacity-num").textContent = data.info.iPadPro13ROM[2].ROM;
        capacityC.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro13ROM[2].capacity;
        capacityC.querySelector(".rom-price").textContent = data.info.iPadPro13ROM[2].price;
        capacityD.querySelector(".rom-capacity-num").textContent = data.info.iPadPro13ROM[3].ROM;
        capacityD.querySelector(".rom-capacity-byte").textContent = data.info.iPadPro13ROM[3].capacity;
        capacityD.querySelector(".rom-price").textContent = data.info.iPadPro13ROM[3].price;
    }
})

iPadColorA.addEventListener("click", () => {
    carouselExampleControlsNoTouching.textContent = "";
    const clonephoto = photoTemplate.content.querySelector(".carousel-inner").cloneNode(true);
    carouselExampleControlsNoTouching.append(clonephoto);
    if(h1last.textContent === "iPad Air"){
        document.querySelector(".carousel-item:nth-child(1)").querySelector("img").src = data.info.iPadAirColors[0].imgUrl[0];
        document.querySelector(".carousel-item:nth-child(2)").querySelector("img").src = data.info.iPadAirColors[0].imgUrl[1];
        document.querySelector(".carousel-item:nth-child(3)").querySelector("img").src = data.info.iPadAirColors[0].imgUrl[2];
        CheckoutC.textContent = data.info.iPadAirColors[0].name;
    } else if(h1last.textContent === "iPad Pro") {
        document.querySelector(".carousel-item:nth-child(1)").querySelector("img").src = data.info.iPadProColors[0].imgUrl[0];
        document.querySelector(".carousel-item:nth-child(2)").querySelector("img").src = data.info.iPadProColors[0].imgUrl[1];
        document.querySelector(".carousel-item:nth-child(3)").querySelector("img").src = data.info.iPadProColors[0].imgUrl[2];
        CheckoutC.textContent = data.info.iPadProColors[0].name;
    }
})

iPadColorB.addEventListener("click", () => {
    carouselExampleControlsNoTouching.textContent = "";
    const clonephoto = photoTemplate.content.querySelector(".carousel-inner").cloneNode(true);
    carouselExampleControlsNoTouching.append(clonephoto);
    if(h1last.textContent === "iPad Air"){
        document.querySelector(".carousel-item:nth-child(1)").querySelector("img").src = data.info.iPadAirColors[1].imgUrl[0];
        document.querySelector(".carousel-item:nth-child(2)").querySelector("img").src = data.info.iPadAirColors[1].imgUrl[1];
        document.querySelector(".carousel-item:nth-child(3)").querySelector("img").src = data.info.iPadAirColors[1].imgUrl[2];
        CheckoutC.textContent = data.info.iPadAirColors[1].name;
    } else if(h1last.textContent === "iPad Pro") {
        document.querySelector(".carousel-item:nth-child(1)").querySelector("img").src = data.info.iPadProColors[1].imgUrl[0];
        document.querySelector(".carousel-item:nth-child(2)").querySelector("img").src = data.info.iPadProColors[1].imgUrl[1];
        document.querySelector(".carousel-item:nth-child(3)").querySelector("img").src = data.info.iPadProColors[1].imgUrl[2];
        CheckoutC.textContent = data.info.iPadProColors[1].name;
    }
})
iPadColorC.addEventListener("click", () => {
    carouselExampleControlsNoTouching.textContent = "";
    const clonephoto = photoTemplate.content.querySelector(".carousel-inner").cloneNode(true);
    carouselExampleControlsNoTouching.append(clonephoto);
    if(h1last.textContent === "iPad Air"){
        document.querySelector(".carousel-item:nth-child(1)").querySelector("img").src = data.info.iPadAirColors[2].imgUrl[0];
        document.querySelector(".carousel-item:nth-child(2)").querySelector("img").src = data.info.iPadAirColors[2].imgUrl[1];
        document.querySelector(".carousel-item:nth-child(3)").querySelector("img").src = data.info.iPadAirColors[2].imgUrl[2];
        CheckoutC.textContent = data.info.iPadAirColors[2].name;
    } else if(h1last.textContent === "iPad Pro") {

    }
})
iPadColorD.addEventListener("click", () => {
    carouselExampleControlsNoTouching.textContent = "";
    const clonephoto = photoTemplate.content.querySelector(".carousel-inner").cloneNode(true);
    carouselExampleControlsNoTouching.append(clonephoto);
    if(h1last.textContent === "iPad Air"){
        document.querySelector(".carousel-item:nth-child(1)").querySelector("img").src = data.info.iPadAirColors[3].imgUrl[0];
        document.querySelector(".carousel-item:nth-child(2)").querySelector("img").src = data.info.iPadAirColors[3].imgUrl[1];
        document.querySelector(".carousel-item:nth-child(3)").querySelector("img").src = data.info.iPadAirColors[3].imgUrl[2];
        CheckoutC.textContent = data.info.iPadAirColors[3].name;
    } else if(h1last.textContent === "iPad Pro") {

    }
})

ipadRomA.addEventListener("click", () => {
    if(h1last.textContent === "iPad Air") {
        price.textContent = document.querySelector("#capacity-A .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-A .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadAir11ROM[0].ROM + data.info.iPadAir11ROM[0].capacity;
    } else if(h1last.textContent === "iPad Pro") {
        price.textContent = document.querySelector("#capacity-A .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-A .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadPro11ROM[0].ROM + data.info.iPadPro11ROM[0].capacity;
    }
})

ipadRomB.addEventListener("click", () => {
    if(h1last.textContent === "iPad Air") {
        price.textContent = document.querySelector("#capacity-B .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-B .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadAir11ROM[1].ROM + data.info.iPadAir11ROM[1].capacity;
    } else if(h1last.textContent === "iPad Pro") {
        price.textContent = document.querySelector("#capacity-B .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-B .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadPro11ROM[1].ROM + data.info.iPadPro11ROM[1].capacity;
    }
})

ipadRomC.addEventListener("click", () => {
    if(h1last.textContent === "iPad Air") {
        price.textContent = document.querySelector("#capacity-C .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-C .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadAir11ROM[2].ROM + data.info.iPadAir11ROM[2].capacity;
    } else if(h1last.textContent === "iPad Pro") {
        price.textContent = document.querySelector("#capacity-C .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-C .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadPro11ROM[2].ROM + data.info.iPadPro11ROM[2].capacity;
    } 
})

ipadRomD.addEventListener("click", () => {
    if(h1last.textContent === "iPad Air") {
        price.textContent = document.querySelector("#capacity-D .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-D .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadAir11ROM[3].ROM + data.info.iPadAir11ROM[3].capacity;
    } else if(h1last.textContent === "iPad Pro") {
        price.textContent = document.querySelector("#capacity-D .rom-price").textContent;
        priceBuy.textContent = document.querySelector("#capacity-D .rom-price").textContent;
        CheckoutD.textContent = data.info.iPadPro11ROM[3].ROM + data.info.iPadPro11ROM[3].capacity;
    }
})
