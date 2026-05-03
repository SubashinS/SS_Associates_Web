import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/siteData'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        href={business.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SS Associates on WhatsApp"
        title="WhatsApp"
        data-cursor="button"
        initial={{ opacity: 0, y: 20, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.45 }}
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        className="btn-ripple grid h-14 w-14 place-items-center rounded-full bg-[#20b75a] text-white shadow-[0_18px_44px_rgba(32,183,90,0.36)]"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      <motion.a
        href={business.phoneHref}
        aria-label="Call SS Associates"
        title="Call"
        data-cursor="button"
        initial={{ opacity: 0, y: 20, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.45 }}
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        className="btn-ripple grid h-[52px] w-[52px] place-items-center rounded-full border border-white/70 bg-white/90 text-teal-800 shadow-[0_16px_38px_rgba(8,66,72,0.18)] backdrop-blur-xl md:hidden"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
    </div>
  )
}
