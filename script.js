const navBar = document.getElementById("navBar");
const navBtn = document.getElementById("ham_burger");

navBtn.addEventListener("click",()=>{
    navBar.classList.toggle("active");
});

document.onclick = function(e){
    if(e.target.id !== 'ham_burger' && e.target.id !== 'navBar'){
        navBar.classList.remove("active");
    }
}


let sliderImg = document.getElementById("slider_img");
let index = 1;
let imgArr = [
    '9f8272f1ea0498cf50e44e936c1bba39--dashboard-ui-dashboard-design.jpg',
    '11excel-webdesign.png',
    '5061659_2638287.jpg',
    '2_4847.jpg'
];

function fun1() {
    sliderImg.setAttribute("src", imgArr[index]);
    index--;
    if (index < 0) { index = 3 }
}

function fun2() {
    sliderImg.setAttribute("src", imgArr[index]);
    index++;
    if (index > 3) { index = 0 }
}
setInterval(fun2, 5000);


const themeChange = document.getElementById("darkThemeIcon");
const templetCard1 = document.getElementById("card1");
const templetCard2 = document.getElementById("card2");
themeChange.addEventListener("click",() =>{
    document.body.classList.toggle("darkTheme");
    themeChange.classList.toggle("darkThemeColorChanger");
    templetCard1.classList.toggle("activeCard");
    templetCard2.classList.toggle("activeCard");
});
