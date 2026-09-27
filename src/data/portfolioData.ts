import {
  ImpactMetric,
  Competency,
  StrategicCapability,
  CaseStudy,
  CareerItem,
  EducationItem,
  CertificationItem,
  ThoughtLeadershipArticle,
} from '../types';
import executivePhotoUrl from '../assets/images/pradeep_executive_1790502834024.jpg';

export const PERSONAL_INFO = {
  name: 'Pradeep Kumar',
  title: 'Senior Sales Enablement & Knowledge Strategy Leader',
  subtitles: 'Sales Enablement | Knowledge Strategy | Competitive Intelligence',
  experienceYears: '18+',
  location: 'Hyderabad, India',
  email: 'pradeepkr.pk@gmail.com',
  phone: '+91 09769837512',
  linkedinUrl: 'https://www.linkedin.com/in/pkumariimk/',
  linkedinHandle: 'pkumariimk',
  photoUrl: executivePhotoUrl,
  statement:
    '18+ years enabling sales teams through knowledge governance, competitive battlecards, win/loss analysis, and structured deal pursuit support.',
  bio:
    'Strategic Sales Enablement and Knowledge Management leader supporting global technology and consulting portfolios across North American and global enterprise markets. Trusted partner to global portfolio leaders, embedding win/loss intelligence, Tier-1 competitive battlecards, and scalable knowledge governance into high-velocity deal pursuit engines.',
  portfolioFocus: ['Consulting', 'Cloud Infrastructure', 'Application Services', 'Business Services'],
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'exp',
    value: '18+',
    numericTarget: 18,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Enterprise Strategy',
    description: 'Specializing in enterprise sales enablement, knowledge governance, and competitive intelligence.',
    category: 'Scale',
  },
  {
    id: 'members',
    value: '25,000+',
    numericTarget: 25000,
    suffix: '+',
    label: 'Members Supported',
    sublabel: 'Global Practitioner Base',
    description: 'Governing global knowledge repositories across distributed consulting and technology teams.',
    category: 'Scale',
  },
  {
    id: 'assets',
    value: '2,000+',
    numericTarget: 2000,
    suffix: '+',
    label: 'Curated Assets',
    sublabel: 'Enterprise Repository',
    description: 'High-value reusable delivery collateral, case studies, methodologies, and sales credentials.',
    category: 'Governance',
  },
  {
    id: 'winloss',
    value: '60',
    numericTarget: 60,
    suffix: ' Deals/Qtr',
    label: 'Deals/Quarter Analysed',
    sublabel: 'Win/Loss Intelligence',
    description: 'Systematic diagnosis of win/loss patterns, competitor moves, and enterprise pricing dynamics.',
    category: 'Strategy',
  },
  {
    id: 'pursuits',
    value: '50+',
    numericTarget: 50,
    suffix: '+',
    label: 'Annual Deal Pursuits',
    sublabel: 'Active Pursuit Support',
    description: 'Direct enablement of high-stakes bids through competitive differentiation and curated intelligence.',
    category: 'Deal Pursuit',
  },
  {
    id: 'growth',
    value: '100+',
    numericTarget: 100,
    suffix: '+',
    label: 'Assets Added Annually',
    sublabel: 'Continuous Content Refresh',
    description: 'Continuous lifecycle harvesting of case studies, proposal content, and client intelligence.',
    category: 'Governance',
  },
  {
    id: 'analysts',
    value: '6–8',
    numericTarget: 8,
    prefix: '6–',
    suffix: ' / Yr',
    label: 'Analyst Engagements/Year',
    sublabel: 'Gartner & Forrester Alignment',
    description: 'Facilitating executive workshops, evaluative reviews, and translating analyst insights into bids.',
    category: 'Strategy',
  },
];

export const CORE_COMPETENCIES: Competency[] = [
  {
    id: 'sales-enablement',
    title: 'Sales Enablement Strategy',
    category: 'Execution',
    iconName: 'Target',
    summary: 'Architecting structured sales enablement programs that strengthen competitive positioning and proposal win rates across enterprise deal pursuits.',
    details: [
      'Aligning sales collateral and value messaging to buyer decision stages across Consulting and Application portfolios.',
      'Developing structured onboarding and continuous readiness programs for pursuit leads and solution architects.',
      'Translating multi-portfolio service capabilities into client-centric value propositions and deal-specific battlecards.',
    ],
    keyDeliverables: ['Pursuit Playbooks', 'Sales Readiness Frameworks', 'Value Proposition Toolkits'],
  },
  {
    id: 'competitive-intelligence',
    title: 'Competitive Intelligence',
    category: 'Strategy',
    iconName: 'ShieldAlert',
    summary: 'Leading intelligence programs covering Tier-1 IT competitors, surfacing competitor maneuvers, delivery models, and counter-positioning tactics.',
    details: [
      'Continuous tracking of Tier-1 IT service competitors across capabilities, pricing models, and key account strategies.',
      'Developing and refreshing actionable battlecards to equip pursuit teams with proven objection handling.',
      'Translating competitor public disclosures, earnings calls, and analyst feedback into strategic win themes.',
    ],
    keyDeliverables: ['Tier-1 Competitor Battlecards', 'Executive Threat Briefings', 'Differentiation Matrices'],
  },
  {
    id: 'win-loss-analysis',
    title: 'Win/Loss Analysis',
    category: 'Intelligence',
    iconName: 'TrendingUp',
    summary: 'Conducting structured quarterly post-mortems across ~60 deals per quarter to uncover recurring pricing patterns and competitive differentiators.',
    details: [
      'Establishing rigorous post-deal review cadence analyzing deal mechanics, pricing pressure, and client selection criteria.',
      'Synthesizing quantitative win/loss metrics and qualitative buyer sentiments for executive leadership.',
      'Directly feeding findings back into sales enablement assets and bid pricing strategies to close capability gaps.',
    ],
    keyDeliverables: ['Quarterly Win/Loss Reports', 'Pricing Sensitivity Benchmarks', 'Recurrent Trend Bulletins'],
  },
  {
    id: 'km-strategy',
    title: 'Knowledge Management Strategy',
    category: 'Architecture',
    iconName: 'Compass',
    summary: 'Defining and executing multi-year KM roadmaps aligned with business priorities, transforming intellectual capital into repeatable business value.',
    details: [
      'Establishing enterprise knowledge roadmaps spanning Cloud Infrastructure, Application Services, and Consulting.',
      'Aligning repository architecture to strategic business milestones and high-volume enterprise sales goals.',
      'Establishing quantifiable KM adoption metrics that link asset utilization directly to pursuit velocity.',
    ],
    keyDeliverables: ['Enterprise KM Roadmaps', 'Knowledge Architecture Blueprints', 'Adoption & KPI Scorecards'],
  },
  {
    id: 'knowledge-governance',
    title: 'Knowledge Governance',
    category: 'Governance',
    iconName: 'ShieldCheck',
    summary: 'Establishing scalable governance, access controls, taxonomy standards, and quality gates across enterprise platforms supporting 25,000+ members.',
    details: [
      'Governing enterprise repositories on SharePoint and Drupal, enforcing strict content standards and security classification.',
      'Managing standardized metadata taxonomies to ensure intuitive navigation and search discoverability.',
      'Designing deprecation workflows to retire outdated content and maintain a high-trust asset base.',
    ],
    keyDeliverables: ['Taxonomy & Metadata Standards', 'Access & Lifecycle Policies', 'Content Quality Gateways'],
  },
  {
    id: 'analyst-engagement',
    title: 'Analyst Engagement',
    category: 'Relations',
    iconName: 'LineChart',
    summary: 'Coordinating 6–8 annual strategic engagements with premier analyst firms (Gartner, Forrester), facilitating workshops and infusing analyst validation into proposals.',
    details: [
      'Partnering with practice leaders to orchestrate analyst briefings, survey submissions, and evaluative workshops.',
      'Extracting strategic market takeaways from analyst research and feeding them into enterprise pursuit narratives.',
      'Enabling deal teams to leverage analyst endorsements and Magic Quadrant/Wave positioning in client briefings.',
    ],
    keyDeliverables: ['Analyst Briefing Packages', 'Evaluative Research Summaries', 'Third-Party Proof Point Kits'],
  },
  {
    id: 'deal-pursuit-support',
    title: 'Deal Pursuit & Proposal Support',
    category: 'Execution',
    iconName: 'Briefcase',
    summary: 'Directly partnering with pursuit teams across ~50 annual deals, infusing competitive intelligence, proven credentials, and winning positioning.',
    details: [
      'Embedding into high-value RFP/RFI cycles to craft tailored win themes and competitive counter-messaging.',
      'Harvesting relevant case studies and verified delivery metrics to substantiate client proposal claims.',
      'Facilitating pre-submission war rooms to stress-test proposals against anticipated competitor objections.',
    ],
    keyDeliverables: ['Pursuit Win Themes', 'Proposal Proof Packages', 'Red Team Challenge Reviews'],
  },
  {
    id: 'content-curation',
    title: 'Content Curation & Management',
    category: 'Governance',
    iconName: 'Layers',
    summary: 'Managing end-to-end asset lifecycles across 2,000+ curated items, adding 100+ high-value assets annually including case studies and client intelligence.',
    details: [
      'Leading systematic asset harvesting from completed engagements to capture reusable delivery templates and case studies.',
      'Overseeing editorial review and sanitization of sensitive client details to enable safe cross-organization sharing.',
      'Optimizing portal navigation and search discoverability across SharePoint and Drupal environments.',
    ],
    keyDeliverables: ['Curated Case Study Library', 'Sanitized Proposal Templates', 'Asset Lifecycle Dashboard'],
  },
  {
    id: 'stakeholder-collaboration',
    title: 'Stakeholder & SME Collaboration',
    category: 'Collaboration',
    iconName: 'Users',
    summary: 'Facilitating active Communities of Practice (CoPs), Centers of Excellence (CoEs), and executive forums to accelerate enterprise knowledge sharing.',
    details: [
      'Uniting distributed Subject Matter Experts across geographies to contribute frontline insights into central repositories.',
      'Partnering with portfolio vice presidents and sales leaders to align knowledge initiatives with commercial priorities.',
      'Moderating cross-functional forums that convert informal project learnings into enterprise intellectual capital.',
    ],
    keyDeliverables: ['CoP Governance Frameworks', 'SME Knowledge Pipelines', 'Cross-Portfolio Insight Forums'],
  },
];

export const STRATEGIC_WORK: StrategicCapability[] = [
  {
    id: 'km-strategy-impl',
    title: 'KM Strategy & Implementation',
    subtitle: 'Transforming Organizational Knowledge into Commercial Advantage',
    overview:
      'Designing and operationalizing comprehensive knowledge management programs tailored for multi-billion dollar consulting and technology portfolios.',
    strategicValue:
      'Prevents redundant reinvention, shrinks proposal cycle times, and ensures enterprise pursuit teams immediately leverage global delivery track records.',
    executionPillars: [
      'Multi-year KM Roadmap formulation linked to business unit growth targets',
      'Dual-platform governance across SharePoint & Drupal enterprise stacks',
      'Standardized taxonomy design for immediate search and retrieval discoverability',
      'Formalized adoption metrics tracking asset reuse in live RFP submissions',
    ],
    keyDeliverable: 'Enterprise KM Operating Model governing 25,000+ members and 2,000+ curated assets.',
    iconName: 'Cpu',
    metricHighlight: '25k+ Members Powered',
  },
  {
    id: 'ci-battlecards',
    title: 'Competitive Intelligence & Battlecards',
    subtitle: 'Actionable Differentiation for High-Stakes Pursuit War Rooms',
    overview:
      'Continuous tracking, analysis, and strategic counter-positioning against Tier-1 global IT systems integrators and consulting rivals.',
    strategicValue:
      'Equips frontline sales leaders with rapid objection handling, competitor pricing expectations, and defensible architectural differentiators.',
    executionPillars: [
      'Systematic monitoring of competitor capabilities, acquisitions, and executive moves',
      'Modular, field-ready battlecards updated dynamically per market shifts',
      'Tailored SWOT analyses adapted to specific industry verticals (Banking, Retail, Healthcare)',
      'Pre-pursuit war room simulations identifying competitor vulnerabilities',
    ],
    keyDeliverable: 'Living Tier-1 Competitor Battlecard Suite deployed across all major enterprise bids.',
    iconName: 'Swords',
    metricHighlight: 'Tier-1 IT Rivals Covered',
  },
  {
    id: 'win-loss-intelligence',
    title: 'Win/Loss Analysis',
    subtitle: 'Data-Driven Diagnosis of Deal Mechanics and Buyer Motivations',
    overview:
      'Rigorous quarterly review framework evaluating approximately 60 enterprise deals per quarter to extract systematic patterns behind outcomes.',
    strategicValue:
      'Provides portfolio leadership with empirical evidence on where pricing premiums hold, where proposals lose traction, and how competitors disrupt.',
    executionPillars: [
      'Structured post-deal reviews with bid leads, client relationship managers, and solution architects',
      'Correlation of deal size, pricing model, delivery location, and competitor presence',
      'Identification of recurring competitive objections and procurement pressure points',
      'Direct feedback loop to proposal teams and service line heads for continuous iteration',
    ],
    keyDeliverable: 'Executive Quarterly Win/Loss Intelligence Briefings with actionable recommendations.',
    iconName: 'BarChart3',
    metricHighlight: '~60 Deals/Quarter Analyzed',
  },
  {
    id: 'analyst-engagements',
    title: 'Industry Analyst Surveys & Engagements',
    subtitle: 'Translating Third-Party Validation into Enterprise Deal Momentum',
    overview:
      'Managing end-to-end collaboration with premier research authorities including Gartner and Forrester across 6 to 8 annual strategic touchpoints.',
    strategicValue:
      'Elevates portfolio standing in marquee industry benchmarks (Magic Quadrants, Waves) and arms deal teams with credible third-party validations.',
    executionPillars: [
      'Coordination of executive analyst briefings, survey responses, and customer reference sessions',
      'Extraction of high-impact quotes, vendor rankings, and market forecasts for sales enablement',
      'Facilitation of leadership strategy workshops grounded in external analyst observations',
      'Creation of modular third-party proof points embedded directly into executive client pitches',
    ],
    keyDeliverable: 'Analyst Value Pipeline translating external market reports into deal pursuit wins.',
    iconName: 'Award',
    metricHighlight: '6–8 Engagements Annually',
  },
  {
    id: 'content-governance',
    title: 'Content Curation & Knowledge Governance',
    subtitle: 'Sustaining a High-Trust, Vetted Knowledge Ecosystem',
    overview:
      'Rigorous editorial gatekeeping, taxonomy governance, and asset lifecycle management to maintain relevance across 2,000+ enterprise assets.',
    strategicValue:
      'Eliminates outdated collateral, guarantees regulatory and legal compliance, and ensures sales teams only pitch verified, reproducible capabilities.',
    executionPillars: [
      'Active harvesting of new case studies, adding 100+ vetted assets annually',
      'Client sanitization protocol protecting proprietary terms and data privacy',
      'Systematic content audit cycles retiring obsolete versions and broken references',
      'Intuitive taxonomy and search indexing on SharePoint and Drupal platforms',
    ],
    keyDeliverable: 'Vetted Enterprise Asset Repository with continuous freshness governance.',
    iconName: 'CheckCircle2',
    metricHighlight: '100+ Annual New Assets',
  },
  {
    id: 'sales-enablement-pursuits',
    title: 'Sales Enablement & Deal Pursuit Support',
    subtitle: 'Embedding Strategic Readiness into 50+ Annual Enterprise Pursuits',
    overview:
      'Hands-on support for high-stakes deal teams spanning Consulting, Cloud Infrastructure, and Application Management portfolios.',
    strategicValue:
      'Accelerates bid assembly, ensures alignment with global win themes, and delivers bespoke competitive counter-strategies under tight deadlines.',
    executionPillars: [
      'Active immersion in ~50 annual deal pursuits from initial RFI through final orals',
      'Rapid curation of domain case studies, client testimonials, and delivery metrics',
      'Co-creation of executive summary narratives and commercial value propositions',
      'Integration of live competitive battlecard intelligence into pitch materials',
    ],
    keyDeliverable: 'Turnkey Proposal Packages and competitive positioning assets for flagship pursuits.',
    iconName: 'Rocket',
    metricHighlight: '50+ Annual Pursuits Enabled',
  },
];

export const CAREER_JOURNEY: CareerItem[] = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: 'Manager — Sales Enablement & Knowledge Governance',
    period: 'Aug 2010 – Present',
    location: 'Hyderabad, India',
    summary:
      'Leading Sales Enablement and Knowledge Management across Application Management and Consulting portfolios, enabling ~50 annual deal pursuits, governing a global practitioner repository of 25,000+ members, and conducting win/loss intelligence on ~60 deals per quarter.',
    highlights: [
      'Lead Sales Enablement and Knowledge Management for Application Management and Consulting portfolios, enabling ~50 annual deal pursuits through competitive intelligence and knowledge assets.',
      'Conduct structured win/loss analysis (~60 deals per quarter), identifying recurring competitive and pricing patterns to inform sales strategy and strengthen deal positioning.',
      'Own competitive intelligence program covering Tier-1 IT competitors, developing and refreshing battlecards to improve differentiation in competitive pursuits.',
      'Coordinate 6–8 annual industry analyst engagements (e.g., Gartner and Forrester), facilitating executive workshops and enabling use of analyst insights in client proposals and executive briefings.',
      'Define and execute Knowledge Management roadmap aligned to portfolio priorities, governing global knowledge repositories supporting 25,000+ members and ~2,000 curated assets.',
      'Manage content curation including case studies, taxonomy, and lifecycle governance across KM platforms (SharePoint and Drupal), improving knowledge discoverability, reuse, and proposal readiness.',
      'Drive continuous knowledge capture and refresh, adding 100+ high-value assets annually including case studies, competitive insights, proposal content, and client intelligence.',
      'Facilitate SME and CoE collaboration forums to accelerate knowledge sharing, strengthen content pipelines, and enhance sales enablement readiness.',
    ],
    technologiesAndTools: ['SharePoint', 'Drupal', 'Competitive Intelligence', 'Win/Loss Analytics', 'Analyst Relations (Gartner/Forrester)', 'Executive Enablement'],
    impactMetric: '25,000+ Members • ~50 Pursuits/Yr',
  },
  {
    id: 'tibco',
    company: 'TIBCO Software Inc.',
    role: 'Direct Marketing Specialist',
    period: 'April 2010 – Aug 2010',
    location: 'Hyderabad / Global',
    summary:
      'Drove targeted digital outreach campaigns and demand generation initiatives for enterprise software offerings, segmenting prospective client audiences and nurturing pipeline through content assets.',
    highlights: [
      'Collaborated with marketing and product teams to execute targeted campaigns promoting enterprise software offerings, supporting product awareness and customer engagement.',
      'Segmented end-user audiences and executed digital outreach campaigns, leveraging email and content assets to drive engagement and nurture prospective leads.',
      'Coordinated product webinars and campaign communications, distributing whitepapers and tracking engagement metrics to support demand generation initiatives.',
    ],
    technologiesAndTools: ['Enterprise Software Marketing', 'Audience Segmentation', 'Demand Generation', 'Campaign Analytics'],
    impactMetric: 'Digital Outreach & Pipeline Nurturing',
  },
  {
    id: 'accenture',
    company: 'Accenture',
    role: 'Senior Process Analyst — Knowledge Management',
    period: 'Sep 2006 – Apr 2010',
    location: 'India',
    summary:
      'Supported enterprise Knowledge Management operations across multiple consulting and technology portfolios, enabling structured knowledge sharing across global delivery teams and managing Knowledge Exchange (KX) portals.',
    highlights: [
      'Supported enterprise Knowledge Management operations across multiple consulting and technology portfolios, enabling structured knowledge sharing across global delivery teams.',
      'Managed Knowledge Exchange (KX) and SharePoint portals, maintaining project assets, client experience materials, and proposal documentation to support knowledge reuse.',
      'Administered portal governance and access controls using Active Directory, monitoring content performance metrics and optimizing underperforming pages to improve user engagement.',
      'Tracked engagement metrics and supported asset harvesting initiatives, strengthening knowledge reuse and collaboration across Communities of Practice (CoPs).',
    ],
    technologiesAndTools: ['Knowledge Exchange (KX)', 'SharePoint', 'Active Directory Governance', 'Communities of Practice (CoPs)', 'Metrics Analytics'],
    impactMetric: 'Multi-Portfolio KM & CoP Harvesting',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'win-loss',
    title: 'Enterprise Win/Loss Intelligence Engine',
    domain: 'Sales Intelligence & Pricing Strategy',
    subtitle: 'Institutionalizing quarterly deal outcome reviews across 60 pursuits per quarter',
    timeframe: 'Ongoing Program',
    organization: 'Capgemini — Application Management & Consulting',
    challenge:
      'Pursuit teams across diverse geographies operated without a centralized feedback loop on deal outcomes. Post-mortems were anecdotal, leaving leadership without objective data on why deals were won or lost against Tier-1 competitors, resulting in repeated pricing miscalculations and ineffective counter-positioning.',
    approach: [
      'Architected a standardized quarterly review process capturing quantitative deal parameters (pricing model, contract duration, scope) and qualitative client decision drivers.',
      'Analyzed approximately 60 deals per quarter, clustering outcomes by competitor presence, geography, and solution architecture.',
      'Established executive feedback channels connecting pursuit post-mortems directly to service line heads and sales enablement asset refresh cycles.',
    ],
    outcome: [
      'Uncovered recurring competitive patterns and pricing thresholds, directly informing future commercial deal shaping.',
      'Equipped bid leads with empirical win themes and proactive objection counters prior to RFP submission.',
      'Shifted deal teams from anecdotal assumptions to evidence-based pursuit strategies.',
    ],
    metrics: [
      { label: 'Deals Analyzed', value: '~60 / Quarter' },
      { label: 'Scope', value: 'Global Portfolios' },
      { label: 'Impact', value: 'Strategic Pricing Insights' },
    ],
    tags: ['Win/Loss Analysis', 'Pricing Intelligence', 'Deal Strategy', 'Executive Reporting'],
  },
  {
    id: 'global-km',
    title: 'Global Knowledge Management & Governance at Scale',
    domain: 'Enterprise Architecture & Knowledge Governance',
    subtitle: 'Governing enterprise repositories across SharePoint & Drupal for 25,000+ members',
    timeframe: 'Enterprise Scale',
    organization: 'Capgemini Global Portfolios',
    challenge:
      'With over 25,000 practitioners dispersed across consulting and technology portfolios, critical project deliverables, proof points, and delivery templates were siloed across fragmented team drives. Reusability was low, leading to costly duplication of effort and variable proposal quality.',
    approach: [
      'Formulated and executed an overarching Knowledge Management roadmap tightly aligned to portfolio priorities.',
      'Designed a unified metadata taxonomy and governance policy across enterprise SharePoint and Drupal stacks.',
      'Established structured content harvesting workflows and strict quality gatekeeping, adding 100+ high-value vetted assets annually.',
      'Created active SME and CoE collaboration forums to curate frontline learnings directly into central repositories.',
    ],
    outcome: [
      'Successfully scaled governed repository to support 25,000+ global members and 2,000+ curated assets.',
      'Significantly improved proposal assembly speed and asset discoverability across high-volume pursuits.',
      'Established a living ecosystem where intellectual capital is systematically captured, refreshed, and retired.',
    ],
    metrics: [
      { label: 'Practitioners', value: '25,000+ Supported' },
      { label: 'Curated Assets', value: '2,000+ Governed' },
      { label: 'Annual Growth', value: '100+ New Assets/Yr' },
    ],
    tags: ['Knowledge Governance', 'SharePoint', 'Drupal', 'Taxonomy', 'CoP Enablement'],
  },
  {
    id: 'battlecards',
    title: 'Tier-1 Competitive Intelligence & Battlecard Suite',
    domain: 'Competitive Intelligence & Deal Readiness',
    subtitle: 'Empowering 50+ annual pursuits with field-ready competitor differentiation',
    timeframe: 'Continuous Operational Program',
    organization: 'Capgemini Consulting & Application Services',
    challenge:
      'In high-stakes competitive bids against aggressive Tier-1 IT services firms, pursuit teams often lacked granular, up-to-date insight into competitor delivery models, pricing tendencies, and common FUD (Fear, Uncertainty, Doubt) tactics deployed against our proposals.',
    approach: [
      'Took ownership of the competitive intelligence program specifically focused on primary Tier-1 global IT competitors.',
      'Monitored competitor moves, financial disclosures, client wins, and solution capabilities on an ongoing basis.',
      'Synthesized complex competitor dynamics into concise, accessible battlecards featuring tailored win themes, counter-arguments, and trap-setting questions.',
      'Actively participated in pursuit war rooms to tailor competitor intelligence to specific client scenarios.',
    ],
    outcome: [
      'Enabled ~50 annual deal pursuit teams with decisive competitive differentiation during high-value bids.',
      'Standardized competitor counter-messaging across North American and global enterprise teams.',
      'Elevated proposal defense readiness during client oral presentations and executive briefings.',
    ],
    metrics: [
      { label: 'Annual Pursuits', value: '50+ Supported' },
      { label: 'Competitors Covered', value: 'Tier-1 IT Rivals' },
      { label: 'Deliverables', value: 'Living Battlecards' },
    ],
    tags: ['Competitive Intelligence', 'Battlecards', 'Pursuit Readiness', 'Tier-1 IT Rivals'],
  },
  {
    id: 'analyst-insights',
    title: 'Analyst Engagement & Sales Enablement Integration',
    domain: 'Analyst Relations & Market Positioning',
    subtitle: 'Bridging Gartner and Forrester evaluations directly into client proposals',
    timeframe: 'Annual Recurring Program',
    organization: 'Global Technology Portfolios',
    challenge:
      'Industry analyst research and evaluations from firms like Gartner and Forrester were frequently viewed as corporate marketing assets, rarely making their way to frontline sales pursuit teams in a format that could directly influence client buying decisions.',
    approach: [
      'Coordinated 6–8 annual strategic engagements with leading analyst firms (Gartner, Forrester), managing briefing agendas and survey responses.',
      'Facilitated executive workshops bridging analyst critiques and praise directly to portfolio service leads.',
      'Distilled exhaustive analyst research into modular, compliant proof points and visual positioning assets ready for insertion into enterprise client proposals.',
    ],
    outcome: [
      'Positioned third-party analyst credibility at the center of client proposals and executive briefings.',
      'Strengthened executive relationship readiness through tailored analyst perspectives during critical RFP orals.',
      'Maintained consistent, active alignment with global research firms across 6–8 major cycles each year.',
    ],
    metrics: [
      { label: 'Engagements', value: '6–8 / Year' },
      { label: 'Firms', value: 'Gartner & Forrester' },
      { label: 'Application', value: 'Proposal Integration' },
    ],
    tags: ['Analyst Relations', 'Gartner', 'Forrester', 'Proposal Positioning', 'Market Validation'],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'iimk',
    institution: 'Indian Institute of Management Kozhikode (IIM Kozhikode)',
    degree: 'Advanced Strategic Management Programme',
    focus: 'Executive Business Strategy, Corporate Growth, Competitive Positioning, and Global Leadership',
    location: 'Kozhikode, India',
    badge: 'Executive Management',
  },
  {
    id: 'pgdba',
    institution: 'Post Graduate Diploma in Business Administration',
    degree: 'PGDBA',
    focus: 'Business Administration, Enterprise Operations, Strategic Marketing, and Organizational Behavior',
    badge: 'Postgraduate',
  },
  {
    id: 'be',
    institution: 'Bachelor of Engineering',
    degree: 'B.E. Computer Science',
    focus: 'Computer Science, Systems Engineering, Software Architecture, and Information Systems',
    badge: 'Engineering',
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'ckm',
    title: 'Certified Knowledge Manager (CKM)',
    issuer: 'IIT Kharagpur (NPTEL)',
    type: 'Domain Certification',
    badge: 'IIT Kharagpur',
  },
  {
    id: 'iit-suite',
    title: "Certificates in 'Sales & Distribution Management', 'Managerial Economics', 'Design Thinking' & 'Project Management'",
    issuer: 'IIT and NPTEL',
    type: 'Executive',
    badge: 'IIT NPTEL Suite',
  },
  {
    id: 'capgemini-flm',
    title: 'First Line Manager Certification Program',
    issuer: 'Capgemini',
    type: 'Management',
    badge: 'Capgemini Leadership',
  },
  {
    id: 'google-pm',
    title: 'Google Project Management Professional Certificate',
    issuer: 'Google',
    type: 'Domain Certification',
    badge: 'Google Certified',
  },
  {
    id: 'azure',
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    type: 'Technical / Cloud',
    badge: 'Microsoft Certified',
  },
];

export const THOUGHT_LEADERSHIP: ThoughtLeadershipArticle[] = [
  {
    id: 'win-loss-moats',
    title: 'Transforming Win/Loss Data into Competitive Moats: Beyond Win-Rate Percentages',
    category: 'Win/Loss Analysis',
    readingTime: '5 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'Most enterprise organizations track win rates as a trailing metric. True competitive advantage comes from systematically unearthing the recurrent micro-patterns across 60+ deals every quarter.',
    keyTakeaways: [
      'Treating win/loss reviews as structural intelligence rather than post-mortem blame exercises.',
      'Isolating where pricing thresholds trigger competitor displacement across consulting and managed services.',
      'Closing the feedback loop: turning post-deal debriefs into dynamic battlecard refreshes within 14 days.',
    ],
    fullContent: [
      'Across 18+ years in sales enablement and knowledge strategy, one reality remains constant: sales teams celebrate wins quickly and move past losses even faster. Yet, the most profitable strategic insights in enterprise technology consulting lie buried inside the deal post-mortems.',
      'When an organization evaluates approximately 60 deals per quarter systematically, the analysis ceases to be anecdotal. It reveals structural market patterns: recurring pricing cliffs where Tier-1 competitors underbid, specific capability claims where buyers felt skepticism, and delivery model nuances that tipped the committee.',
      'To build a competitive moat, sales leaders must institutionalize a three-part discipline: First, decouple post-deal discovery from sales compensation bias. Second, map client feedback against solution architecture rather than sales charisma. Third, ensure findings immediately refresh live proposal templates and competitor battlecards so that future pursuits never make the same error twice.',
    ],
  },
  {
    id: 'knowledge-governance-scale',
    title: 'Knowledge Governance vs. Knowledge Hoarding: Scaling Repositories for 25,000+ Practitioners',
    category: 'Knowledge Strategy',
    readingTime: '6 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'Creating a repository is trivial; sustaining relevance across 2,000+ assets for a 25,000+ global workforce requires strict taxonomy hygiene, lifecycle gatekeeping, and practitioner trust.',
    keyTakeaways: [
      'The paradox of knowledge abundance: more content often leads to lower pursuit velocity if discovery is uncurated.',
      'Implementing strict deprecation cycles to purge obsolete credentials and maintain high trust.',
      'Active harvesting: converting CoP dialogue into verified, reusable case studies and proposal components.',
    ],
    fullContent: [
      'In large technology and consulting enterprises, knowledge repositories often decay into digital attics. When practitioners cannot quickly locate a verified case study within 90 seconds, they abandon the system and reinvent the wheel from scratch.',
      'Managing an ecosystem supporting 25,000+ practitioners requires treating knowledge as a governed asset pipeline with strict quality gates. It is not enough to store documents; each asset must possess standardized metadata, defined ownership, an expiration horizon, and verified commercial applicability.',
      'At scale, a curated library of 2,000 high-trust assets outperforms an unmanaged sprawl of 50,000 unverified files every time. By establishing continuous content curation and adding 100+ vetted, sanitized assets annually, organizations compress pursuit response times and protect margins.',
    ],
  },
  {
    id: 'battlecards-that-win',
    title: 'Battlecards That Win: Bridging Market Intelligence from Analysts to Pursuit War Rooms',
    category: 'Competitive Intelligence',
    readingTime: '4 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'A 40-page competitor briefing document will never be read in the heat of a bid. How to synthesize Tier-1 competitive insights into actionable, high-velocity battlecards.',
    keyTakeaways: [
      'Condensing deep competitor reconnaissance into 3 critical dimensions: Trap Setting, Objection Handling, and Verified Proof.',
      'Translating competitor public financials and delivery weaknesses into client-friendly discovery questions.',
      'Aligning battlecard refresh cadences to match competitor corporate shifts and quarterly earnings disclosures.',
    ],
    fullContent: [
      'Competitive intelligence in enterprise technology consulting often suffers from a fatal flaw: it is compiled by researchers who have never sat in a final oral presentation or answered a 300-question RFP with a midnight deadline.',
      'To be genuinely useful, competitive intelligence must be field-ready. High-performing battlecards do not offer encyclopedic corporate histories; they answer three critical questions for the bid director: What will the competitor say about our delivery model? Where is the competitor’s pricing structure vulnerable? And what specific question can we teach the client procurement team to ask our rival?',
      'When competitive intelligence is paired with continuous quarterly win/loss data, battlecards transition from generic marketing brochures into surgical pursuit weapons that win multi-million dollar deals.',
    ],
  },
  {
    id: 'analyst-relations-impact',
    title: 'From Evaluator to Commercial Ally: Integrating Gartner & Forrester into Pursuit Narratives',
    category: 'Sales Enablement',
    readingTime: '5 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'Industry analyst recognition is too valuable to leave sequestered on a corporate website. How senior enablement leaders operationalize analyst insights directly into client proposals.',
    keyTakeaways: [
      'Coordinating 6–8 annual analyst engagements with a dual focus: market recognition and sales enablement ammo.',
      'Transforming Magic Quadrant and Wave positioning into defensible proposal win themes.',
      'Preparing executive briefing packages that leverage third-party evaluative rigor to de-risk enterprise decision-making.',
    ],
    fullContent: [
      'For enterprise buyers in Fortune 500 organizations, hiring a major technology consulting partner is fundamentally an exercise in risk mitigation. This is where third-party analyst recognition becomes a definitive commercial accelerator.',
      'Too often, analyst relations teams celebrate a favorable Magic Quadrant or Wave report, post it on social channels, and consider their job done. In contrast, a strategic sales enablement practice dissects the evaluation to isolate specific differentiators highlighted by Gartner or Forrester.',
      'By facilitating 6–8 structured analyst engagements annually, we continuously calibrate our portfolio positioning against global market movements. We then translate those insights into modular proposal proof points that bid teams seamlessly weave into executive summaries, giving enterprise buyers the third-party validation needed to choose our solution with complete confidence.',
    ],
  },
];
