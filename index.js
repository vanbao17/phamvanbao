document.addEventListener("DOMContentLoaded", function () {
    const click = document.querySelectorAll(".input")
    const span = document.querySelectorAll(".input .len")
    var tg = "lan1";
    click[0].onclick = function () {
        tg = "lan1";
        if (tg === "lan1") {
            span[0].classList.add("small");
            span[1].classList.remove("small");
            tg = "lan2";
        }
        else {
            if (tg === "lan2") {
                span[0].classList.remove("small");
                tg = "lan1";
            }
        }
    }
    click[1].onclick = function () {
        tg = "lan1";
        if (tg === "lan1") {
            span[0].classList.remove("small");
            span[1].classList.add("small");
            tg = "lan1";
        }
        else {
            if (tg === "lan2") {
                span[1].classList.remove("small");
            }
        }
    }
    const actionlist = document.querySelector(".action-list");
    const lefttoright = document.querySelector(".left-to-right")
    const black = document.querySelector(".den");
    actionlist.onclick = function() {
        lefttoright.classList.toggle("to-right");
    }
    const close = document.querySelector(".close");
    close.onclick = function() {
        lefttoright.classList.remove("to-right");
    }
    const icon = document.querySelector(".chat span")
    var tg1 = "lan1"
    setInterval(function () {
        if (tg1 === "lan1") {
            icon.innerHTML = "<ion-icon name='list'></ion-icon>";
            tg1 = "lan2";
        }
        else {
            if (tg1 === "lan2") {
                icon.innerHTML = "<ion-icon name='chatbox-ellipses'></ion-icon>";
                tg1 = "lan1";
            }
        }
    }, 2000)
    const actionmenu = document.querySelectorAll(".action-menu")
    const down = document.querySelectorAll(".left-to-right .list-menu-down")
    tg1 = "lan1";
    actionmenu[0].onclick = function () {
        down[0].classList.toggle("list-menu-down")
    }
    actionmenu[1].onclick = function () {
        down[1].classList.toggle("list-menu-down")
    }
    actionmenu[2].onclick = function () {
        down[2].classList.toggle("list-menu-down")
    }
    actionmenu[3].onclick = function () {
        down[3].classList.toggle("list-menu-down")
    }
    actionmenu[4].onclick = function () {
        down[4].classList.toggle("list-menu-down")
    }
}, false)




var listimg = document.querySelectorAll(".list-img img");
var mainimg = document.querySelector(".main_image");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var currentIndex = 0;
function update(index) {
    document.querySelectorAll(".list-img div").forEach(item => {
        item.classList.remove("actives")
    })
    currentIndex = index;
    mainimg.src = listimg[index].getAttribute('src')
    listimg[index].parentElement.classList.add("actives");
}
listimg.forEach((ImgElement,index) => {
    ImgElement.addEventListener('click' ,e => {
        mainimg.style.opacity= '0';
        setTimeout(()=> {
            update(index);
            mainimg.style.opacity= '1';
        },400)
    })
})
prev.addEventListener('click',e => {
    if(currentIndex==0)
        currentIndex=listimg.length-1;
    else    
        currentIndex--;  
    update(currentIndex);
})
next.addEventListener('click',e => {
    if(currentIndex==listimg.length-1)
        currentIndex=0;
    else    
        currentIndex++;    
    update(currentIndex);
})
update(0);
var container1 = document.querySelector("#container1");
var chat = document.querySelector(".chat");
var back = document.querySelector(".back");
window.addEventListener("scroll",function() {
    if(window.pageYOffset>=100)
    {
        container1.classList.add("scroll_container1");
    }
    else
    {
        container1.classList.remove("scroll_container1");
        container1.classList.remove("menu_fixed");
    }
    if(window.pageYOffset >= 300)
    {
        chat.classList.add("sangtrai");
        back.classList.add("sangtrai");
        back.onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    else
    {
        chat.classList.remove("sangtrai");
        back.classList.remove("sangtrai");
    }
})