// add navbar animations

function navbarMouseOut(btuElem){
    let buttonId = btuElem.id
    if(btuElem.id == "button-full-1"|| btuElem.id== "button-full-2" || btuElem.id== "button-full-3"){
        btuElem.style.animation = "slide-down 2s ease-in-out";
        document.getElementById('underline').style.animation = "underlineShiftUp 3s ease-in-out forwards";
        document.getElementById('main').style.animation = "underlineShiftUp 3s ease-in-out forwards";
        switch (buttonId) {
            case 'button-full-1': btuElem.innerHTML = "CV"; break;
            case 'button-full-2': btuElem.innerHTML = "Motivation"; break;
            case 'button-full-3': btuElem.innerHTML = "Contact"; break;
        }
        btuElem.id="";
        setTimeout(function() {
            btuElem.id = buttonId;
        }, 3000);
};
}
function navbarMouseIn(btuElem){
    let buttonId = btuElem.id
    if(buttonId == "button-full-1" || buttonId == "button-full-2"|| buttonId == "button-full-3"){
    btuElem.style.animation = "hooover 2s ease-in-out forwards";
    document.getElementById('underline').style.animation = "underlineShiftDown 1s ease-in-out forwards";
    document.getElementById('main').style.animation = "underlineShiftDown 1s ease-in-out forwards";
    switch (buttonId){
        case 'button-full-1': btuElem.innerHTML = "<span id='r'>R</span><span id='o'>o</span><span id='b'>b</span><span id='i'>i</span><span id='n'>n</span>";
            document.getElementById('r').style.animation = "r 2s ease-in-out forwards";
            document.getElementById('o').style.animation = "o 2.5s ease-in-out forwards";
            document.getElementById('b').style.animation = "b 3s ease-in-out forwards";
            document.getElementById('i').style.animation = "i 3.5s ease-in-out forwards";
            document.getElementById('n').style.animation = "n 4s ease-in-out forwards";
            break;
        case 'button-full-2': btuElem.innerHTML = "<span id='dot'>.</span><span id='m'>M</span><span id='e'>E</span>";
            document.getElementById('dot').style.animation = "dot 3s ease-in-out forwards";
            document.getElementById('m').style.animation = "m 2s ease-in-out forwards";
            document.getElementById('e').style.animation = "e 2.5s ease-in-out forwards";
            break;
        case 'button-full-3': btuElem.innerHTML = "E-mail"; break;
    }    };
}
// annimation for collapsed navbar
function cross(){
    let box = document.getElementById('box');
    if(box.name == 'true') {
        box.getElementsByTagName('div')[1].style.display = "unset";
        box.getElementsByTagName('div')[0].style.transform = "translateY(0px) rotate(0deg)";
        box.getElementsByTagName('div')[2].style.transform = "translateY(0px) rotate(0deg)";
        document.getElementById('boxContent').style.display = "none";
        box.name = 'false'
    } else {
        box.getElementsByTagName('div')[1].style.display = "none";
        box.getElementsByTagName('div')[0].style.transform = "translateY(11px) rotate(226deg)";
        box.getElementsByTagName('div')[2].style.transform = "translateY(-11px) rotate(-226deg)";
        document.getElementById('boxContent').style.display = "flex";
        document.getElementById('boxContent').style.animation = 'fadeIn 1s ease-in-out forwards';
        box.name = 'true';
    }
}

// fading annimation after click button
function clouwd(bId) {
    var btuElem = document.getElementById('button-full-'+ bId);
    document.getElementById('button-full-'+ bId).style.animation = "fadeAway 5s ease-in-out forwards";
    document.getElementById('underline').style.animation = "underlineShiftUp 3s ease-in-out forwards";
    document.getElementById('main').style.animation = "underlineShiftUp 3s ease-in-out forwards";
    switch (bId) {
        case 1: 
            setTimeout(function() {
                window.location.href = "./index.html";
            },5000);
            btuElem.innerHTML = "Robin";
           
        break;
        case 2:
            setTimeout(function() {
                window.location.href = "./Motivation.html";
            },5000);
            btuElem.innerHTML = ".ME";
        break;
        case 3: 
            setTimeout(function() {
                window.location.href = "mailto:vansanden.delien@hotmail.com";
            },5000);
            btuElem.innerHTML = "Contact";
        break;
    };
    btuElem.id = "";
}
// scroll annimations
var currentMargin = -300 +'px';
window.addEventListener('scroll', function(mar){
   var Optiond ={
        threshold: 0.5
   };
   var Options = {};
    let rvs = document.getElementById('rvs-text');
    var rvsOnScreen = new IntersectionObserver(function(enteries, observer){
        enteries.forEach(entry =>{
            if (!entry.isIntersecting) {
                return;
            } else {
                let currentvalue = window.scrollY;
                rvs.style.marginLeft = (currentvalue - 300) *  1.5 +'px';
            }
        })
    },Options);
    rvsOnScreen.observe(rvs);
    var listItem = new IntersectionObserver(function(enteries, observer){
        enteries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.animation = "appear 1s ease-in forwards";
            }
        })
    },Optiond);
    const containerListItems = document.querySelectorAll('.container-listItem');
    containerListItems.forEach(containerListItem => listItem.observe(containerListItem));
});
// following hyperlinks
function followLink(id){
    switch(id){
        case 1: setTimeout(() => {
            window.location.href = "./index.html";
            }, 5000);
            break;
        case 2: setTimeout(() => {
            window.location.href = "./Motivation.html";
            }, 5000);
            break;
        case 3:
            setTimeout(() => {
                window.location.href = "mailto:vansanden.delien@hotmail.com";
            },5000);
            break;
    }
    document.getElementsByTagName('BODY')[0].style.animation = "fadeAway 5s ease-in-out forwards";
};
document.getElementById('box').onclick = () => {cross()};
// hiding succes page after click
function sudokuDone () {
    document.getElementById('endScore').style.display="none"
}

// fade in containers when on screen
function onloadFadeIn() {
    var Optiond ={
        threshold: 0.5
   };
    var onloadList = new IntersectionObserver(function(enteries, observer){
        enteries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.animation = "appear 0.01s ease-in-out forwards";
            }
        })
    },Optiond);
    const onloadListItems = document.querySelectorAll('.container-listItem');
    onloadListItems.forEach(onloadListItem => onloadList.observe(onloadListItem));
};