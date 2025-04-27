"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Enter a valid email address",
      message: formData.message.trim() ? "" : "Message cannot be empty",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // for button

  type NeonButtonProps = {
    glowIntensity?: number; // 0-1 (0.2 default)
    glowSize?: number; // pixels (20 default)
    pulseSpeed?: number; // seconds (3 default)
    scanSpeed?: number; // seconds (2.5 default)
  };

  const NeonButton = ({
    glowIntensity = 0.2,
    glowSize = 20,
    pulseSpeed = 3,
    scanSpeed = 2.5,
    ...props
  }: NeonButtonProps) => {
    const glowColor = `rgba(74, 222, 128, ${glowIntensity})`;
    const glowShadow = `0 0 ${glowSize}px ${glowSize / 2}px ${glowColor}`;

    return (
      <button
        type="submit"
        disabled={submitStatus === "success" || isSubmitting}
        className={cn(
          "w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer",
          " bg-[#1C1D1D] text-foreground",
          "hover:from-emerald-700 hover:to-emerald-800 ",
          "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white/10",
          "shadow-lg hover:shadow-emerald-500/20",
          "flex items-center justify-center relative overflow-hidden",
          isSubmitting ? "opacity-80 cursor-not-allowed" : ""
        )}
      >
        {/* Continuous scanning neon light */}
        <motion.div
          className="absolute -inset-[1px]"
          initial={{ x: "-100%" }}
          animate={{
            x: "100%",
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
        >
          <div className="h-full w-72 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
        </motion.div>

        {/* Persistent inner glow */}
        <div className="absolute inset-0 rounded-lg bg-emerald-900/80 pointer-events-none" />

        {/* Button content */}
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <span className="relative z-10 text-foreground hover:text-green-400 transition-all">
            Send Message 👋
          </span>
        )}
      </button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl z-30"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl p-8",
          "bg-white/5 backdrop-blur-lg border border-white/10",
          "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
        )}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-300" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-bold text-foreground mb-10 "
        >
          Let's Discuss Your Project
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-7 relative z-10"
          method="POST"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={submitStatus === "success"}
                className={cn(
                  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-lime-900",
                  "text-white placeholder-white/40 focus:outline-none focus:ring-2",
                  "focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                )}
                placeholder="Your Full Name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
              <div className="absolute inset-0 rounded-lg pointer-events-none border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={submitStatus === "success"}
                className={cn(
                  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-lime-900",
                  "text-white placeholder-white/40 focus:outline-none focus:ring-2",
                  "focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                )}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
              <div className="absolute inset-0 rounded-lg pointer-events-none border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={submitStatus === "success"}
                rows={5}
                className={cn(
                  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-lime-900",
                  "text-white placeholder-white/40 focus:outline-none focus:ring-2",
                  "focus:ring-emerald-500 focus:border-transparent transition-all duration-200",
                  "resize-none"
                )}
                placeholder="Hello, I'd like to talk about..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
              <div className="absolute inset-0 rounded-lg pointer-events-none border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-400 text-sm"
            >
              Message sent successfully!
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              Failed to send message. Please try again.
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-2"
          >
            <NeonButton />
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
