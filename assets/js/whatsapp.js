/* ==========================================================================
   Botão flutuante de WhatsApp — Márcia Luciana
   Para trocar o número ou a mensagem, edite as 2 linhas abaixo.
   Número no formato internacional, só dígitos: 55 (país) + 54 (DDD) + número.
   ========================================================================== */
(function () {
  var NUMERO = "555491338543"; // << conferir: celular no BR costuma ter 9 dígitos após o DDD
  var MENSAGEM = "Olá! Vim pelo site e gostaria de saber mais sobre os cursos. 😊";

  var href = "https://wa.me/" + NUMERO + "?text=" + encodeURIComponent(MENSAGEM);

  var css = document.createElement("style");
  css.textContent =
    ".wa-fab{position:fixed;right:20px;bottom:20px;z-index:95;width:58px;height:58px;border-radius:50%;" +
    "background:#25D366;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.22);" +
    "transition:transform .2s ease, box-shadow .2s ease;}" +
    ".wa-fab:hover{transform:scale(1.06);box-shadow:0 12px 30px rgba(0,0,0,.3);}" +
    ".wa-fab svg{width:32px;height:32px;fill:#fff;}" +
    "@media print{.wa-fab{display:none!important;}}";
  document.head.appendChild(css);

  var a = document.createElement("a");
  a.className = "wa-fab";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Falar no WhatsApp");
  a.setAttribute("data-fbevent", "Contact");
  a.innerHTML =
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.23c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.18 2.99.15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.09 1.7-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33M16.02 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.44 1.71 6.38L3.1 28.8l6.59-1.73c1.86 1.02 3.96 1.55 6.1 1.55h.01c7.04 0 12.77-5.73 12.78-12.78 0-3.41-1.33-6.62-3.74-9.03-2.42-2.42-5.63-3.75-9.03-3.75m0 23.4h-.01c-1.91 0-3.78-.51-5.41-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4c-1.07-1.7-1.63-3.66-1.63-5.68 0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12 2.01 2.01 3.12 4.69 3.12 7.54 0 5.88-4.78 10.65-10.66 10.65"/></svg>';

  // se a página tiver a barra fixa de CTA, sobe o botão pra não sobrepor
  if (document.querySelector(".sticky-cta")) a.style.bottom = "86px";

  document.body.appendChild(a);
})();
