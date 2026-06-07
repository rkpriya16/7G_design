import { Toaster } from 'react-hot-toast'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustMetrics from './components/sections/TrustMetrics'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import WhatsAppCTA from './components/sections/WhatsAppCTA'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <TrustMetrics />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Testimonials />
        <WhatsAppCTA />
        <Contact />
      </main>

      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#0F172A',
            color: '#fff',
            border: '1px solid #1E293B',
            borderRadius: '12px',
            fontSize: '14px',
          },
        }}
      />
    </div>
  )
}
