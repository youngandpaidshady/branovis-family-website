"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Users, Calendar, Layers } from "lucide-react";

const stats = [
  { icon: Calendar, number: 150, label: "Years of History" },
  { icon: Users, number: 50, label: "Family Members" },
  { icon: Layers, number: 5, label: "Generations" },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold font-serif text-primary">
      {count}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Meet Our Family
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a close-knit family that values love, tradition, and togetherness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              People often ask us, "What makes your family special?" When we first
              started our journey, we thought we would be a small family. However,
              through the years, we've discovered that family is not just about blood
              relations—it's about the bonds we create, the traditions we share, and the
              love that multiplies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We have a special place in our hearts for families—our goal is to encourage
              strong relationships, celebrate our heritage, and create memories that will
              last for generations to come.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop"
              alt="Family Photo"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-soft rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter value={stat.number} />
                <p className="text-sm sm:text-base text-muted-foreground mt-2 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

