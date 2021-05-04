const ulList = document.querySelector('.nav__List')
const buttonOpen = document.querySelector('.menu__open')
const buttonClose = document.querySelector('.menu__close')
const header = document.querySelector('.header__title')


buttonOpen.addEventListener('click',()=>{
  ulList.classList.add('active')
})

buttonClose.addEventListener('click',()=>{
  ulList.classList.remove('active')
})

class Typing{
  constructor(props) {
    this.el = document.querySelector(props.el)
    if(this.el.querySelector('*'))
    throw new Error('Element includes Anpther Thml elements')
    this.text = this.el.innerHTML.trim();
    this.el.innerHTML = "";
    this.time = props.interval;
    setTimeout(() => this.writeLetter(), props.delay);
  }

  writeLetter(i = 0) {
    this.el.innerHTML += this.text[i]
    if (this.el.innerHTML === this.text) return;
    setTimeout(() => this.writeLetter(i + 1), this.time);
  }
}
new Typing ({
  el: '.header__title',
  interval: 200,
  delay: 1000,
});


