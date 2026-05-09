'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import RevealAnimation from './reveal-animation'
import { Send, CheckCircle, Sparkles } from 'lucide-react'

const partnershipTypes = [
  { value: 'sponsor', label: 'Sponsor' },
  { value: 'collab', label: 'Collaboration' },
  { value: 'press', label: 'Press Inquiry' },
  { value: 'other', label: 'Other' },
]

export default function PartnershipSection() {
  const [state, handleSubmit] = useForm('mjglazjr')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section id="partnership" className="relative py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <RevealAnimation>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">
              Partnerships
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
              Let&apos;s Build the Future of
              <br />
              <span className="text-secondary">Storytelling Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Join forces with Ovhoz to reach engaged audiences who crave meaningful content.
              From sponsorships to creative collaborations, let&apos;s create something remarkable.
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <div className="relative bg-card border border-primary/30 rounded-3xl p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif text-3xl font-bold mb-4"
                  >
                    Message Received
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground text-lg"
                  >
                    We&apos;ll be in touch within 48 hours. Great stories await.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-secondary animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Full Name */}
                    <div className="relative">
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' 
                            ? 'top-2 text-xs text-primary' 
                            : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                        }`}
                      >
                        Full Name
                      </motion.label>
                      <input
                        type="text"
                        name="name"
                        required
                        onFocus={() => setFocusedField('name')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                        className="w-full bg-input border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 outline-none"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-sm mt-1" />
                    </div>

                    {/* Company Email */}
                    <div className="relative">
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' 
                            ? 'top-2 text-xs text-primary' 
                            : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                        }`}
                      >
                        Company Email
                      </motion.label>
                      <input
                        type="email"
                        name="email"
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                        className="w-full bg-input border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 outline-none"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm mt-1" />
                    </div>
                  </div>

                  {/* Partnership Type */}
                  <div className="mb-6">
                    <label className="block text-sm text-muted-foreground mb-2 ml-1">
                      Partnership Type
                    </label>
                    <select
                      name="partnership_type"
                      required
                      className="w-full bg-input border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select a partnership type</option>
                      {partnershipTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <ValidationError prefix="Partnership Type" field="partnership_type" errors={state.errors} className="text-destructive text-sm mt-1" />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm text-muted-foreground mb-2 ml-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your vision for this partnership..."
                      className="w-full bg-input border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 outline-none resize-none placeholder:text-muted-foreground/50"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm mt-1" />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Partnership Inquiry
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </RevealAnimation>
      </div>
    </section>
  )
}
