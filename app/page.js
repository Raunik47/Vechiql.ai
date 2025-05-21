

import CarCard from "@/components/car-card";
import HomeSearch from "@/components/home-search";
import { Button } from "@/components/ui/button";
import { featuredCars } from "@/lib/data";
import { ChevronRight, Car, Calendar, Shield } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div >
      {/*  1st create Hero section */}

      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 gradient-title">
              Find your Dream Car with Vehiql AI
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              Advanced AI Car Search and test drive from thousands of vehicles.
            </p>
          </div>

          {/* Search Component (Client) */}
          <HomeSearch />
        </div>
      </section>

      {/* 1st version of our landing page so we have another section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* here we will render our all featured cars */}

          {/* this class name decide how the card look on large ,small and mdm screen */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car) => {
              return <CarCard key={car.id} car={car} />
            })}
          </div>

        </div>
      </section>




    </div>
  );
}
