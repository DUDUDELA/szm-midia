# Site SZM Mídia

Site institucional completo da SZM Mídia — Método PIV® (Posicionar · Impactar · Vender).

## Estrutura

```
szm-site/
├── index.html      → todo o conteúdo do site (uma página, seções ancoradas)
├── css/style.css   → identidade visual (bordô/vinho, preto, branco) e responsivo
├── js/main.js      → menu mobile, animações de scroll e placeholders de imagem
└── img/            → coloque aqui as fotos reais (veja abaixo)
```

## Como abrir no VS Code

1. Extraia a pasta `szm-site` e abra-a no VS Code (`File > Open Folder`).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito no `index.html` → **Open with Live Server**.
4. O site abre no navegador e atualiza sozinho a cada edição.

Sem Live Server, basta dar dois cliques no `index.html` — funciona igual.

## Imagens

O site funciona em três camadas, nesta ordem:

1. **Arquivo local** em `img/` (recomendado)
2. **URL do site publicado** na Lovable (fallback automático — funciona online)
3. **Placeholder** com iniciais na cor da marca (se nada existir)

Para baixar as imagens públicas do site publicado, rode no terminal do VS Code:

- **Windows:** `powershell -ExecutionPolicy Bypass -File .\baixar-imagens.ps1`
- **Mac/Linux:** `bash baixar-imagens.sh`

Isso salva em `img/`: `szm-logo.png` (logo), `szm-ceo.jpg` (foto do fundador,
seção Quem Somos) e `hero-szm.jpg` (imagem do topo).

Fotos que NÃO estão no site publicado (adicione manualmente em `img/`):

- `case-humberto.jpg` — foto do case Humberto Filho
- `regi.jpg`, `otavio.jpg`, `eduardo.jpg`, `felipe.jpg` — fotos do time

## Quer o código-fonte original da Lovable?

O site na Lovable é um app React. Para a cópia exata do código:
dentro do projeto na Lovable, clique em **GitHub → Connect** e conecte sua
conta. A Lovable cria um repositório com todo o código. Depois, no VS Code:

```
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
```

## Onde editar cada coisa

- **Cores da marca:** variáveis no topo do `css/style.css` (`--vinho`, `--preto`...)
- **Textos:** direto no `index.html` — cada seção tem um comentário `<!-- ===== -->`
- **WhatsApp / contatos:** busque por `wa.me/557798084101` e `szmmidia@gmail.com`
- **Planos e pacotes:** seção `id="planos"` no `index.html`

## Publicar

O projeto é 100% estático — pode ser hospedado de graça em Netlify, Vercel,
GitHub Pages ou Cloudflare Pages: basta arrastar a pasta.
