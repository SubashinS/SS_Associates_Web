import {
  BadgeCheck,
  Banknote,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  CreditCard,
  Droplet,
  FileCheck2,
  FileSignature,
  FileText,
  Hammer,
  Handshake,
  HeartHandshake,
  Home,
  KeyRound,
  Landmark,
  Layers3,
  Map,
  MapPinned,
  PenLine,
  ReceiptText,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Stamp,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

export const business = {
  name: 'SS Associates',
  owner: 'S. Saravanan DME',
  phone: '+91 77082 42395',
  phoneHref: 'tel:+917708242395',
  whatsappHref:
    'https://wa.me/917708242395?text=Hello%20SS%20Associates%2C%20I%20would%20like%20to%20discuss%20a%20property%20service.',
  email: 'shravikonline@gmail.com',
  emailHref: 'mailto:shravikonline@gmail.com',
  location: 'Coimbatore',
  tagline: 'House Construction & Real Estate Experts',
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: '12+', label: 'Years of field experience', icon: Clock3 },
  { value: '850+', label: 'Clients guided end-to-end', icon: Users },
  { value: '98%', label: 'Documentation success focus', icon: TrendingUp },
  { value: '40+', label: 'Approval and transfer workflows', icon: CheckCircle2 },
]

export const serviceCategories = [
  'All',
  'Legal & Documentation',
  'Government & Property',
  'Additional',
]

export const services = [
  {
    title: 'EC & NAGAL Apply',
    category: 'Legal & Documentation',
    icon: FileText,
    description:
      'Encumbrance certificate and NAGAL application support with careful document checks.',
  },
  {
    title: 'Sale Deed / Settlement Deed',
    category: 'Legal & Documentation',
    icon: FileSignature,
    description:
      'Drafting coordination, review support, and registration guidance for property transfers.',
  },
  {
    title: 'General Power of Attorney',
    category: 'Legal & Documentation',
    icon: KeyRound,
    description:
      'Structured support for GPA preparation, verification, and execution workflows.',
  },
  {
    title: 'Adjudication Power',
    category: 'Legal & Documentation',
    icon: Scale,
    description:
      'Assistance for stamp duty adjudication and authority-facing documentation needs.',
  },
  {
    title: 'MODT & MODT Cancellation',
    category: 'Legal & Documentation',
    icon: Stamp,
    description:
      'Bank-linked mortgage deposit title deed registration and cancellation coordination.',
  },
  {
    title: 'Marriage Registration',
    category: 'Legal & Documentation',
    icon: HeartHandshake,
    description:
      'Registration support with checklist clarity, forms, and appointment guidance.',
  },
  {
    title: 'Vacant Land Tax',
    category: 'Government & Property',
    icon: Landmark,
    description:
      'Tax application, update, and payment guidance for vacant land holdings.',
  },
  {
    title: 'Property & Water Tax',
    category: 'Government & Property',
    icon: Droplet,
    description:
      'Municipal property and water tax support for corrections, payments, and records.',
  },
  {
    title: 'Name Transfers',
    category: 'Government & Property',
    icon: Zap,
    description:
      'EB, Patta, and TSLR name transfer coordination with document readiness checks.',
  },
  {
    title: 'Plan Approval',
    category: 'Government & Property',
    icon: Map,
    description:
      'Plan approval support for residential projects with practical compliance guidance.',
  },
  {
    title: 'DTCP Approval',
    category: 'Government & Property',
    icon: BadgeCheck,
    description:
      'DTCP approval pathway support for layouts, land conversion, and development files.',
  },
  {
    title: 'Loan Processing',
    category: 'Additional',
    icon: Banknote,
    description:
      'Home and property loan processing support from file preparation to bank coordination.',
  },
  {
    title: 'Online Payments',
    category: 'Additional',
    icon: CreditCard,
    description:
      'Secure assisted online payments for approved property and government workflows.',
  },
  {
    title: 'Real Estate',
    category: 'Additional',
    icon: Building2,
    description:
      'Buying and selling support with title sense, location insight, and negotiation clarity.',
  },
  {
    title: 'House Construction',
    category: 'Additional',
    icon: Hammer,
    description:
      'Construction coordination for homes, from planning guidance to execution oversight.',
  },
]

export const whyChoose = [
  {
    title: 'Documentation-first decisions',
    description:
      'Every property move starts with clarity on records, ownership trail, approvals, and risk.',
    icon: ShieldCheck,
  },
  {
    title: 'Single-window coordination',
    description:
      'Legal paperwork, government services, loan help, real estate, and construction are aligned.',
    icon: Layers3,
  },
  {
    title: 'Local Coimbatore expertise',
    description:
      'Practical knowledge of area-specific workflows helps clients move faster with confidence.',
    icon: MapPinned,
  },
  {
    title: 'Human, responsive service',
    description:
      'Clear status updates, reachable phone support, and proactive reminders keep the process calm.',
    icon: Handshake,
  },
]

export const processSteps = [
  {
    title: 'Discovery Call',
    eyebrow: 'Step 01',
    description:
      'We understand the property, document type, timeline, and any bank or authority requirements.',
    icon: CalendarCheck,
  },
  {
    title: 'Document Audit',
    eyebrow: 'Step 02',
    description:
      'Existing records are checked for missing names, approvals, tax status, and registration gaps.',
    icon: FileCheck2,
  },
  {
    title: 'Pathway Planning',
    eyebrow: 'Step 03',
    description:
      'You receive a clear action path with forms, sequence, expected dependencies, and next steps.',
    icon: Route,
  },
  {
    title: 'Authority Coordination',
    eyebrow: 'Step 04',
    description:
      'Applications, appointments, payments, registrations, and follow-ups are coordinated carefully.',
    icon: Landmark,
  },
  {
    title: 'Completion Handover',
    eyebrow: 'Step 05',
    description:
      'Final records are verified, organized, and handed over with practical guidance for future use.',
    icon: ClipboardCheck,
  },
]

export const journey = [
  {
    title: 'Idea',
    text: 'Buy, build, transfer, register, or regularize.',
    icon: Sparkles,
  },
  {
    title: 'Clarity',
    text: 'Title trail, tax status, approval needs, and funding are mapped.',
    icon: Target,
  },
  {
    title: 'Action',
    text: 'Forms, deeds, applications, and authority visits move in sequence.',
    icon: PenLine,
  },
  {
    title: 'Outcome',
    text: 'Verified documents and confident property decisions.',
    icon: Home,
  },
]

export const testimonials = [
  {
    name: 'R. Manikandan',
    role: 'Home buyer, Coimbatore',
    quote:
      'The team explained every document before registration. The process felt organized and stress-free.',
  },
  {
    name: 'Priya S.',
    role: 'Land owner',
    quote:
      'They handled name transfer and tax updates with regular follow-ups. I always knew what was happening.',
  },
  {
    name: 'K. Dinesh',
    role: 'Construction client',
    quote:
      'From plan approval to construction coordination, SS Associates gave practical guidance at each stage.',
  },
]

export const faqs = [
  {
    question: 'Can SS Associates handle both real estate and documentation?',
    answer:
      'Yes. The team supports property buying and selling, legal documentation, government applications, loan processing, and house construction coordination.',
  },
  {
    question: 'What details are needed to start a service?',
    answer:
      'Usually the property location, existing documents, owner details, tax receipts, and the intended transaction type are enough for the first review.',
  },
  {
    question: 'Do you support EB, Patta, and TSLR name transfers?',
    answer:
      'Yes. Name transfer support is available for EB, Patta, and TSLR workflows with document readiness checks.',
  },
  {
    question: 'Is the contact form connected to a backend?',
    answer:
      'The website includes frontend validation and a confirmation state. A backend or form service can be connected during deployment.',
  },
]

export const heroImages = {
  home:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=82',
  documents:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=82',
  architecture:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82',
  city:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82',
}

export const contactCards = [
  {
    label: 'Call',
    value: business.phone,
    href: business.phoneHref,
    icon: CalendarCheck,
  },
  {
    label: 'Email',
    value: business.email,
    href: business.emailHref,
    icon: ReceiptText,
  },
  {
    label: 'Location',
    value: business.location,
    href: 'https://www.google.com/maps/search/?api=1&query=Coimbatore',
    icon: MapPinned,
  },
]
