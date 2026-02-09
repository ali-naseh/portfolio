"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Front-End Developer",
      company: "Dade Pardaz Novin",
      period: "Jun 2025 - Present",
      description:
        "Developing responsive web applications using React and Next.js. Collaborating with designers to implement UI/UX designs. Working with REST APIs and state management.",
      skills: [
        "Next.js",
        "MUI",
        "ShadcnUI",
        "Tailwind",
        "React Query",
        "React Hook Form",
        "Husky",
        "Zod",
        "I18Next",
        "Axios",
        "Docker"
      ],
    },
    {
      title: "Front-End Developer",
      company: "Perfetto Gruppo",
      period: "Nov 2023 - Jun 2025",
      description:
        "Developing responsive web applications using React and Next.js. Collaborating with designers to implement UI/UX designs. Working with REST APIs and state management.",
      skills: [
        "React",
        "Next.js",
        "MUI",
        "React Query",
        "React Hook Form",
        "Husky",
        "Zod",
        "I18Next",
        "Axios",
        "EsLint",
        "REST API",
        "Git",
      ],
    },
    {
      title: "Front-End Development Internship",
      company: "Kharazmi University",
      period: "Nov 2022 - Nov 2023",
      description:
        "Building a cloud-based platform for developers. Implementing features such as user authentication, file management, and real-time collaboration. Ensuring cross-browser compatibility and performance optimization.",
      skills: ["React", "AntD", "Axios"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-500/10 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 20 + 20,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
                Experience & Education
              </span>
            </h2>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-teal-600 hover:bg-teal-700 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </span>
                <span className="absolute inset-0 bg-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </motion.div> */}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-200">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="bg-slate-900 border-slate-800 hover:border-teal-500/30 transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : {}}
                            transition={{
                              delay: 0.3 + index * 0.1,
                              duration: 0.5,
                            }}
                          >
                            <CardTitle className="text-slate-200">
                              {exp.title}
                            </CardTitle>
                          </motion.div>
                          <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : {}}
                            transition={{
                              delay: 0.4 + index * 0.1,
                              duration: 0.5,
                            }}
                          >
                            <Badge
                              variant="outline"
                              className="bg-slate-800 text-teal-400 border-teal-600/30"
                            >
                              {exp.period}
                            </Badge>
                          </motion.div>
                        </div>
                        <p className="text-slate-400">{exp.company}</p>
                      </CardHeader>
                      <CardContent>
                        <motion.p
                          className="text-slate-300 mb-3"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                          }}
                        >
                          {exp.description}
                        </motion.p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                delay: 0.6 + index * 0.1 + skillIndex * 0.05,
                                duration: 0.3,
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-slate-800 text-slate-300"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
