import type { Projeto } from "../types/projeto";

export const projetos: Projeto[] = [
  {
    titulo: "Countries Explorer",
    descricao:
      "Aplicação web para busca e exploração de países utilizando API pública, com filtros por nome e região, interface moderna e experiência responsiva.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/carielocas-ux/countries-explorer",
    // demo: "https://seu-link.vercel.app",
  },
  {
    titulo: "Dashboard Administrativo",
    descricao:
      "Interface administrativa com foco em tabelas, filtros e organização visual de dados, simulando cenários reais de sistemas corporativos.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
  },
  {
    titulo: "API para Regras de Negócio",
    descricao:
      "Back-end estruturado para cadastro, validação e processamento de dados com regras de negócio, integração com banco relacional e arquitetura organizada.",
    techs: ["Node.js", "Fastify", "Prisma", "PostgreSQL"],
    github: "#",
  },
];
