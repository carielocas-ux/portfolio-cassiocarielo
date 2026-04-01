import type { Projeto } from "../types/projeto";

export const projetos: Projeto[] = [
  {
    titulo: "Sistema de Bolão da Copa",
    descricao:
      "Aplicação web para gerenciamento de apostas, jogos, classificação, ranking e regras de pontuação, com foco em experiência do usuário e organização de dados.",
    techs: ["React", "TypeScript", "Fastify", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    titulo: "Dashboard Administrativo",
    descricao:
      "Interface administrativa com foco em tabelas, filtros, organização visual e exibição de dados para sistemas corporativos.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    titulo: "API para Regras de Negócio",
    descricao:
      "Back-end estruturado para cadastro, consulta, atualização e processamento de dados com validações e integração com banco relacional.",
    techs: ["Node.js", "Fastify", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];
