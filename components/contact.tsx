"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
            delay: 5,
          }}
        />
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
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me
            using the form below or through my contact information.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Here are the ways you can reach me
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="bg-slate-700 p-3 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgb(20, 184, 166)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Mail className="h-6 w-6 text-teal-400" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-slate-200">aliahadi11n@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="bg-slate-700 p-3 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgb(20, 184, 166)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Phone className="h-6 w-6 text-teal-400" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p className="text-slate-200">09100683864</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="bg-slate-700 p-3 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgb(20, 184, 166)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <MapPin className="h-6 w-6 text-teal-400" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-slate-200">Tehran,Iran</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-slate-300 mb-2">Available for:</p>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>Full-time positions</li>
                      <li>Part-time positions</li>
                      <li>Remote collaboration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="h-full bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200">
                    Send Me a Message
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-400 mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-slate-700 border-slate-600 text-slate-200 placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-400 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-slate-700 border-slate-600 text-slate-200 placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-400 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="min-h-[120px] bg-slate-700 border-slate-600 text-slate-200 placeholder:text-slate-500"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-700 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center">
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
