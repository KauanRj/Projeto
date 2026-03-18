import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center py-6 border-t border-gray-800 text-gray-500"
    >
      © 2026 - Projeto RFID
    </motion.footer>
  );
}