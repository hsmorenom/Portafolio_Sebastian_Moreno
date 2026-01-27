import './style.css'

// Importamos los HTML como strings planos usando el sufijo ?raw
import header from '/src/structure/header.html?raw'
import hero from '/src/structure/hero.html?raw'
import about from '/src/components/about.html?raw'
import education from '/src/components/education.html?raw'
import skills from '/src/components/skills.html?raw'
import projects from '/src/components/projects.html?raw'
import contact from '/src/components/contact.html?raw'
import footer from '/src/structure/footer.html?raw'

const renderApp = () => {
  const app = document.getElementById('app')

  // Ya no necesitas fetch ni async/await para los componentes
  app.innerHTML = `
    ${header}
    ${hero}
    ${about}
    ${education}
    ${skills}
    ${projects}
    ${contact}
    ${footer}
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


