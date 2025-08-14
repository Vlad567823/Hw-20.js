const gallery = document.querySelector('.gallery');
document.addEventListener('keydown', (event) => {
  const scrollStep = 320; // ширина зображення + відступ

  if (event.key === 'ArrowRight') {
    gallery.scrollBy({ left: scrollStep,});
  }
  else if (event.key === 'ArrowLeft') {
    gallery.scrollBy({ left: -scrollStep,});
  }
});
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)})`;
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();
    div.style.margin = '5px';
    boxes.push(div);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


renderBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);