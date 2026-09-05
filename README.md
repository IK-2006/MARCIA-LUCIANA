# Márcia Luciana — Landing page de cursos e produtos

Página estática (HTML + CSS + JavaScript puro, sem dependências) que apresenta o
movimento **Geração Consciente**, de **Márcia Luciana**, e direciona o visitante para
os materiais, cursos, mentoria e formações — além das frentes para escolas e empresas.

Baseada no Guia da Marca (Grupo Power) e no conteúdo real (portfólio, e-book, Método CRESCER):
- **Movimento:** Geração Consciente — educação para a sexualidade, diálogo e prevenção ao abuso
- **Posicionamento:** especialista em sexualidade, educação emocional e prevenção ao abuso sexual
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

Todos os produtos ficam na seção `<!-- MATERIAIS -->` do `index.html`.
Cada produto é um bloco `<article class="card">`. Para cada um, edite:

| O quê            | Onde                                              |
|------------------|---------------------------------------------------|
| Título           | `<h3>...</h3>`                                     |
| Categoria        | atributo `data-cat` **e** o texto de `<p class="card__tag">` |
| Descrição        | `<p class="card__desc">`                           |
| Formato/nota     | `<span class="card__note">` (ex.: "Curso online")  |
| **Link de ação** | `href="#contato"` no botão `<a class="btn ...">`   |

> Hoje **todos os botões de produto apontam para `#contato`** (rolam até o rodapé),
> porque ainda não há links de checkout/venda. Quando tiver, troque o `href="#contato"`
> pelo link real (checkout, formulário ou WhatsApp).

Produtos atuais (na ordem da jornada): curso *Do Silêncio ao Diálogo*, curso *Diálogo Seguro*,
série *Do Automático à Consciência*, formação *Educação que Protege* (escolas) e
mentoria *Lado a Lado com o Futuro*.

Categorias válidas para o filtro (`data-cat`): `curso`, `mentoria`, `escolas`.
Para adicionar um produto, copie um bloco `<article class="card">` inteiro.
Para remover, apague o bloco.

## Sistema visual (v2)

O CSS (`assets/css/styles.css`) é um design system com **tokens** no `:root`:
cores (`--primary` bordô, `--gold`, neutros), tipografia (escala `--fs-*`), espaçamento
(`--s1`…`--s11`, escala 8px), raios (`--r*`), sombras (`--shadow-*`). Para mudar a cor
principal, cor de fundo ou tamanhos, altere os tokens — o site inteiro acompanha.
Componentes reaproveitados: `.btn` (`--primary`/`--secondary`/`--ghost`/`--on-dark`),
`.card`, `.s-head`/`.eyebrow`/`.s-title`, `.section`/`.section--tint`.

## Outros itens a personalizar

- **Redes sociais e contato:** rodapé (`#contato`) — troque os `href="#"`, o e-mail e o WhatsApp reais.
- **Link do livro:** botão "Quero o livro" na seção do livro (`href="#contato"`).
- **Método CRESCER:** seção `#metodo` — os 7 passos (C-R-E-S-C-E-R).
- **Domínio:** atualize `<link rel="canonical">` e `og:url` no `<head>`.
- **Foto de compartilhamento:** `og:image` no `<head>`.

> Observação: por decisão de conteúdo, esta versão **não usa depoimentos nem números
> inventados** — no lugar deles há credenciais reais e frases da própria Márcia. Ao ter
> depoimentos reais, dá para reintroduzir uma seção de depoimentos.

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
