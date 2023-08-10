import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import Hero from "@/components/Hero/Hero";
import HolidayRentals from "@/components/HolidayRentals";
import LatestProperties from "@/components/LatestProperties/LatestProperties";
import { Theme } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <LatestProperties />
      <FeaturedProperties />
      <HolidayRentals />
    </main>
  )
}
