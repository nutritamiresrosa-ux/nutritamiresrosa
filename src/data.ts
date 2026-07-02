/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Specialization {
  id: string;
  title: string;
  description: string;
  iconName: "Heart" | "Baby" | "Sparkles" | "Apple" | "Brain" | "Activity";
  colorClass: string;
  badge: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  postUrl: string;
}

export const specializations: Specialization[] = [
  {
    id: "tentantes",
    title: "Tentantes",
    badge: "Pré-concepção",
    description: "Preparação nutricional para uma gestação saudável, com a participação ativa dos papais, pois precisamos cuidar da fertilidade de ambos. Foco na otimização mitocondrial, equilíbrio hormonal e ajuste de carências de micronutrientes indispensáveis.",
    iconName: "Sparkles",
    colorClass: "from-amber-500/10 to-pink-500/10 border-amber-200/50 dark:border-amber-900/30",
  },
  {
    id: "gestantes",
    title: "Gestantes",
    badge: "Desenvolvimento",
    description: "Nutrição personalizada trimestre a trimestre para apoiar o crescimento fetal pleno, prevenir intercorrências (diabetes gestacional, pré-eclampsia) e aliviar sintomas clássicos como azia e náuseas.",
    iconName: "Heart",
    colorClass: "from-pink-500/10 to-rose-500/10 border-pink-200/50 dark:border-pink-900/30",
  },
  {
    id: "puerperio",
    title: "Puerpério & Amamentação",
    badge: "Recuperação",
    description: "Suporte intensivo na reabilitação pós-parto e na produção de leite materno de alta qualidade. Ajustes alimentares focados na energia da mãe e no alívio de cólicas ou desconfortos do lactente.",
    iconName: "Baby",
    colorClass: "from-rose-500/10 to-red-500/10 border-rose-200/50 dark:border-rose-900/30",
  },
  {
    id: "introducao",
    title: "Introdução Alimentar",
    badge: "Descobertas",
    description: "Orientação segura para introduzir sólidos pelos métodos BLW, tradicional ou participativo. Como lidar com reflexo de gags, incentivar a autonomia e construir uma excelente relação com os alimentos.",
    iconName: "Apple",
    colorClass: "from-emerald-500/10 to-teal-500/10 border-emerald-200/50 dark:border-emerald-900/30",
  },
  {
    id: "neuro",
    title: "TEA & TDAH",
    badge: "Seletividade",
    description: "Modulação do eixo intestino-cérebro para auxiliar no foco, sono e comportamento. Estratégias especializadas para mitigar a seletividade alimentar extrema e deficiências nutricionais recorrentes.",
    iconName: "Brain",
    colorClass: "from-violet-500/10 to-purple-500/10 border-violet-200/50 dark:border-violet-900/30",
  },
  {
    id: "saude-infantil",
    title: "Saúde Infantil",
    badge: "Crescimento",
    description: "Acompanhamento integral do crescimento físico e cognitivo das crianças. Prevenção e tratamento de diabetes, dislipidemia, alergias e intolerâncias alimentares, além de reforço imunológico.",
    iconName: "Activity",
    colorClass: "from-blue-500/10 to-indigo-500/10 border-blue-200/50 dark:border-blue-900/30",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Agendamento e Triagem",
    description: "Primeiro contato rápido e acolhedor via WhatsApp. Realizamos uma breve triagem para entender o seu momento (tentante, gestante, introdução alimentar) e agendar o melhor horário para você.",
  },
  {
    number: "02",
    title: "Consulta Humanizada",
    description: "Um momento de escuta atenta de 1h30m (online ou presencial). Analisamos a rotina familiar, exames laboratoriais, histórico clínico e comportamento alimentar, definindo objetivos realistas e leves.",
  },
  {
    number: "03",
    title: "Plano & Acompanhamento",
    description: "Você recebe o plano alimentar prático, receitas exclusivas e guias ilustrados de apoio no app. Além disso, conta com suporte contínuo via WhatsApp direto comigo para ajustar detalhes e sanar dúvidas.",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "post1",
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600",
    caption: "🧠 Nutrição no TDAH: Como a alimentação e suplementação individualizadas podem melhorar o foco, comportamento e a qualidade de vida da criança? Descubra o impacto do eixo intestino-cérebro! 🥦",
    likes: "428",
    comments: "56",
    postUrl: "https://www.instagram.com/nutri.tamiresrosa/p/DLItbLKpFhp/",
  },
  {
    id: "post2",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600",
    caption: "🤰 Gestantes podem comer sushi? Esta é uma dúvida clássica de consultório! Entenda quais são os cuidados essenciais com a segurança alimentar e as alternativas seguras para a gestação. 🍣",
    likes: "612",
    comments: "84",
    postUrl: "https://www.instagram.com/nutri.tamiresrosa/p/DaLO1lNkQ_H/",
  },
  {
    id: "post3",
    imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
    caption: "✨ Fertilidade é assunto de casal! Na fase de tentantes, cuidar da alimentação de ambos é crucial para otimizar a saúde dos óvulos e dos espermatozoides. Vamos preparar essa gestação juntos? 💕",
    likes: "489",
    comments: "102",
    postUrl: "https://www.instagram.com/nutri.tamiresrosa/p/DZpqWnOEQiR/",
  },
];

export interface FaqItem {
  id: string;
  category: "consultas" | "especialidades" | "pagamentos";
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: "consultas", name: "Consultas & Atendimento" },
  { id: "especialidades", name: "Especialidades & Fases" },
  { id: "pagamentos", name: "Pagamento & Reembolso" },
] as const;

export const faqItems: FaqItem[] = [
  {
    id: "faq-online",
    category: "consultas",
    question: "Como funciona a consulta online? Tem a mesma eficácia?",
    answer: "Com certeza! A consulta online é realizada por videochamada segura e tem duração média de 1h a 1h30, mantendo o mesmo carinho, profundidade e eficácia da presencial. Analisamos exames laboratoriais, a rotina diária da família e o comportamento alimentar de forma integral. Todo o plano alimentar, receitas e guias de apoio são enviados através de um aplicativo móvel exclusivo, e você conta com suporte contínuo diretamente comigo pelo WhatsApp.",
  },
  {
    id: "faq-consultoria-online",
    category: "consultas",
    question: "O que é e como funciona a Consultoria Online?",
    answer: "A Consultoria Online é um formato dinâmico desenvolvido para quem tem a rotina muito corrida e não dispõe de tempo para uma consulta longa imediata. O processo começa com o envio de um questionário de anamnese detalhado que você preenche no seu ritmo. Com base nas suas respostas, eu analiso todo o cenário, realizamos uma rápida conversa de alinhamento por videochamada (se necessário) e estruturo seu plano de forma super prática, mantendo suporte diário via WhatsApp.",
  },
  {
    id: "faq-diferenca-consulta-consultoria",
    category: "consultas",
    question: "Qual a diferença entre a Consultoria Online e a Consulta Online?",
    answer: "A diferença principal está no tempo e no formato da interação. Na Consultoria Online, você responde a um formulário detalhado no seu próprio ritmo, ideal para quem tem o dia a dia corrido. Já na Consulta Online, fazemos uma consulta por videochamada de 1h a 1h30, onde converso diretamente com você para escutar sua história de forma super acolhedora e aprofundada.",
  },
  {
    id: "faq-suporte",
    category: "consultas",
    question: "Quanto tempo dura o acompanhamento após a consulta?",
    answer: "Você terá suporte contínuo e diário via WhatsApp diretamente comigo por 30 dias corridos após a entrega do seu plano alimentar personalizado. Esse canal serve para tirar dúvidas rápidas, enviar fotos de pratos/rótulos de produtos e fazer pequenos ajustes na dieta conforme a rotina do bebê, da gestante ou da criança.",
  },
  {
    id: "faq-locais",
    category: "consultas",
    question: "Onde ocorrem os atendimentos presenciais?",
    answer: "Os atendimentos presenciais ocorrem em ambientes totalmente climatizados, lúdicos e acolhedores, especialmente preparados para receber gestantes, bebês e crianças. Atendo em duas cidades no Rio Grande do Sul: em Porto Alegre (no Espaço CDI – Bairro São João) e em Charqueadas (na região central).",
  },
  {
    id: "faq-introducao",
    category: "especialidades",
    question: "A partir de qual idade devo agendar a consulta de Introdução Alimentar?",
    answer: "O momento ideal para a consulta de Introdução Alimentar é quando o bebê completa entre 5 meses e 5 meses e meio. Dessa forma, conseguimos planejar tudo com calma, esclarecer mitos e verdades sobre os métodos (BLW, tradicional ou participativo), identificar os sinais de prontidão e organizar a despensa antes do início prático aos 6 meses.",
  },
  {
    id: "faq-seletividade",
    category: "especialidades",
    question: "Como a nutrição ajuda crianças com seletividade alimentar extrema no TEA ou TDAH?",
    answer: "Trabalhamos através da modulação do eixo intestino-cérebro, melhorando a microbiota e corrigindo carências de micronutrientes que afetam o comportamento e o sono. A nível comportamental, usamos estratégias de aproximação sensorial gradual e sistemática (cor, textura, temperatura e formato), eliminando pressões e tornando a refeição um momento de descoberta respeitosa. Para a Terapia Alimentar com crianças, indico o atendimento presencial para garantir a melhor eficácia do processo.",
  },
  {
    id: "faq-tentantes",
    category: "especialidades",
    question: "Sou tentante. Por que é importante o preparo nutricional antes da gravidez?",
    answer: "A saúde do bebê começa a ser desenhada antes mesmo da concepção (epigenética). Um planejamento de 3 a 6 meses otimiza a qualidade dos óvulos e dos espermatozoides do casal, equilibra a produção hormonal, corrige deficiências profundas de minerais e garante níveis excelentes de metilfolato, reduzindo o risco de abortos e malformações.",
  },
  {
    id: "faq-pagamento",
    category: "pagamentos",
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos pagamentos via PIX, transferência bancária (TED) e cartões de crédito (com possibilidade de parcelamento facilitado em até 3x para pacotes de acompanhamento). Os detalhes e dados de faturamento são enviados no momento da confirmação do agendamento.",
  },
  {
    id: "faq-convenios",
    category: "pagamentos",
    question: "Você atende por convênios médicos ou planos de saúde?",
    answer: "Meus atendimentos são exclusivamente particulares, o que me permite realizar consultas longas e humanizadas, prestar suporte diário via WhatsApp e criar estratégias totalmente individualizadas e focadas no desenvolvimento da sua família, sem as limitações e pressões de tempo dos planos de saúde.",
  },
];
