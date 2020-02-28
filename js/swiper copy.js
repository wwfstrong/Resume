let ul = $("ul");
let uli = $$("li");
let screen = $("#screen");
let ol = $("ol");
let play = $("#play");
let arr = $("#arr");
let larr = $("#left");
let rarr = $("#right");
let i = (index = 0);
let text = work.querySelector('p')
let count = uli.length;
let imgWidth = screen.offsetWidth;

for (i = 0; i < count; i++) {
    let li = document.createElement("li");
    ol.appendChild(li);
    if (i === 0) {
        li.className = "highlight";
    }
    li.onclick = liClick;
    li.setAttribute("index", i);
}
play.onmouseenter = () => {
    arr.style.display = "block";
    clearInterval(timer);
};
play.onmouseleave = () => {
    arr.style.display = "none";
    timer = setInterval(() => {
        rarr.onclick();
    }, 4000);
};
larr.onclick = () => {
    if (index === 0) {
        index = count;
        ul.style.left = -index * imgWidth + "px";
    }
    index--;
    ol.children[index].onclick();
};
rarr.onclick = () => {
    if (index === count) {
        ul.style.left = "0px";
        index = 0;
    }
    index++;
    if (index < count) {
        ol.children[index].onclick();
    } else {
        animate(ul, -index * imgWidth);
        for (i = 0; i < ol.children.length; i++) {
            let li = ol.children[i];
            li.className = "";
        }
        ol.children[0].className = "highlight";
    }
};

let firstLi = uli[0];
let cloneli = firstLi.cloneNode(true);
ul.appendChild(cloneli);

function liClick() {
    for (i = 0; i < ol.children.length; i++) {
        let li = ol.children[i];
        li.className = "";
    }
    this.className = "highlight";
    let liindex = parseInt(this.getAttribute("index"));
    animate(ul, -liindex * imgWidth);
    index = liindex;
    liindex === (uli.length)
        ? (text.innerText = uli[0].children[1].innerText)
        : (text.innerText = uli[liindex].children[1].innerText)
}

let timer = setInterval(() => {
    rarr.onclick();
}, 4000);