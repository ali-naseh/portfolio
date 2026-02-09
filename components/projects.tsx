"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Sinava",
      description:
        "Very simple crud application with search for book management",
      image: "/sinava.png?height=400&width=600",
      tags: [
        "NextJs",
        "MUI",
        "React-hook-form",
        "Zod",
        "ContextApi",
        "Axios",
        "React Query",
      ],
      // githubUrl: "https://github.com/ali-naseh/temp-store",
      liveLink: "https://sinava.co/",
    },
    {
      title: "Temp Store",
      description:
        "Very simple crud application with search for book management",
      image: "/store.png?height=400&width=600",
      tags: [
        "NextJs",
        "ShadcnUI",
        "Tailwind",
        "Responsive Design",
        "Axios",
        "React Query",
      ],
      githubUrl: "https://github.com/ali-naseh/temp-store",
      liveLink: "https://temp-store-one.vercel.app",
    },
    {
      title: "E-book Management",
      description:
        "A responsive e-book platform built with React and Next.js, featuring book listings, infinite scroll, and different filter on it.",
      image: "/ebook.png?height=400&width=600",
      tags: [
        "React",
        "Next.js",
        "MUI",
        "API Routes",
        "Responsive Design",
        "React Query",
        "Axios",
        "Zod",
        "React Hook Form",
      ],
      githubUrl: "https://github.com/ali-naseh/nextjs-book-management",
      liveLink: "https://book-management-six-beta.vercel.app/",
    },
    {
      title: "Mocha Cloud",
      description:
        "A cloud-based platform(SaaS) for porviding and online IDE for developers on different programming languages.",
      image: "/mocha.png?height=400&width=600",
      tags: ["React", "AndD", "API", "Responsive Design", "Axios"],
      githubUrl: "https://github.com/ali-naseh/mocha",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-teal-500/5"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
              My Projects
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-slate-800 border-slate-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 relative flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-slate-200">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{
                            delay: 0.4 + index * 0.1 + tagIndex * 0.05,
                            duration: 0.3,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-slate-700 text-teal-400 border-teal-600/30"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between z-50">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex justify-between"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </motion.div>
                      </Link>
                    )}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex justify-between"
                        >
                          <Link2 className="mr-2 h-4 w-4" />
                          Live
                        </motion.div>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
