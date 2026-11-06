import type { ImageMetadata } from "astro";
import appLeituraCapa from "@/images/projects/app-leitura-capa.png";
import appLeituraInicio from "@/images/projects/app-leitura-inicio.png";
import appLeituraDetalhe from "@/images/projects/app-leitura-detalhe.png";
import appLeituraEstatisticas from "@/images/projects/app-leitura-estatisticas.png";
import monitoriaMinicurso from "@/images/projects/monitoria-minicurso-figma.png";
import monitoriaSlideCapa from "@/images/projects/monitoria-slide-capa.png";
import alentoCapa from "@/images/projects/alento/capa.webp";
import alentoLogo from "@/images/projects/alento/logo.webp";
import alentoSistemaVisual from "@/images/projects/alento/sistema-visual.webp";
import alentoVisita from "@/images/projects/alento/visita.webp";
import alentoFormulario from "@/images/projects/alento/formulario.webp";
import alentoMobile from "@/images/projects/alento/mobile.webp";
import alentoRodape from "@/images/projects/alento/rodape.webp";
import bestiarioCapa from "@/images/projects/bestiario/capa.webp";
import bestiarioProposta from "@/images/projects/bestiario/proposta.webp";
import bestiarioMarca from "@/images/projects/bestiario/marca.webp";
import bestiarioSistemaVisual from "@/images/projects/bestiario/sistema-visual.webp";
import bestiarioCladograma from "@/images/projects/bestiario/cladograma.webp";
import bestiarioClado from "@/images/projects/bestiario/clado.webp";
import bestiarioFicha from "@/images/projects/bestiario/ficha.webp";
import bestiarioFormulario from "@/images/projects/bestiario/formulario.webp";
import bestiarioMobile from "@/images/projects/bestiario/mobile.webp";
import bestiarioFechamento from "@/images/projects/bestiario/fechamento.webp";

export type CaseDetailBlock = {
  heading: string;
  text: string;
  aside: string;
};

export type CaseDetailMeta = {
  label: string;
  value: string;
};

export type CaseMedia =
  | { type: "image"; src: ImageMetadata; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

/** Seção de estudo de caso: texto em cima e mídia inteira, sem recorte, embaixo. */
export type CaseSection = {
  label: string;
  heading: string;
  text: string;
  aside?: string;
  media: CaseMedia[];
};

export type CaseDetail = {
  summary: string;
  meta: CaseDetailMeta[];
  blocks?: CaseDetailBlock[];
  /** Com `sections`, a página vira um estudo de caso e a capa fica só no card. */
  sections?: CaseSection[];
};

export type PortfolioCase = {
  slug: string;
  year: string;
  title: string;
  organization?: string;
  description: string;
  category: string;
  skills?: string[];
  /** Itens com título maior. */
  featured?: boolean;
  /** Imagem de capa (lista e página do case). Sem imagem, nada é exibido em produção. */
  image?: ImageMetadata;
  imageAlt?: string;
  /** Imagens dos blocos da página do case. */
  blockImages?: {
    context?: ImageMetadata;
    process?: ImageMetadata;
    result?: ImageMetadata;
    /** Com uma segunda imagem, o bloco 2 mostra as duas lado a lado, abaixo do texto. */
    processSecondary?: ImageMetadata;
    processAlt?: string;
    processSecondaryAlt?: string;
    /** Ponto de corte da segunda imagem. */
    processSecondaryPosition?: string;
  };
  /** Link externo, para itens sem página própria. */
  link?: { href: string; label: string };
  /** Só itens com `detail` ganham página própria. */
  detail?: CaseDetail;
  /** Rótulo dos blocos da página do case ("Parte 01", "Tela 01"...). */
  blockLabel?: string;
};

export type SkillItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
};

export type CompactExperience = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export type EducationItem = {
  period: string;
  title: string;
  description: string;
  category: string;
};

export const skillItems: SkillItem[] = [
  {
    category: "Criação e design",
    title: "Canva",
    description:
      "Minha ferramenta para criar materiais gráficos, apresentações e peças de comunicação digital: compor, testar layouts e organizar a informação até a mensagem ficar clara.",
    tags: [
      "Materiais gráficos",
      "Composição visual",
      "Apresentações",
      "Layouts",
      "Comunicação digital",
    ],
  },
  {
    category: "Criação e design",
    title: "Figma",
    description:
      "Onde transformo ideias em wireframes, protótipos e interfaces. Foi a ferramenta central da monitoria de Design de Interação, onde ministrei um minicurso introdutório, e do app de leitura que está em Projetos.",
    tags: [
      "Wireframes",
      "Prototipação",
      "Design de interfaces",
      "UX/UI",
      "Design de Interação",
    ],
  },
  {
    category: "Criação e design",
    title: "CapCut",
    description:
      "Editor de vídeo com o qual já tive contato, para quando a comunicação pede imagem em movimento.",
    tags: ["Edição de vídeo"],
  },
  {
    category: "Inteligência artificial e automação",
    title: "Claude",
    description:
      "Uso o Claude, da Anthropic, para organizar ideias, estruturar instruções e prompts e otimizar fluxos de trabalho. Também exploro a criação de agentes de IA e a automação de tarefas, como apoio ao trabalho criativo.",
    tags: [
      "Agentes de IA",
      "Automação",
      "Prompts",
      "Organização de ideias",
      "Produtividade",
    ],
  },
  {
    category: "Comunicação e relacionamento",
    title: "Ouvir antes de propor",
    description:
      "Os anos de atendimento ao público e a experiência comercial na Proton me ensinaram a entender o que a pessoa do outro lado precisa antes de sugerir qualquer solução.",
    tags: [
      "Escuta ativa",
      "Empatia",
      "Atendimento ao cliente",
      "Prospecção comercial",
      "Levantamento de necessidades",
      "Trabalho em equipe",
      "Organização",
      "Proatividade",
      "Adaptabilidade",
      "Aprendizado contínuo",
      "Inglês intermediário",
    ],
  },
  {
    category: "Tecnologia e ferramentas digitais",
    title: "Base técnica",
    description:
      "A formação em sistemas e o estágio em desenvolvimento mobile me dão familiaridade com produtos digitais e ajudam a entender como uma ideia vira site, app ou landing page.",
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "Git e GitHub",
      "Trello",
      "Metodologias ágeis",
      "Windows e Linux",
    ],
  },
];

/** Da mais recente para a mais antiga. */
export const workItems: PortfolioCase[] = [
  {
    slug: "dinni-solucoes",
    year: "2026",
    title: "Estagiária em Desenvolvimento Mobile",
    organization: "Dinni Soluções em Sistemas",
    description:
      "Desenvolvi e mantive interfaces de aplicações mobile, implementei funcionalidades, corrigi bugs e validei entregas, em equipe, com Git e metodologias ágeis.",
    category: "Estágio",
    skills: ["TypeScript", "React", "Consulta em banco de dados", "Metodologias ágeis", "Git e GitHub"],
    featured: true,
  },
  {
    slug: "monitoria-design-de-interacao",
    year: "2026",
    title: "Monitora de Design de Interação",
    organization: "UniViçosa",
    description:
      "Apoiei estudantes em projetos de UX/UI, planejei e ministrei um minicurso introdutório de Figma, criei materiais didáticos e exercícios práticos e orientei a criação de wireframes e protótipos interativos.",
    category: "Monitoria",
    skills: ["Figma", "UX/UI", "Wireframes", "Protótipos", "Didática"],
    featured: true,
    blockImages: {
      process: monitoriaSlideCapa,
      processAlt:
        "Capa do slide usado no minicurso: “Introdução ao Figma: Criação de Telas e Prototipação”.",
      processSecondary: monitoriaMinicurso,
      processSecondaryPosition: "object-[50%_32%]",
      processSecondaryAlt:
        "Minicurso de Figma na UniViçosa: a monitora sorri ao lado da projeção do slide “Introdução ao Figma: Criação de Telas e Prototipação”.",
    },
    detail: {
      summary:
        "Na monitoria da disciplina de Design de Interação, acompanhei estudantes no desenvolvimento de projetos centrados no usuário, do wireframe ao protótipo interativo.",
      meta: [
        { label: "Papel", value: "Monitora da disciplina" },
        { label: "Instituição", value: "Centro Universitário de Viçosa (UniViçosa)" },
        { label: "Ferramentas", value: "Figma, wireframes e protótipos interativos" },
      ],
      blocks: [
        {
          heading: "Apoio a projetos de UX/UI",
          text: "Acompanhei estudantes durante o desenvolvimento dos projetos da disciplina, orientando a criação de wireframes e protótipos interativos com foco em quem usaria cada solução.",
          aside: "Projetos centrados no usuário, do primeiro rascunho ao protótipo.",
        },
        {
          heading: "Minicurso de Figma",
          text: "Planejei e ministrei um minicurso introdutório de Figma e criei os materiais didáticos e exercícios práticos usados no apoio aos estudantes.",
          aside: "Planejamento, materiais e exercícios práticos.",
        },
        {
          heading: "O que levo dessa experiência",
          text: "Compreender quem está do outro lado, organizar informações e tornar uma ideia visível: o que pratiquei ensinando design de interação é o mesmo raciocínio de uma boa peça de comunicação.",
          aside: "Visão de usuário, organização e clareza ao comunicar ideias.",
        },
      ],
    },
  },
  {
    slug: "proton-empresa-junior",
    year: "2025",
    title: "Gerente de Vendas",
    organization: "Proton – Empresa Júnior",
    description:
      "Fiz a prospecção e a qualificação de clientes, conduzi reuniões de alinhamento, levantei necessidades e participei da prototipação dos projetos. Foi meu contato direto com a relação entre empresa e cliente.",
    category: "Empresa júnior",
    skills: ["Prospecção", "Reuniões com clientes", "Levantamento de necessidades", "Prototipação"],
    featured: true,
  },
];

export const compactWorkItems: CompactExperience[] = [
  {
    year: "2018 — Atual",
    title: "Recepcionista",
    organization: "Thiferer Hostel",
    description:
      "Atendimento aos hóspedes, check-ins e suporte durante a estadia, além de apoio à gestão e à organização interna.",
  },
  {
    year: "2025",
    title: "Bartender (freelancer)",
    organization: "Kadu Barman",
    description: "Preparo e serviço de drinks em eventos sociais e corporativos.",
  },
  {
    year: "2024 — 2025",
    title: "Aparadora de Buffet (freelancer)",
    organization: "Buffet Pathernon",
    description: "Organização de alimentos em eventos e suporte à equipe durante o serviço.",
  },
  {
    year: "2024",
    title: "Garçonete",
    organization: "Restaurante Primitivo",
    description: "Atendimento ao cliente.",
  },
];

/**
 * Para incluir um novo trabalho (peças do Canva, por exemplo): salve a imagem em
 * src/images/projects, importe-a no topo deste arquivo e adicione um item aqui.
 * `image`, `detail` e `link` são opcionais; a seção se adapta ao que existir.
 */
export const projectItems: PortfolioCase[] = [
  {
    slug: "alento",
    year: "2026",
    title: "Alento",
    description:
      "Landing page conceitual de um spa urbano fictício, do naming ao front-end. A palavra quer dizer fôlego, e a respiração virou a linguagem visual do site.",
    category: "Projeto autoral",
    skills: ["Naming", "Identidade visual", "Direção de arte", "Copy", "React"],
    image: alentoCapa,
    imageAlt:
      "Página inicial do Alento: o título “Respire fundo. A gente cuida do resto.” ao lado de uma foto de banheira recortada em círculo.",
    detail: {
      summary:
        "Landing page conceitual de um spa urbano fictício. Alento quer dizer fôlego, e o projeto parte dessa palavra para transformar a respiração em linguagem visual.",
      meta: [
        { label: "Participação", value: "Naming, marca, direção de arte, copy e front-end" },
        { label: "Tecnologias", value: "React, Vite e CSS" },
        { label: "Situação", value: "Marca fictícia, criada como projeto de portfólio" },
      ],
      sections: [
        {
          label: "Conceito",
          heading: "A respiração como linguagem",
          text: "Muito espaço em branco, uma forma só, o círculo, uma cor forte usada com economia e movimentos lentos. No início da página, a foto é um círculo que respira devagar e se abre até ocupar a tela conforme a rolagem, como quem enche o pulmão.",
          aside: "Nome, marca, texto e código partem da mesma ideia.",
          media: [
            {
              type: "video",
              src: "/media/alento/abertura.mp4",
              poster: "/media/alento/abertura.webp",
              alt: "Gravação da página: com a rolagem, o círculo com a foto da banheira se abre até ocupar a tela.",
            },
          ],
        },
        {
          label: "Marca",
          heading: "Um “o” que enche como um pulmão",
          text: "O logo é um wordmark em Spectral ExtraLight, vetorizado. O “o” final vira um crescente coral, que exagera o contraste de traço da própria serifa e funciona a partir de 16 px, como favicon.",
          aside: "Dos caminhos testados, o disco lia como “alent” e um ponto, e o miolo pequeno virou um olho.",
          media: [
            {
              type: "image",
              src: alentoLogo,
              alt: "Estudo do logo Alento: versão final ampliada, quatro etapas de construção do “o”, testes de tamanho e aplicação em quatro fundos.",
            },
          ],
        },
        {
          label: "Sistema visual",
          heading: "Uma cor forte, usada com economia",
          text: "O papel domina a página, e o coral aparece só como acento. Spectral fica nos títulos e Hanken Grotesk nos textos. Texto sobre coral é sempre tinta escura, porque papel sobre coral não atinge o contraste mínimo.",
          aside: "Tinta sobre coral: 5,1:1. Papel sobre coral: 3,1:1, só para decoração.",
          media: [
            {
              type: "image",
              src: alentoSistemaVisual,
              alt: "Sistema visual do Alento: proporção de uso das cores, testes de contraste, escala tipográfica, a forma do círculo e os estados do botão.",
            },
          ],
        },
        {
          label: "Interação",
          heading: "Um minuto de pausa",
          text: "Um exercício guiado, com seis ciclos de 4 segundos para dentro e 6 para fora, feito na própria página. Quem visita sente a proposta antes de ler sobre ela.",
          aside: "Seis ciclos de 10 segundos somam exatamente um minuto.",
          media: [
            {
              type: "video",
              src: "/media/alento/respiracao.mp4",
              poster: "/media/alento/respiracao.webp",
              alt: "Gravação do exercício de respiração: um círculo coral cresce e diminui com as palavras Inspire e Expire.",
            },
          ],
        },
        {
          label: "Conteúdo",
          heading: "Tratamentos como cardápio",
          text: "Os tratamentos formam uma lista com duração e preço à vista, sem cards. “Reservar” já preenche o formulário, o que encurta o caminho até o agendamento.",
          media: [
            {
              type: "video",
              src: "/media/alento/reservar.mp4",
              poster: "/media/alento/reservar.webp",
              alt: "Gravação da página: na lista de tratamentos, com duração e preço, o clique em Reservar leva ao formulário com o tratamento já selecionado.",
            },
          ],
        },
        {
          label: "Informação",
          heading: "O tempo em escala",
          text: "A barra da visita é proporcional aos minutos reais, 10, 60 e 20, e mostra de relance que o tratamento vem com folga.",
          media: [
            {
              type: "image",
              src: alentoVisita,
              alt: "Seção A visita: barra dividida em chegar, 10 minutos, tratamento, 60 minutos, e não fazer nada, 20 minutos.",
            },
          ],
        },
        {
          label: "Formulário",
          heading: "Erros que ajudam a corrigir",
          text: "Rótulos visíveis, máscara de telefone, erros junto ao campo e foco no primeiro erro. O formulário é demonstrativo e não envia dados.",
          media: [
            {
              type: "image",
              src: alentoFormulario,
              alt: "Formulário de agendamento com mensagens de erro logo abaixo de cada campo e foco no primeiro campo inválido.",
            },
          ],
        },
        {
          label: "Mobile e acessibilidade",
          heading: "Do celular à tela grande",
          text: "Layout testado de 375 a 1920 px, com contraste AA, foco visível, link para pular ao conteúdo e alvos de toque de pelo menos 44 px nos controles principais. Para quem prefere menos movimento, o início da página fica parado e as transições são desligadas.",
          media: [
            {
              type: "image",
              src: alentoMobile,
              alt: "Quatro telas do Alento no celular: início, tratamentos, exercício de respiração e formulário.",
            },
          ],
        },
        {
          label: "Créditos",
          heading: "Uma marca fictícia",
          text: "Preços, horários e depoimentos são ilustrativos. As fotos são do Unsplash, recortadas e com a cor ajustada para formar uma série, e as fontes usam a SIL Open Font License.",
          media: [
            {
              type: "image",
              src: alentoRodape,
              alt: "Rodapé do site, com o logo Alento em tamanho grande sobre fundo rosa claro.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "bestiario-antigo",
    year: "2025 — 2026",
    title: "Bestiário Antigo",
    description:
      "Site em PHP que documenta os dinossauros e outros saurópsidos fósseis do Brasil. Em vez de uma lista, o acervo é um cladograma interativo: navegar pelas espécies já mostra como os grupos se relacionam.",
    category: "Projeto autoral",
    skills: ["PHP", "CodeIgniter 4", "MySQL", "Identidade visual", "UX/UI"],
    image: bestiarioCapa,
    imageAlt:
      "Página inicial do Bestiário Antigo: logo com o esqueleto do Irritator sobre fundo verde e o título “Explore o registro dos antigos habitantes do Brasil.”",
    detail: {
      summary:
        "Repositório digital dos saurópsidos fósseis do Brasil: sua diversidade, suas linhagens e suas eras geológicas. Comecei o projeto em 2025 e, em 2026, redesenhei o site e tornei o cladograma interativo.",
      meta: [
        { label: "Participação", value: "Marca, design e desenvolvimento" },
        { label: "Tecnologias", value: "PHP, CodeIgniter 4, MySQL, HTML, CSS e JavaScript" },
        { label: "Situação", value: "Projeto autoral, ainda não publicado" },
      ],
      sections: [
        {
          label: "Conceito",
          heading: "Uma árvore no lugar de uma lista",
          text: "Cada espécie fica no lugar que ocupa na evolução, então navegar por elas já ensina como os grupos se relacionam. O menu resume a proposta em três ações: chegar, explorar e registrar.",
          media: [
            {
              type: "image",
              src: bestiarioProposta,
              alt: "Prancha da proposta: a página inicial do site e as três ações do menu, Início, Cladograma e Adicionar.",
            },
          ],
        },
        {
          label: "Marca",
          heading: "Um ramo como forma",
          text: "Bestiário é um livro de animais, e este guarda os que viveram aqui antes de nós. A logo traz o esqueleto do Irritator, predador do Cretáceo do Ceará. O resto da identidade parte dos verdes dela e de uma forma só: o ramo do cladograma.",
          aside: "Linha, ramo, nó e linhagem: o nó fica cheio com espécies e vazio sem registro.",
          media: [
            {
              type: "image",
              src: bestiarioMarca,
              alt: "Prancha da marca: logo e nome Bestiário Antigo, construção do ramo em quatro etapas, testes de tamanho e aplicação em quatro fundos.",
            },
          ],
        },
        {
          label: "Sistema visual",
          heading: "Verdes da logo, um vermelho reservado",
          text: "Papel e superfície dominam a página, com folha, mata e tinta em volta. O vermelho aparece só em exclusão e erro. Fraunces fica nos títulos e nomes científicos, e Inter nos textos e na interface.",
          aside: "Papel sobre mata: 8,9:1. Papel sobre folha: 1,7:1, só para decoração.",
          media: [
            {
              type: "image",
              src: bestiarioSistemaVisual,
              alt: "Prancha do sistema visual: proporção de uso das cores, testes de contraste, escala tipográfica, a forma do ramo e os estados dos botões.",
            },
          ],
        },
        {
          label: "Interação",
          heading: "O cladograma como tela principal",
          text: "A árvore desce da raiz em linhas, sem rolagem lateral, mesmo com 28 grupos finais em uma tela de celular. Os ramos abrem e fecham, a busca filtra enquanto se digita e ignora acentos, e o caminho até a raiz fica em destaque com mouse, toque ou teclado.",
          aside: "Sem JavaScript, a árvore aparece aberta e os links continuam funcionando.",
          media: [
            {
              type: "image",
              src: bestiarioCladograma,
              alt: "Prancha do cladograma: a árvore aberta até Terópodos, com busca, linhagem em destaque e contagem de espécies, ao lado da lista de interações.",
            },
          ],
        },
        {
          label: "Acervo",
          heading: "Do grupo à ficha da espécie",
          text: "Cada clado lista suas espécies com miniatura, dieta e intervalo geológico. A ficha reúne restauração em vida, descrição, datação, porte, habitat e ocorrência, com a linhagem sempre à vista.",
          media: [
            {
              type: "image",
              src: bestiarioClado,
              alt: "Página do clado Terópodos, com três espécies listadas com miniatura, dieta e intervalo geológico.",
            },
            {
              type: "image",
              src: bestiarioFicha,
              alt: "Ficha do Irritator challengeri, com restauração em vida, descrição e dados como datação, porte e habitat.",
            },
          ],
        },
        {
          label: "Formulário",
          heading: "Uma coluna, quatro blocos",
          text: "Quem registra uma espécie responde na ordem em que pensa nela: o que é, como era, onde vivia e quando. O mesmo formulário serve para criar e editar, o clado já vem marcado e só o que pode ficar em branco leva a marca de opcional.",
          media: [
            {
              type: "image",
              src: bestiarioFormulario,
              alt: "Prancha do formulário: as decisões de preenchimento ao lado da tela Adicionar espécie.",
            },
          ],
        },
        {
          label: "Mobile e acessibilidade",
          heading: "Pensado primeiro para o celular",
          text: "Coluna única, modo escuro automático conforme o sistema, alvos de toque de 44 px, navegação por teclado e contraste medido.",
          media: [
            {
              type: "image",
              src: bestiarioMobile,
              alt: "Quatro telas do Bestiário Antigo no celular: início, cladograma, clado Terópodos e ficha de espécie em modo escuro.",
            },
          ],
        },
        {
          label: "Tecnologia",
          heading: "PHP com CodeIgniter 4",
          text: "O site tem cadastro, edição e exclusão de espécies com envio de imagem, sobre MySQL ou MariaDB. No front-end, HTML, CSS e JavaScript, sem framework. A hierarquia do cladograma fica em um único lugar e alimenta tanto a árvore quanto as migalhas de linhagem.",
          aside: "Antes de publicar, ainda preciso adicionar login, exclusão por POST com proteção CSRF e migrations.",
          media: [],
        },
        {
          label: "Créditos",
          heading: "Restaurações e referências",
          text: "As espécies das telas são exemplos ilustrativos. Restaurações via Wikimedia Commons: Fred Wierum (CC BY 3.0), Mario Lanzas e FunkMonk (CC BY-SA 4.0). O crânio da logo foi traçado sobre a reconstrução de Marcos A. F. Sales e Cesar L. Schultz (CC BY 4.0).",
          media: [
            {
              type: "image",
              src: bestiarioFechamento,
              alt: "Rodapé do site, com a palavra Bestiário em tamanho grande sobre fundo verde claro.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "app-de-leitura",
    year: "Projeto em pausa",
    title: "App de leitura",
    description:
      "Design de interface de um app para acompanhar leituras: estante pessoal, progresso de cada livro, notas e estatísticas. Criei três telas no Figma.",
    category: "Projeto autoral",
    blockLabel: "Tela",
    skills: ["Figma", "Design de interfaces", "UX/UI"],
    image: appLeituraCapa,
    imageAlt:
      "Três telas do app de leitura no Figma: estante com progresso dos livros, detalhe de um livro e estatísticas de leitura.",
    blockImages: {
      context: appLeituraInicio,
      process: appLeituraDetalhe,
      result: appLeituraEstatisticas,
    },
    detail: {
      summary:
        "Um conceito de aplicativo para quem quer acompanhar o que está lendo. O objetivo foi organizar muitas informações sobre cada leitura em telas simples de consultar.",
      meta: [
        { label: "Participação", value: "Design das telas" },
        { label: "Ferramenta", value: "Figma" },
        { label: "Situação", value: "Projeto autoral, pausado depois das três telas principais" },
      ],
      blocks: [
        {
          heading: "Minha estante",
          text: "A tela inicial reúne a busca por título ou autor, um resumo dos livros lidos no mês e a lista de leituras com barra de progresso. A cor separa o que já foi concluído do que ainda está em andamento.",
          aside: "Uma navegação inferior com três áreas: Início, Estante e Estatísticas.",
        },
        {
          heading: "Detalhe do livro",
          text: "Aqui ficam o progresso em páginas, o tempo total, os dias de leitura e as notas pessoais. A ação principal, registrar a leitura do dia, recebe o botão de maior destaque.",
          aside: "Uma ação principal por tela ajuda a guiar quem usa.",
        },
        {
          heading: "Estatísticas",
          text: "Os dados aparecem em camadas: primeiro um número de destaque, depois um gráfico filtrável por semana, mês ou ano, e por fim cartões com o resumo dos últimos 30 dias.",
          aside: "Hierarquia visual para tornar números fáceis de ler.",
        },
      ],
    },
  },
];

export const educationItems: EducationItem[] = [
  {
    period: "2025 — Atual",
    title: "Análise e Desenvolvimento de Sistemas",
    description:
      "Centro Universitário de Viçosa (UniViçosa). 4º período, com previsão de conclusão em julho de 2027.",
    category: "Graduação",
  },
  {
    period: "2022 — 2024",
    title: "Agronegócio",
    description: "Universidade Federal de Viçosa (UFV).",
    category: "Curso interrompido",
  },
  {
    period: "2019 — 2021",
    title: "Cooperativismo",
    description: "Universidade Federal de Viçosa (UFV).",
    category: "Curso interrompido",
  },
];

export const contactInfo = {
  email: "analvidigal@gmail.com",
  phone: "",
  phoneHref: "",
  location: "",
  github: "https://github.com/analuvidi",
};

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getProjectItem(slug: string) {
  return projectItems.find((item) => item.slug === slug);
}
