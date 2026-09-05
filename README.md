# Márcia Luciana — Landing page de cursos e produtos

Página estática (HTML + CSS + JavaScript puro, sem dependências) que apresenta a
marca **Márcia Luciana** e direciona o visitante para a compra dos cursos, mentorias,
livros e comunidade.

Baseada no Guia da Marca / Estudo de Marca (Grupo Power):
- **Posicionamento:** Especialista em Desenvolvimento das Relações Humanas
- **Paleta:** Bordô `#5b0b1b` · Laranja `#f48b20` · Dourado `#d8b26a` · Creme `#f6e0b2`
- **Tipografia:** Montserrat (base) + Playfair Display (acentos)
- **Tese:** *Conectando famílias. Protegendo gerações. Transformando futuros.*

## Estrutura

```
Marcia-Luciana-Sistema/
├── index.html            # a página inteira
├── assets/
│   ├── css/styles.css    # todo o estilo (design system + seções)
│   ├── js/main.js        # menu, FAQ, filtros e animações
│   └── img/
│       ├── marcia-hero.jpg      # foto do topo
│       ├── marcia-sobre.jpg     # foto da seção "Sobre"
│       ├── ml-monograma.png     # monograma ML (dourado, fundo transparente)
│       └── favicon.png
└── README.md
```

## Como editar os produtos  ⚠️ importante

Todos os cursos/produtos ficam na seção `<!-- CURSOS -->` do `index.html`.
Cada produto é um bloco `<article class="card">`. Para cada um, edite:

| O quê            | Onde                                              |
|------------------|---------------------------------------------------|
| Título           | `<h3>...</h3>`                                     |
| Categoria        | atributo `data-cat` **e** o texto de `card__tag`  |
| Descrição        | `<p class="card__desc">`                           |
| Preço            | `<span class="value">` (e opcional `<span class="old">`) |
| Parcelas         | `<p class="card__installments">`                  |
| **Link de compra** | `href="#SEU-LINK-DE-CHECKOUT"` no botão `<a class="btn">` |

> Troque **todos** os `#SEU-LINK-DE-CHECKOUT` pelo link real do checkout
> (ex.: `https://pay.hotmart.com/XXXXXXX`).

Categorias válidas para o filtro (`data-cat`): `curso`, `mentoria`, `livro`, `comunidade`.
Para adicionar um produto, copie um bloco `<article class="card">` inteiro.
Para remover, apague o bloco.

## Outros itens a personalizar

- **Depoimentos:** seção `#depoimentos` — troque pelos depoimentos reais.
- **Redes sociais e contato:** rodapé — troque os `href="#"` e o e-mail.
- **Números da seção "Sobre":** `+10 anos`, `+5.000 famílias`, etc.
- **Domínio:** atualize `<link rel="canonical">` e `og:url` no `<head>`.
- **Foto de compartilhamento:** `og:image` no `<head>`.

## Rodar localmente

Basta abrir o `index.html` no navegador. Para testar como em produção
(caminhos relativos, etc.), suba um servidor simples:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicar (deploy)

É um site 100% estático — pode ser hospedado de graça em:
- **Netlify** ou **Vercel** (arraste a pasta ou conecte um repositório)
- **GitHub Pages**
- **Cloudflare Pages**

Não precisa de build nem de backend.

## Acessibilidade e boas práticas já incluídas

- HTML semântico, `alt` nas imagens, foco visível, navegação por teclado (menu e FAQ).
- Responsivo (mobile-first) com menu hambúrguer.
- SEO: `title`, `meta description`, Open Graph e dados estruturados (JSON-LD).
- Performance: imagens otimizadas, `lazy loading`, fontes com `preconnect`, JS mínimo com `defer`.
- Respeita `prefers-reduced-motion` (desliga animações para quem prefere).
