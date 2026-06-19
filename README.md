# Artgon MEDIA — Site web Next.js 15

Site web officiel d'Artgon MEDIA, agence web & digitale à Nador, Maroc.  
Stack : **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS** · **@vercel/og** · **next-sitemap**

---

## Installation locale

```bash
# 1. Cloner le dépôt
git clone https://github.com/artgonmedia/website.git
cd artgonmedia

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# → Éditer .env.local avec vos valeurs

# 4. Lancer le serveur de développement
npm run dev
# → http://localhost:3000
```

---

## Variables d'environnement

| Variable | Valeur par défaut | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.artgonmedia.com` | URL canonique du site (sans slash final) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | _(vide)_ | Token de vérification Google Search Console |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | _(optionnel)_ | ID du projet Sanity CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Dataset Sanity |
| `SANITY_API_TOKEN` | _(optionnel)_ | Token API Sanity (lecture seule) |

---

## Scripts disponibles

```bash
npm run dev       # Serveur de développement (localhost:3000)
npm run build     # Build de production + génération sitemap
npm run start     # Serveur de production
npm run lint      # ESLint
```

---

## Architecture

```
artgonmedia/
├── app/                    # App Router Next.js 15
│   ├── layout.tsx          # Layout racine (JSON-LD LocalBusiness)
│   ├── page.tsx            # Accueil (SSG)
│   ├── sitemap.ts          # Sitemap dynamique
│   ├── robots.ts           # robots.txt
│   ├── api/og/route.tsx    # OG images dynamiques (@vercel/og)
│   ├── agence/             # Page agence
│   ├── services/           # Hub services + 6 pages dédiées
│   ├── realisations/       # Hub portfolio + 2 études de cas
│   ├── tarifs/             # Page tarifs
│   ├── blog/               # Blog + articles dynamiques (ISR)
│   ├── contact/            # Page contact avec carte
│   ├── devis/              # Configurateur de devis (client)
│   ├── belgique/           # Page diaspora Belgique
│   ├── suisse/             # Page diaspora Suisse
│   ├── pays-bas/           # Page diaspora Pays-Bas
│   ├── mentions-legales/   # Mentions légales
│   └── confidentialite/    # Politique de confidentialité
├── components/
│   ├── layout/             # Header, Footer, WhatsAppButton
│   ├── sections/           # Hero, Services, FAQ, ContactForm...
│   ├── ui/                 # Button, Card, SectionTitle
│   └── seo/                # JsonLd (injection Schema.org)
├── lib/
│   ├── constants.ts        # NAP, couleurs, liens sociaux
│   ├── services.ts         # Data des 6 services (source unique)
│   ├── seo.ts              # generateMetadata() helper
│   └── schema.ts           # Générateurs JSON-LD typés
└── public/
    ├── llms.txt            # Fichier GEO pour LLMs & IA
    └── og/                 # OG images statiques
```

---

## Déploiement sur Vercel

### Déploiement initial

1. Connecter le dépôt GitHub à [vercel.com](https://vercel.com)
2. Configurer les variables d'environnement dans Vercel Dashboard → Settings → Environment Variables
3. Vercel détecte automatiquement Next.js — aucune configuration supplémentaire requise

### Configuration recommandée

- **Framework Preset :** Next.js
- **Node.js Version :** 20.x
- **Build Command :** `npm run build` (inclut `next-sitemap`)
- **Output Directory :** `.next`

### Domaine personnalisé

1. Vercel Dashboard → Domains → Add Domain
2. Ajouter `artgonmedia.com` et `www.artgonmedia.com`
3. Configurer les DNS chez votre registrar (records A et CNAME fournis par Vercel)

---

## SEO & GEO

### JSON-LD implémenté
- `LocalBusiness` — layout racine (NAP, horaires, zone de service)
- `Service` — chaque page service
- `FAQPage` — pages service, accueil, tarifs
- `BreadcrumbList` — toutes les pages
- `Article` — blog et études de cas

### GEO (IA/LLMs)
- `/public/llms.txt` — contenu structuré pour les moteurs IA
- Balises meta géographiques (`geo.region`, `geo.position`, `ICBM`)
- Contenu "réponse directe" de 40-60 mots sur chaque page service

### Sitemap
Généré automatiquement via `app/sitemap.ts` + `next-sitemap` en post-build.  
URL : `https://www.artgonmedia.com/sitemap.xml`

---

## Intégration Sanity CMS (optionnel)

Le projet est préparé pour Sanity mais pas obligatoire au build. Pour activer :

```bash
npm install next-sanity @sanity/image-url
```

Puis créer `lib/sanity.ts` avec la configuration du client Sanity.  
Les pages blog et réalisations consommeront les données depuis Sanity au lieu des données statiques.

---

## Contacts & support

**Artgon MEDIA**  
580 Bd Al Massira, 2e étage, App 3  
62000 Nador, Oriental, Maroc  
📞 +212 681 169 346  
✉️ contact@artgonmedia.com  
💬 WhatsApp : wa.me/212681169346
