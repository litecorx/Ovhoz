'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-block mb-3">
              <span className="font-serif text-3xl font-bold tracking-tight">
                <span className="text-foreground">OV</span>
                <span className="text-primary">HOZ</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm">
              The World in 60 Seconds
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            {new Date().getFullYear()} Ovhoz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
