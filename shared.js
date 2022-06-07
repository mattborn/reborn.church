const externalizeLinks = () => {
  // open external links in a new tab
  document.querySelectorAll('a[href^=h]').forEach(link => {
    link.classList.add('External')
    link.target = '_blank'
  })
}
externalizeLinks()

ScrollReveal().reveal('a', {
  cleanup: true,
  distance: '20%',
  interval: 100,
  origin: 'bottom',
})
