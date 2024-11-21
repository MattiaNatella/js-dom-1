const lampadinaSpenta = document.querySelector('.box img:last-child')

console.log(lampadinaSpenta)

const lampadinaAccesa = document.querySelector('.lampadina > img')

console.log(lampadinaAccesa)

const btnSwitch = document.getElementById('switch')

console.log(btnSwitch)

lampadinaSpenta.src ='./img/white_lamp.png'

lampadinaAccesa.src ='./img/yellow_lamp.png'

btnSwitch.addEventListener('click', () => {
  lampadinaSpenta.classList.toggle('hide');
  lampadinaAccesa.classList.toggle('hide');
  lampadinaAccesa.classList.add('reverse')

  btnSwitch.innerHTML = lampadinaAccesa.classList.contains('hide') ? 'Accendi la lampadina' : 'Spegni la lampadina'

 })



