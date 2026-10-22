# Alvorada

##Integrantes

- Gabriel Medeiros Nascimento
- Pedro Henrique Papuci de Carlos

## Sobre o produto

Alvorada é um aplicativo fictício de plano de leitura bíblica em grupo, pensado para células, ministérios, famílias e pequenos grupos de igreja. A proposta é ler a Bíblia junto com a comunidade, um trecho por dia, com anotações compartilhadas e lembretes no horário escolhido por cada pessoa.

O público são jovens e adultos que participam de grupos de igreja, mas o produto também serve para quem quer ler com amigos ou com a família. O tom da página é acolhedor e voltado ao estudo, sem proselitismo e sem comparar denominações.

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.

## Arquitetura: Feature-Sliced Design (FSD)

```
src/
├── app/        # entrada da aplicação e estilos globais (tokens.css, reset.css)
├── pages/      # landing
├── widgets/    # header, hero, benefits, how-it-works, testimonials, pricing, faq, footer
├── features/   # join-waitlist, toggle-billing, faq-accordion
├── entities/   # benefit, testimonial, plan, faq-item (dados mockados e cards)
└── shared/     # ui (Button, Input, Modal, Container) e lib (scrollToSection)
```

Regras seguidas:

1. Uma camada só importa das camadas abaixo dela (`pages` → `widgets` → `features` → `entities` → `shared`).
2. Cada slice expõe uma API pública no `index.js`, e ninguém importa arquivos internos de outro slice.
3. Slices da mesma camada não se importam entre si.
4. Cada componente tem o seu próprio arquivo `*.module.css` (CSS Modules).

Como as seções da página foram distribuídas:

- **widgets:** cada seção da página (Hero, Benefícios, Como funciona, Depoimentos, Planos, FAQ, Header e Footer).
- **features:** ações do usuário, como entrar na lista de espera, alternar plano mensal/anual e abrir/fechar as perguntas do FAQ.
- **entities:** os dados mockados (benefícios, depoimentos, planos, perguntas) e os cards que os exibem.
- **shared:** componentes sem regra de negócio (botão, campo de texto, modal, contêiner) e a função de rolagem suave.

## CTAs

- **Principal:** formulário de lista de espera com validação de nome e e-mail e modal de confirmação (`features/join-waitlist`). Nada é enviado nem armazenado.
- **Secundários:** botão "Ver como funciona", botões dos planos e botão do cabeçalho, que rolam até a seção correspondente.

## Jornada de construção

### Ideia inicial

O tema sorteado foi **Bíblia e Igreja**. Como o enunciado pede para evitar temas sensíveis, a primeira preocupação foi escolher um produto que fosse uma ferramenta de estudo e de comunidade, e não algo que defendesse uma crença ou comparasse denominações.

A ideia que surgiu foi um plano de leitura bíblica em grupo, porque ela resolve um problema simples e real: cada pessoa de um grupo lê em um dia diferente e a conversa na reunião perde força. A partir disso nasceu o nome **Alvorada**, que remete ao nascer do sol e a um novo começo de leitura, e define a identidade visual (azul-noite e dourado).

A ideia foi proposta pela IA a partir do tema. A decisão de seguir com ela, o nome e o formato de produto (aplicativo com planos de preço) foram aceitos por nós. Outras direções possíveis dentro do tema eram um mural de avisos para igrejas ou um quiz bíblico, mas foram descartadas por serem menos adequadas a uma landing page com preço, benefícios e prova social.

### Pesquisa e referências

A referência foi o formato de landing pages de aplicativos de assinatura: hero com chamada principal, benefícios, passo a passo, depoimentos, planos e FAQ. Também foram consideradas as ideias de aplicativos de plano de leitura bíblica, como lembrete diário e acompanhamento de progresso, que serviram de base para os benefícios do Alvorada.

Para a parte técnica, a referência foi o material das aulas sobre FSD, usado para decidir em qual camada cada parte da página deveria ficar.

### Ferramentas utilizadas

- React
- Vite
- CSS Modules
- Editor de código (VS Code)
- Google Fonts (Lora e Inter)
- Opencode

Não foram usadas imagens externas: a representação do produto no hero é feita apenas com HTML e CSS, simulando a tela do aplicativo.

### Uso de IA

**Claude (Anthropic)** foi o modelo utilizado, para:

- sugerir o produto e o nome (Alvorada);
- propor paleta de cores, tipografia e conteúdo mockado (benefícios, planos, FAQ, depoimentos);
- planejar a estrutura de pastas em FSD, indicando em qual camada cada parte ficaria;
- gerar o código inicial do projeto (Vite, React e CSS Modules) e este README.

Por que Claude: foi o modelo que nos permitiu pedir o planejamento primeiro e só depois a geração do projeto completo, mantendo as decisões em etapas.

**O que foi mantido:** a ideia do Alvorada, a paleta azul-noite com dourado, as fontes Lora e Inter, a estrutura FSD e o CTA de lista de espera com modal.

**O que foi alterado:** o plano inicial previa uma tabela de seções por camada, e na geração do código algumas partes mudaram de lugar. O formulário da lista de espera ficou dentro do Hero, e os botões dos planos rolam até ele em vez de abrir outro formulário. O cartão de depoimento e o cartão de plano ficaram em `entities/`, e os botões que os acompanham são passados pelos widgets.

**O que foi descartado:** a ideia de usar imagens geradas ou fotos. Optamos por representar o produto em CSS para evitar problemas de direitos de imagem e manter a página leve.

**Limitações:** o código gerado não foi executado pela IA no ambiente em que foi criado, então a primeira execução local serviu para conferir e corrigir eventuais problemas.

### Evolução da solução

- **Produto:** do tema genérico "Bíblia e Igreja" para um aplicativo de leitura em grupo, com público e proposta definidos.
- **Identidade visual:** definida logo no planejamento (azul-noite, dourado e fundo creme) e mantida até a versão final. O dourado remete ao nascer do sol do nome.
- **CTA:** o plano inicial já previa lista de espera com modal. Na versão final, o formulário valida os campos e o modal confirma o cadastro, deixando claro que é um projeto fictício.
- **Organização da página:** a ordem final é Hero, Benefícios, Como funciona (fundo escuro), Depoimentos, Planos e FAQ, alternando fundos para separar as seções.
- **Preços:** os planos Individual (grátis), Grupo e Comunidade ganharam um alternador mensal/anual com desconto.
- **Decisões contra a IA:** evitamos imagens externas e mantivemos o texto dos depoimentos e do FAQ com tom neutro, sem citar denominações.

### Resultado final

O resultado atende ao que o enunciado pede: identidade visual, proposta do produto, hero, benefícios, representação do produto, como funciona, prova social, preços, FAQ e CTA funcional, tudo organizado em FSD com CSS Modules e dados mockados.

Pontos fortes: arquitetura clara, componentes pequenos e reutilizáveis, boa acessibilidade básica (foco visível, rótulos nos campos, `aria-expanded` no FAQ) e layout responsivo.

Com mais tempo, faríamos:

- ilustrações próprias em vez da prévia em CSS;
- mais telas do aplicativo no hero (por exemplo, o painel do grupo);
- animações pontuais, como o progresso da semana de leitura;
- testes dos componentes e do hook `useWaitlist`.
