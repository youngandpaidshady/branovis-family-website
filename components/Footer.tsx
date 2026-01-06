"use client";

import Link from "next/link";
import { Heart, Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  quick: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#blog", label: "Blog" },
    { href: "#gallery", label: "Gallery" },
  ],
  explore: [
    { href: "#recipes", label: "Recipes" },
    { href: "#family-tree", label: "Family Tree" },
    { href: "#contact", label: "Contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold font-serif text-primary mb-4">
              <Heart className="w-6 h-6 text-accent fill-accent" />
              <span>Branislav Family</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Preserving our heritage, building our future, and celebrating our
              togetherness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold font-serif text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Branislav Family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

