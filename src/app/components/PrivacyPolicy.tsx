import { X } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'pt';
}

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 14, 2026",
    intro: "This website may collect basic contact information you provide voluntarily through email links, such as your name, email address, and project details.",
    howUsedTitle: "How Information Is Used",
    howUsed1: "To respond to inquiries and project requests.",
    howUsed2: "To communicate about services and ongoing work.",
    dataSharingTitle: "Data Sharing",
    dataSharing: "Personal information is not sold. Information may be shared only when required by law.",
    externalLinksTitle: "External Links",
    externalLinks: "This website contains links to third-party websites. Their privacy practices are governed by their own policies.",
    contactTitle: "Contact",
    contactText: "For privacy-related requests, contact:",
    backToHome: "← Back to home"
  },
  pt: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: 14 de abril de 2026",
    intro: "Este site pode coletar informações básicas de contato que você fornece voluntariamente através de links de e-mail, como seu nome, endereço de e-mail e detalhes do projeto.",
    howUsedTitle: "Como as Informações São Usadas",
    howUsed1: "Para responder a consultas e solicitações de projetos.",
    howUsed2: "Para comunicar sobre serviços e trabalhos em andamento.",
    dataSharingTitle: "Compartilhamento de Dados",
    dataSharing: "Informações pessoais não são vendidas. As informações podem ser compartilhadas apenas quando exigido por lei.",
    externalLinksTitle: "Links Externos",
    externalLinks: "Este site contém links para sites de terceiros. Suas práticas de privacidade são regidas por suas próprias políticas.",
    contactTitle: "Contato",
    contactText: "Para solicitações relacionadas à privacidade, entre em contato:",
    backToHome: "← Voltar para início"
  }
};

export function PrivacyPolicy({ isOpen, onClose, language }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  const t = content[language];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600 mb-8">{t.lastUpdated}</p>

          <div className="space-y-6 text-gray-700">
            <p>
              {t.intro}
            </p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.howUsedTitle}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.howUsed1}</li>
                <li>{t.howUsed2}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.dataSharingTitle}</h2>
              <p>
                {t.dataSharing}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.externalLinksTitle}</h2>
              <p>
                {t.externalLinks}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.contactTitle}</h2>
              <p>
                {t.contactText}{" "}
                <a href="mailto:contact@christianenogueira.dev" className="text-[#8B5CF6] hover:underline">
                  contact@christianenogueira.dev
                </a>
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onClose}
                className="text-[#8B5CF6] hover:underline font-semibold"
              >
                {t.backToHome}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
