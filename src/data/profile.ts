// Single source of truth for the home page and the CV (ES + EN).
// Keep it in sync with the LinkedIn profile.

export type Lang = 'es' | 'en';

type Localized<T> = Record<Lang, T>;

export interface Role {
  company: string;
  url?: string;
  title: Localized<string>;
  type: Localized<string>;
  location: Localized<string>;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, undefined = present
  summary: Localized<string>;
  bullets: Localized<string[]>;
  stack: string[];
  /** CV only: omit this role (its content is merged into another entry). */
  cvHidden?: boolean;
  /** CV only: extra bullets appended to this role. */
  cvExtra?: Localized<string[]>;
}

export interface CaseStudy {
  id: string;
  title: Localized<string>;
  context: Localized<string>;
  problem: Localized<string>;
  decisions: Localized<string[]>;
  outcome: Localized<string>;
  stack: string[];
}

export const person = {
  name: 'Joan Corona',
  fullName: 'Joan Elias Corona Gómez',
  headline: {
    es: 'Senior Software Engineer · Platform & Full Stack',
    en: 'Senior Software Engineer · Platform & Full Stack',
  },
  thesis: {
    es: 'Hago que otros equipos lleguen a producción más rápido.',
    en: 'I help engineering teams ship to production faster.',
  },
  intro: {
    es: 'Construyo los SDKs, el design system y los pipelines que usan los equipos de producto de Asociación Cibao. Antes, tiendas para comercios de EE. UU. y ERPs a la medida.',
    en: "I build the SDKs, design system and pipelines that Asociación Cibao's product teams use. Before that, storefronts for US merchants and custom ERPs.",
  },
  summary: {
    es: 'Senior Software Engineer con más de 5 años construyendo sistemas en producción: ERPs, e-commerce y plataformas bancarias. Construyo las bases compartidas que usan los equipos de producto de Asociación Cibao: SDKs de integración, un design system en React, pipelines centralizados en Azure DevOps, infraestructura en Azure y microservicios.',
    en: 'Senior Software Engineer with 5+ years building production systems, from ERPs and e-commerce to banking platforms. I build the shared foundations product teams at Asociación Cibao rely on: integration SDKs, a React design system, centralized Azure DevOps pipelines, Azure infrastructure and microservices.',
  },
  location: {
    es: 'Santiago, República Dominicana',
    en: 'Santiago, Dominican Republic',
  },
  availability: {
    es: 'Abierto a roles remotos con equipos internacionales y a proyectos freelance.',
    en: 'Open to remote roles with international teams and freelance projects.',
  },
  email: 'joaneliasc86@gmail.com',
  website: 'jcorona.dev',
  linkedin: 'linkedin.com/in/joancorona',
};

export const experience: Role[] = [
  {
    company: 'Asociación Cibao de Ahorros y Préstamos',
    title: {
      es: 'Senior Software Engineer (Consultor vía Consultec-TI)',
      en: 'Senior Software Engineer (Consultant via Consultec-TI)',
    },
    type: { es: 'Contrato, híbrido', en: 'Contract, hybrid' },
    location: { es: 'Santiago, RD', en: 'Santiago, DR' },
    start: '2025-10',
    summary: {
      es: 'Ingeniería de plataforma y full stack, enfocada en acortar el camino de cada iniciativa a producción.',
      en: 'Platform and full-stack engineering focused on shortening the path from initiative to production.',
    },
    bullets: {
      es: [
        'Desarrollo librerías de integración y SDKs para distintos frameworks, para que los equipos consuman servicios de forma consistente.',
        'Construyo un design system compartido en React con Storybook, usado en apps web (Next.js) y móviles (Expo).',
        'Diseño y mantengo pipelines de CI/CD centralizados en Azure DevOps, compartidos entre equipos.',
        'Administro infraestructura en Azure para servicios internos y de cara al cliente.',
        'Construyo microservicios y herramientas internas con Node.js, NestJS y TypeScript.',
      ],
      en: [
        'Build integration libraries and SDKs for multiple frameworks, so product teams consume services consistently.',
        'Build a shared React design system with Storybook, used across web (Next.js) and mobile (Expo) apps.',
        'Design and maintain centralized CI/CD pipelines in Azure DevOps shared across teams.',
        'Manage Azure cloud infrastructure for internal and customer-facing services.',
        'Develop microservices and internal tools with Node.js, NestJS and TypeScript.',
      ],
    },
    stack: ['NestJS', 'TypeScript', 'React', 'Azure DevOps', 'Azure', 'PostgreSQL'],
  },
  {
    company: 'Your Store Wizards',
    title: {
      es: 'Frontend Developer (vía Minnek Digital Studio)',
      en: 'Frontend Developer (via Minnek Digital Studio)',
    },
    type: { es: 'Contrato, remoto', en: 'Contract, remote' },
    location: { es: 'California, EE. UU.', en: 'California, US' },
    start: '2024-03',
    end: '2025-10',
    summary: {
      es: 'Desarrollo frontend para comercios de EE. UU. en Shopify y BigCommerce.',
      en: 'Frontend development for US merchants on Shopify and BigCommerce.',
    },
    bullets: {
      es: [
        'Construí, extendí y personalicé temas de tiendas, gran parte sobre código legacy.',
        'Implementé búsqueda predictiva, scroll infinito y widgets personalizados.',
        'Desarrollé funcionalidades personalizadas en el checkout según las reglas de negocio de cada comercio.',
      ],
      en: [
        'Built, extended and customized storefront themes, much of it on legacy codebases.',
        'Shipped predictive search, infinite scroll and custom widgets.',
        "Implemented custom checkout functionality tailored to each merchant's business rules.",
      ],
    },
    stack: ['Shopify', 'BigCommerce', 'JavaScript', 'TypeScript', 'SASS'],
    cvExtra: {
      es: ['Para otros clientes del estudio, construí tiendas headless con Next.js y sitios de contenido con WordPress.'],
      en: ['For other studio clients, built headless storefronts with Next.js and content sites with WordPress.'],
    },
  },
  {
    company: 'Minnek Digital Studio',
    title: { es: 'Software Engineer', en: 'Software Engineer' },
    type: { es: 'Jornada completa, híbrido', en: 'Full-time, hybrid' },
    location: { es: 'Santiago, RD', en: 'Santiago, DR' },
    start: '2024-03',
    end: '2025-10',
    summary: {
      es: 'Requerimientos técnicos de clientes de e-commerce y contenido del estudio.',
      en: "Owned the technical requirements of the studio's e-commerce and content clients.",
    },
    bullets: {
      es: [
        'Asignado a Your Store Wizards (EE. UU.) como desarrollador frontend, en remoto.',
        'Construí tiendas headless con Next.js y sitios de contenido con WordPress.',
      ],
      en: [
        'Assigned to Your Store Wizards (US) as a frontend developer, working remotely.',
        'Built headless storefronts with Next.js and content sites with WordPress.',
      ],
    },
    stack: ['Next.js', 'TypeScript', 'WordPress'],
    cvHidden: true,
  },
  {
    company: 'Lubrigomas Corona SRL',
    title: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    type: { es: 'Media jornada, presencial', en: 'Part-time, on-site' },
    location: { es: 'La Vega, RD', en: 'La Vega, DR' },
    start: '2022-12',
    end: '2024-03',
    summary: {
      es: 'Diseñé y construí desde cero el ERP de la empresa para operar varias sucursales.',
      en: "Designed and built the company's ERP from scratch to run multiple branches.",
    },
    bullets: {
      es: [
        'Construí los módulos de punto de venta, inventario y contabilidad, adaptados a la normativa fiscal dominicana.',
        'Implementé soporte multisucursal con control de acceso basado en roles (RBAC).',
        'Me encargué del ciclo completo: requisitos con el negocio, desarrollo, despliegue y soporte.',
      ],
      en: [
        'Built point-of-sale, inventory and accounting modules adapted to Dominican Republic tax requirements.',
        'Implemented multi-branch support with role-based access control (RBAC).',
        'Owned the full lifecycle: requirements with the business, development, deployment and support.',
      ],
    },
    stack: ['TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Emedia Store',
    title: { es: 'Full Stack Developer | Team Lead', en: 'Full Stack Developer | Team Lead' },
    type: { es: 'Jornada completa', en: 'Full-time' },
    location: { es: 'La Vega, RD', en: 'La Vega, DR' },
    start: '2021-01',
    end: '2022-11',
    summary: {
      es: 'Lideré un equipo pequeño para construir un ERP a la medida centrado en una tienda en línea estilo Amazon.',
      en: 'Led a small team to build a custom ERP centered on an Amazon-style online store.',
    },
    bullets: {
      es: [
        'Repartía el trabajo, revisaba código y coordinaba las entregas con el dueño del negocio.',
        'Construí un ERP modular (inventario, ventas, facturación) en Express, TypeScript y PostgreSQL, con tienda en Next.js.',
        'Implementé chat en vivo con clientes con Socket.IO y contenedoricé los servicios con Docker.',
      ],
      en: [
        'Split the work, reviewed code and coordinated deliveries with the business owner.',
        'Built a modular ERP (inventory, sales and invoicing) with Express, TypeScript and PostgreSQL, plus the Next.js storefront.',
        'Implemented live customer chat with Socket.IO and containerized the services with Docker.',
      ],
    },
    stack: ['Next.js', 'Express', 'TypeScript', 'PostgreSQL', 'Socket.IO', 'Docker'],
  },
  {
    company: 'Freelance',
    title: { es: 'Freelance Web Developer', en: 'Freelance Web Developer' },
    type: { es: 'Autónomo', en: 'Self-employed' },
    location: { es: 'Remoto', en: 'Remote' },
    start: '2017-01',
    end: '2020-12',
    summary: {
      es: 'Landing pages y sitios corporativos en WordPress para consultoras y pequeñas empresas.',
      en: 'WordPress landing pages and marketing sites for consulting firms and small businesses.',
    },
    bullets: {
      es: ['Entregué sitios de punta a punta y personalicé temas y plugins de WordPress.'],
      en: ['Delivered sites end to end and customized WordPress themes and plugins.'],
    },
    stack: ['WordPress', 'PHP', 'JavaScript'],
  },
];

export const education = [
  {
    school: 'Universidad Católica del Cibao (UCATECI)',
    degree: {
      es: 'Ingeniería en Sistemas de Computación',
      en: 'B.S. in Computer Systems Engineering',
    },
    start: '2021',
    end: '2026',
  },
  {
    school: 'Instituto Agronómico y Técnico Salesiano (ISA)',
    degree: {
      es: 'Técnico en Informática',
      en: 'Technical Degree in Computer Science',
    },
    start: '2017',
    end: '2021',
  },
];

export const skills: { group: Localized<string>; items: string[] }[] = [
  {
    group: { es: 'Lenguajes', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'SQL', 'PHP'],
  },
  {
    group: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Socket.IO', 'Microservices'],
  },
  {
    group: { es: 'Frontend y móvil', en: 'Frontend & mobile' },
    items: ['React', 'Next.js', 'Expo', 'Storybook', 'Tailwind CSS', 'MUI', 'Astro', 'Shopify', 'BigCommerce'],
  },
  {
    group: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' },
    items: ['Azure', 'Azure DevOps', 'CI/CD', 'Docker', 'Terraform', 'GitHub Actions'],
  },
];

export const languages = {
  es: ['Español (nativo)', 'Inglés (lectura y escritura técnica)'],
  en: ['Spanish (native)', 'English (technical reading and writing)'],
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'onboarding',
    title: { es: 'Onboarding como servicio', en: 'Onboarding as a service' },
    context: {
      es: 'Entidad financiera con varias iniciativas que necesitaban onboarding digital de clientes.',
      en: 'A financial institution with several initiatives that needed digital customer onboarding.',
    },
    problem: {
      es: 'Cada equipo reconstruía el mismo flujo, con sus propias integraciones y reglas.',
      en: 'Every team rebuilt the same flow, with its own integrations and rules.',
    },
    decisions: {
      es: [
        'Extraer el flujo a un SDK de onboarding reutilizable.',
        'Dejar las reglas de negocio como configuración de cada equipo, no como código del SDK.',
      ],
      en: [
        'Extract the flow into a reusable onboarding SDK.',
        "Keep business rules as each team's configuration, not as SDK code.",
      ],
    },
    outcome: {
      es: 'Los equipos crean onboardings con sus propias reglas sin tocar el núcleo.',
      en: 'Teams create onboardings with their own rules without touching the core.',
    },
    stack: ['TypeScript', 'NestJS', 'React'],
  },
  {
    id: 'integrations',
    title: { es: 'Plataforma de integraciones', en: 'Integration platform' },
    context: {
      es: 'Alrededor de 8 iniciativas consumiendo los mismos servicios externos.',
      en: 'Around 8 initiatives consuming the same external services.',
    },
    problem: {
      es: 'Integraciones duplicadas, inconsistentes y difíciles de mantener.',
      en: 'Duplicated, inconsistent integrations that were hard to maintain.',
    },
    decisions: {
      es: [
        'Librerías compartidas para Salesforce, Prodoctivity, ABA, prueba de vida, OTP y correo.',
        'Diseñarlas pensando en la experiencia del desarrollador que las consume.',
      ],
      en: [
        'Shared libraries for Salesforce, Prodoctivity, ABA, liveness checks, OTP and email.',
        'Design them around the experience of the developer consuming them.',
      ],
    },
    outcome: {
      es: 'Una sola forma de integrarse, usada por alrededor de 8 iniciativas.',
      en: 'One way to integrate, used by around 8 initiatives.',
    },
    stack: ['TypeScript', 'Node.js', 'Azure'],
  },
  {
    id: 'ecommerce',
    title: { es: 'Tiendas para comercios de EE. UU.', en: 'Storefronts for US merchants' },
    context: {
      es: 'Agencia de e-commerce en California con clientes en Shopify y BigCommerce.',
      en: 'A California e-commerce agency with clients on Shopify and BigCommerce.',
    },
    problem: {
      es: 'Temas legacy difíciles de extender y checkouts que no se ajustaban a cada negocio.',
      en: "Legacy themes that were hard to extend and checkouts that didn't fit each business.",
    },
    decisions: {
      es: [
        'Plantillas y componentes reutilizables entre tiendas.',
        'Búsqueda predictiva, scroll infinito y checkout a la medida de cada comercio.',
      ],
      en: [
        'Templates and components reused across stores.',
        "Predictive search, infinite scroll and checkouts tailored to each merchant.",
      ],
    },
    outcome: {
      es: 'Plantillas usadas por entre 30 y 40 tiendas.',
      en: 'Templates used by 30 to 40 stores.',
    },
    stack: ['Shopify', 'BigCommerce', 'JavaScript', 'Next.js'],
  },
];

export const process = [
  {
    title: { es: 'Entender', en: 'Understand' },
    body: {
      es: 'El problema, quién lo sufre y qué restricciones son reales.',
      en: 'The problem, who has it, and which constraints are real.',
    },
  },
  {
    title: { es: 'Diseñar', en: 'Design' },
    body: {
      es: 'Arquitectura y decisiones por escrito, antes del código.',
      en: 'Architecture and decisions in writing, before the code.',
    },
  },
  {
    title: { es: 'Construir', en: 'Build' },
    body: {
      es: 'Código tipado, probado y desplegado con CI/CD.',
      en: 'Typed, tested code shipped through CI/CD.',
    },
  },
  {
    title: { es: 'Entregar', en: 'Hand off' },
    body: {
      es: 'Documentación para que tu equipo siga sin mí.',
      en: 'Documentation so your team can keep going without me.',
    },
  },
];

const monthNames: Localized<string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export function formatMonth(value: string | undefined, lang: Lang): string {
  if (!value) return lang === 'es' ? 'actualidad' : 'Present';
  const [year, month] = value.split('-');
  return `${monthNames[lang][Number(month) - 1]} ${year}`;
}

export function formatRange(start: string, end: string | undefined, lang: Lang): string {
  return `${formatMonth(start, lang)} ${lang === 'es' ? 'a' : 'to'} ${formatMonth(end, lang)}`;
}
