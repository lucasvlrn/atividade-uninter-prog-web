// Seleciona todas as seções de página inteira e links correspondentes
const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");

// Configuração do observador de rolagem de página
const observerOptions = {
  root: null,
  // Ativa a troca do menu quando a seção atinge a parte superior/central da tela
  rootMargin: "-30% 0px -60% 0px",
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      // Remove o traço ativo de todos os links do menu
      navLinks.forEach((link) => link.classList.remove("active"));

      // Adiciona o traço ativo apenas no link visível
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

// Ativa a escuta do evento em cada seção
sections.forEach((section) => sectionObserver.observe(section));
