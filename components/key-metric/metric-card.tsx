/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Card from "../reusable/card";
import { motion } from "framer-motion";

export default function MetricsCard({
  title,
  value,
  description,
  imageUrl,
  imageWidth = 100,
  imageHeight = 100,
  className,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  icon?: any;
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
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="absolute z-10 -top-12 right-2"
          >
            <Image
              src={imageUrl}
              alt="corner image"
              width={imageWidth}
              height={imageHeight}
              className="object-cover hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </motion.div>
        )}
        <div className="flex flex-col text-start px-2 space-y-2 text-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">{title}</h1>
            {icon}
          </div>
          <h1 className="text-4xl font-bold">{value}</h1>
          <p className="text-xs">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
