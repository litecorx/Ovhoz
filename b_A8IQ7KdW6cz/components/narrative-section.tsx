'use client'

import { motion } from 'framer-motion'
import RevealAnimation from './reveal-animation'
import { Globe, Clock, Users, Zap } from 'lucide-react'

const stats = [
  { icon: Globe, value: '950+', label: 'Stories Told' },
  { icon: Users, value: '38K+', label: 'Minds Reached' },
  { icon: Clock, value: '60', label: 'Seconds Each' },
  { icon: Zap, value: '4', label: 'Content Pillars' },
]

const pillars = [
  {
    title: 'Technology',
    description: 'Breaking down complex innovations into digestible insights that keep you ahead of the curve.',
  },
  {
    title: 'History',
    description: 'Connecting the threads of the past to illuminate the patterns of today and tomorrow.',
  },
  {
    title: 'News',
    description: 'Cutting through the noise to deliver what matters, when it matters, how it matters.',
  },
  {
    title: 'Entertainment',
    description: 'Exploring the cultural moments that define our collective experience.',
  },
]

export default function NarrativeSection() {
  return (
    <section id="narrative" className="relative py-32 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <RevealAnimation>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-6 text-balance">
            950+ Stories. 38,000+ Minds.
            <br />
            <span className="text-secondary">One Minute at a Time.</span>
          </h2>
        </RevealAnimation>
        
        <RevealAnimation delay={0.2}>
          <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed">
            Ovhoz is the bridge between tech, history, and the future. We distill the world&apos;s most
            compelling stories into concise, informative content that respects your time while
            expanding your perspective.
          </p>
        </RevealAnimation>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <RevealAnimation key={stat.label} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <p className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>
        
        {/* Content Pillars */}
        <RevealAnimation delay={0.3}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
            The Four Pillars of <span className="text-primary">OVHOZ</span>
          </h3>
        </RevealAnimation>
        
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <RevealAnimation 
              key={pillar.title} 
              delay={0.1 * index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative border border-border rounded-xl p-8 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full" />
                    <div>
                      <h4 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
