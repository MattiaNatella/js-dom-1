const lampadinaSpenta = document.querySelector('.box img:last-child')
const lampadinaAccesa = document.querySelector('.lampadina > img')
const btnSwitch = document.getElementById('switch')
// const divLampadine = document.querySelector('.box')

lampadinaSpenta.src ='./img/white_lamp.png'
lampadinaAccesa.src ='./img/yellow_lamp.png'

btnSwitch.addEventListener('click', () => {
  lampadinaSpenta.classList.toggle('hide');
  lampadinaAccesa.classList.toggle('hide');
  lampadinaAccesa.classList.add('reverse')
  btnSwitch.innerHTML = lampadinaAccesa.classList.contains('hide') ? 'Accendi la lampadina' : 'Spegni la lampadina';

 })



/*OPPURE

btnSwitch.addEventListener('click', () => {
  const lampEl = document.getElementById('lamp')

  if (!isLampOn) {
  lampEl.src = 'img/yellow_lamp.png';
  toggleLampBtnEl.innerHTML = "spegni"
  } else {
     lampEl.src = 'img/yellow_lamp.png';
  toggleLampBtnEl.innerHTML = "spegni"}

  isLampOn = !isLampOn

*/

/*ALTRA ALTERNATIVA

btnSwitch.addEventListener('click', () => {
  const lampEl = document.getElementById('lamp')

  if(lampEl.src.includes(img/whie_lamp.png')){
  lampEl.src = 'img/yellow_lamp.png';
  toggleLampBtnEl = "spegni"
  } else

  lampEl.src = 'img/white_lamp.png';
  toggleLampBtnEl = "accendi"
*/