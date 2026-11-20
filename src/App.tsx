import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollManager } from './components/ScrollManager'
import { HomePage } from './pages/HomePage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--background-primary)] text-[var(--text-primary)]">
      <Link
        to="/#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-[var(--brand-teal)]"
      >
        Skip to content
      </Link>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}
