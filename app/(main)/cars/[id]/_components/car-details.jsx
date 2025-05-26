"use client"

import { toggleSavedCar } from "@/actions/car-listing";
import useFetch from "@/hooks/use-fetch";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Car } from "lucide-react";
import { toast } from "sonner";

const CarDetails = ({ car, testDriveInfo }) => {
    const router = useRouter();
    const { isSignedIn } = useAuth();
    const [isWishlisted, setIsWishlisted] = useState(car.wishlisted);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const {
        loading: savingCar,
        fn: toggleSavedCarFn,
        data: toggleResult,
        error: toggleError,
    } = useFetch(toggleSavedCar);

    useEffect(() => {
        if (toggleResult?.success && toggleResult.saved !== isWishlisted) {
            setIsWishlisted(toggleResult.saved);
            toast.success(toggleResult.message);
        }
    }, [toggleResult, isWishlisted]);

    useEffect(() => {
        if (toggleError) {
            toast.error("Failed to update favorites");
        }
    }, [toggleError]);

    const handleSaveCar = async () => {
        if (!isSignedIn) {
            toast.error("Please sign in to save cars");
            router.push("/sign-in");
            return;
        }

        if (savingCar) return;

        await toggleSavedCarFn(car.id);
    };

   return (
  <div>
    <div>
    <div className="w-full lg:w-7/12">
      <div className="aspect-video rounded-lg overflow-hidden relative mb-4">
        {car.images && car.images.length > 0 ? (
          <Image
            src={car.images[currentImageIndex]}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Car className="h-24 w-24 text-gray-400" />
          </div>
        )}
      </div>
    </div>
    <div></div>
  </div>
    </div>
);
};

export default CarDetails;