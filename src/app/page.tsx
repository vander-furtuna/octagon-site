import { BannerSection } from '@/app/sections/banner'
import { OurServicesSection } from './sections/our-services'

export default function Home() {
  return (
    <main className="h-full w-full">
      <BannerSection />
      <OurServicesSection />
    </main>
  )
}
