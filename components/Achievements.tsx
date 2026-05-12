"use client";
import React from "react";
import { motion } from "motion/react";
import { AchievementCard } from "./ui/AchievementCard";

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "2x Devang Mehta IT Award Winner",
      category: "Academic Excellence",
      description: "Recognized as Top 1% academically among Computer Engineering students for consecutive years",
      icon: "🏆",
      year: "2024 & 2025"
    },
    {
      id: 2,
      title: "GTU Rank Holder",
      category: "University Ranking",
      description: "Secured 6th rank in Gujarat Technological University (3rd Semester)",
      icon: "📊",
      year: "2024"
    },
    {
      id: 3,
      title: "Outstanding CGPA",
      category: "Academic Performance",
      description: "Maintaining exceptional 9.7 CGPA in Computer Engineering program",
      icon: "⭐",
      year: "2023-2027"
    },
    {
      id: 4,
      title: "Competitive Programmer",
      category: "425+ LeetCode Solved",
      description: "Regular problem solving on LeetCode and GeeksForGeeks",
      icon: "🌟",
      year: "2026"
    }
  ];

  return (
    <section className="w-full py-20" id="ach">
      <h1 className="heading text-white">
        My{" "}
        <span className="text-purple">
          achievements
        </span>
      </h1>
      
      <div className="w-full mt-12 grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {achievementsData.map((achievement, index) => (
          <AchievementCard 
            key={achievement.id} 
            {...achievement} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;