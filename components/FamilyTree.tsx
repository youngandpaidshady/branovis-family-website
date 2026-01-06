"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { User, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import Image from "next/image";

interface Person {
  id: string;
  name: string;
  role: string;
  image?: string;
  children?: Person[];
}

const familyData: Person = {
  id: "great-grandfather",
  name: "Branislav I",
  role: "Great Grandfather",
  children: [
    {
      id: "grandfather",
      name: "Branislav II",
      role: "Grandfather",
      children: [
        {
          id: "father-1",
          name: "Branislav III",
          role: "Father",
          children: [
            { id: "son-1", name: "Branislav IV", role: "Son" },
            { id: "daughter-1", name: "Sophia", role: "Daughter" },
          ],
        },
      ],
    },
    {
      id: "grandmother",
      name: "Maria",
      role: "Grandmother",
      children: [
        {
          id: "father-2",
          name: "Branislav III",
          role: "Father",
          children: [
            { id: "son-2", name: "Branislav IV", role: "Son" },
            { id: "daughter-2", name: "Sophia", role: "Daughter" },
          ],
        },
      ],
    },
  ],
};

interface PersonCardProps {
  person: Person;
  level: number;
}

function PersonCard({ person, level }: PersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg mb-3 overflow-hidden border-4 border-white">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover"
            />
          ) : (
            <User className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
          )}
        </div>
        <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="bg-white rounded-lg px-4 py-2 shadow-md min-w-[140px] sm:min-w-[160px] text-center border-2 border-primary/20">
        <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
          {person.name}
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{person.role}</p>
      </div>
    </motion.div>
  );
}

export default function FamilyTree() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);

  const minScale = 0.5;
  const maxScale = 2;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, maxScale));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, minScale));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    e.preventDefault();
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Pinch zoom for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastDistance = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        lastDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );

        if (lastDistance > 0) {
          const scaleChange = distance / lastDistance;
          setScale((prev) => {
            const newScale = prev * scaleChange;
            return Math.max(minScale, Math.min(maxScale, newScale));
          });
        }
        lastDistance = distance;
      }
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Render tree recursively
  const renderTree = (person: Person, level: number = 0, parentIndex: number = 0): JSX.Element => {
    const hasChildren = person.children && person.children.length > 0;
    const uniqueKey = `${person.id}-l${level}-p${parentIndex}`;

    return (
      <div key={uniqueKey} className="flex flex-col items-center">
        <PersonCard person={person} level={level} />

        {hasChildren && person.children && (
          <>
            {/* Connector line */}
            <div className="w-0.5 h-8 sm:h-12 bg-primary my-2" />

            {/* Children container */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center relative">
              {person.children.map((child, index) => {
                const childKey = `${child.id}-l${level + 1}-i${index}`;
                return (
                  <div key={childKey} className="flex flex-col items-center relative">
                    {renderTree(child, level + 1, index)}
                    {index < person.children.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 left-full w-4 h-0.5 bg-primary" />
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="family-tree" className="section bg-gradient-soft py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Our Family Tree
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the branches of our family history
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={handleZoomOut}
            disabled={scale <= minScale}
            className="p-2 sm:p-3 bg-white rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all touch-target"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 sm:p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all touch-target"
            aria-label="Reset view"
          >
            <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </button>
          <button
            onClick={handleZoomIn}
            disabled={scale >= maxScale}
            className="p-2 sm:p-3 bg-white rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all touch-target"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </button>
        </div>

        {/* Tree Container with Pan/Zoom */}
        <div
          ref={containerRef}
          className="relative w-full h-[600px] sm:h-[700px] overflow-hidden bg-white/50 rounded-2xl shadow-xl border-2 border-primary/20"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div
            ref={treeRef}
            className="absolute inset-0 flex items-start justify-center p-8 origin-center transition-transform duration-200"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            }}
          >
            {renderTree(familyData, 0, 0)}
          </div>

          {/* Instructions for mobile */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
            <p className="text-xs text-muted-foreground bg-white/90 px-3 py-1 rounded-full shadow-md">
              Pinch to zoom • Drag to pan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

