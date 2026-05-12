// Seleciona todas as seções de página inteira e links correspondentes
const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");
// Seleciona o formulário e os campos de entrada
const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Adiciona o ouvinte de evento para o envio do formulário
form.addEventListener("submit", function (event) {
  // Impede o comportamento padrão do HTML (recarregar a página)
  event.preventDefault();

  // Remove espaços em branco extras no início e fim dos valores
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Validação simples em JavaScript
  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return; // Interrompe a execução se houver campos vazios
  }

  // Validação básica de formato de e-mail usando Expressão Regular (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    emailInput.focus();
    return;
  }

  // Aqui você veria o carregamento se estivesse integrando com uma API (ex: Fetch API)
  const submitButton = form.querySelector(".btn-submit");

  // Altera o estado do botão para dar feedback visual de "enviando"
  submitButton.innerText = "Enviando...";
  submitButton.disabled = true;
  submitButton.style.opacity = "0.5";

  // Simula um atraso de rede de 1.5 segundos (1500 milissegundos)
  setTimeout(() => {
    // Exibe a mensagem de sucesso
    alert(
      `Obrigado pelo contato, ${nameValue}! Sua mensagem foi enviada com sucesso (Simulação).`,
    );

    // Limpa os campos do formulário
    form.reset();

    // Restaura o botão ao estado original
    submitButton.innerText = "Enviar Mensagem";
    submitButton.disabled = false;
    submitButton.style.opacity = "1";
  }, 1500);
});

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
