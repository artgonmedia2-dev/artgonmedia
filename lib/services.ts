// lib/services.ts
// Source unique de vérité pour les 6 pages-services Artgon MEDIA

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;          // H1
  navLabel: string;       // label menu / card
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;   // GEO : paragraphe autonome citable (40-60 mots)
  benefits: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  stack: string[];
  caseStudySlug: string | null;
  faq: FAQItem[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  // 1. CRÉATION SITE WEB
  {
    slug: "creation-site-web-nador",
    icon: "🌐",
    title: "Création de Site Web à Nador",
    navLabel: "Création Site Web",
    metaTitle: "Création Site Web Nador | Sites PHP, Laravel & Next.js — Artgon MEDIA",
    metaDescription:
      "Création de site web professionnel à Nador et dans l'Oriental : sites vitrines et e-commerce sur mesure en PHP, Laravel et Next.js. Devis gratuit sous 24h.",
    directAnswer:
      "La création de site web à Nador par Artgon MEDIA couvre la conception de sites vitrines et e-commerce sur mesure, développés en PHP, Laravel et Next.js. Chaque site est rapide, sécurisé, optimisé pour le référencement local et adapté aux entreprises de Nador, Oujda et de toute la région de l'Oriental.",
    benefits: [
      { title: "Sur mesure", text: "Aucun template générique : chaque site est conçu selon votre activité et vos objectifs." },
      { title: "Performance", text: "Temps de chargement optimisés et Core Web Vitals maîtrisés pour le SEO et l'expérience utilisateur." },
      { title: "Évolutif", text: "Architecture pensée pour grandir : catalogue, espace client, paiement en ligne, multilingue." },
      { title: "Sécurisé", text: "SSL, sauvegardes et mises à jour pour protéger votre site et vos données." },
    ],
    process: [
      { step: "01", title: "Cadrage", text: "Analyse de vos besoins, de votre cible et de vos concurrents dans l'Oriental." },
      { step: "02", title: "Design", text: "Maquettes UX/UI alignées sur votre identité de marque." },
      { step: "03", title: "Développement", text: "Intégration en PHP/Laravel ou Next.js, responsive et optimisée SEO." },
      { step: "04", title: "Mise en ligne", text: "Déploiement, hébergement, indexation Google et formation à la prise en main." },
    ],
    stack: ["PHP", "Laravel", "Next.js", "MySQL", "Tailwind CSS"],
    caseStudySlug: "nador-west-wood",
    faq: [
      {
        question: "Combien coûte la création d'un site web à Nador ?",
        answer:
          "Le prix dépend du type de site (vitrine ou e-commerce) et des fonctionnalités souhaitées. Artgon MEDIA établit un devis gratuit, net et sans frais cachés sous 24 heures après un premier échange.",
      },
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer:
          "Un site vitrine est généralement livré en 2 à 4 semaines, un site e-commerce en 4 à 8 semaines, selon la complexité et la rapidité de validation des contenus.",
      },
      {
        question: "Le site sera-t-il optimisé pour Google ?",
        answer:
          "Oui. Chaque site est livré avec une structure SEO technique (balises, vitesse, mobile, données structurées) et une optimisation pour le référencement local à Nador et dans l'Oriental.",
      },
      {
        question: "Proposez-vous des sites multilingues ?",
        answer:
          "Oui, Artgon MEDIA développe des sites en français, arabe et anglais, idéal pour les entreprises marocaines et la diaspora.",
      },
    ],
    relatedSlugs: ["referencement-seo-nador", "application-mobile-flutter", "maintenance-support"],
  },

  // 2. APPLICATION MOBILE FLUTTER
  {
    slug: "application-mobile-flutter",
    icon: "📱",
    title: "Application Mobile Flutter",
    navLabel: "Application Mobile",
    metaTitle: "Développement Application Mobile Flutter Maroc | iOS & Android — Artgon MEDIA",
    metaDescription:
      "Développement d'applications mobiles iOS et Android avec Flutter à Nador et au Maroc. Apps performantes, natives et évolutives. Devis gratuit.",
    directAnswer:
      "Artgon MEDIA développe des applications mobiles iOS et Android avec Flutter, Dart et Firebase. Une seule base de code génère deux applications natives performantes, ce qui réduit les coûts et le délai de mise sur le marché pour les entreprises du Maroc et de l'Oriental.",
    benefits: [
      { title: "iOS + Android", text: "Une base de code unique en Flutter pour deux applications natives, plus rapide et moins coûteux." },
      { title: "Performance native", text: "Interfaces fluides à 60 fps et accès complet aux fonctionnalités du téléphone." },
      { title: "Backend connecté", text: "Firebase, API REST ou Laravel : authentification, base de données et notifications push." },
      { title: "Publication incluse", text: "Accompagnement jusqu'à la mise en ligne sur l'App Store et Google Play." },
    ],
    process: [
      { step: "01", title: "Idéation", text: "Définition des fonctionnalités, des parcours utilisateurs et du périmètre du MVP." },
      { step: "02", title: "Prototype", text: "Maquettes interactives validées avant le développement." },
      { step: "03", title: "Développement", text: "Codage Flutter, intégration backend et tests sur appareils réels." },
      { step: "04", title: "Publication", text: "Déploiement sur les stores, suivi et maintenance évolutive." },
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST API", "Laravel"],
    caseStudySlug: null,
    faq: [
      {
        question: "Pourquoi choisir Flutter pour mon application mobile ?",
        answer:
          "Flutter permet de développer une seule fois pour iOS et Android, ce qui réduit les coûts et les délais tout en garantissant des performances proches du natif. C'est la technologie recommandée par Artgon MEDIA pour la plupart des projets.",
      },
      {
        question: "Combien coûte le développement d'une application mobile au Maroc ?",
        answer:
          "Le coût dépend du nombre de fonctionnalités et de la complexité du backend. Artgon MEDIA fournit un devis gratuit et détaillé après l'analyse de votre projet.",
      },
      {
        question: "Gérez-vous la publication sur l'App Store et Google Play ?",
        answer:
          "Oui, Artgon MEDIA accompagne la création des comptes développeurs, la préparation des fiches et la soumission jusqu'à la validation finale.",
      },
      {
        question: "L'application pourra-t-elle évoluer après le lancement ?",
        answer:
          "Oui, l'architecture est pensée pour ajouter de nouvelles fonctionnalités. Des contrats de maintenance et d'évolution sont disponibles.",
      },
    ],
    relatedSlugs: ["creation-site-web-nador", "automatisation-ia", "maintenance-support"],
  },

  // 3. RÉFÉRENCEMENT SEO NADOR
  {
    slug: "referencement-seo-nador",
    icon: "🔍",
    title: "Référencement SEO à Nador",
    navLabel: "Référencement SEO",
    metaTitle: "Référencement SEO Nador | Agence SEO Local Oriental — Artgon MEDIA",
    metaDescription:
      "Agence SEO à Nador : référencement local, SEO technique et contenu pour dominer Google dans l'Oriental et au Maroc. Plus de visibilité, plus de clients.",
    directAnswer:
      "Le référencement SEO à Nador par Artgon MEDIA combine SEO technique, SEO local et stratégie de contenu pour positionner votre entreprise en tête des résultats Google dans l'Oriental. L'objectif : capter un trafic qualifié et générer des contacts depuis Nador, Oujda et tout le Maroc.",
    benefits: [
      { title: "SEO local", text: "Optimisation de votre fiche Google Business Profile et des recherches géolocalisées à Nador et Oujda." },
      { title: "SEO technique", text: "Vitesse, mobile, indexation, données structurées : les fondations d'un bon classement." },
      { title: "Contenu stratégique", text: "Articles et pages optimisés sur les mots-clés recherchés par vos clients." },
      { title: "Résultats mesurables", text: "Suivi des positions, du trafic et des conversions via Search Console et GA4." },
    ],
    process: [
      { step: "01", title: "Audit", text: "Analyse technique, sémantique et concurrentielle de votre présence actuelle." },
      { step: "02", title: "Stratégie", text: "Sélection des mots-clés prioritaires et plan de contenu." },
      { step: "03", title: "Optimisation", text: "Corrections techniques, on-page et création de contenu SEO." },
      { step: "04", title: "Suivi", text: "Reporting mensuel, ajustements et amélioration continue du positionnement." },
    ],
    stack: ["Google Search Console", "GA4", "Schema.org", "Ahrefs / Semrush"],
    caseStudySlug: "nador-west-wood",
    faq: [
      {
        question: "Combien de temps faut-il pour voir des résultats SEO ?",
        answer:
          "Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le SEO local à Nador peut produire des effets plus rapides sur les recherches géolocalisées.",
      },
      {
        question: "Qu'est-ce que le SEO local à Nador ?",
        answer:
          "Le SEO local optimise votre visibilité pour les recherches géolocalisées (« agence web Nador », « près de moi »), notamment via Google Business Profile, les avis et la cohérence de vos coordonnées.",
      },
      {
        question: "Le SEO est-il inclus dans vos offres mensuelles ?",
        answer:
          "Oui, l'offre Growth à 3 900 MAD/mois inclut le SEO sur 3 pages et un article de blog optimisé par mois. Des prestations SEO sur mesure sont aussi disponibles.",
      },
      {
        question: "Travaillez-vous le SEO en français et en arabe ?",
        answer:
          "Oui, Artgon MEDIA optimise le contenu en français et en arabe pour toucher l'ensemble du marché marocain et la diaspora.",
      },
    ],
    relatedSlugs: ["creation-site-web-nador", "marketing-digital-ads", "automatisation-ia"],
  },

  // 4. MARKETING DIGITAL & ADS
  {
    slug: "marketing-digital-ads",
    icon: "📣",
    title: "Marketing Digital & Ads à Nador",
    navLabel: "Marketing & Ads",
    metaTitle: "Marketing Digital & Publicité Meta/Google Ads Nador — Artgon MEDIA",
    metaDescription:
      "Gestion des réseaux sociaux et campagnes Meta & Google Ads à Nador et dans l'Oriental. Stratégie, contenu et acquisition de leads. Devis gratuit.",
    directAnswer:
      "Le marketing digital d'Artgon MEDIA réunit la gestion des réseaux sociaux et les campagnes publicitaires Meta et Google Ads pour les entreprises de Nador et de l'Oriental. La démarche couvre la stratégie, la création de contenu et l'acquisition de leads qualifiés, avec un reporting mensuel transparent.",
    benefits: [
      { title: "Réseaux sociaux gérés", text: "Publications, stories et Reels sur Facebook, Instagram et LinkedIn, contenu et visuels inclus." },
      { title: "Campagnes Ads ciblées", text: "Meta Ads et Google Ads optimisées pour le coût par lead et le retour sur investissement." },
      { title: "Création de contenu", text: "Visuels, textes et vidéos alignés sur votre image de marque." },
      { title: "Reporting clair", text: "Rapport mensuel sur la portée, l'engagement et les leads générés." },
    ],
    process: [
      { step: "01", title: "Stratégie", text: "Définition des objectifs, de la cible et des canaux prioritaires." },
      { step: "02", title: "Création", text: "Production des visuels, textes et calendrier éditorial." },
      { step: "03", title: "Diffusion", text: "Publication et lancement des campagnes Ads ciblées." },
      { step: "04", title: "Optimisation", text: "Analyse des performances et ajustement des budgets et créatifs." },
    ],
    stack: ["Meta Business", "Google Ads", "Meta Ads", "Canva / Suite créative"],
    caseStudySlug: "diaspora-immobilier-conseil",
    faq: [
      {
        question: "Combien coûte la gestion des réseaux sociaux chez Artgon MEDIA ?",
        answer:
          "Les offres démarrent à 1 500 MAD/mois (Essentiel), 2 500 MAD/mois (Starter) et 3 900 MAD/mois (Growth), prix nets sans engagement longue durée et résiliables avec 30 jours de préavis.",
      },
      {
        question: "Le budget publicitaire est-il inclus dans les offres ?",
        answer:
          "Non, le budget Ads versé à Meta ou Google est distinct des honoraires de gestion. Artgon MEDIA vous conseille sur le budget optimal selon vos objectifs.",
      },
      {
        question: "Sur quels réseaux sociaux travaillez-vous ?",
        answer:
          "Principalement Facebook, Instagram et LinkedIn, avec des Reels et vidéos selon l'offre choisie.",
      },
      {
        question: "Puis-je résilier à tout moment ?",
        answer:
          "Oui, toutes les offres sont sans engagement longue durée et résiliables avec un préavis de 30 jours.",
      },
    ],
    relatedSlugs: ["referencement-seo-nador", "automatisation-ia", "creation-site-web-nador"],
  },

  // 5. AUTOMATISATION IA
  {
    slug: "automatisation-ia",
    icon: "🤖",
    title: "Automatisation par Intelligence Artificielle",
    navLabel: "Automatisation IA",
    metaTitle: "Automatisation IA & Chatbots pour Entreprises au Maroc — Artgon MEDIA",
    metaDescription:
      "Automatisation des processus métier par IA à Nador et au Maroc : chatbots intelligents, optimisation IA/SEO et workflows automatisés 24/7. Devis gratuit.",
    directAnswer:
      "Artgon MEDIA intègre l'intelligence artificielle pour automatiser les processus métier des entreprises : chatbots intelligents, qualification de leads, réponses clients 24/7 et workflows automatisés. L'objectif est de gagner du temps, réduire les coûts et améliorer la réactivité, du Maroc à l'international.",
    benefits: [
      { title: "Chatbots 24/7", text: "Assistants intelligents qui répondent aux clients et qualifient les leads en continu." },
      { title: "Workflows automatisés", text: "Automatisation des tâches répétitives : prospection, relances, reporting." },
      { title: "IA + SEO", text: "Optimisation de contenu assistée par IA pour la visibilité dans Google et les moteurs génératifs." },
      { title: "Sur mesure", text: "Intégration adaptée à vos outils existants (CRM, WhatsApp, site web)." },
    ],
    process: [
      { step: "01", title: "Diagnostic", text: "Identification des tâches automatisables à fort impact." },
      { step: "02", title: "Conception", text: "Définition des scénarios et choix des outils IA et d'automatisation." },
      { step: "03", title: "Intégration", text: "Mise en place des chatbots et workflows connectés à vos systèmes." },
      { step: "04", title: "Optimisation", text: "Suivi des performances et amélioration continue des automatisations." },
    ],
    stack: ["Claude", "n8n", "API IA", "WhatsApp Business API", "CRM"],
    caseStudySlug: null,
    faq: [
      {
        question: "Quels processus peut-on automatiser avec l'IA ?",
        answer:
          "On peut automatiser la prospection, la qualification de leads, le support client via chatbot, les relances, la génération de contenu et le reporting. Artgon MEDIA identifie les automatisations les plus rentables pour votre activité.",
      },
      {
        question: "Un chatbot IA peut-il être connecté à WhatsApp ?",
        answer:
          "Oui, Artgon MEDIA intègre des chatbots intelligents à WhatsApp Business pour répondre aux clients et capter des leads automatiquement, 24h/24.",
      },
      {
        question: "L'automatisation IA convient-elle aux petites entreprises ?",
        answer:
          "Oui. Même une petite structure gagne du temps en automatisant ses réponses clients et ses relances. Les solutions sont adaptées à votre taille et votre budget.",
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer:
          "Oui, les automatisations sont conçues dans le respect de la confidentialité et de la sécurité de vos données.",
      },
    ],
    relatedSlugs: ["referencement-seo-nador", "marketing-digital-ads", "application-mobile-flutter"],
  },

  // 6. MAINTENANCE & SUPPORT
  {
    slug: "maintenance-support",
    icon: "⚙️",
    title: "Maintenance & Support Web",
    navLabel: "Maintenance & Support",
    metaTitle: "Maintenance Site Web & Support 7j/7 à Nador — Artgon MEDIA",
    metaDescription:
      "Contrats de maintenance web à Nador : mises à jour de sécurité, hébergement optimisé, sauvegardes et support réactif 7j/7. Gardez votre site performant.",
    directAnswer:
      "Le service de maintenance et support d'Artgon MEDIA assure le bon fonctionnement de votre site web : mises à jour de sécurité, hébergement optimisé, sauvegardes régulières et assistance 7j/7. Vous gardez un site rapide, sécurisé et à jour, avec un interlocuteur dédié.",
    benefits: [
      { title: "Sécurité", text: "Mises à jour régulières et surveillance pour protéger votre site des failles." },
      { title: "Hébergement optimisé", text: "Serveurs configurés pour la vitesse et la disponibilité, avec certificat SSL." },
      { title: "Sauvegardes", text: "Copies régulières pour restaurer votre site rapidement en cas d'incident." },
      { title: "Support 7j/7", text: "Un interlocuteur dédié via WhatsApp, email ou téléphone, avec engagement de réactivité." },
    ],
    process: [
      { step: "01", title: "Mise en place", text: "Audit de l'existant et configuration de l'environnement de maintenance." },
      { step: "02", title: "Surveillance", text: "Monitoring de la sécurité, des performances et de la disponibilité." },
      { step: "03", title: "Interventions", text: "Mises à jour, corrections et évolutions selon votre contrat." },
      { step: "04", title: "Reporting", text: "Suivi des interventions et recommandations d'amélioration." },
    ],
    stack: ["SLA", "Hébergement", "SSL", "Sauvegardes", "Monitoring"],
    caseStudySlug: null,
    faq: [
      {
        question: "Que comprend un contrat de maintenance web ?",
        answer:
          "Il comprend les mises à jour de sécurité, l'hébergement optimisé, les sauvegardes régulières, le monitoring et le support 7j/7 avec un interlocuteur dédié.",
      },
      {
        question: "Le support est-il vraiment disponible 7j/7 ?",
        answer:
          "Oui, Artgon MEDIA propose un support réactif 7j/7 via WhatsApp, email ou téléphone, avec un engagement de réactivité défini dans le contrat.",
      },
      {
        question: "Puis-je souscrire la maintenance sans avoir créé mon site chez vous ?",
        answer:
          "Oui. Après un audit de votre site existant, Artgon MEDIA peut le reprendre en maintenance, qu'il ait été développé ailleurs ou non.",
      },
      {
        question: "La maintenance est-elle facturée au mois ?",
        answer:
          "Oui, les contrats de maintenance sont mensuels, avec des formules adaptées à la taille et à la criticité de votre site.",
      },
    ],
    relatedSlugs: ["creation-site-web-nador", "referencement-seo-nador", "automatisation-ia"],
  },
];

// Helpers
export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getAllServiceSlugs = (): string[] => services.map((s) => s.slug);
