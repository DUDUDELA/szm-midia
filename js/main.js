/* SZM Mídia — interações do site */

/* Menu mobile */
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});

/* Fecha o menu ao clicar em um link */
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  })
);

/* Reveal on scroll */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* Fallback inteligente de imagens:
   1º tenta o arquivo local em /img
   2º tenta a URL remota do site publicado (data-remote)
   3º mostra um placeholder com as iniciais na cor da marca */
function imgFallback(el, tipo, texto) {
  if (el.dataset.remote) {
    const remote = el.dataset.remote;
    el.dataset.remote = "";
    el.src = remote;
    return;
  }
  if (tipo === "avatar") el.replaceWith(placeholderAvatar(texto));
  else if (tipo === "text") {
    const span = document.createElement("span");
    span.className = "nav__logo-text";
    span.innerHTML = 'SZM<span style="color:#6E0F1E">MÍDIA</span>';
    span.style.cssText = "font-family:Anton,sans-serif;font-size:1.4rem;";
    el.replaceWith(span);
  } else el.replaceWith(placeholderCard(texto));
}

/* Placeholders: enquanto as fotos reais não são adicionadas em /img,
   estas funções desenham um bloco com as iniciais na cor da marca. */
function placeholderCard(text) {
  const div = document.createElement("div");
  div.style.cssText =
    "width:100%;height:100%;min-height:340px;display:grid;place-items:center;" +
    "background:linear-gradient(135deg,#6E0F1E,#3D0811);color:#fff;" +
    "font-family:Anton,sans-serif;font-size:4rem;letter-spacing:.05em;";
  div.textContent = text;
  return div;
}

function placeholderAvatar(initials) {
  const div = document.createElement("div");
  div.style.cssText =
    "width:100%;height:100%;display:grid;place-items:center;" +
    "background:linear-gradient(135deg,#6E0F1E,#9E1B32);color:#fff;" +
    "font-family:Anton,sans-serif;font-size:2.4rem;";
  div.textContent = initials;
  return div;
}
