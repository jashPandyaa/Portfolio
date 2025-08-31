"use client";
import React from "react";
import { motion } from "motion/react";

export const AchievementCard = ({
  title,
  category,
  description,
  icon,
  year,
  index
}: {
  title: string;
  category: string;
  description: string;
  icon: string;
  year: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative p-6 rounded-2xl border border-white/[0.2] bg-black-100 hover:border-purple/50 transition-all duration-300 h-full">
        {/* Gradient background on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon and Year */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">{icon}</div>
            <span className="text-purple text-sm font-medium px-2 py-1 rounded-full bg-purple/10 border border-purple/20">
              {year}
            </span>
          </div>
          
          {/* Category */}
          <div className="mb-3">
            <span className="text-white-200 text-xs font-semibold uppercase tracking-wider">
              {category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-white text-lg font-bold mb-3 group-hover:text-purple transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-white-200 text-sm leading-relaxed flex-grow">
            {description}
          </p>
          
          {/* Bottom accent line */}
          <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-purple to-transparent group-hover:w-full transition-all duration-500" />
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-purple/40 group-hover:bg-purple/80 transition-colors duration-300" />
        <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-purple/40 group-hover:bg-purple/80 transition-colors duration-300" />
      </div>
    </motion.div>
  );
};