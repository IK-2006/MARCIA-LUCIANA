/* ==========================================================================
   Meta Pixel (Facebook/Instagram) — Márcia Luciana
   COMO ATIVAR:
   1. A Márcia cria o Pixel no Gerenciador de Eventos da Meta (business.facebook.com).
   2. Copie o ID do Pixel (só números, ex.: 1234567890123456).
   3. Cole abaixo em PIXEL_ID, no lugar de "SEU_PIXEL_ID".
   Enquanto o ID não for colocado, o pixel fica DESLIGADO (não dá erro).

   Para disparar um evento num clique, coloque no botão/link:
     data-fbevent="InitiateCheckout"   (ou "Lead", "Contact", "ViewContent"...)
   ========================================================================== */
(function () {
  var PIXEL_ID = "SEU_PIXEL_ID"; // <-- COLE AQUI O ID DO PIXEL

  // helper global (fica como "no-op" enquanto o pixel estiver desligado)
  window.mlTrack = function () {};

  // só liga se o ID for válido (apenas números)
  if (!PIXEL_ID || PIXEL_ID === "SEU_PIXEL_ID" || !/^\d{6,}$/.test(PIXEL_ID)) return;

  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');

  window.mlTrack = function (event, params) {
    try { fbq('track', event, params || {}); } catch (e) {}
  };

  // dispara eventos automaticamente em qualquer elemento com data-fbevent
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-fbevent]');
    if (el) window.mlTrack(el.getAttribute('data-fbevent'));
  });
})();
