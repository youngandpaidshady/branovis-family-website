"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: { day: string; month: string };
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Annual Family Reunion 2024",
    excerpt:
      "Join us for our annual family reunion! We're planning an amazing gathering with activities for all ages, delicious food, and plenty of time to reconnect with loved ones.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    date: { day: "15", month: "Dec" },
    category: "Events",
  },
  {
    id: "2",
    title: "Congratulations to Our Graduates!",
    excerpt:
      "We're proud to celebrate the achievements of our family members who graduated this year. Your hard work and dedication inspire us all!",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    date: { day: "08", month: "Nov" },
    category: "Achievements",
  },
  {
    id: "3",
    title: "New Family Member Welcome",
    excerpt:
      "We're thrilled to welcome a new addition to our family! Join us in celebrating this joyous occasion and the love that continues to grow our family tree.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
    date: { day: "22", month: "Oct" },
    category: "News",
  },
  {
    id: "4",
    title: "Family Vacation to Europe",
    excerpt:
      "The family enjoyed an amazing two-week vacation exploring historic cities across Europe. We visited ancestral locations and created unforgettable memories together.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    date: { day: "28", month: "Aug" },
    category: "Travel",
  },
  {
    id: "5",
    title: "Sports Championship Victory",
    excerpt:
      "Congratulations to our family members who won the regional sports championship! Their dedication and teamwork brought home the gold medal.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    date: { day: "15", month: "Jul" },
    category: "Achievements",
  },
  {
    id: "6",
    title: "Family Music Concert",
    excerpt:
      "Our talented family members performed a beautiful concert showcasing their musical talents. The event raised funds for local charities and brought joy to all attendees.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    date: { day: "03", month: "Jul" },
    category: "Events",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section bg-gradient-soft py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            From the Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Family news, stories, and updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-1 text-primary">
                    <Calendar className="w-4 h-4" />
                    <div className="text-center">
                      <div className="text-lg font-bold leading-none">
                        {post.date.day}
                      </div>
                      <div className="text-xs uppercase">{post.date.month}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold font-serif text-foreground mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

