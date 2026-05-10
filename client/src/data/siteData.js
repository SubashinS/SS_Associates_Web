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
  ScrollText,
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
  displayName: 'SS ASSOCIATES',
  owner: 'S. Saravanan',
  phone: '+91 77082 42395',
  phoneHref: 'tel:+917708242395',
  whatsappHref:
    'https://wa.me/917708242395?text=Hello%20SS%20Associates%2C%20I%20would%20like%20to%20discuss%20a%20documentation%20or%20property%20service.',
  email: 'shravikonline@gmail.com',
  emailHref: 'mailto:shravikonline@gmail.com',
  location: '567, 1st Floor, 1st Street, Gandhipuram, Coimbatore - 641012',
  shortLocation: 'Gandhipuram, Coimbatore',
  tagline: 'Your Trusted Property Partner',
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
  { value: '2000+', label: 'Clients guided end-to-end', icon: Users },
  { value: '98%', label: 'Documentation success focus', icon: TrendingUp },
  { value: '150+', label: 'Approval and transfer workflows', icon: CheckCircle2 },
]

export const serviceCategories = [
  'All',
  'Documentation & Legal Services',
  'Property Services',
  'Additional Services',
]

export const serviceCategoryMeta = {
  'Documentation & Legal Services': {
    badge: 'Core Services',
    emphasis: 'core',
  },
  'Property Services': {
    badge: 'Property Services',
    emphasis: 'standard',
  },
  'Additional Services': {
    badge: 'Additional Services',
    emphasis: 'additional',
  },
}

export const services = [
  {
    title: 'EC & NAGAL Apply',
    category: 'Documentation & Legal Services',
    icon: FileText,
    description:
      'Encumbrance certificate and NAGAL application support with careful document checks.',
  },
  {
    title: 'Will Deed',
    category: 'Documentation & Legal Services',
    icon: ScrollText,
    description:
      'Will deed documentation support with clear drafting coordination and witness-ready paperwork.',
  },
  {
    title: 'Sale Deed / Settlement Deed',
    category: 'Documentation & Legal Services',
    icon: FileSignature,
    description:
      'Drafting coordination, review support, and registration guidance for property transfers.',
  },
  {
    title: 'General Power of Attorney',
    category: 'Documentation & Legal Services',
    icon: KeyRound,
    description:
      'Structured support for GPA preparation, verification, and execution workflows.',
  },
  {
    title: 'Adjudication Power',
    category: 'Documentation & Legal Services',
    icon: Scale,
    description:
      'Assistance for stamp duty adjudication and authority-facing documentation needs.',
  },
  {
    title: 'MODT & MODT Cancellation',
    category: 'Documentation & Legal Services',
    icon: Stamp,
    description:
      'Bank-linked mortgage deposit title deed registration and cancellation coordination.',
  },
  {
    title: 'Marriage Registration',
    category: 'Documentation & Legal Services',
    icon: HeartHandshake,
    description:
      'Registration support with checklist clarity, forms, and appointment guidance.',
  },
  {
    title: 'Vacant Land Tax',
    category: 'Property Services',
    icon: Landmark,
    description:
      'Tax application, update, and payment guidance for vacant land holdings.',
  },
  {
    title: 'Property & Water Tax',
    category: 'Property Services',
    icon: Droplet,
    description:
      'Municipal property and water tax support for corrections, payments, and records.',
  },
  {
    title: 'Name Transfers',
    category: 'Property Services',
    icon: Zap,
    description:
      'EB, Patta, and TSLR name transfer coordination with document readiness checks.',
  },
  {
    title: 'Plan Approval',
    category: 'Property Services',
    icon: Map,
    description:
      'Plan approval support for residential projects with practical compliance guidance.',
  },
  {
    title: 'DTCP Approval',
    category: 'Property Services',
    icon: BadgeCheck,
    description:
      'DTCP approval pathway support for layouts, land conversion, and development files.',
  },
  {
    title: 'Loan Processing',
    category: 'Additional Services',
    icon: Banknote,
    description:
      'Home and property loan processing support from file preparation to bank coordination.',
  },
  {
    title: 'Online Payments',
    category: 'Additional Services',
    icon: CreditCard,
    description:
      'Secure assisted online payments for approved property and government workflows.',
  },
  {
    title: 'Real Estate',
    category: 'Additional Services',
    icon: Building2,
    description:
      'Buying and selling support with title sense, location insight, and negotiation clarity.',
  },
  {
    title: 'House Construction',
    category: 'Additional Services',
    icon: Hammer,
    description:
      'Additional construction coordination for homes, from planning guidance to execution oversight.',
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
      'Core documentation, property services, loan help, and additional real estate support are aligned.',
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
    text: 'Document, transfer, register, regularize, buy, or build.',
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
    role: 'Plan approval client',
    quote:
      'From plan approval to document completion, SS Associates gave practical guidance at each stage.',
  },
]

export const faqs = [
  {
    question: 'Can SS Associates handle both real estate and documentation?',
    answer:
      'Yes. Documentation and legal services are the core focus, with property services, loan processing, and additional real estate or construction coordination available.',
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
    question: 'How long does documentation processing take?',
    answer:
      'Processing time depends on the type of service. Most documentation services are completed within a few working days, subject to government approvals.',
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
    href: 'https://www.google.com/maps/search/?api=1&query=567%2C%201st%20Floor%2C%201st%20Street%2C%20Gandhipuram%2C%20Coimbatore%20-%20641012',
    icon: MapPinned,
  },
]
