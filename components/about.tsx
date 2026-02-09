"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MUI",
    "Tailwind CSS",
    "React Query",
    "Redux",
    "Zustand",
    "React hook form",
    "Zod",
    "Axios",
    "Farmer Motion",
    "REST API",
    "I18next",
    "Responsive Design",
    "Agile Methodologies",
    "Git",
    "GitLab",
    "GitHub",
    "HTML",
    "CSS",
  ];

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative"
        >
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 40 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-teal-600 shadow-lg shadow-teal-500/20"
              >
                <Image
                  src="/myPhoto.jpg?height=200&width=200"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="my-photo"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-slate-300 mb-4">
                  I'm a passionate front-end developer with a keen eye
                  for creating engaging user experiences. With a background in
                  web technologies, I focus on building clean, efficient, and
                  accessible websites.
                </p>
                <p className="text-slate-300 mb-6">
                  My journey in web development started with a university
                  project for a subject, which led me to pursue self-learning in
                  modern front-end technologies. I enjoy solving problems and
                  continuously learning new skills to improve my craft.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-slate-200">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [-1, 1, -1, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-slate-900 text-teal-400 border-teal-600/50 hover:bg-slate-800 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
