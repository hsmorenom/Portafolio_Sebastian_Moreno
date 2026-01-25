import './style.css'

const loadComponent = async (path) => {
  const res = await fetch(path)
  return res.text()
}

const renderApp = async (path) => {
  const app = document.getElementById('app')

  app.innerHTML = `
  ${await loadComponent('/src/structure/header.html')}
  ${await loadComponent('/src/structure/hero.html')}
  ${await loadComponent('/src/components/about.html')}
  ${await loadComponent('/src/components/education.html')}
  ${await loadComponent('/src/components/skills.html')}
  ${await loadComponent('/src/components/projects.html')}
  ${await loadComponent('/src/components/contact.html')}
  ${await loadComponent('/src/structure/footer.html')}
`
}
renderApp()

document.addEventListener('click', (e) => {
  const mobileMenu = document.getElementById('mobile-menu')

  // Toggle menú al hacer click en ☰
  if (e.target.closest('#menu-btn')) {
    mobileMenu.classList.toggle('hidden')
  }

  // Cerrar menú al hacer click en un link
  if (e.target.closest('#mobile-menu a')) {
    mobileMenu.classList.add('hidden')
  }
})


