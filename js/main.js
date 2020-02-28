function $(id) {
  return document.querySelector(id);
}
function $$(id) {
  return document.querySelectorAll(id);
}

const load = $('.loading')
const nav = $('.nav')
const wa = nav.querySelectorAll('a')
const data = $('#data')
const skill = $('#skill')
const work = $('#work')

setTimeout(()=>{
  load.classList.remove('active');
  
},3000)

let move = (element, time = 400) => {
  let speed = Math.abs(window.pageYOffset - element) * 10 / time
  if (element > window.pageYOffset) {
    let down = setInterval(() => {
      document.documentElement.scrollTop > element
        ? clearInterval(down)
        : (document.documentElement.scrollTop = window.pageYOffset + speed)
    }, 5);
  } else {
    let up = setInterval(() => {
      document.documentElement.scrollTop <= element
        ? clearInterval(up)
        : (document.documentElement.scrollTop = window.pageYOffset - speed)
    }, 5);
  }
}

for (let i = 0; i < wa.length; i++) {
  wa[i].onclick = () => {
    switch (i) {
      case 0: move(data.offsetTop);
        break;
      case 1: move(skill.offsetTop);
        break;
      default: move(work.offsetTop);
    }
  }
}

