/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Card from "../reusable/card";
import { motion } from "framer-motion";

export default function TopArtistCard({
  title,
  name,
  description,
  imageUrl,
  imageWidth = 100,
  imageHeight = 100,
  className,
}: {
  title: string;
  name: string;
  description: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <Card
        className={`relative p-6 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out shadow-lg bg-white text-gray-800 ${className}`}
      >
        <div className="lg:block hidden">
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="absolute z-10 -top-24 -right-8"
            >
              <Image
                src={imageUrl}
                alt="corner image"
                width={imageWidth}
                height={imageHeight}
                className="object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </motion.div>
          )}
          <div className="flex flex-col space-y-2 justify-between text-start px-2 text-white">
            <h1 className="text-lg font-bold">{title}</h1>
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-sm">{description}</p>
            <Image
              src={"/music-sounds.gif"}
              width={600}
              height={600}
              alt="hello"
            />
          </div>
        </div>
        <div className="lg:hidden block">
          <div className="flex flex-col justify-center items-center">
            {imageUrl && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={imageUrl}
                  alt="corner image"
                  width={imageWidth}
                  height={imageHeight}
                  className="object-cover absolute left-1/2 top-[-30%] transform -translate-x-1/2 transition-all duration-300 ease-in-out"
                />
              </motion.div>
            )}
            <div className="flex flex-col items-center text-start px-2 space-y-2 text-white sm:pt-40 pt-28 w-full">
              <h1 className="text-lg font-bold">{title}</h1>
              <h1 className="text-4xl font-bold">{name}</h1>
              <p className="text-xs">{description}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
