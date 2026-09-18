# Contae

Site institucional da Contae, contabilidade e consultoria empresarial em Ituberá, Bahia.

HTML, CSS e JavaScript estáticos. Sem build, sem framework, sem dependência externa em runtime.

```
contae/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
└── README.md
```

Para rodar com servidor local:

```bash
npx --yes serve contae -l 4800
```

## O que mudou nesta versão

A identidade foi preservada: vermelho `#a81527` da marca sobre papel creme e tinta quase preta, com o corte diagonal vermelho no hero e o cartão inclinado.

**Estrutura**
- A pasta `dist/` virou a raiz, no padrão das outras pastas de SITES: `index.html` + `assets/css`, `assets/js`, `assets/img`.
- Removidos o diretório de build antigo (`.openai`) e o CSS/JS soltos dentro de `assets/`.

**Seções novas, exigidas pela skill**
- Depoimentos, em carrossel horizontal
- Onde estamos, com mapa de Ituberá, endereço, horário, telefone e e-mail
- Dúvidas frequentes, com seis perguntas em accordion acessível

**Logo**
- O arquivo original tinha fundo creme chapado, e o CSS compensava isso com `mix-blend-mode: multiply` no hero e `object-fit: cover` no rodapé, que cortava a marca. Agora a logo tem fundo transparente de verdade.
- Geradas três versões a partir do arquivo em alta: `logo-contae.png` (800px), `logo-contae-claro.png` (lettering em branco, para o cabeçalho escuro) e `simbolo-contae.png` (só o caduceu no círculo), que também virou o favicon.
- O cabeçalho perdeu o cartão creme atrás da marca. A logo clara vai direto sobre o hero escuro.

**Outras correções**
- **O hero não usa mais a logo.** Ela aparecia dentro do cartão e ao lado, no cabeçalho, duas vezes na mesma dobra. O cartão agora traz uma foto de atendimento.
- A seção "A Contae" mostrava a logo esticada com `object-fit: cover`, que cortava a marca. Agora traz foto do escritório.
- O site não tinha nenhuma fotografia. Foram adicionadas duas.
- Os links "Solicitar orçamento" dos cards apontavam para a âncora de contato; agora vão direto ao WhatsApp com a mensagem daquele assunto.
- Quatro eyebrows viraram três, dentro do limite da skill.
- Título do hero encurtado para caber em duas linhas no desktop.
- Display trocado de Georgia (fonte de sistema) para EB Garamond, mais próximo do lettering da marca.
- Adicionados: JSON-LD (`AccountingService`) com endereço, horário e contato, meta OG, canonical, `width`/`height` nas imagens, foco visível e `aria-expanded` funcionando no menu.

## Pendências antes de enviar ao cliente

1. **Depoimentos são placeholder.** Os quatro textos são genéricos, sem nome de pessoa. Troque pelos depoimentos reais, com o primeiro nome e o ramo de cada cliente. O trecho está marcado no HTML com `<!-- PLACEHOLDER -->`.
2. **Falta o endereço exato.** Só havia "Ituberá, BA · 45435-000" nos arquivos, sem rua e número. O mapa está centrado na cidade. Mande o endereço completo que eu ajusto o mapa e o JSON-LD, que é o que faz o escritório aparecer na busca local.
3. **Confirme o horário.** "Segunda a sexta, 08h às 18h" veio da versão anterior do site. Vale checar se há intervalo de almoço e se abre no sábado.
4. **CNPJ e registro no CRC.** Escritório de contabilidade costuma exibir o número de registro no conselho. Se tiver, mando para o rodapé, o que ajuda na confiança.
5. **Redes sociais.** Nenhuma apareceu nos arquivos. Se existirem, incluo no rodapé.
6. **Fotos.** São de banco de imagens. Fotos reais do escritório e da equipe deixariam o site bem mais convincente.
7. **Texto do FAQ.** As respostas sobre preço, prazo de abertura e troca de contador foram escritas com margem, porque não havia essa informação nos arquivos. Ajuste conforme a operação real.

## Créditos das imagens

| Arquivo | Fonte |
|---|---|
| `logo-contae.png` e derivadas | Marca do cliente |
| `consultoria.jpg` | Pexels, <https://www.pexels.com/photo/7654437/> |
| `escritorio.jpg` | Pexels, <https://www.pexels.com/photo/7654129/> |

Tipografia: EB Garamond e Inter, via Google Fonts.

## Notas técnicas

- Todos os CTAs usam o mesmo rótulo, "Falar com a Contae", com mensagem pré-preenchida no WhatsApp.
- Acessibilidade: skip link, foco visível, `aria-expanded` no menu, alt em todas as imagens, `prefers-reduced-motion` respeitado.
- Testado em 1280px e 375px, sem scroll horizontal e sem erro de console.
