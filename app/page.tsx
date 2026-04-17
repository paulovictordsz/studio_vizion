import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import PhotoGallery from '@/components/PhotoGallery'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BrandsSection from '@/components/BrandsSection'
import WorkshopsSection from '@/components/WorkshopsSection'
import SocialTestimonials from '@/components/SocialTestimonials'
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
      <TestimonialsSlider />
      <BrandsSection />
      <WorkshopsSection />
      <SocialTestimonials />
      <BenefitsSection />
      <ContinueLearning />
      <PreFooter />
      <Footer />
    </main>
  )
}
