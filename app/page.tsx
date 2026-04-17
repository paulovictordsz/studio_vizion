import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import PhotoGallery from '@/components/PhotoGallery'
import FAQSection from '@/components/FAQSection'
import ProcessSection from '@/components/ProcessSection'
import WorkshopsSection from '@/components/WorkshopsSection'
import CTASection from '@/components/CTASection'
import BenefitsSection from '@/components/BenefitsSection'
import ContinueLearning from '@/components/ContinueLearning'
import PreFooter from '@/components/PreFooter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesGrid />
      <PhotoGallery />
      <FAQSection />
      <ProcessSection />
      <WorkshopsSection />
      <CTASection />
      <BenefitsSection />
      <ContinueLearning />
      <PreFooter />
      <Footer />
    </main>
  )
}
