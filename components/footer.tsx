"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ali Nasehahadi. All rights reserved.
            </p>
          </div>

          <nav className="flex space-x-4">
            <motion.div
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="https://github.com/ali-naseh"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="https://www.linkedin.com/in/ali-ahadi-a5487a26b"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="#contact"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
