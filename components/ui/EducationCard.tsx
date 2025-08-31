"use client";
import React from "react";
import { motion } from "motion/react";

export const EducationCard = ({
  degree,
  institution,
  duration,
  cgpa,
  description
}: {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="relative p-6 rounded-3xl border border-white/[0.2] bg-black-100 hover:border-purple/50 transition-all duration-300">
        {/* Gradient background on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Duration badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple/20 border border-purple/30 mb-4">
            <span className="text-purple text-sm font-medium">{duration}</span>
          </div>
          
          {/* Degree */}
          <h3 className="text-white text-xl font-bold mb-2 group-hover:text-purple transition-colors duration-300">
            {degree}
          </h3>
          
          {/* Institution */}
          <h4 className="text-white-200 text-lg font-semibold mb-3">
            {institution}
          </h4>
          
          {/* CGPA/Percentage */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-sm">CGPA/Score:</span>
            <span className="text-purple font-bold text-lg">{cgpa}</span>
          </div>
          
          {/* Description */}
          <p className="text-white-200 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-purple/30 group-hover:bg-purple/60 transition-colors duration-300" />
        <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-purple/30 group-hover:bg-purple/60 transition-colors duration-300" />
      </div>
    </motion.div>
  );
};