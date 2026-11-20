import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  language: 'en' | 'pt';
}

const messages = {
  en: "Hello! I'm interested in your web development services.",
  pt: "Olá! Tenho interesse nos seus serviços de desenvolvimento web."
};

export function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const phoneNumber = "13828820824"; // Format: country code + number without + or spaces
  const message = encodeURIComponent(messages[language]);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
    </motion.a>
  );
}
