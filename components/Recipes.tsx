"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChefHat } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
}

const recipes: Recipe[] = [
  {
    id: "1",
    title: "Grandmother's Casserole",
    description:
      "A beloved family recipe that has been passed down for generations. Perfect for family gatherings.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Holiday Celebration Cake",
    description:
      "Our signature dessert that makes every celebration special. A family favorite for birthdays and holidays.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Family Bread Recipe",
    description:
      "Fresh baked bread that brings the whole family together. The aroma fills our home with love and tradition.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Comfort Soup",
    description:
      "A warm, comforting soup that has been a family staple for generations. Perfect for any season.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
  },
];

export default function Recipes() {
  return (
    <section id="recipes" className="section bg-gradient-soft py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Family Recipes
          </h2>
          <p className="text-lg text-muted-foreground">
            Our favorite recipes passed down through generations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">
                  {recipe.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {recipe.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                >
                  View Recipe
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

