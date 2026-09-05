/* ==========================================================================
   MÁRCIA LUCIANA — interações da landing page
   Vanilla JS, sem dependências. Progressive enhancement:
   se o JS falhar, o conteúdo continua acessível.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Ano atual no rodapé ---------- */
  var anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Header: sombra ao rolar ---------- */
  var header = document.querySelector(".header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    var closeNav = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    };
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    // fecha ao clicar em um link
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    // fecha com ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* ---------- FAQ (acordeão acessível) ---------- */
  var faqButtons = document.querySelectorAll(".faq__q");
  faqButtons.forEach(function (btn) {
    var panel = btn.nextElementSibling;
    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      // fecha todos (modo acordeão)
      faqButtons.forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
        if (other.nextElementSibling) other.nextElementSibling.style.maxHeight = null;
      });
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------- Filtro de materiais por categoria ---------- */
  var filtros = document.querySelectorAll("#materiais .filter");
  var cards = document.querySelectorAll("#materiais .cards .card");
  filtros.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var alvo = btn.getAttribute("data-filter");
      filtros.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      cards.forEach(function (card) {
        var mostra = alvo === "todos" || card.getAttribute("data-cat") === alvo;
        card.style.display = mostra ? "" : "none";
      });
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // fallback: mostra tudo
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
