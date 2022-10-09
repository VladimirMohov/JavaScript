var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var overlay = document.querySelector('.overlay');

for (let i = 1; i <= 5; i++) {
  let pic = document.createElement('img')
  pic.setAttribute('src', `images/pic${i}.jpg`)
  thumbBar.appendChild(pic)
  pic.addEventListener('click',(e) => {
    displayedImage.setAttribute('src', e.target.attributes.src.value)
  })
}
btn.addEventListener('click', (e) => {
  e.target.classList.toggle('light')
  if (e.target.classList.value == 'light') { overlay.style.background = "rgba(0,0,0,0.5)" }
  else { overlay.style.background = "rgba(0,0,0,0)" }
})