import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Calendar,
  Globe,
  Code2,
  Database,
  Cloud,
  Server,
  Brain,
  Users,
  Award,
  Trophy,
  GraduationCap,
  Video,
  Play,
  FileText,
  CheckCircle,
  Hammer,
  Zap,
  Menu,
  X
} from 'lucide-react'

const architecturalExcellence = {
  "AI-Native Architecture": [
    "Large Language Models", "Agentic AI Systems", "Machine Learning Pipelines", "GPT-4 Integration", 
    "Claude Integration", "Chain-of-Thought Reasoning", "Multi-Modal Intelligence", "Predictive Analytics", "Real-Time AI Processing"
  ],
  "Microservices Excellence": [
    "Container-Native Design", "Kubernetes Orchestration", "GraphQL Federation", "Event-Driven Architecture", 
    "API-First Design", "Service Mesh", "Circuit Breakers", "Distributed Tracing", "Horizontal Scaling"
  ],
  "Enterprise Security": [
    "Zero-Trust Architecture", "End-to-End Encryption", "SOC 2 Type II", "GDPR Compliance", "FERPA Compliance", 
    "OAuth2/OIDC", "Multi-Tenant Security", "Audit Trails", "Privacy-by-Design"
  ],
  "Data & Integration": [
    "Semantic Web Technologies", "RDF/OWL Ontologies", "SPARQL Queries", "Neo4j Graph Databases", 
    "Data Federation", "Real-Time Streaming", "ETL Pipelines", "Data Sovereignty"
  ],
  "Performance Engineering": [
    "Sub-Second Response Times", "99.9% Uptime SLAs", "Elastic Scaling", "Multi-Region Deployment", 
    "CDN Integration", "Database Optimization", "Caching Strategies", "Load Balancing"
  ],
  "Developer Experience": [
    "Production SDKs", "GraphQL Code Generation", "TypeScript Excellence", "Comprehensive Documentation", 
    "API Design", "Developer Tooling", "Boilerplate Templates", "CI/CD Automation"
  ]
}


const experience = [
  {
    company: "Healthy Bowl Agro Foods",
    role: "Founder, CEO & CTO",
    period: "Oct 2023 - Present",
    description: "Founded organic farming and healthy food products company focused on sustainable agriculture and promoting nutritious food choices."
  },
  {
    company: "Algoshred Technologies",
    role: "Founder, CEO & CTO",
    period: "Nov 2022 - Present",
    description: "Technology consulting startup helping businesses translate vision into real digital products, essentially solving business problems with technology."
  },
  {
    company: "Headshot Marketing",
    role: "Founder, CEO & CTO",
    period: "Oct 2022 - Present",
    description: "Marketing agency specializing in connecting dots between supply and demand, helping communicate business vision and build brands."
  },
  {
    company: "BurdenOff Consultancy Services",
    role: "Founder, CEO & CTO", 
    period: "Jan 2022 - Present",
    description: "Holding company acting as headwater to amazing businesses, creating revolution to empower every life through continuous innovation, delivery and feedback."
  },
  {
    company: "Convint.ai",
    role: "Co-Founder & CTO",
    period: "Oct 2021 - Apr 2023",
    description: "Built conversational intelligence platform for recruiting industry to ease candidate interviews and hiring pipeline processes."
  },
  {
    company: "Sokowatch (Wasoko)",
    role: "Product Consultant",
    period: "Mar 2022 - May 2022",
    description: "Helped Wasoko (formerly Sokowatch), a South African logistics company with supply chain integration solutions."
  },
  {
    company: "Shipper",
    role: "Product Consultant",
    period: "Dec 2021 - May 2022",
    description: "Set up B2B/B2C procurement operations using Shopify, built end-to-end ecommerce lifecycle including payments, shipping, and order tracking."
  },
  {
    company: "Ramco Cements Limited",
    role: "Project Management and Full Stack Development",
    period: "Mar 2021 - Aug 2022",
    description: "Built headless CMS backed website using Strapi, React, Postgres, TailwindCSS, and GraphQL for enterprise client."
  },
  {
    company: "The Guild Software",
    role: "Open Sourcerer",
    period: "Jan 2021 - Feb 2022", 
    description: "Contributed to GraphQL ecosystem across The Guild Stack, worked with clients like Outreach to optimize GraphQL implementations."
  },
  {
    company: "Branded",
    role: "Product Consultant",
    period: "Feb 2021 - Aug 2021",
    description: "Worked on Digital Asset Management, Multi-channel Inventory solutions, Influencer Management tools, and Brand Analytics platforms."
  },
  {
    company: "Timecampus Technologies",
    role: "Founder, CEO & CTO", 
    period: "Aug 2019 - Present",
    description: "Time management and productivity startup helping people and businesses observe, analyze & optimize their daily time spend."
  },
  {
    company: "Ramco Systems",
    role: "Multiple Roles (External Consultant, Senior System Analyst, System Analyst, Programming Analyst)",
    period: "May 2016 - Mar 2020",
    description: "Progressed through multiple roles from Programming Analyst to Senior System Analyst leading R&D team of 17. Responsible for Machine Learning, Microservices & DevOps initiatives, Digital Transformation consulting, and employee engagement product development."
  },
  {
    company: "Tech Ahoy",
    role: "Founder",
    period: "2011 - 2014",
    description: "Started as service-based startup, later became product-based. Created social networking platform 'Friendbus' (now open-sourced)."
  },
  {
    company: "Krios Technologies",
    role: "Intern",
    period: "Jan 2013 - Apr 2013",
    description: "Developed website and mobile app based on data mining and knowledge management solutions."
  }
]

export function HomePage() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'talks', 'publications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all scroll-reveal elements after component mounts
    const timer = setTimeout(() => {
      const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
      scrollElements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])


  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:vignesh@burdenoff.com'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917358445777'
  }


  return (
    <>
      {/* React 19 Metadata Support */}
      <title>Vignesh T.V - Entrepreneur & Product Builder | 31+ AI-Native Enterprise Platforms</title>
      <meta name="description" content="Building 31+ AI-native enterprise platforms spanning creator economy, wealth management, education technology, and developer infrastructure. Entrepreneur, Software Architect & Product Builder." />
      <meta name="keywords" content="Vignesh T.V, AI-native platforms, enterprise software, product builder, ArtistryBase, BigConsole, Botlit, BrainyRich, AssetHandler, BuildMyIQ, entrepreneur, software architect" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Vignesh T.V - Product Portfolio Showcase | Building the Future of Intelligent Platforms" />
      <meta property="og:description" content="Developing 31+ AI-native enterprise platforms with $150M+ revenue potential. Featured products: ArtistryBase (Creator Economy), BigConsole (Data Viz), Botlit (AI Bots), BrainyRich (Wealth Mgmt)" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tvvignesh.com/" />
      <meta property="og:image" content="https://tvvignesh.com/images/profilepic1.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@techahoy" />
      <meta name="twitter:title" content="Vignesh T.V - Building 31+ AI-Native Enterprise Platforms" />
      <meta name="twitter:description" content="Product Portfolio Showcase: ArtistryBase, BigConsole, Botlit, BrainyRich, AssetHandler & more. $150M+ revenue potential across AI-native enterprise solutions." />
      <meta name="twitter:image" content="https://tvvignesh.com/images/profilepic1.jpg" />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-400 cursor-pointer" onClick={() => scrollToSection('hero')}>
                T.V
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['About', 'Experience', 'Projects', 'Skills', 'Talks', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-400 bg-blue-900/20'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
            {['About', 'Experience', 'Projects', 'Skills', 'Talks', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400 bg-blue-900/20'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: mobileMenuOpen ? `slideInDown 0.3s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-fadeInUp">
              I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vignesh</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slideInLeft px-4">
              <span className="font-semibold text-blue-400">Entrepreneur</span> &
              <span className="font-semibold text-green-400"> Generalist</span><br className="hidden sm:block" />
              <span className="text-base sm:text-lg block sm:inline mt-2 sm:mt-0">Building the Future of Intelligent Platforms & Agriculture</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto mt-4 animate-slideInRight px-4 leading-relaxed">
              Developing an ecosystem of <span className="font-bold text-2xl text-blue-400">31+</span>{" "}
              <span className="font-semibold text-red-400">AI-native enterprise platforms</span> spanning creator economy, 
              wealth management, education technology, agriculture, and developer infrastructure.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6 sm:mt-8 animate-fadeInUp px-4" style={{animationDelay: '0.6s'}}>
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                Learn More About Me
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                View Portfolio
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 px-4 animate-scaleIn" style={{animationDelay: '0.8s'}}>
              {[
                { 
                  href: "https://github.com/tvvignesh", 
                  label: "GitHub",
                  color: "hover:bg-gray-700",
                  svg: <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                },
                { 
                  href: "https://linkedin.com/in/tvvignesh", 
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                  svg: <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                },
                { 
                  href: "https://twitter.com/techahoy", 
                  label: "Twitter",
                  color: "hover:bg-blue-600",
                  svg: <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                },
                { 
                  href: "https://tvvignesh.medium.com", 
                  label: "Blog",
                  color: "hover:bg-green-700",
                  svg: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                }
              ].map(({ href, label, color, svg }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform ${color} border border-gray-700 hover:border-gray-600`}
                  aria-label={label}
                  style={{
                    animationDelay: `${0.9 + index * 0.1}s`
                  }}
                >
                  <div className="text-gray-300 hover:text-white transition-colors duration-300">
                    {svg}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-1 scroll-reveal-left">
              <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 animate-pulse-glow">
                  <img
                    src="/images/profilepic1.jpg"
                    alt="Vignesh T.V."
                    className="w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 scroll-reveal-right">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a generalist who likes to work on the end-to-end product lifecycle. I have been a full stack developer, 
                software architect, consultant, research and development lead, and product manager throughout my career 
                thereby wearing multiple hats, and I am now an entrepreneur running multiple businesses.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I run multiple startups spanning <strong className="text-blue-400">technology consulting</strong>, {" "}
                <strong className="text-green-400">marketing</strong>, <strong className="text-purple-400">productivity solutions</strong>, {" "}
                <strong className="text-orange-400">agro foods</strong>, and <strong className="text-cyan-400">business consulting</strong> {" "}
                that bridges everything together.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I also advise/consult businesses on various domains including Digital Transformation, Cloud Native Architecture, 
                GraphQL, Microservices, Cybersecurity, SEO, SRE, UI/UX, Product Management, Content Strategy, Leadership, 
                Full Stack Development, Marketing, Time Management, and Productivity.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="flex items-center text-gray-300 transform hover:scale-105 transition-transform duration-300">
                  <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  <span className="text-sm sm:text-base">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-300 transform hover:scale-105 transition-transform duration-300">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  <span className="text-sm sm:text-base">vignesh@burdenoff.com</span>
                </div>
                <div className="flex items-center text-gray-300 transform hover:scale-105 transition-transform duration-300">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  <span className="text-sm sm:text-base">+91-7358445777</span>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl italic text-center text-blue-400 mt-6 sm:mt-8 p-4 sm:p-6 border-l-4 border-blue-600 bg-blue-900/20 rounded-r-lg transform hover:scale-105 transition-all duration-300 hover:bg-blue-900/30">
                "What if Today was your last?"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section id="executive-summary" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Executive Summary</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 scroll-reveal-scale hover-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="scroll-reveal-left stagger-1">
                <h3 className="text-2xl font-bold text-white mb-6">Burdenoff Products Ecosystem</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm developing an ecosystem of <strong>31+ intelligent software platforms</strong> that represent the 
                  cutting edge of AI-native enterprise solutions. My work spans multiple verticals including creator economy 
                  platforms, enterprise AI automation, wealth management, education technology, and developer infrastructure.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-400">31+</div>
                    <div className="text-sm text-gray-300">Product Ecosystems</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg shadow">
                    <div className="text-3xl font-bold text-green-400">$150M+</div>
                    <div className="text-sm text-gray-300">Revenue Potential</div>
                  </div>
                </div>
              </div>
              
              <div className="scroll-reveal-right stagger-2">
                <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-300"><strong>Unified AI-First Architecture</strong> across all platforms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                    <span className="text-gray-300"><strong>Production-Ready SDKs</strong> serving developer communities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    <span className="text-gray-300"><strong>Enterprise-Grade Security</strong> with comprehensive compliance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-4"></div>
                    <span className="text-gray-300"><strong>FluidGrids Ecosystem</strong> - Universal workflow automation engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experience.map((job, index) => (
              <div key={index} className={`bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift scroll-reveal stagger-${(index % 6) + 1}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{job.company}</h3>
                    <p className="text-blue-400 font-medium text-sm">{job.role}</p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                    <Calendar className="mr-2 h-3 w-3" />
                    {job.period}
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Portfolio Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Products Portfolio</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-300 mt-4 px-4">
              Key platforms from the Burdenoff Products ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* ArtistryBase */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-lg sm:text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">ArtistryBase</h3>
                  <p className="text-purple-400 text-xs sm:text-sm">Creator Economy OS</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-sm leading-relaxed">
                Unified AI-powered platform replacing the entire creator toolchain with intelligent multi-format content engine, rights management, and integrated monetization.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-200 rounded">AI Content</span>
                <span className="px-2 py-1 text-xs bg-pink-900/50 text-pink-200 rounded">Rights Mgmt</span>
                <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-200 rounded">$104B Market</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Target:</strong> 50M+ creators globally
              </div>
            </div>

            {/* BigConsole */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">BigConsole</h3>
                  <p className="text-blue-400 text-sm">Next-Gen Data Visualization</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Revolutionary data visualization with AI narrative engine, VR/AR exploration, quantum processing, and biometric UI adaptation.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-200 rounded">AI Narrative</span>
                <span className="px-2 py-1 text-xs bg-cyan-900/50 text-cyan-200 rounded">VR/AR</span>
                <span className="px-2 py-1 text-xs bg-green-900/50 text-green-200 rounded">$23.8B Market</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Projection:</strong> $2M→$150M ARR
              </div>
            </div>

            {/* Botlit */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-3">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Botlit</h3>
                  <p className="text-green-400 text-sm">Enterprise AI Bot Platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                First platform combining agentic AI with "Bot Buckets" organizational system. Multi-modal intelligence with chain-of-thought reasoning.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-green-900/50 text-green-200 rounded">Agentic AI</span>
                <span className="px-2 py-1 text-xs bg-emerald-900/50 text-emerald-200 rounded">Multi-Modal</span>
                <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-200 rounded">MCP Protocol</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Unique:</strong> Only workflow + agentic AI + bot mgmt
              </div>
            </div>

            {/* BrainyRich */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">BrainyRich</h3>
                  <p className="text-yellow-400 text-sm">AI Wealth Management</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                End-to-end wealth management with AI analytics, multi-role architecture, regulatory compliance engine, and automated estate planning.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-yellow-900/50 text-yellow-200 rounded">AI Analytics</span>
                <span className="px-2 py-1 text-xs bg-orange-900/50 text-orange-200 rounded">Compliance</span>
                <span className="px-2 py-1 text-xs bg-red-900/50 text-red-200 rounded">Zero-Trust</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Security:</strong> SOC 2 Type II compliant
              </div>
            </div>

            {/* AssetHandler */}
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-5">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AssetHandler</h3>
                  <p className="text-indigo-400 text-sm">Intelligent Asset Management</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                AI-powered asset management with predictive maintenance, IoT tracking, ITIL compliance, and internal marketplace capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-indigo-900/50 text-indigo-200 rounded">Predictive AI</span>
                <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-200 rounded">IoT Tracking</span>
                <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-200 rounded">ITIL Ready</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Scale:</strong> 1M+ assets per tenant
              </div>
            </div>

            {/* BuildMyIQ */}
            <div className="bg-gradient-to-br from-teal-900/20 to-green-900/20 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">BuildMyIQ</h3>
                  <p className="text-teal-400 text-sm">Intelligent Education Platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Multi-tenant SaaS combining LMS, SIS, and AI tutoring. Adaptive learning engine with predictive analytics for student success.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-teal-900/50 text-teal-200 rounded">Adaptive AI</span>
                <span className="px-2 py-1 text-xs bg-green-900/50 text-green-200 rounded">Predictive</span>
                <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-200 rounded">FERPA</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Performance:</strong> 100K+ concurrent users
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300">
              <a href="https://burdenoff.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors underline">
                + 25 more products
              </a> in development spanning developer tools, 
              data federation, family platforms, and enterprise infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Technical Excellence & Innovation Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Excellence & Innovation</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-300 mt-4">
              Architectural consistency and innovation leadership across the entire product ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(architecturalExcellence).map(([category, skillList], index) => {
              const iconMap: Record<string, React.ElementType> = {
                "AI-Native Architecture": Brain,
                "Microservices Excellence": Server,
                "Enterprise Security": Award,
                "Data & Integration": Database,
                "Performance Engineering": Cloud,
                "Developer Experience": Code2
              }
              
              const colorMap: Record<string, string> = {
                "AI-Native Architecture": "text-purple-400",
                "Microservices Excellence": "text-blue-400", 
                "Enterprise Security": "text-green-400",
                "Data & Integration": "text-orange-600 dark:text-orange-400",
                "Performance Engineering": "text-red-400",
                "Developer Experience": "text-indigo-400"
              }
              
              const Icon = iconMap[category] || Code2
              const iconColor = colorMap[category] || "text-blue-400"
              
              return (
                <div key={category} className={`bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift border-l-4 border-blue-600 scroll-reveal stagger-${index % 3 + 1}`}>
                  <div className="flex items-center mb-4">
                    <Icon className={`h-8 w-8 ${iconColor} mr-3`} />
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full hover:bg-blue-900/50 hover:text-blue-300 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Architecture Philosophy */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 scroll-reveal-scale hover-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">AI-Native Design Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2"></div>
                    <p className="text-gray-300">Intelligent automation and decision-making built into platform foundations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 mt-2"></div>
                    <p className="text-gray-300">Predictive analytics and real-time insights across all user interactions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-4 mt-2"></div>
                    <p className="text-gray-300">Natural language interfaces and adaptive user experiences</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2"></div>
                    <p className="text-gray-300">Multi-model AI support with explainable decision processes</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">FluidGrids Ecosystem</h3>
                <p className="text-gray-300 mb-4">
                  Universal workflow automation engine providing plugin-like extensibility across all products:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-4"></div>
                    <span className="text-gray-300">Visual workflow design capabilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mr-4"></div>
                    <span className="text-gray-300">Event-driven real-time processing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                    <span className="text-gray-300">Unified integration layer for third-party services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mr-4"></div>
                    <span className="text-gray-300">Native integration across entire product ecosystem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Certifications & Awards</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 scroll-reveal-left hover-lift">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Trophy className="h-6 w-6 text-yellow-600 mr-3" />
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-blue-600 mr-3" />
                  <span className="text-gray-300">Certified Scrum Product Owner (CSPO) - Scrum Alliance</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-gray-300">Zend Certified Engineer</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-gray-300">Microsoft Certified Professional</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-gray-300">IIT NPTEL - Modern Application Developer</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-indigo-600 mr-3" />
                  <span className="text-gray-300">Certificate of Completion: C++ Course</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-teal-600 mr-3" />
                  <span className="text-gray-300">Certificate of Completion: SQL Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-orange-600 mr-3" />
                  <span className="text-gray-300">Scrum: The Basics</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 scroll-reveal-right hover-lift">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Trophy className="h-6 w-6 text-yellow-600 mr-3" />
                Honors & Awards
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-yellow-600 mr-3" />
                  <span className="text-gray-300">8th Rank in IIT Certification Course</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-gold mr-3" />
                  <span className="text-gray-300">1st Place in Web Development Quiz</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-yellow-500 mr-3" />
                  <span className="text-gray-300">Prize Winner in various Music Competitions</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-yellow-600 mr-3" />
                  <span className="text-gray-300">1st Place in Gaming (Age of Empires)</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-blue-600 mr-3" />
                  <span className="text-gray-300">Pegasus Award from Ramco Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talks & Presentations Section */}
      <section id="talks" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Talks & Presentations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-1">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-white">GraphQL Ecosystem Walkthrough</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A comprehensive walkthrough of the GraphQL ecosystem showcasing fully typed end-to-end architectures with React TypeScript frontend, GraphQL Code Generator, and GraphQL Yoga server.
              </p>
              <a
                href="https://www.youtube.com/watch?v=2j6xxtj5rjE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Play className="h-4 w-4 mr-2" />
                Watch on YouTube
              </a>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-2">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-white">Web 3.0 & GraphQL Integration</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Exploring how Web 3.0 technologies integrate with GraphQL, discussing modern development approaches and the evolution of web technologies in the decentralized era.
              </p>
              <a
                href="https://www.youtube.com/watch?v=s6y_GV87Cbc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Play className="h-4 w-4 mr-2" />
                Watch on YouTube
              </a>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift-lg scroll-reveal-scale stagger-3">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-white">GraphQL from A to Z</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A comprehensive GraphQL presentation for GraphQL Berlin Meetup covering everything from basics to advanced concepts, including practical implementations and best practices.
              </p>
              <a
                href="https://www.youtube.com/watch?v=pQPgQ3oOoJo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Play className="h-4 w-4 mr-2" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Publications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift scroll-reveal-scale">
            <div className="flex items-start space-x-4">
              <FileText className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Building Automation Systems
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Research paper published in IEEE exploring modern approaches to building automation systems, 
                  focusing on IoT integration and smart infrastructure technologies.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Published in:</span> IEEE Xplore Digital Library
                  </div>
                  <a
                    href="https://ieeexplore.ieee.org/document/10810802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Publication
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status & Partnership Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Current Status & Opportunities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-300 mt-4">
              Portfolio positioned for commercialization and strategic partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Status */}
            <div className="scroll-reveal-left">
              <h3 className="text-2xl font-bold text-white mb-8">Development Status</h3>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Production Ready ✅</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Burdenoff SDKs (Frontend & Backend)</li>
                        <li>• Boilerplates Collection</li>
                        <li>• FluidGrids Core Engine</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-start">
                    <Hammer className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Development Complete 🔨</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• ArtistryBase (Ready for implementation)</li>
                        <li>• BigConsole (Executive-ready with financial modeling)</li>
                        <li>• Botlit (Full architecture and APIs defined)</li>
                        <li>• AssetHandler (Complete technical specifications)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-start">
                    <Zap className="h-6 w-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Active Development ⚡</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• SemanticFed (Working demo, production features)</li>
                        <li>• BrainyRich (Technical design complete)</li>
                        <li>• BuildMyIQ (Platform architecture ready)</li>
                        <li>• CollabKin (System design finalized)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="scroll-reveal-right">
              <h3 className="text-2xl font-bold text-white mb-8">Partnership Opportunities</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">🚀 Product Commercialization</h4>
                  <p className="text-gray-300 mb-4">
                    Bringing production-ready platforms to market with strategic partners for accelerated growth and market penetration.
                  </p>
                  <div className="text-sm text-blue-400 font-medium">
                    Conservative estimates: $150M+ revenue potential within 5 years
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">🎯 Technical Leadership</h4>
                  <p className="text-gray-300 mb-4">
                    Fractional CEO/CTO/VP Engineering roles in growth-stage companies looking for AI-native architecture and product innovation leadership.
                  </p>
                  <div className="text-sm text-green-400 font-medium">
                    Focus: AI-first product development and enterprise scaling
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">💡 Strategic Consulting</h4>
                  <p className="text-gray-300 mb-4">
                    Architecture and product strategy for enterprise clients seeking digital transformation and AI integration.
                  </p>
                  <div className="text-sm text-yellow-400 font-medium">
                    Expertise: Enterprise architecture, AI adoption, product strategy
                  </div>
                </div>

                {/* <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">💰 Investment Partnerships</h4>
                  <p className="text-gray-300 mb-4">
                    Funding opportunities for full product development and market launch across multiple high-growth verticals.
                  </p>
                  <div className="text-sm text-purple-400 font-medium">
                    Multiple products positioned for market leadership
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 scroll-reveal-left">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you want to discuss a project, need consulting advice, or just want to say hello, 
                I'm always open to connecting with like-minded people and exploring new opportunities.
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  vignesh@burdenoff.com
                </Button>
                
                <Button
                  onClick={handlePhoneClick}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  +91-7358445777
                </Button>
                
                <a
                  href="https://calendar.app.google/y8yJVaetwo3UjHSGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="lg" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300">
                    <Calendar className="mr-3 h-5 w-5" />
                    Schedule a Catch-up Call
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-8 scroll-reveal-right hover-lift">
              <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-300">Based in Chennai, India</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">PhD in Computer Science (Ongoing)</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-300">Available for Remote Consultancy</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-gray-300">Open to Speaking Engagements</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-3">Education</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
                    PhD Computer Science (2023-2027) - SRM University
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-green-600 mr-2" />
                    MTech Software Systems - BITS Pilani
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-purple-600 mr-2" />
                    BTech Electrical & Electronics - MIT
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3">Languages</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>English - Full Professional</div>
                  <div>Tamil - Native</div>
                  <div>Hindi - Professional Working</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Vignesh T.V.</h3>
              <p className="text-gray-300 leading-relaxed">
                Entrepreneur, Developer, Architect, and Consultant passionate about solving problems with technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">My Companies</h4>
              <div className="space-y-2">
                <a href="https://algoshred.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Algoshred Technologies
                </a>
                <a href="https://gethealthybowl.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Healthy Bowl Agro Foods
                </a>
                <a href="https://headshotmarketing.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Headshot Marketing
                </a>
                <a href="https://timecampus.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Timecampus Technologies
                </a>
                <a href="https://burdenoff.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  BurdenOff Consultancy Services
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { 
                    href: "https://github.com/tvvignesh",
                    svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  },
                  { 
                    href: "https://linkedin.com/in/tvvignesh",
                    svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  },
                  { 
                    href: "https://twitter.com/techahoy",
                    svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  },
                  { 
                    href: "https://tvvignesh.medium.com",
                    svg: <Globe className="h-6 w-6" />
                  }
                ].map(({ href, svg }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Vignesh T.V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}