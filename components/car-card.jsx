"use client";

import React, { useState } from "react";
// import { Card } from "@/ui/card";
import Image from "next/image";
import { CarIcon, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

const CarCard = ({ car }) => {
    const [isSaved, setIsSaved] = useState(car.wishlisted);

    // router 
    const router = useRouter();

    const handleToggleSave = async (e) => { };

    return (
        <Card className="overflow-hidden hover:shadow-lg transition group">
            <div className="relative h-48">
                {car.images && car.images.length > 0 ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={car.images[0]}
                            alt={`${car.make} ${car.model}`}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <CarIcon className="h-12 w-12 text-gray-400" />
                    </div>
                )}

                {/* waitlist button */}

                <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 bg-white/90 rounded-full p-1.5 ${isSaved
                        ? "text-red-500 hover:text-red-600"
                        : "text-gray-600 hover:text-gray-900"
                        }`}
                    onClick={handleToggleSave}
                >
                    <Heart className={isSaved ? "fill-current" : ""} size={20} />
                </Button>
            </div>

            <CardContent className="p-4">
                <div className="flex flex-col mb-2">
                    <h3 className="text-lg font-bold line-clamp-1">
                        {car.make} {car.model}
                    </h3>
                    <span className="text-xl font-bold text-blue-600">
                        ${car.price.toLocaleString()}
                    </span>
                </div>

                {/* rendering few more details about cars */}

                <div className="text-gray-600 mb-2 flex items-center">
                    <span>{car.year}</span>
                    <span className="mx-2">•</span>
                    <span>{car.transmission}</span>
                    <span className="mx-2">•</span>
                    <span>{car.fuelType}</span>
                </div>

                {/* now render more detail like bodytype,MILAGE etc  for this we will use BADGE component from sadcn ui*/}

                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-50 text-gray-800">
                        {car.bodyType}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-800">
                        {car.mileage.toLocaleString()} miles
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-800">
                        {car.color}
                    </Badge>
                </div>


                {/* dynemic routing  when we click on view car button  the route include this url in it  /cars/${car.id}*/}
                <div className="flex justify-between">
                    <Button
                        className="flex-1"
                        onClick={() => router.push(`/cars/${car.id}`)}
                    >
                        View Car
                    </Button>
                </div>

            </CardContent>

        </Card>
    );
};

export default CarCard;
