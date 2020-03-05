function $(id) {
  return document.querySelector(id);
}
function $$(id) {
  return document.querySelectorAll(id);
}


const load = $('.loading')
setTimeout(() => {
  load.classList.remove('active');
}, 3000)

setTimeout(() => {
  moveTop()
}, 3000);

let slideTop = $$('[data-w]')
for (let i = 0; i < slideTop.length; i++) {
  slideTop[i].classList.add('offset')
}
 
const topBar = $('.topBar')
window.onscroll = function () {
  if (window.scrollY > 0) {
    topBar.classList.add('sticky')
  } else {
    topBar.classList.remove('sticky')
  }
  moveTop()
}
function moveTop() {
  let slideTop = $$('[data-w]')
  let minIndex = 0;
  for (let i = 1; i < slideTop.length; i++) {
    if (Math.abs(slideTop[i].offsetTop - window.scrollY)
      < Math.abs(slideTop[minIndex].offsetTop - window.scrollY))
      minIndex = i
  }
  slideTop[minIndex].classList.remove('offset')
  let id = slideTop[minIndex].id
  let a = $('a[href="#' + id + '"]')
  let li = a.parentNode
  let brotherLi = li.parentNode.children
  for (let i = 0; i < brotherLi.length; i++) {
    brotherLi[i].classList.remove('hightlight')
  }
  li.classList.add('hightlight')
}

const topA = $$('.menu ul li a ')
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i = 0; i < topA.length; i++) {
  topA[i].onclick = function (a) {
    a.preventDefault()
    // let a = x.currentTarget
    // let href = a.getAttribute('href')
    // let element = $(href)
    // let top = element.offsetTop
    let top = $(a.currentTarget.getAttribute('href')).offsetTop
    let currentTop = window.scrollY
    let targetTop = top - 60
    let s = targetTop - currentTop
    var coords = { y: currentTop }; // 起始位置
    var t = Math.abs((s / 100) * 300); // 时间
    if (t > 500) {
      t = 500;
    }
    var tween = new TWEEN.Tween(coords) // 起始位置
      .to({ y: targetTop }, t) // 结束位置 和 时间
      .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
      .onUpdate(function () {
        // coords.y 已经变了
        window.scrollTo(0, coords.y); // 如何更新界面
      })
      .start(); // 开始缓动
  };
}


