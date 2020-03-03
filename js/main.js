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

const topBar = $('.topBar')
window.onscroll = function () {
  if (window.scrollY > 0) {
    topBar.classList.add('sticky')
  } else {
    topBar.classList.remove('sticky')
  }
}

const topA = $$('.menu ul li a ')

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i = 0; i < topA.length; i++) {
  topA[i].onclick = function (x) {
    x.preventDefault()
    // let a = x.currentTarget
    // let href = a.getAttribute('href')
    // let element = $(href)
    // let top = element.offsetTop
    let top = $(x.currentTarget.getAttribute('href')).offsetTop
    let currentTop = window.scrollY
    let targetTop = top - 80
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


