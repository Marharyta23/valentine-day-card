const noBtnEl = document.querySelector('.no');
noBtnEl.addEventListener('click', onMouseMove);

function oonMouseMove(e) {
  const x = Math.floor(Math.random() * 1000);
  const y = Math.floor(Math.random() * 500);

  noBtnEl.style.left = x + 'px';
  noBtnEl.style.top = y + 'px';
}
