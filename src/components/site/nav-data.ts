import {
  Bot, Cpu, Boxes, Building2, Globe, Smartphone, Layers, Database,
  Cloud, Plug, GitBranch, Network, LineChart, BarChart3, Sparkles, Gauge,
  Heart, Landmark, ShoppingBag, Factory, Truck, GraduationCap, Shield, Briefcase,
  Compass, Rocket, Code2, ArrowUpCircle, Palette, Target, LifeBuoy,
  BookOpen, FileText, FileCode, Trophy, HelpCircle, MessageSquare, Users, Newspaper, Handshake, Info,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { title: string; desc?: string; href: string; icon?: LucideIcon };
export type NavGroup = { heading: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href?: string;
  groups?: NavGroup[];
  simple?: NavLink[];
  featured?: { title: string; desc: string; href: string; cta: string };
};

export const NAV: NavItem[] = [
  {
    label: "Products",
    groups: [
      {
        heading: "AI Solutions",
        links: [
          { title: "AI Automation", desc: "Automate workflows end-to-end", href: "/products/ai-automation", icon: Bot },
          { title: "AI Agents", desc: "Autonomous agents for every team", href: "/products/ai-agents", icon: Cpu },
          { title: "Custom AI Development", desc: "Purpose-built models & apps", href: "/products/custom-ai-development", icon: Sparkles },
          { title: "Enterprise AI Solutions", desc: "Deploy AI at scale, securely", href: "/products/enterprise-ai-solutions", icon: Building2 },
        ],
      },
      {
        heading: "Software Solutions",
        links: [
          { title: "Web Applications", desc: "Modern, fast web products", href: "/products/web-applications", icon: Globe },
          { title: "Mobile Applications", desc: "Native iOS & Android", href: "/products/mobile-applications", icon: Smartphone },
          { title: "SaaS Platforms", desc: "Multi-tenant SaaS delivery", href: "/products/saas-platforms", icon: Layers },
          { title: "Internal Business Systems", desc: "ERP, CRM & operations", href: "/products/internal-business-systems", icon: Boxes },
        ],
      },
      {
        heading: "Cloud & Infrastructure",
        links: [
          { title: "Cloud Integration", desc: "Multi-cloud made simple", href: "/products/cloud-integration", icon: Cloud },
          { title: "API Development", desc: "Robust, versioned APIs", href: "/products/api-development", icon: Plug },
          { title: "DevOps", desc: "Ship faster, safer, together", href: "/products/devops", icon: GitBranch },
          { title: "System Architecture", desc: "Blueprints that scale", href: "/products/system-architecture", icon: Network },
        ],
      },
      {
        heading: "Data & Analytics",
        links: [
          { title: "Business Intelligence", desc: "From data to decisions", href: "/products/business-intelligence", icon: LineChart },
          { title: "Data Analytics", desc: "Unify, model & explore", href: "/products/data-analytics", icon: BarChart3 },
          { title: "AI Insights", desc: "Predictive & prescriptive", href: "/products/ai-insights", icon: Sparkles },
          { title: "Reporting Dashboard", desc: "Live enterprise dashboards", href: "/products/reporting-dashboard", icon: Gauge },
        ],
      },
    ],
    featured: {
      title: "The Pascual.ai platform",
      desc: "AI, apps & infrastructure in one enterprise-grade stack.",
      href: "/products/enterprise-ai-solutions",
      cta: "Explore platform",
    },
  },
  {
    label: "Solutions",
    simple: [
      { title: "Healthcare", desc: "Clinical AI, patient experience", href: "/solutions/healthcare", icon: Heart },
      { title: "Finance", desc: "Risk, compliance & customer AI", href: "/solutions/finance", icon: Landmark },
      { title: "Retail", desc: "Personalization at scale", href: "/solutions/retail", icon: ShoppingBag },
      { title: "Manufacturing", desc: "Factory-floor intelligence", href: "/solutions/manufacturing", icon: Factory },
      { title: "Logistics", desc: "Real-time supply chain AI", href: "/solutions/logistics", icon: Truck },
      { title: "Education", desc: "Learning platforms & analytics", href: "/solutions/education", icon: GraduationCap },
      { title: "Government", desc: "Secure, compliant modernization", href: "/solutions/government", icon: Shield },
      { title: "Enterprise", desc: "Cross-functional transformation", href: "/solutions/enterprise", icon: Briefcase },
    ],
  },
  {
    label: "Services",
    simple: [
      { title: "AI Consulting", desc: "Strategy, roadmap & ROI", href: "/services/ai-consulting", icon: Compass },
      { title: "Digital Transformation", desc: "Reinvent how you operate", href: "/services/digital-transformation", icon: Rocket },
      { title: "Software Development", desc: "Ship product like the best", href: "/services/software-development", icon: Code2 },
      { title: "Cloud Migration", desc: "Move without downtime", href: "/services/cloud-migration", icon: ArrowUpCircle },
      { title: "UX/UI Design", desc: "Design that converts", href: "/services/ux-ui-design", icon: Palette },
      { title: "Product Strategy", desc: "From idea to roadmap", href: "/services/product-strategy", icon: Target },
      { title: "Maintenance & Support", desc: "24/7 SLA-backed care", href: "/services/maintenance-support", icon: LifeBuoy },
    ],
  },
  {
    label: "Resources",
    simple: [
      { title: "Blog", desc: "Insights & product updates", href: "/resources/blog", icon: BookOpen },
      { title: "Case Studies", desc: "How teams win with AI", href: "/resources/case-studies", icon: FileText },
      { title: "Documentation", desc: "Developer & admin docs", href: "/resources/documentation", icon: FileCode },
      { title: "Success Stories", desc: "Outcomes from customers", href: "/resources/success-stories", icon: Trophy },
      { title: "Help Center", desc: "Guides & how-tos", href: "/resources/help-center", icon: HelpCircle },
      { title: "FAQs", desc: "Answers to common questions", href: "/resources/faqs", icon: MessageSquare },
      { title: "Contact", desc: "Talk to our team", href: "/resources/contact", icon: MessageSquare },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    simple: [
      { title: "About Us", desc: "Our mission & story", href: "/company/about", icon: Info },
      { title: "Our Team", desc: "The people behind Pascual.ai", href: "/company/team", icon: Users },
      { title: "Careers", desc: "Open roles worldwide", href: "/company/careers", icon: Briefcase },
      { title: "Partners", desc: "Build & sell with us", href: "/company/partners", icon: Handshake },
      { title: "News", desc: "Press & announcements", href: "/company/news", icon: Newspaper },
      { title: "Contact", desc: "Get in touch", href: "/company/contact", icon: MessageSquare },
    ],
  },
];
