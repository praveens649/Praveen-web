"use client";

import AnimatedButton from "@/components/ui/animatedButton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Add this import at the top
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sportify",
    subtitle:
      "A sport and court lending platform featuring location-based filtering, one-time purchases, and in-app chat functionality.",
    category: "Web Development",
    status: "Under Development",
    year: "2026",
    image: "/sportify.jpg",
    span: "col-span-2",
  },
  {
    id: 2,
    title: "GameStore",
    subtitle:
      "E-commerce platform for digital game sales with user reviews and recommendations",
    category: "Web Development",
    status: "Shipped",
    year: "2023",
    image: "/gamestore.png",
    span: "col-span-1",
    link: "https://planet69.neocities.org/",
  },
  {
    id: 3,
    title: "TodoMatrix",
    subtitle:
      "Task management app with a matrix-style interface for prioritizing and organizing tasks",
    category: "Web Development",
    status: "Shipped",
    year: "2024",
    image: "/todomatrix.png",
    span: "col-span-1",
    link: "https://todo-list-ashy-chi.vercel.app/",
  },
  {
    id: 4,
    title: "Resumerzz",
    subtitle:
      "A powerful web application that provides AI-powered resume analysis and feedback. Get detailed insights on how to optimize your resume for better ATS (Applicant Tracking System) performance and human readability.",
    category: "Web + AI Development",
    status: "Shipped",
    year: "2025",
    image: "/AiResumer.png",
    span: "col-span-2",
    link: "https://ai-analyzer-one.vercel.app/",
  },
  {
    id: 5,
    title: "Blogspace",
    subtitle:
      "The Blogspace is a E-commerce blog website is a full-stack web application built with Next.js, Supabase, and TanStack Query that enables users to create, manage, and interact with blogs in a secure and collaborative environment.",
    category: "Web + CMS Development",
    status: "Shipped",
    year: "2025",
    image: "/blog.png",
    span: "col-span-3",
    link: "https://blogs-gamma-bay.vercel.app",
  },
  {
    id: 6,
    title: "Coming Soon",
    subtitle:
      "Stay tuned for an exciting new project that will be revealed soon!",
    category: "Stay Tuned",
    status: "Coming Soon",
    year: "Yet to Reveal",
    image: "/comingsoon.avif",
    span: "col-span-3",
  },
];

export default function PortfolioGrid() {
  const router = useRouter();
  // Remove hoveredProject since it's not being used
  const [,setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Update AnimatedButton with navigation */}
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatedButton onClick={() => router.push("/")} text="Home" />
      </div>

      {/* Update header section padding and text sizes */}
      <section className="pt-16 md:pt-22 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            SELECTED
            <br />
            <span className="text-gray-400">WORKS</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Design is more than visuals &mdash; it&apos;s the story your brand
            tells. Explore my selected works.
          </p>
        </div>
      </section>

      {/* Update grid section padding and layout */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={project.link || "#"}
                target={project.link ? "_blank" : "_self"}
                className={`block ${
                  project.span === "col-span-2"
                    ? "md:col-span-2"
                    : "md:col-span-1"
                } ${project.span === "col-span-3" ? "md:col-span-3" : ""}`}
              >
                <Card
                  className={`relative overflow-hidden bg-gray-900 border-gray-800 cursor-pointer group 
                    transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-400/20
                    min-h-[300px] sm:min-h-[400px]`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Update content padding and text sizes */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-end">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3 md:mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                      <span className="inline-block px-2 md:px-3 py-1 text-xs font-medium bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30">
                        {project.category}
                      </span>
                      <span className="inline-block px-2 md:px-3 py-1 text-xs font-medium bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30">
                        {project.status}
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-3 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {project.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-400">
                          {project.year}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-cyan-400/50 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {project.link ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 17L17 7M17 7H7M17 7V17"
                              />
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                      priority={index === 0}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/70"></div>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent"></div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 transition-colors duration-300 rounded-lg"></div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
