import { motion } from "motion/react";
import { Code2, Smartphone, Globe, Mail, Github, Linkedin, Phone, Quote, Blocks, Database, Layers, Palette, Terminal, Workflow, FileCode, Layout, Server } from "lucide-react";
import { useEffect, useState } from "react";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { translations } from "./translations";
import logoImage from "../imports/LogoDes_-_transparentpng.png";

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const t = translations[language];

  useEffect(() => {
    // SEO Meta Tags - Update based on language
    const titleText = language === 'en'
      ? "Christiane Nogueira - Web Developer & Digital Solutions | Freelance Developer Canada"
      : "Christiane Nogueira - Desenvolvedora Web & Soluções Digitais | Desenvolvedora Freelance Canadá";
    document.title = titleText;

    // Meta Description
    const descriptionText = language === 'en'
      ? 'Professional web developer and digital solutions specialist. Offering web development, mobile apps, and custom software for small businesses and startups in Canada and internationally.'
      : 'Desenvolvedora web profissional e especialista em soluções digitais. Oferecendo desenvolvimento web, aplicativos mobile e software personalizado para pequenas empresas e startups no Canadá e internacionalmente.';

    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', descriptionText);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'web developer, mobile app developer, freelance developer, digital solutions, software developer Canada, remote developer, React developer, web development services');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph Tags for Social Media
    const ogTitleText = language === 'en'
      ? 'Christiane Nogueira - Web Developer & Digital Solutions'
      : 'Christiane Nogueira - Desenvolvedora Web & Soluções Digitais';

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', ogTitleText);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescText = language === 'en'
      ? 'Professional web developer specializing in modern web and mobile applications for small businesses and startups.'
      : 'Desenvolvedora web profissional especializada em aplicações web e mobile modernas para pequenas empresas e startups.';

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', ogDescText);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    // Twitter Card
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', ogTitleText);
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', ogDescText);
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    // Structured Data (JSON-LD) for Google
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Christiane Nogueira",
      "jobTitle": "Web Developer",
      "url": window.location.href,
      "sameAs": [
        "https://github.com/christianenogm",
        "https://www.linkedin.com/in/christiane-nogueira-mendes/"
      ],
      "telephone": [
        "+1-382-882-0824",
        "+1-226-499-6566"
      ],
      "email": "contact@christianenogueira.dev",
      "description": "Professional web developer specializing in web development, mobile apps, and digital solutions for small and medium-sized businesses.",
      "knowsAbout": ["Web Development", "Mobile App Development", "React", "JavaScript", "Digital Solutions"],
      "offers": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Services",
          "description": "Professional web development, mobile app development, and custom digital solutions"
        }
      }
    };

    const scriptTag = document.querySelector('script[type="application/ld+json"]') || document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.textContent = JSON.stringify(structuredData);
    if (!document.querySelector('script[type="application/ld+json"]')) {
      document.head.appendChild(scriptTag);
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header language={language} onLanguageToggle={() => setLanguage(language === 'en' ? 'pt' : 'en')} />

      {/* Hero Section - Full Bleed */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#C026D3] to-[#EC4899] opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Name */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#C026D3] to-[#EC4899] bg-clip-text text-transparent leading-tight"
                >
                  Christiane Nogueira
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-2xl text-gray-600 mt-4"
                >
                  {t.heroTagline}
                </motion.p>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-700 max-w-xl"
              >
                {t.heroDescription}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] via-[#C026D3] to-[#EC4899] text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  {t.heroCTA}
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-[#C026D3]/10 to-[#EC4899]/10 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3b21hbiUyMHByb2dyYW1tZXIlMjBjb2RlJTIwc2NyZWVuJTIwdGVjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzYwNDQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional web developer working on modern laptop - Web development services by Christiane Nogueira"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t.aboutTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.aboutText1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                {t.aboutText2}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center gap-6 mt-12"
            >
              <a
                href="https://github.com/christianenogm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/christiane-nogueira-mendes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-gray-600">{t.servicesSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: t.service1Title,
                description: t.service1Desc,
                gradient: "from-[#8B5CF6] to-[#C026D3]"
              },
              {
                icon: Smartphone,
                title: t.service2Title,
                description: t.service2Desc,
                gradient: "from-[#C026D3] to-[#EC4899]"
              },
              {
                icon: Code2,
                title: t.service3Title,
                description: t.service3Desc,
                gradient: "from-[#EC4899] to-[#8B5CF6]"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Skills Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.technologiesTitle}</h2>
            <p className="text-xl text-gray-600">{t.technologiesSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "React",
                icon: Blocks,
                color: "from-[#61DAFB] to-[#4FA8C5]"
              },
              {
                name: "React Native",
                icon: Smartphone,
                color: "from-[#61DAFB] to-[#00D8FF]"
              },
              {
                name: "Angular",
                icon: Code2,
                color: "from-[#DD0031] to-[#C3002F]"
              },
              {
                name: "JavaScript",
                icon: Terminal,
                color: "from-[#F7DF1E] to-[#E5C700]"
              },
              {
                name: "TypeScript",
                icon: FileCode,
                color: "from-[#3178C6] to-[#235A97]"
              },
              {
                name: "Node.js",
                icon: Server,
                color: "from-[#68A063] to-[#4F7C48]"
              },
              {
                name: "PHP",
                icon: Code2,
                color: "from-[#777BB4] to-[#5F5C9F]"
              },
              {
                name: "MySQL",
                icon: Database,
                color: "from-[#4479A1] to-[#00758F]"
              },
              {
                name: "WordPress",
                icon: Layout,
                color: "from-[#21759B] to-[#1E6A8D]"
              },
              {
                name: "HTML/CSS",
                icon: Code2,
                color: "from-[#E34F26] to-[#1572B6]"
              },
              {
                name: "Git",
                icon: Workflow,
                color: "from-[#F05032] to-[#C9402E]"
              },
              {
                name: "REST APIs",
                icon: Layers,
                color: "from-[#8B5CF6] to-[#C026D3]"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-900 text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results Section */}
      <section id="results" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.resultsTitle}</h2>
            <p className="text-xl text-gray-600">{t.resultsSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t.result1Title,
                description: t.result1Desc,
                result: t.result1Metric,
                metric: "+42%",
                gradient: "from-[#8B5CF6] to-[#C026D3]"
              },
              {
                title: t.result2Title,
                description: t.result2Desc,
                result: t.result2Metric,
                metric: "2x",
                gradient: "from-[#C026D3] to-[#EC4899]"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-bold text-2xl mb-4`}>
                  {project.metric}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">{t.resultLabel} <span className="text-[#8B5CF6]">{project.result}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{t.testimonialsSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: t.testimonial1,
                name: t.testimonial1Name,
                role: t.testimonial1Role,
                initials: "SM",
                gradient: "from-[#8B5CF6] to-[#C026D3]"
              },
              {
                quote: t.testimonial2,
                name: t.testimonial2Name,
                role: t.testimonial2Role,
                initials: "MC",
                gradient: "from-[#C026D3] to-[#EC4899]"
              },
              {
                quote: t.testimonial3,
                name: t.testimonial3Name,
                role: t.testimonial3Role,
                initials: "AR",
                gradient: "from-[#EC4899] to-[#8B5CF6]"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-[#8B5CF6] mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#8B5CF6] via-[#C026D3] to-[#EC4899]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-bold text-white mb-6">{t.contactTitle}</h2>
            <p className="text-xl text-white/90 mb-8">
              {t.contactSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="mailto:contact@christianenogueira.dev"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B5CF6] rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5" />
                contact@christianenogueira.dev
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
              <a href="tel:+13828820824" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +1 (382) 882-0824 <span className="text-sm">({t.textOnly})</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+12264996566" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +1 (226) 499-6566 <span className="text-sm">({t.vrs})</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="CN Logo"
                className="w-10 h-10"
              />
              <span className="font-semibold">Christiane Nogueira</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/christianenogm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/christiane-nogueira-mendes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@christianenogueira.dev"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Christiane Nogueira. {t.footerRights}
              {" · "}
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-white transition-colors underline"
              >
                {t.privacyPolicy}
              </button>
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} language={language} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton language={language} />
    </div>
  );
}