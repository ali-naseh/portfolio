"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(80, 230, 200, ${Math.random() * 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    const connectParticles = () => {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(80, 230, 200, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-slate-950 to-slate-900"></div>
      <AnimatedBackground />

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-teal-500/10 blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-emerald-500/10 blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <motion.div style={{ y, opacity }} className="max-w-3xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-2 text-sm md:text-base text-slate-400"
        >
          Hello, I&apos;m
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
        >
          Ali Nasehahadi
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium mb-6 text-slate-200"
        >
          Junior Front-End Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-slate-400 mb-8 max-w-xl mx-auto"
        >
          I build responsive, accessible, and performant web applications with
          modern technologies like React, Next.js, Tailwind CSS and more...
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            className="bg-teal-600 hover:bg-teal-700 relative overflow-hidden group"
          >
            <Link href="#contact">
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="relative overflow-hidden group border-teal-500/30"
          >
            <Link href="#projects">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-teal-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="https://github.com/ali-naseh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors relative group"
          >
            <Github className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            <span className="sr-only">GitHub</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-teal-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ali-ahadi-a5487a26b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors relative group"
          >
            <Linkedin className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            <span className="sr-only">LinkedIn</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-teal-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
          }}
        >
          <Link
            href="#about"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
