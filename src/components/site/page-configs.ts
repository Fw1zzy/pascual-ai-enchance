// Content configs for all secondary pages. Kept centralized so each route file
// stays tiny and content is authored (and reviewed) in one place.
import {
  Bot, Cpu, Workflow, Shield, Sparkles, Boxes, Cloud, Plug, GitBranch, Network,
  LineChart, BarChart3, Gauge, Globe, Smartphone, Layers, Database,
  Heart, Landmark, ShoppingBag, Factory, Truck, GraduationCap, Briefcase,
  Compass, Rocket, Code2, ArrowUpCircle, Palette, Target, LifeBuoy,
  BookOpen, FileText, FileCode, Trophy, HelpCircle, MessageSquare, Users, Newspaper, Handshake, Info,
  Zap, Lock, Search, Settings2, Building2, Activity,
} from "lucide-react";
import type { ContentPageConfig } from "./ContentPage";

const defaultFAQs = [
  { q: "How quickly can we get started?", a: "Most engagements kick off within a week. A senior Pascual.ai team scopes the project, agrees on outcomes and starts delivery in fixed sprints." },
  { q: "Is Pascual.ai enterprise-secure?", a: "Yes. SOC 2 Type II, ISO 27001, GDPR and HIPAA compliant, with SSO, RBAC and dedicated infrastructure available for regulated industries." },
  { q: "Do you integrate with our existing stack?", a: "We support 100+ native integrations and build custom connectors when needed — from Salesforce and SAP to your internal APIs." },
  { q: "Who owns the resulting IP?", a: "You do. Custom software, models and data pipelines built by Pascual.ai are yours, with full source access." },
];

const outcomeStats = {
  items: [
    { value: "4×", label: "Faster time-to-value" },
    { value: "60%", label: "Operational cost saved" },
    { value: "99.99%", label: "Platform uptime" },
    { value: "200+", label: "Enterprise deployments" },
  ],
};

/* ============ PRODUCTS ============ */

export const productConfigs: Record<string, ContentPageConfig> = {
  "ai-automation": {
    eyebrow: "AI Solutions · Automation",
    title: "AI Automation that runs your business end-to-end",
    description: "Automate any repetitive process — from customer operations to back-office workflows — with AI that understands context, takes action and learns from every run.",
    features: {
      eyebrow: "Capabilities",
      heading: "Automation designed for enterprise complexity",
      items: [
        { icon: Bot, title: "Autonomous workflows", desc: "Trigger, decide, act. Every step observable and reversible." },
        { icon: Workflow, title: "Visual builder", desc: "Drag-and-drop composition your ops team can own." },
        { icon: Plug, title: "100+ integrations", desc: "Native connectors to CRMs, ERPs, data warehouses and messaging." },
        { icon: Shield, title: "Governance & audit", desc: "Fine-grained permissions, run history, versioning." },
        { icon: Zap, title: "Real-time triggers", desc: "React to events, webhooks or schedules at sub-second latency." },
        { icon: Activity, title: "Live observability", desc: "Metrics, tracing and alerts for every workflow." },
      ],
    },
    splits: [
      {
        eyebrow: "How it feels",
        title: "One console for every automation",
        description: "Design, deploy and monitor every workflow in a single unified interface — no more chasing scripts across teams.",
        bullets: ["Unified control plane", "Environment separation (dev/stage/prod)", "One-click rollback on any run"],
      },
    ],
    steps: {
      heading: "From idea to production in four steps",
      items: [
        { title: "Discover", desc: "We map processes ripe for automation and rank by ROI." },
        { title: "Design", desc: "Blueprint workflows with your team using our visual builder." },
        { title: "Deploy", desc: "Ship to production with monitoring & rollbacks baked in." },
        { title: "Scale", desc: "Continuously optimize with usage analytics and A/B tests." },
      ],
    },
    cards: {
      eyebrow: "Where teams use it",
      heading: "Automation examples across the enterprise",
      items: [
        { icon: Building2, title: "Finance ops", desc: "Invoice triage, reconciliation & fraud detection." },
        { icon: Users, title: "HR & IT", desc: "Onboarding, ticket routing, access provisioning." },
        { icon: BarChart3, title: "Revenue ops", desc: "Lead enrichment, routing and account intelligence." },
        { icon: Settings2, title: "Supply chain", desc: "Order orchestration, exception handling, ETA prediction." },
        { icon: Shield, title: "Compliance", desc: "Continuous controls monitoring and evidence capture." },
        { icon: MessageSquare, title: "Customer ops", desc: "Case triage, drafting and multi-channel replies." },
      ],
    },
    stats: outcomeStats,
    faqs: defaultFAQs,
  },
  "ai-agents": {
    eyebrow: "AI Solutions · Agents",
    title: "AI Agents that get real work done",
    description: "Deploy autonomous, tool-using agents that reason across your systems, take actions and hand off to humans with full context — enterprise-safe by default.",
    features: {
      eyebrow: "Agent capabilities",
      heading: "Autonomy, grounded in your enterprise reality",
      items: [
        { icon: Cpu, title: "Reasoning + tools", desc: "Agents plan multi-step tasks and call the right tools per step." },
        { icon: Database, title: "Grounded on your data", desc: "Retrieval over your systems with source citations." },
        { icon: Shield, title: "Guardrails & policies", desc: "Content, action and permission guardrails on every turn." },
        { icon: Users, title: "Human-in-the-loop", desc: "Escalate & handoff to humans with structured context." },
        { icon: Activity, title: "Observability", desc: "Every step traced. Reproducible, auditable, safe." },
        { icon: Plug, title: "Integrations", desc: "Native connectors and a typed tool SDK." },
      ],
    },
    splits: [
      {
        eyebrow: "Enterprise use cases",
        title: "Agents already replacing internal tools",
        description: "From support triage to procurement to internal helpdesks — teams deploy Pascual.ai agents where a workflow used to live.",
        bullets: ["Customer support co-pilot & auto-resolve", "IT & HR help desk agents", "Procurement, RFP and contract agents"],
      },
    ],
    cards: {
      eyebrow: "Integrations",
      heading: "Works with the stack you already run",
      items: [
        { icon: Cloud, title: "Cloud data", desc: "Snowflake, BigQuery, Databricks, Redshift." },
        { icon: MessageSquare, title: "Messaging", desc: "Slack, Teams, WhatsApp, email." },
        { icon: Boxes, title: "Business systems", desc: "Salesforce, HubSpot, SAP, NetSuite, Workday." },
      ],
    },
    faqs: defaultFAQs,
  },
  "custom-ai-development": {
    eyebrow: "AI Solutions · Custom",
    title: "Custom AI development, engineered to your data",
    description: "Purpose-built models, retrieval systems and AI applications designed around your data, workflows and constraints — delivered by senior AI engineers.",
    features: {
      eyebrow: "What we build",
      items: [
        { icon: Sparkles, title: "Fine-tuned models", desc: "Domain-adapted LLMs on your proprietary data." },
        { icon: Search, title: "Retrieval systems", desc: "High-recall RAG pipelines with hybrid search." },
        { icon: Bot, title: "AI applications", desc: "End-to-end apps around your custom models." },
        { icon: Shield, title: "Evaluations", desc: "Robust eval harnesses and red-teaming." },
        { icon: Activity, title: "MLOps", desc: "Training, deployment, monitoring and rollback." },
        { icon: Lock, title: "Private deployment", desc: "In your VPC or on-prem when required." },
      ],
    },
    timeline: {
      heading: "Our custom AI delivery process",
      items: [
        { tag: "Week 1-2", title: "Discovery & data audit", desc: "Understand the problem, data landscape, constraints and success metrics." },
        { tag: "Week 3-5", title: "Prototype & baseline", desc: "Ship a working prototype and measure against a real baseline." },
        { tag: "Week 6-10", title: "Production system", desc: "Harden pipelines, evals, monitoring and integrations." },
        { tag: "Ongoing", title: "Iterate & scale", desc: "Continuous model improvement with feedback loops." },
      ],
    },
    faqs: defaultFAQs,
  },
  "enterprise-ai-solutions": {
    eyebrow: "AI Solutions · Enterprise",
    title: "Enterprise AI, deployed responsibly at scale",
    description: "The Pascual.ai platform brings agents, automation, custom models and governance together — with the security, compliance and support enterprises require.",
    features: {
      eyebrow: "Enterprise-grade",
      heading: "Built for how large organizations actually work",
      items: [
        { icon: Shield, title: "Security & compliance", desc: "SOC 2 Type II, ISO 27001, HIPAA, GDPR." },
        { icon: Lock, title: "Private deployment", desc: "VPC, hybrid or on-prem options." },
        { icon: Users, title: "SSO & RBAC", desc: "SAML, OIDC and granular role controls." },
        { icon: Activity, title: "Observability", desc: "Traces, metrics, logs across every AI call." },
        { icon: Settings2, title: "Governance", desc: "Model registry, approvals, evaluations." },
        { icon: LifeBuoy, title: "24/7 support", desc: "Dedicated CSM and SRE-backed SLAs." },
      ],
    },
    splits: [
      { eyebrow: "One platform", title: "All the AI your enterprise needs, in one place", description: "Agents, workflows, models, retrieval, evals and analytics — consolidated on Pascual.ai.", bullets: ["Consolidate vendor sprawl", "One control plane, one bill", "Consistent security posture"] },
    ],
    stats: outcomeStats,
    faqs: defaultFAQs,
  },
  "web-applications": {
    eyebrow: "Software Solutions · Web",
    title: "Web applications that feel like the best products in the world",
    description: "We design and engineer performant, accessible, delightful web products — from customer-facing platforms to complex internal tools.",
    features: {
      eyebrow: "How we build",
      items: [
        { icon: Zap, title: "Blazing performance", desc: "Sub-second interactions, edge-first delivery." },
        { icon: Palette, title: "World-class design", desc: "Product designers who ship, not decorate." },
        { icon: Code2, title: "Modern stack", desc: "React, TypeScript, Node, Postgres, edge runtimes." },
        { icon: Shield, title: "Secure by default", desc: "OWASP-hardened, SSO, audit trails." },
        { icon: Activity, title: "Observability", desc: "Analytics and product telemetry from day one." },
        { icon: LifeBuoy, title: "Long-term care", desc: "SLA-backed support and continuous improvement." },
      ],
    },
    steps: {
      heading: "Our web delivery approach",
      items: [
        { title: "Discovery", desc: "User research, technical audit, roadmap." },
        { title: "Design", desc: "Prototypes and a real design system." },
        { title: "Engineer", desc: "Ship in fixed 2-week sprints." },
        { title: "Scale", desc: "Optimize, iterate, support 24/7." },
      ],
    },
    faqs: defaultFAQs,
  },
  "mobile-applications": {
    eyebrow: "Software Solutions · Mobile",
    title: "Native mobile apps that feel effortless",
    description: "iOS and Android apps built by senior mobile engineers who care about performance, accessibility, offline behavior and long-term maintainability.",
    features: {
      eyebrow: "What you get",
      items: [
        { icon: Smartphone, title: "Native performance", desc: "Swift, Kotlin, React Native — chosen for fit." },
        { icon: Zap, title: "Offline-first", desc: "Robust sync, conflict resolution and edge caching." },
        { icon: Shield, title: "App-grade security", desc: "Biometrics, secure storage, MDM support." },
        { icon: Palette, title: "Delightful UX", desc: "Motion, haptics and platform conventions done right." },
        { icon: Activity, title: "Analytics & crash", desc: "Deep telemetry so you understand real users." },
        { icon: Cloud, title: "Cloud sync", desc: "Backends and APIs designed for mobile-first." },
      ],
    },
    faqs: defaultFAQs,
  },
  "saas-platforms": {
    eyebrow: "Software Solutions · SaaS",
    title: "Multi-tenant SaaS platforms, engineered to scale",
    description: "We architect and build SaaS platforms with the tenancy, billing, security and reliability that enterprise buyers demand.",
    features: {
      eyebrow: "SaaS fundamentals",
      items: [
        { icon: Layers, title: "Multi-tenancy", desc: "Row-level, schema-level or dedicated — chosen per fit." },
        { icon: Landmark, title: "Billing & metering", desc: "Usage-based, seat-based, hybrid — no lock-in." },
        { icon: Shield, title: "Enterprise security", desc: "SSO, SCIM, audit, data residency." },
        { icon: Activity, title: "Observability", desc: "Per-tenant metrics, tracing and SLOs." },
        { icon: Cloud, title: "Global scale", desc: "Multi-region with regional data pinning." },
        { icon: Plug, title: "Extensibility", desc: "Public APIs, webhooks and marketplace-ready." },
      ],
    },
    faqs: defaultFAQs,
  },
  "internal-business-systems": {
    eyebrow: "Software Solutions · Internal",
    title: "Internal systems that unblock your teams",
    description: "Custom ERPs, CRMs, ops consoles and admin portals that fit exactly how your business runs — and that people actually love using.",
    features: {
      eyebrow: "Common systems",
      items: [
        { icon: Boxes, title: "Custom ERP", desc: "Inventory, procurement, finance in one system." },
        { icon: Users, title: "Custom CRM", desc: "Built to your sales & service motion." },
        { icon: Settings2, title: "Ops consoles", desc: "Deep tools for internal power users." },
        { icon: Activity, title: "BI baked in", desc: "Reports and dashboards native to the app." },
        { icon: Shield, title: "Auditable", desc: "Every action logged, roles enforced." },
        { icon: Plug, title: "Integrated", desc: "Talks to SAP, Salesforce, NetSuite, Workday." },
      ],
    },
    faqs: defaultFAQs,
  },
  "cloud-integration": {
    eyebrow: "Cloud & Infrastructure",
    title: "Cloud integration, without vendor lock-in",
    description: "Unify AWS, Azure, GCP and private cloud in a coherent architecture that supports every workload — from AI to compliance-heavy systems.",
    features: {
      eyebrow: "Capabilities",
      items: [
        { icon: Cloud, title: "Multi-cloud architecture", desc: "Deploy where it makes sense, orchestrate centrally." },
        { icon: Plug, title: "iPaaS & connectors", desc: "Integration platform to reduce point-to-point sprawl." },
        { icon: Shield, title: "Zero-trust posture", desc: "Identity-aware access across every environment." },
        { icon: Activity, title: "FinOps", desc: "Cost visibility and continuous optimization." },
        { icon: Network, title: "Networking", desc: "Private links, service mesh, global DNS." },
        { icon: Database, title: "Data movement", desc: "CDC, replication, lakehouses." },
      ],
    },
    faqs: defaultFAQs,
  },
  "api-development": {
    eyebrow: "Cloud & Infrastructure · APIs",
    title: "API platforms that scale for years",
    description: "REST, GraphQL and event-driven APIs designed with versioning, docs, SDKs and observability from day one.",
    features: {
      eyebrow: "What you get",
      items: [
        { icon: Plug, title: "REST & GraphQL", desc: "The right shape for each consumer." },
        { icon: Code2, title: "Typed SDKs", desc: "Generated SDKs in every major language." },
        { icon: BookOpen, title: "First-class docs", desc: "Interactive docs your customers actually use." },
        { icon: Shield, title: "Auth & rate limits", desc: "OAuth, mTLS, API keys, quotas." },
        { icon: Activity, title: "Analytics", desc: "Per-endpoint metrics, tracing, SLOs." },
        { icon: GitBranch, title: "Versioning", desc: "Non-breaking evolution across generations." },
      ],
    },
    faqs: defaultFAQs,
  },
  "devops": {
    eyebrow: "Cloud & Infrastructure · DevOps",
    title: "DevOps that lets your team ship every day",
    description: "CI/CD, infrastructure-as-code, observability and platform engineering — built so every team can ship safely without waiting on ops.",
    features: {
      eyebrow: "Practices",
      items: [
        { icon: GitBranch, title: "CI/CD pipelines", desc: "Fast, reliable pipelines from commit to prod." },
        { icon: Cloud, title: "Infra as code", desc: "Terraform, Pulumi, Kubernetes." },
        { icon: Activity, title: "Observability", desc: "Logs, metrics, tracing, alerting." },
        { icon: Shield, title: "DevSecOps", desc: "Security scanning built into pipelines." },
        { icon: Zap, title: "Platform engineering", desc: "Internal dev platforms that boost velocity." },
        { icon: LifeBuoy, title: "On-call maturity", desc: "SRE practices, runbooks, blameless postmortems." },
      ],
    },
    faqs: defaultFAQs,
  },
  "system-architecture": {
    eyebrow: "Cloud & Infrastructure · Architecture",
    title: "System architecture that ages well",
    description: "Deep architecture engagements to design systems that are performant, evolvable, secure and financially sustainable at scale.",
    features: {
      eyebrow: "Deliverables",
      items: [
        { icon: Network, title: "Reference architecture", desc: "Blueprints tailored to your domain." },
        { icon: Layers, title: "Domain modeling", desc: "Bounded contexts and clean seams." },
        { icon: Cloud, title: "Cloud selection", desc: "Right tool, right layer, right cost." },
        { icon: Shield, title: "Security review", desc: "Threat models and control mapping." },
        { icon: Activity, title: "Load & perf plan", desc: "Capacity, scaling, resiliency." },
        { icon: BookOpen, title: "Decision records", desc: "Every choice traced and justified." },
      ],
    },
    faqs: defaultFAQs,
  },
  "business-intelligence": {
    eyebrow: "Data & Analytics · BI",
    title: "Business intelligence that leaders actually use",
    description: "From raw data to trusted dashboards — modeled, governed and delivered so every decision is data-informed.",
    features: {
      eyebrow: "BI capabilities",
      items: [
        { icon: LineChart, title: "Semantic layer", desc: "One trusted definition of every metric." },
        { icon: Gauge, title: "Executive dashboards", desc: "Purpose-built, always fresh." },
        { icon: Users, title: "Self-serve", desc: "Business users answer their own questions." },
        { icon: Shield, title: "Governance", desc: "Row-level security and lineage." },
        { icon: Activity, title: "Alerting", desc: "Anomalies and thresholds delivered to teams." },
        { icon: Cloud, title: "Warehouse-native", desc: "Snowflake, BigQuery, Databricks, Redshift." },
      ],
    },
    faqs: defaultFAQs,
  },
  "data-analytics": {
    eyebrow: "Data & Analytics",
    title: "Unify, model and explore all your data",
    description: "Modern data stack engagements: ingestion, modeling, warehousing, transformation and activation — done right, once.",
    features: {
      eyebrow: "Capabilities",
      items: [
        { icon: Cloud, title: "Ingestion", desc: "SaaS, event streams, DBs, files." },
        { icon: Database, title: "Warehouse & lakehouse", desc: "Modeled for analytics and AI." },
        { icon: Layers, title: "dbt & modeling", desc: "Testable, versioned transformations." },
        { icon: Activity, title: "Reverse ETL", desc: "Data back into the tools teams use." },
        { icon: Shield, title: "Governance", desc: "Cataloging, lineage, privacy." },
        { icon: LineChart, title: "Analytics", desc: "BI, ML and ad-hoc exploration." },
      ],
    },
    faqs: defaultFAQs,
  },
  "ai-insights": {
    eyebrow: "Data & Analytics · AI",
    title: "AI insights: predictive and prescriptive",
    description: "Go beyond dashboards. Forecast, classify, cluster and recommend — with models delivered into the tools your teams already use.",
    features: {
      eyebrow: "What we deliver",
      items: [
        { icon: Sparkles, title: "Forecasting", desc: "Demand, revenue, churn, capacity." },
        { icon: Cpu, title: "Classification", desc: "Segmentation, routing, prioritization." },
        { icon: Search, title: "Anomaly detection", desc: "Signal in noisy operational data." },
        { icon: Users, title: "Recommendations", desc: "Personalization across products and channels." },
        { icon: Activity, title: "Explainability", desc: "Interpretable models where it matters." },
        { icon: Shield, title: "Responsible AI", desc: "Fairness, bias and monitoring built in." },
      ],
    },
    faqs: defaultFAQs,
  },
  "reporting-dashboard": {
    eyebrow: "Data & Analytics · Dashboards",
    title: "Live enterprise dashboards, built for the boardroom",
    description: "Beautiful, real-time dashboards for executives, operators and analysts — designed by our team, powered by your data.",
    features: {
      eyebrow: "Features",
      items: [
        { icon: Gauge, title: "Real-time metrics", desc: "Sub-second refresh on any KPI." },
        { icon: LineChart, title: "Executive views", desc: "Board-ready visuals and narratives." },
        { icon: Users, title: "Role-based views", desc: "Every team sees what matters to them." },
        { icon: Activity, title: "Alerts & digests", desc: "Insights delivered proactively." },
        { icon: Shield, title: "Secure sharing", desc: "External sharing with controls." },
        { icon: Cloud, title: "Warehouse-native", desc: "Runs against your existing data." },
      ],
    },
    faqs: defaultFAQs,
  },
};

/* ============ SOLUTIONS (industries) ============ */
type IndustryDef = { icon: any; title: string; desc: string; challenges: string[]; outcomes: string[]; useCases: { title: string; desc: string }[] };
const industries: Record<string, IndustryDef> = {
  healthcare: {
    icon: Heart, title: "AI for healthcare that clinicians trust",
    desc: "Clinical decision support, patient experience and back-office automation — built HIPAA-first with the rigor healthcare demands.",
    challenges: ["Fragmented patient data", "Clinician burnout", "Complex compliance (HIPAA, HITRUST)", "Slow claims and prior-auth"],
    outcomes: ["30% shorter documentation time", "24/7 patient triage & scheduling", "Automated prior-auth workflows", "Predictive risk stratification"],
    useCases: [
      { title: "Ambient clinical documentation", desc: "AI listens, drafts notes and files back to the EHR." },
      { title: "Patient engagement agents", desc: "24/7 scheduling, reminders and triage." },
      { title: "Prior-auth automation", desc: "End-to-end submission with payer integrations." },
      { title: "Population health AI", desc: "Risk stratification and outreach at scale." },
    ],
  },
  finance: {
    icon: Landmark, title: "AI for finance, engineered for compliance",
    desc: "Risk, compliance, customer experience and internal ops — with the auditability and controls regulated institutions need.",
    challenges: ["Manual KYC/AML", "Legacy systems", "Rising fraud sophistication", "Personalization at scale"],
    outcomes: ["70% faster KYC/AML", "Real-time fraud detection", "Hyper-personalized customer service", "Straight-through processing"],
    useCases: [
      { title: "KYC & onboarding AI", desc: "Document, identity and risk in one pipeline." },
      { title: "Fraud & AML detection", desc: "Real-time signals with explainable alerts." },
      { title: "Customer service agents", desc: "Voice & chat with compliance guardrails." },
      { title: "Regulatory reporting", desc: "Automated data collection & filings." },
    ],
  },
  retail: {
    icon: ShoppingBag, title: "AI for retail: personalization at scale",
    desc: "Turn commerce data into revenue with recommendations, search, marketing automation and inventory intelligence.",
    challenges: ["Generic experiences", "Inventory imbalances", "Rising acquisition costs", "Slow merchandising decisions"],
    outcomes: ["+18% conversion from personalization", "-30% stockouts", "AI-powered marketing at scale", "Faster merchandising cycles"],
    useCases: [
      { title: "Product recommendations", desc: "Personalized across web, app and email." },
      { title: "Search & discovery", desc: "Semantic search that understands intent." },
      { title: "Demand forecasting", desc: "SKU-level, store-level accuracy." },
      { title: "Marketing automation", desc: "Segmentation, creative and orchestration." },
    ],
  },
  manufacturing: {
    icon: Factory, title: "Factory-floor intelligence for modern manufacturing",
    desc: "Predictive maintenance, quality vision, supply chain optimization and operator co-pilots — deployed to real production environments.",
    challenges: ["Unplanned downtime", "Quality escapes", "Complex supplier networks", "Skills gaps on the floor"],
    outcomes: ["-25% unplanned downtime", "+15% first-pass yield", "Real-time supply visibility", "Operator co-pilots on every shift"],
    useCases: [
      { title: "Predictive maintenance", desc: "Sensor + model driven interventions." },
      { title: "Computer vision QA", desc: "Vision models catching defects live." },
      { title: "Supply chain twin", desc: "End-to-end visibility & simulation." },
      { title: "Operator co-pilots", desc: "AI assistants at the workstation." },
    ],
  },
  logistics: {
    icon: Truck, title: "Real-time AI for supply chain & logistics",
    desc: "Optimize routing, ETAs, exception handling and warehouse ops with AI models tuned to your network.",
    challenges: ["Volatile ETAs", "Manual exception handling", "Rising fuel & labor cost", "Fragmented visibility"],
    outcomes: ["+95% ETA accuracy", "-40% exception handling time", "Route optimization at scale", "Unified control tower"],
    useCases: [
      { title: "Dynamic routing", desc: "Route & load optimization in real time." },
      { title: "ETA prediction", desc: "Models tuned to your lanes and events." },
      { title: "Exception agents", desc: "Detect, classify and act on disruptions." },
      { title: "Warehouse automation", desc: "Slotting, picking, replenishment AI." },
    ],
  },
  education: {
    icon: GraduationCap, title: "AI-powered platforms for modern education",
    desc: "Adaptive learning, faculty productivity and student success analytics — from K-12 to higher ed to enterprise learning.",
    challenges: ["One-size-fits-all instruction", "Faculty admin overload", "Student attrition", "Fragmented data"],
    outcomes: ["Adaptive learning paths", "Automated grading & feedback", "Early-warning student analytics", "Unified data platform"],
    useCases: [
      { title: "Adaptive learning", desc: "Content and pacing tuned to each learner." },
      { title: "AI tutors", desc: "Subject-expert AI available 24/7." },
      { title: "Grading assistance", desc: "Faster, fairer, explainable feedback." },
      { title: "Retention analytics", desc: "Identify and support at-risk students." },
    ],
  },
  government: {
    icon: Shield, title: "Secure, compliant modernization for government",
    desc: "Modernize citizen services, internal operations and data infrastructure with an AI partner cleared to work in secure environments.",
    challenges: ["Legacy systems", "Rising citizen expectations", "Strict compliance", "Workforce constraints"],
    outcomes: ["Modern citizen portals", "AI-assisted casework", "Fraud & benefits integrity", "Secure data platforms"],
    useCases: [
      { title: "Citizen service agents", desc: "24/7 multilingual service portals." },
      { title: "Casework AI", desc: "Draft, classify, prioritize case actions." },
      { title: "Benefits integrity", desc: "Fraud detection with explainability." },
      { title: "Data modernization", desc: "Cloud, warehousing and interoperability." },
    ],
  },
  enterprise: {
    icon: Briefcase, title: "Cross-functional transformation for the modern enterprise",
    desc: "For organizations rolling out AI across every function — Pascual.ai delivers the platform, delivery pods and change management to succeed.",
    challenges: ["AI initiative sprawl", "Governance & risk", "Change management", "Measuring ROI"],
    outcomes: ["A single AI platform", "Enterprise-wide governance", "Adoption playbooks", "Clear, tracked ROI"],
    useCases: [
      { title: "Center of Excellence", desc: "Stand up an internal AI CoE fast." },
      { title: "Cross-functional agents", desc: "Sales, marketing, ops, HR, finance." },
      { title: "Governance program", desc: "Policies, evals and audit ready." },
      { title: "Executive dashboards", desc: "Real-time AI value tracking." },
    ],
  },
};

export const solutionConfigs: Record<string, ContentPageConfig> = Object.fromEntries(
  Object.entries(industries).map(([k, v]) => [
    k,
    {
      eyebrow: `Solutions · ${k.charAt(0).toUpperCase() + k.slice(1)}`,
      title: v.title,
      description: v.desc,
      heroAlign: "center" as const,
      features: {
        eyebrow: "Outcomes",
        heading: "What leading teams achieve with Pascual.ai",
        items: v.outcomes.map((o) => ({ icon: Sparkles, title: o, desc: "Delivered on real production programs with our enterprise customers." })),
      },
      splits: [
        {
          eyebrow: "The challenge",
          title: "Common pain points we solve",
          description: "Every industry has its own operational reality. These are the challenges we most often hear from leaders in this space.",
          bullets: v.challenges,
        },
      ],
      cards: {
        eyebrow: "Use cases",
        heading: "AI use cases that ship",
        items: v.useCases.map((u) => ({ icon: v.icon, title: u.title, desc: u.desc })),
      },
      stats: outcomeStats,
      faqs: defaultFAQs,
    },
  ]),
);

/* ============ SERVICES ============ */

export const serviceConfigs: Record<string, ContentPageConfig> = {
  "ai-consulting": {
    eyebrow: "Services",
    title: "AI consulting: strategy, roadmap, ROI",
    description: "Turn AI ambition into an executable plan. Our consultants combine deep industry expertise with hands-on engineering to identify, prioritize and scope high-value AI initiatives.",
    timeline: {
      heading: "How an engagement unfolds",
      items: [
        { tag: "Weeks 1-2", title: "Discovery & alignment", desc: "Stakeholder interviews, tech & data audit, KPI definition." },
        { tag: "Weeks 3-4", title: "Opportunity mapping", desc: "Value & feasibility scored across every candidate use case." },
        { tag: "Weeks 5-6", title: "Roadmap & business case", desc: "Sequenced plan with owners, budget and success metrics." },
        { tag: "Ongoing", title: "Executive advisory", desc: "Fractional AI leadership through delivery." },
      ],
    },
    features: {
      eyebrow: "What you get",
      items: [
        { icon: Compass, title: "AI strategy", desc: "Vision, principles, guardrails." },
        { icon: Target, title: "Prioritized roadmap", desc: "Sequenced 12-24 month plan." },
        { icon: Landmark, title: "Business case", desc: "Investment, ROI and risk model." },
        { icon: Shield, title: "Governance model", desc: "Responsible AI framework." },
        { icon: Users, title: "Org design", desc: "CoE, roles and operating model." },
        { icon: Activity, title: "Vendor rationalization", desc: "Consolidate the AI toolchain." },
      ],
    },
    faqs: defaultFAQs,
  },
  "digital-transformation": {
    eyebrow: "Services",
    title: "Digital transformation, done for real",
    description: "Reinvent how your business operates end-to-end. We combine strategy, product, engineering and AI to deliver transformations that stick.",
    features: {
      eyebrow: "Where we help",
      items: [
        { icon: Rocket, title: "Product modernization", desc: "Replatform legacy apps into modern, AI-native products." },
        { icon: Cloud, title: "Cloud & platform", desc: "Cloud-first, secure, cost-efficient foundations." },
        { icon: Bot, title: "AI-native operations", desc: "Rebuild ops with AI at the core." },
        { icon: Users, title: "Ways of working", desc: "Agile product teams, embedded delivery pods." },
        { icon: Shield, title: "Risk & governance", desc: "Compliance and control by design." },
        { icon: Activity, title: "Value tracking", desc: "Transparent ROI measurement." },
      ],
    },
    timeline: {
      heading: "Transformation, in phases",
      items: [
        { tag: "Assess", title: "Where you are", desc: "Deep operational, tech and cultural assessment." },
        { tag: "Design", title: "Where you're going", desc: "Target operating model, product & platform blueprint." },
        { tag: "Build", title: "Ship & scale", desc: "Delivery pods build in production, sprint after sprint." },
        { tag: "Adopt", title: "Change stick", desc: "Enablement, training and value tracking." },
      ],
    },
    faqs: defaultFAQs,
  },
  "software-development": {
    eyebrow: "Services",
    title: "Software development, delivered like the best product teams",
    description: "Senior engineering pods that ship product every two weeks — with the design, quality and operational maturity of a great startup, at enterprise scale.",
    features: {
      eyebrow: "How we work",
      items: [
        { icon: Code2, title: "Full-stack pods", desc: "Product, design, engineering, QA in one team." },
        { icon: Zap, title: "Two-week sprints", desc: "Predictable, transparent, honest delivery." },
        { icon: Palette, title: "World-class design", desc: "Design partners, not just decorators." },
        { icon: Shield, title: "Quality baked in", desc: "Testing, CI/CD, observability from day one." },
        { icon: Activity, title: "Product analytics", desc: "Instrumented so you know what's working." },
        { icon: LifeBuoy, title: "Long-term support", desc: "Post-launch care with SLAs." },
      ],
    },
    faqs: defaultFAQs,
  },
  "cloud-migration": {
    eyebrow: "Services",
    title: "Cloud migration, without downtime",
    description: "Move to modern cloud infrastructure with a partner that has done it 200+ times — safely, cost-effectively, and without disrupting the business.",
    steps: {
      heading: "Our migration approach",
      items: [
        { title: "Assess", desc: "Portfolio analysis and business case." },
        { title: "Plan", desc: "Wave planning, dependencies, target architecture." },
        { title: "Migrate", desc: "Refactor, replatform or rehost per app." },
        { title: "Optimize", desc: "FinOps, security and performance post-move." },
      ],
    },
    features: {
      eyebrow: "Coverage",
      items: [
        { icon: Cloud, title: "AWS, Azure, GCP", desc: "Certified across all major hyperscalers." },
        { icon: Shield, title: "Zero-downtime cutover", desc: "Traffic-shifting, dual-run patterns." },
        { icon: Activity, title: "FinOps built in", desc: "Cost tracking from day one." },
        { icon: Lock, title: "Regulated workloads", desc: "Compliance-first migrations." },
        { icon: Database, title: "Data migration", desc: "Warehouses, DBs, files, streams." },
        { icon: LifeBuoy, title: "Post-migration care", desc: "Managed services optional." },
      ],
    },
    faqs: defaultFAQs,
  },
  "ux-ui-design": {
    eyebrow: "Services",
    title: "UX/UI design that turns products into competitive advantage",
    description: "Design leadership and hands-on craft to make your products faster to use, easier to sell and impossible to churn from.",
    features: {
      eyebrow: "How we design",
      items: [
        { icon: Palette, title: "Design systems", desc: "Scalable systems your team can extend." },
        { icon: Users, title: "Research", desc: "Qualitative and quantitative, before and after ship." },
        { icon: Zap, title: "Prototyping", desc: "Real prototypes, tested with real users." },
        { icon: Sparkles, title: "Brand & identity", desc: "Design that carries your brand." },
        { icon: Activity, title: "Motion & interaction", desc: "Delightful details, always purposeful." },
        { icon: Shield, title: "Accessibility", desc: "WCAG AA baseline on every screen." },
      ],
    },
    faqs: defaultFAQs,
  },
  "product-strategy": {
    eyebrow: "Services",
    title: "Product strategy: from idea to roadmap",
    description: "Sharpen positioning, define north-star metrics and build the roadmap that gets your product from where it is to where it needs to be.",
    features: {
      eyebrow: "Deliverables",
      items: [
        { icon: Target, title: "Positioning", desc: "Who it's for, why it wins." },
        { icon: LineChart, title: "North-star metric", desc: "Aligned across product, sales, CS." },
        { icon: Rocket, title: "Roadmap", desc: "Sequenced by value and dependencies." },
        { icon: Users, title: "Team topology", desc: "Squads, ownership, rituals." },
        { icon: Sparkles, title: "AI opportunity", desc: "Where AI unlocks product value." },
        { icon: Activity, title: "Discovery playbook", desc: "How your team learns fast." },
      ],
    },
    faqs: defaultFAQs,
  },
  "maintenance-support": {
    eyebrow: "Services",
    title: "24/7 maintenance & support, backed by real SLAs",
    description: "Post-launch care from the same senior teams that built your product — proactive monitoring, rapid response and continuous improvement.",
    features: {
      eyebrow: "Support tiers",
      items: [
        { icon: LifeBuoy, title: "Business hours", desc: "Fast response during your working day." },
        { icon: Activity, title: "24/7 on-call", desc: "Follow-the-sun SRE-backed rotations." },
        { icon: Shield, title: "Security patching", desc: "Managed dependency and vuln patching." },
        { icon: Zap, title: "Performance work", desc: "Ongoing optimization, not just fixes." },
        { icon: Sparkles, title: "Feature evolution", desc: "Optional roadmap capacity per quarter." },
        { icon: Users, title: "Dedicated CSM", desc: "A single point of trust." },
      ],
    },
    faqs: defaultFAQs,
  },
};

/* ============ RESOURCES ============ */

export const blogPosts = [
  { title: "The enterprise AI stack: what actually matters in 2026", desc: "Cut through the noise — the components that make AI programs succeed at scale.", tag: "Insight" },
  { title: "From RAG to reasoning: designing agents that ship", desc: "How to move from prototypes to production-grade agent systems.", tag: "Engineering" },
  { title: "Governance patterns for enterprise AI", desc: "Policies, evals and controls that keep AI initiatives safe and auditable.", tag: "Governance" },
  { title: "How we cut a Fortune 500's ops cost by 60%", desc: "A detailed look at an automation program that changed how the business runs.", tag: "Case study" },
  { title: "Choosing between AWS, Azure and GCP for AI workloads", desc: "A pragmatic framework for cloud selection in AI-heavy programs.", tag: "Cloud" },
  { title: "Designing dashboards executives will actually use", desc: "Lessons from building BI for global leadership teams.", tag: "Design" },
];

export const caseStudies = [
  { title: "Global bank: KYC time reduced from 3 days to 20 minutes", desc: "How a tier-1 bank overhauled onboarding with Pascual.ai agents.", tag: "Finance" },
  { title: "Retailer: +18% conversion with personalization", desc: "Recommendation and search deployed across web, app and email.", tag: "Retail" },
  { title: "Provider network: -30% documentation time for clinicians", desc: "Ambient clinical documentation deployed across 40 sites.", tag: "Healthcare" },
  { title: "Manufacturer: -25% unplanned downtime", desc: "Predictive maintenance and computer vision on 12 factory lines.", tag: "Manufacturing" },
  { title: "3PL: +95% ETA accuracy across the network", desc: "AI-native routing and ETA prediction on 4M shipments/month.", tag: "Logistics" },
  { title: "Public agency: modern citizen portal in six months", desc: "Legacy modernization with a compliance-first platform.", tag: "Government" },
];

/* ============ COMPANY ============ */

export const companyConfigs: Record<string, ContentPageConfig> = {
  about: {
    eyebrow: "Company",
    title: "We build AI that transforms enterprises",
    description: "Pascual.ai was founded on a simple idea: the world's largest organizations deserve an AI partner that can deliver, not just advise. We combine strategy, product, engineering and AI research under one roof.",
    features: {
      eyebrow: "Our principles",
      items: [
        { icon: Target, title: "Outcomes over outputs", desc: "We measure success in business results, not deliverables." },
        { icon: Users, title: "Senior by default", desc: "Every engagement staffed with senior operators." },
        { icon: Shield, title: "Enterprise-first", desc: "Security, compliance and governance from day one." },
        { icon: Sparkles, title: "Research meets craft", desc: "AI research paired with world-class product craft." },
      ],
    },
    stats: outcomeStats,
    faqs: defaultFAQs,
  },
  team: {
    eyebrow: "Company · Team",
    title: "The people behind Pascual.ai",
    description: "Engineers, designers, researchers and operators from the world's most demanding technology companies.",
    features: {
      eyebrow: "Our team",
      items: [
        { icon: Users, title: "150+ operators", desc: "AI, product, engineering, design and delivery talent worldwide." },
        { icon: Sparkles, title: "AI research", desc: "In-house research group focused on applied enterprise AI." },
        { icon: Shield, title: "Security veterans", desc: "SREs and security engineers from top platforms." },
        { icon: Cloud, title: "Cloud architects", desc: "Certified across AWS, Azure and GCP." },
        { icon: Palette, title: "Design leaders", desc: "Design partners from category-defining products." },
        { icon: Landmark, title: "Industry SMEs", desc: "Deep expertise in finance, healthcare, retail, manufacturing." },
      ],
    },
    faqs: defaultFAQs,
  },
  partners: {
    eyebrow: "Company · Partners",
    title: "Build and sell with Pascual.ai",
    description: "Join our partner ecosystem — from technology integrations to solution providers extending Pascual.ai to more industries.",
    features: {
      eyebrow: "Partner programs",
      items: [
        { icon: Handshake, title: "Solution partners", desc: "Deliver Pascual.ai programs to your customers." },
        { icon: Plug, title: "Technology partners", desc: "Native integrations and joint go-to-market." },
        { icon: Cloud, title: "Cloud partners", desc: "AWS, Azure, GCP joint offerings." },
        { icon: BookOpen, title: "Referral program", desc: "Send us qualified opportunities, get rewarded." },
      ],
    },
    faqs: defaultFAQs,
  },
  news: {
    eyebrow: "Company · News",
    title: "News & announcements",
    description: "Product launches, customer stories, research and press coverage from the Pascual.ai team.",
    cards: {
      eyebrow: "Latest",
      heading: "Recent news",
      items: [
        { icon: Newspaper, title: "Pascual.ai raises Series C to accelerate enterprise AI", desc: "Funding to expand delivery pods across EMEA and APAC.", tag: "Press" },
        { icon: Sparkles, title: "Introducing Pascual.ai Agents 3.0", desc: "A new generation of enterprise-safe autonomous agents.", tag: "Product" },
        { icon: Trophy, title: "Named a Leader in Enterprise AI Platforms", desc: "Recognized by leading industry analysts.", tag: "Recognition" },
        { icon: Handshake, title: "Global partnership with a top hyperscaler", desc: "Joint reference architectures and co-selling motion.", tag: "Partnership" },
        { icon: FileText, title: "Case study: national bank cuts KYC 90%", desc: "Read the full deployment story.", tag: "Case study" },
        { icon: BookOpen, title: "New research: measuring AI agent reliability", desc: "Our latest paper on evaluating enterprise agents.", tag: "Research" },
      ],
    },
    faqs: defaultFAQs,
  },
};
