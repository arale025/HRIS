let scrollTop = document.getElementById('scrollTop');

document.addEventListener('scroll', function () {
  let scrollHeight = window.scrollY

  if (scrollHeight > 400) {
    scrollTop.style.display = 'block'
  } else {
    scrollTop.style.display = 'none'
  }
})

scrollTop.addEventListener('click', function () {
  let html_el = document.getElementsByTagName("html")[0];
  html_el.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})