import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent, type ReactNode } from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
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
        'This form is ready on the frontend, but no submission endpoint is configured yet. Email or call us directly, or set CONTACT_FORM_ENDPOINT in src/data/content.ts.',
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
        'Something went wrong while sending your message. Please try again or contact us directly.',
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
          lead="Reach the Nexvanta team in London — or send a message and we'll help map the next step."
          align="split"
        />

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal mode="left">
            <aside className="nx-panel h-full p-6 md:p-7">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-orange)]">
                Get in touch
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--brand-slate)]">
                London studio
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Based in the United Kingdom and ready to collaborate with ambitious teams worldwide.
              </p>

              <ul className="mt-6 space-y-3">
                <li>
                  <div className="flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background-primary)] p-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,72,88,0.08)] text-[var(--brand-teal)]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Location
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[var(--brand-slate)]">
                        {company.location}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">{company.country}</p>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href={company.phoneHref}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background-primary)] p-3.5 transition hover:border-[var(--brand-teal)]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(248,88,16,0.1)] text-[var(--brand-orange)]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Phone
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[var(--brand-slate)]">
                        {company.phone}
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background-primary)] p-3.5 transition hover:border-[var(--brand-teal)]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,72,88,0.08)] text-[var(--brand-teal)]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Email
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[var(--brand-slate)]">
                        {company.email}
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <div className="flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background-primary)] p-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(248,88,16,0.1)] text-[var(--brand-orange)]">
                      <Clock3 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Hours
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[var(--brand-slate)]">
                        {company.hours}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full"
                >
                  <FaFacebookF className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </aside>
          </Reveal>

          <Reveal mode="right" delay={0.06}>
            <form
              className="nx-panel h-full space-y-4 p-6 md:p-8"
              onSubmit={onSubmit}
              noValidate
            >
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-teal-soft)]">
                  Fill out the form to contact us
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--brand-slate)]">
                  Send a message
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>

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

              <button type="submit" className="btn-primary" disabled={status === 'loading'}>
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
