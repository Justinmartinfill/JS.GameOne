const hero = document.getElementById('hero')

document.addEventListener('keydown', move)

/* function move (event) {
  if (event.key === 'ArrowDown') {
    const topPosition = hero.getBoundingClientRect().top
    hero.style.top = topPosition + 100 + 'px'
  }
} */

function move (event) {
  try {
    const Position = hero.getBoundingClientRect()

    switch (event.key) {
      case 'ArrowUp':
        if (Position.top - 100 >= 0) {
          hero.style.top = Position.top - 100 + 'px'
        // move up
        } else {
          throw new Error('Wrong Way!')
        }
        break
      case 'ArrowDown':
        hero.style.top = Position.top + 100 + 'px'
        // move down
        break
      case 'ArrowRight':
        hero.style.left = Position.left + 100 + 'px'
        // move right
        break
      case 'ArrowLeft':
        if (Position.left - 100 >= 0) {
          hero.style.left = Position.left - 100 + 'px'
        // move left
        } else {
          throw new Error('Wrong Way!')
        }
        break
    }
  } catch (error) { alert(error) }
}
