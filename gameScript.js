
var degree = 180;

const squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('click',flip));

function flip(e){

  document.documentElement.style.setProperty(`--spin`,`${degree}` + 'deg');
  degree = degree + 180;
  changeFontSize();
  document.documentElement.style.setProperty(`--margin`,'10px');
}

const shadi = document.querySelectorAll('.sha');
console.log(shadi);
shadi.forEach(sha => sha.addEventListener('transitionend',reduceFontSize));

function reduceFontSize()
{
  document.documentElement.style.setProperty(`--fontSize`,'16px');
  document.documentElement.style.setProperty(`--margin`,'72px');
}

function changeFontSize()
{
  shadi.forEach(sha => sha.classList.add('changeMargin'));
  document.documentElement.style.setProperty(`--fontSize`,'50px');
}
