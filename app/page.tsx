import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import Footer from "@/components/Footer/Footer";
import BottomHeader from "@/components/Header/BottomHeader";
import TopHeader from "@/components/Header/TopHeader";
import Hero from "@/components/Hero/Hero";
import HolidayRentals from "@/components/HolidayRentals";
import LatestProperties from "@/components/LatestProperties/LatestProperties";
import { Theme } from '@radix-ui/themes';

export default function Home() {
  return (
    <Theme>
      <main className="flex min-h-screen flex-col items-center justify-start pt-24">
        <TopHeader />
        <BottomHeader />
        <Hero />
        <LatestProperties />
        <FeaturedProperties />
        <HolidayRentals />
        <Footer />
      </main>
    </Theme>
  )
}
