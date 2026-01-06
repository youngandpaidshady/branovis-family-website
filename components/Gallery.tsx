"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop",
    alt: "Family Reunion",
    category: "reunion",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
    alt: "Wedding",
    category: "wedding",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    alt: "Celebration",
    category: "celebration",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop",
    alt: "Daily Life",
    category: "daily",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop",
    alt: "Family Gathering",
    category: "reunion",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop",
    alt: "Wedding Ceremony",
    category: "wedding",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop",
    alt: "Anniversary",
    category: "celebration",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=600&fit=crop",
    alt: "Family Time",
    category: "daily",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    alt: "Family Portrait",
    category: "reunion",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop",
    alt: "Wedding Reception",
    category: "wedding",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1534078362425-387ae9668c17?w=600&h=600&fit=crop",
    alt: "Party",
    category: "celebration",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=600&fit=crop",
    alt: "Family Dinner",
    category: "daily",
  },
];

const categories = ["all", "reunion", "wedding", "celebration", "daily"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage || filteredImages.length === 0) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="section bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Family Photos
          </h2>
          <p className="text-lg text-muted-foreground">
            Capturing precious moments through the years
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all touch-target",
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-foreground hover:bg-primary/10"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => openLightbox(image)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                priority
              />

              {/* Navigation */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all touch-target backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all touch-target backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all touch-target backdrop-blur-sm"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

