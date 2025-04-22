window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-column').forEach((column) => {
    const direction = column.dataset.direction || 'up'
    const isUp = direction === 'up'
    const speed = 0.5
    let offset = 0
    const gap = 16

    const cards = Array.from(column.children)
    cards.forEach((card) => {
      const clone = card.cloneNode(true)
      column.appendChild(clone)
    })

    const cardHeights = cards.map((card) => card.offsetHeight)
    const totalHeight = cardHeights.reduce((a, b) => a + b + gap, 0)

    const animate = () => {
      offset += speed
      if (offset >= totalHeight) offset = 0
      if (offset <= -totalHeight) offset = 0

      column.style.transform = `translateY(${isUp ? -offset : offset}px)`
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  })
})
