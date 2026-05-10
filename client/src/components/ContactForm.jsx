import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import { services } from '../data/siteData'

const initialValues = {
  name: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const serviceOptions = useMemo(
    () => [...new Set(services.map((service) => service.title))],
    [],
  )

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined, form: undefined }))
    setStatus('')
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.service) nextErrors.service = 'Choose a service.'
    if (values.message.trim().length < 12) {
      nextErrors.message = 'Share a short note about your requirement.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setStatus('')

    if (Object.keys(nextErrors).length > 0) return

    const enquiryMessage = `New Enquiry from SS Associates Website:
Name: ${values.name.trim()}
Service: ${values.service}
Message: ${values.message.trim()}`

    const whatsappUrl = `https://wa.me/917708242395?text=${encodeURIComponent(
      enquiryMessage,
    )}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setStatus('WhatsApp opened with your enquiry message.')
    setValues(initialValues)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.56 }}
      className="premium-surface rounded-[34px] p-5 sm:p-7"
      noValidate
    >
      <Field label="Name" error={errors.name}>
        <input
          name="name"
          value={values.name}
          onChange={updateValue}
          placeholder="Your name"
          className="form-input"
        />
      </Field>

      <Field label="Service" error={errors.service} className="mt-4">
        <select
          name="service"
          value={values.service}
          onChange={updateValue}
          className="form-input"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message} className="mt-4">
        <textarea
          name="message"
          value={values.message}
          onChange={updateValue}
          placeholder="Tell us about the property, document, approval, or documentation requirement."
          rows={5}
          className="form-input resize-none"
        />
      </Field>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="btn-ripple inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f9f7b,#1587a8)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_42px_rgba(15,127,129,0.28)] transition"
        >
          Send enquiry on WhatsApp
          <Send className="h-4 w-4" />
        </motion.button>

        <AnimatePresence>
          {status ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800"
            >
              <CheckCircle2 className="h-4 w-4" />
              {status}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.form>
  )
}

function Field({ label, error, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-slate-800">{label}</span>
      {children}
      <AnimatePresence>
        {error ? (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-2 block text-xs font-bold text-rose-600"
          >
            {error}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </label>
  )
}
