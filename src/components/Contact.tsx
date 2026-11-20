import { ArrowRight, Mail } from 'lucide-react'
import { useState, type FormEvent, type ReactNode } from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { company, CONTACT_FORM_ENDPOINT, serviceOptions } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type FormState = {
  name: string
  email: string
  phone: string
  companyName: string
  details: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  details: '',
}

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.details.trim() || values.details.trim().length < 12) {
    errors.details = 'Please share a bit more about your project (at least 12 characters).'
  }
  return errors
}

function ContactSchematic() {
  return (
    <svg
      viewBox="0 0 420 480"
      className="mx-auto h-auto w-full max-w-[360px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="48" y="390" width="324" height="48" rx="18" stroke="#7eb8c4" strokeWidth="2.5" fill="#f7fbfd" />
      <rect x="70" y="78" width="280" height="300" rx="22" stroke="#5fa0ae" strokeWidth="2.5" fill="#f4fafb" />
      <rect x="98" y="108" width="120" height="90" rx="12" stroke="#5fa0ae" strokeWidth="2" fill="#eaf5f7" />
      <circle cx="158" cy="153" r="28" stroke="#5fa0ae" strokeWidth="2" />
      <circle cx="158" cy="153" r="12" stroke="#004858" strokeWidth="2" />
      <rect x="236" y="112" width="86" height="40" rx="8" stroke="#5fa0ae" strokeWidth="2" fill="#fff" />
      <text x="248" y="137" fill="#004858" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="700">
        NX-01
      </text>
      <rect x="236" y="164" width="86" height="28" rx="8" stroke="#5fa0ae" strokeWidth="2" />
      <path d="M110 230h200" stroke="#5fa0ae" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="110" y="248" width="70" height="70" rx="10" stroke="#5fa0ae" strokeWidth="2" fill="#fff" />
      <path d="M125 283h40M145 263v40" stroke="#F85810" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="196" y="248" width="104" height="28" rx="8" stroke="#5fa0ae" strokeWidth="2" />
      <rect x="196" y="288" width="104" height="28" rx="8" stroke="#5fa0ae" strokeWidth="2" />
      <circle cx="320" cy="200" r="34" stroke="#5fa0ae" strokeWidth="2.5" fill="#eaf5f7" />
      <circle cx="320" cy="200" r="18" stroke="#004858" strokeWidth="2" />
      <path d="M320 170v-28M334 178l18-14M306 178l-18-14" stroke="#7eb8c4" strokeWidth="2" strokeLinecap="round" />
      <rect x="128" y="340" width="164" height="18" rx="6" stroke="#5fa0ae" strokeWidth="2" fill="#fff" />
      <circle cx="96" cy="360" r="8" fill="#F85810" />
      <circle cx="324" cy="360" r="8" fill="#004858" />
    </svg>
  )
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'unconfigured'>(
    'idle',
  )
  const [message, setMessage] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      setMessage('')
      return
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus('unconfigured')
      setMessage(
        'This form is ready on the frontend, but no submission endpoint is configured yet. Email us directly or set CONTACT_FORM_ENDPOINT in src/data/content.ts.',
      )
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.companyName,
          details: values.details,
          service: serviceOptions[0],
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setMessage('Message sent successfully. We will get back to you soon.')
      setValues(initial)
    } catch {
      setStatus('error')
      setMessage(
        'Something went wrong while sending your message. Please try again or email us directly.',
      )
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[var(--background-tint)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Tell us what you&apos;re <span className="text-orange">imagining</span>
            </>
          }
          lead="Fill out the form — we'll help map the next practical step."
        />

        <div className="nx-panel grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal mode="left" className="p-6 md:p-8">
            <form className="max-w-md space-y-4" onSubmit={onSubmit} noValidate>
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  className="field-input"
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  className="field-input"
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>
              <Field id="phone" label="Phone number">
                <input
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={values.phone}
                  onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                  className="field-input"
                />
              </Field>
              <Field id="companyName" label="Company name">
                <input
                  id="companyName"
                  name="companyName"
                  autoComplete="organization"
                  placeholder="Enter your company name"
                  value={values.companyName}
                  onChange={(e) => setValues((v) => ({ ...v, companyName: e.target.value }))}
                  className="field-input"
                />
              </Field>
              <Field id="details" label="Message" error={errors.details}>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Hi, I'm reaching out because I am interested in..."
                  value={values.details}
                  onChange={(e) => setValues((v) => ({ ...v, details: e.target.value }))}
                  className="field-input resize-y"
                  aria-invalid={Boolean(errors.details)}
                />
              </Field>

              <button type="submit" className="btn-primary mt-1" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Submit'}
                <ArrowRight className="h-4 w-4" />
              </button>

              {message && (
                <p
                  className={`text-sm ${
                    status === 'success'
                      ? 'text-emerald-700'
                      : status === 'unconfigured'
                        ? 'text-[var(--brand-teal)]'
                        : 'text-rose-600'
                  }`}
                  role="status"
                >
                  {message}
                </p>
              )}
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${company.email}`}
                className="nx-chip !normal-case tracking-normal"
              >
                <Mail className="h-3.5 w-3.5 text-[var(--brand-teal)]" />
                {company.email}
              </a>
              <a href={company.linkedin} target="_blank" rel="noreferrer" className="btn-secondary !px-3 !py-1.5 text-xs">
                <FaLinkedinIn className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal
            mode="right"
            delay={0.06}
            className="flex items-center justify-center bg-[var(--background-tint)] p-6 md:p-8"
          >
            <ContactSchematic />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
