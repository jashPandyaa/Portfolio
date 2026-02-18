"use client";
import React from "react";
import { motion } from "motion/react";
import { EducationCard } from "./ui/EducationCard";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.E. Computer Engineering",
      institution: "Gujarat Technological University",
      duration: "2023 - 2027",
      cgpa: "9.7",
      description: "Currently pursuing Bachelor's in Computer Engineering with focus on full-stack development and modern web technologies."
    },
    {
      id: 2,
      degree: "Higher Secondary (XII)",
      institution: "Gujarat Board",
      duration: "2021 - 2022",
      cgpa: "77.7%",
      description: "Completed higher secondary education with 88 PR, building strong foundation in mathematics and science."
    }
  ];

  return (
    <section className="w-full py-20" id="edu">
      <h1 className="heading text-white">
        My{" "}
        <span className="text-purple">
          educational journey
        </span>
      </h1>
      
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {educationData.map((edu) => (
          <EducationCard key={edu.id} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;