const round = $("#round"); // 父元素
const wli = round.querySelectorAll('li') // 轮播 item
const screen = $("#screen");//显示屏幕
const imgWidth = screen.offsetWidth;//屏幕自身宽度
const btn = $("#btn"); // 小圆点父元素
const play = $("#play"); // 容器元素
const arr = $("#arr"); // 箭头父元素
const larr = $("#left"); // 左箭头
const rarr = $("#right"); // 右箭头
const count = wli.length; // 轮播 item 的个数
const total = count + 2; // 包含无缝滚动的总个数

let index = 1; // 当前轮播的是第几张
let timer = null; // 定时器
let isAnimating = false; // 当前是否是动画执行中

for (i = 0; i < count; i++) {
  let li = document.createElement("li");
  btn.appendChild(li);
  if (i === 0) {
    li.className = "highlight";
  }
  li.onclick = liClick;
  li.setAttribute("index", i);
}

// 准备无缝滚动的元素
(() => {
  const firstLi = wli[0];
  const firstLiClone = firstLi.cloneNode(true);
  const lastLi = wli[wli.length - 1].cloneNode(true);
  round.appendChild(firstLiClone);
  round.insertBefore(lastLi, firstLi);
  round.style.width = total * imgWidth + "px";
  round.style.left = -imgWidth + "px";
})();

play.onmouseenter = () => {
  arr.style.display = "block";
  stopTimer();
};
play.onmouseleave = () => {
  arr.style.display = "none";
  startTimer();
};

larr.onclick = () => {
  if (isAnimating) return;
  index--;
  toggle(index);
  if (index === 0) {
    index = total - 2;
  }
  changeDotText(index - 1);
};

rarr.onclick = () => {
  if (isAnimating) return;
  index++;
  toggle(index);
  if (index === total - 1) {
    index = 1;
  }
  changeDotText(index - 1);
};

function liClick() {
  if (isAnimating) return;
  let liIndex = parseInt(this.getAttribute("index"));
  toggle(liIndex + 1);
  changeDotText(liIndex);
}

function startTimer() {
  timer = setInterval(() => {
    rarr.onclick();
  }, 3000);
}

function stopTimer() {
  clearInterval(timer);
}

function toggle(n) {
  isAnimating = true;
  wwfAnimate(round, -n * imgWidth, () => {
    isAnimating = false;
    if (n === 0) {
      console.log(-imgWidth * count + "px")
      round.style.left = -imgWidth * count + "px";
    }
    if (n === total - 1) {
      console.log(-imgWidth * count + "px")
      round.style.left = -imgWidth + "px";
    }
  });
}

function changeDotText(index) {
  for (i = 0; i < btn.children.length; i++) {
    let li = btn.children[i];
    li.className = index === i ? "highlight" : "";
  }
}
