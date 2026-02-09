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
import { translations } from './i18n/translations'

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

let currentLang = 'es'

const translatePage = () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    const keys = key.split('.')

    let text = translations[currentLang]
    keys.forEach(k => text = text[k])

    el.textContent = text
  })

  // 👉 NUEVO: cambiar el archivo del CV según idioma
  const cvDesktop = document.getElementById("cv_link")
  const cvMobile = document.getElementById("cv_link_mobile")

  if (cvDesktop) {
    cvDesktop.href = translations[currentLang].nav.link_CV;

  }

  if (cvMobile) {
    cvMobile.href = translations[currentLang].nav.link_CV
  }

}

// botón
window.toggleLanguage = () => {
  currentLang = currentLang === 'es' ? 'en' : 'es'
  translatePage()
}

// al cargar
translatePage()

// ---------- THEME ----------
// const root = document.documentElement

// const setTheme = (theme) => {
//   root.classList.toggle('dark', theme === 'dark')
//   localStorage.setItem('theme', theme)
//   updateIcon()
// }

// const updateIcon = () => {
//   document.querySelectorAll('#theme-toggle').forEach(btn => {
//     btn.textContent = root.classList.contains('dark') ? '☀️' : '🌙'
//   })
// }


// // Eventos
// document.addEventListener('click', (e) => {
//   if (e.target.closest('#theme-toggle') ||
//       e.target.closest('#theme-toggle-mobile')) {
//     setTheme(root.classList.contains('dark') ? 'light' : 'dark')
//   }
// })

// // Init
// setTheme(localStorage.getItem('theme') || 'dark')



