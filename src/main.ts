const hero:HTMLImageElement = document.querySelector('#hero')

hero.addEventListener('click', moveRight)

function moveRight () {
  const leftPosition = hero.getBoundingClientRect().left

  hero.style.left = leftPosition + 100 + 'px'
}
