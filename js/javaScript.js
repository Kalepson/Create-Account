const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');

const active = () => {
  buttons.forEach((btn) =>{
      btn.addEventListener('click',() =>{
          container.classList.toggle('active')
      })
  })
}
active()