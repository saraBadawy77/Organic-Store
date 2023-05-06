

const slidimg = document.querySelectorAll('.Aimg');
if (slidimg.length > 0) {
  let currentimg = 0;
  const slidesToimg = 1;
  slidimg.forEach(box => box.style.display = 'none');
  for (let i = 0; i < slidesToimg; i++) {
    slidimg[i].style.display = 'inline-block';
  }

  function updateimg() {
    slidimg.forEach(box => {
      box.style.display = 'none';
      box.style.transition = 'none';
    });
    slidimg[currentimg].style.display = 'inline-block';
    slidimg[currentimg].style.transition = '3s all';
  }

  setInterval(() => {
    if (currentimg === slidimg.length - 1) {
      currentimg = 0;
    } else {
      currentimg++;
    }
    updateimg();
  }, 3000);
}