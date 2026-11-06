/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useForm, ValidationError } from '@formspree/react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Camera, 
  Video, 
  Sparkles, 
  Instagram, 
  Facebook,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/ADBb0ujZBls7lMdZBxcrXFy7OtdvTaapBiFCAyem2aBPCcJtDMSftFT3rw1OvgXG1BUPDerIdM22OmAlglhwmAoCAwBVpFB5TQFC9tSnCf0dLf0SCbTWeYb68StZplZ8MyZX72DoHXrH9CT3pR8bpxyOUUudHaR-5PdiwA--7PIwtw9m5WticUr0dmlHRmPqU14eZgTxw-hfnNnvGYfEkPfYXvWg36CMXv0va3u3oBzZufjq3q8kRPck5tRhN7lGWu0LsfbUlCQBUOb2Ig",
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyMJA4cvqj3tkKE0p6jRAKQMUgXFBti6DAopO-0Mvq_pqUJ9Jc0C-EnAb8huebafc3TgPApGO6ks7zUgTr22JM7pZw9_C3nJQnoVI0gI7Y-cif20IW_jI8oh0Zi1YlOyY8fsA5POpiABm3HhlXg12dHTOxkrD4x8Y0cmoQTQK-H4Q9Ki24CAS39PvTFTtbcbj_ASeTkoiAXeGpadP5Jx-JpksQM7L-0B-vbr401xD3j7k57eLPVEcHKs9_RkCtOT1FmU925trFWQw",
  weddings: "https://lh3.googleusercontent.com/aida/ADBb0uhthyXmDxJSvEiYqxmiJS4sTrwXnbDoTODtWyds2PPYZc2O4MTvepXVm9VFae9GEvdDmWWQ2pVgQYdg0omJo78HrmT45uhxOnjybxl4DkFT8xzJ3StyEqOI6JAWyjXIsHEP-A6e0CJpjAnbUmuc7urcZUhNG41MPuHDx0uCvSRxEqY7wmbxyTOhhfoa_r9Tnqd6TKKMuMqcWtWckCTZY9HqwM0iHNNSg4Aso4rzfObGoFnUvr883PWP7FrnsGHnHe79sNdAr-c9Vg",
  portraits: "https://lh3.googleusercontent.com/aida/ADBb0ujacqzT-zXYmi9z5JqOdzB2ZvVtKM3wjlXvdOTjATVelgIDBV5nJGetkZNky7MSXJ-hXDf08B--84ONrAUU5w7mPlz-ytHC5_IXQhl44uWUGO2Yw2KoA-JYsX4XX1fRUZ2fd19nZob9adsY8VnbhUAIwZa8lfg-oDYwvYVJhWNl77K-d7KMR1xt5ifWTGPZC_bIz5C_EdN45YfNj85GieoW2TPQ1FpppIvODix__r8UezWxd8owCttimsG4EfI67KhoNPrUH6rtaw",
  events: "https://lh3.googleusercontent.com/aida/ADBb0ugJfU_omQo9xsI42cezO3amKUtXsidoRIO5aUBjknBlo5cXzQLov4jUL62XaVyCi-rD-fHw6UsbQw7O3dAJFy0wU00OOJKsmuMjKSHyseOnKEBrBPbbqYgdPkRnrlmKhEWS9zS2t2RmDsxR8tXZnuvEfAr0TnBQr_VyWxqq01T6OqWaNU_J3GfJ4lYj06h7YzCXwHO-E198i07Ls1hLoKWG2VHnh8V-2wLftzY4G6B1FEUfEyPv9UBIbaHYxO-hMIBTt20N_n5TBg",
  family: "https://lh3.googleusercontent.com/aida/ADBb0uh8tG6PA4Vbir2myWZRUst_oQbWsub5MvXzipIeD6NDnHqaHNL4j-_ohsr9-j7ZgRRc56xQhMtSRHyN8rrCHU1HjyObIOkbD1Ye3OSGbXtHOrFHa22dSfDB00pPtm0I-Q9IELih7YNnpv79PZchH5lNhqUTVy9Op5WaKXwAhHtWC4jGBFXC_-L7EcyzdR14fpdMIcTz1zvvi00JpFrtVSZBNSN2eVB8LbW2DDvhzmHdrj_XrEvWINlNKOBPMGavXIM1OvYLEy93YA",
  dancer: "https://lh3.googleusercontent.com/aida/ADBb0uha8uCVxxMJQmJQ3wpLP1YlwBS97C9ATh05oxX6MYOC4q4zbZFSIp-FB6GDDXXWGw00HR_HdLz4Yao_GgYNYv_SHFISEMsnWQ-UOJf9zZzAtRwpiFToTCTKTkv88xy7HllPckRi3IS6zb9ViO5GQkpOer5R0nyBqwbRY0Tj_5S5gW8ANvH5iUz9yk92xlfqRZduG6eLWdUNVU2NYWWTZMATjJBF2zijwwWXXdaeFNIJse6bIQaT2QsCsHdvSIB3AvfbW4dC88tj7w"
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("mzdkjeqe");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-surface/90 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-8"
        }`}
      >
        <nav className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src={IMAGES.logo} 
                alt="KAI ROS Logo" 
                className="h-14 md:h-18 w-auto object-contain logo-invert transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {["Portfolio", "Services", "Pricing", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary hover:text-primary font-label text-xs uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#contact" 
              className="hidden md:flex bg-gradient-gold text-on-primary px-8 py-3 font-label text-[10px] font-extrabold uppercase tracking-[0.2em] hover:brightness-110 transition-all"
            >
              Book Session
            </a>
            <button 
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface-container border-b border-outline-variant p-6 flex flex-col gap-6"
          >
            {["Portfolio", "Services", "Pricing", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-secondary hover:text-primary font-label text-sm uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gradient-gold text-on-primary px-8 py-4 text-center font-label text-xs font-extrabold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Session
            </a>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={IMAGES.hero} 
              alt="Atmospheric landscape" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-4xl"
            >
              <span className="text-primary font-label tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">
                Visual Storytelling
              </span>
              <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] mb-8">
                Capturing the <br />
                <span className="italic font-light text-secondary/80">Soul of Silence.</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12">
                <a 
                  href="#contact" 
                  className="bg-gradient-gold text-on-primary px-10 py-5 font-label text-xs font-extrabold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-2xl"
                >
                  Book a Session
                </a>
                <a 
                  href="#portfolio" 
                  className="group flex items-center gap-4 text-on-surface font-label text-xs uppercase tracking-[0.2em] border-b border-outline-variant pb-1 hover:text-primary hover:border-primary transition-all"
                >
                  View Gallery
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Curator's Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 right-6 md:right-12 p-6 glass-panel max-w-xs hidden sm:block"
          >
            <h3 className="font-headline text-lg mb-2">Mist over Highlands</h3>
            <div className="flex gap-4 text-[9px] font-label text-secondary tracking-[0.2em] uppercase">
              <span>ISO 100</span>
              <span>85MM</span>
              <span>f/1.4</span>
              <span>1/200s</span>
            </div>
          </motion.div>
        </section>

        {/* Bespoke Curation Section */}
        <section id="services" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div {...fadeIn} className="max-w-xl">
              <h2 className="font-headline text-4xl md:text-6xl mb-8">Bespoke Curation</h2>
              <p className="text-secondary text-lg leading-relaxed font-light">
                We don't just take photos; we curate moments that define legacies. 
                Our approach is quiet, intentional, and deeply personal.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              className="font-headline text-[10rem] md:text-[15rem] leading-none select-none text-outline-variant hidden lg:block"
            >
              01
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Weddings", subtitle: "The Eternal Union", img: IMAGES.weddings, delay: 0 },
              { title: "Portraits", subtitle: "The Individual Spirit", img: IMAGES.portraits, delay: 0.1, offset: true },
              { title: "Events", subtitle: "Grand Occasions", img: IMAGES.events, delay: 0.2 },
              { title: "Family", subtitle: "Generational Legacy", img: IMAGES.family, delay: 0.3, offset: true }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                className={`group relative aspect-[3/4] overflow-hidden bg-surface-container-low transition-all duration-700 ${service.offset ? "lg:mt-16" : ""}`}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-surface via-transparent to-transparent">
                  <h4 className="font-headline text-2xl mb-2">{service.title}</h4>
                  <p className="text-primary text-[10px] font-label uppercase tracking-[0.3em] mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.subtitle}
                  </p>
                  <button className="w-fit text-primary border border-primary/20 px-6 py-2 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="portfolio" className="bg-surface-container-lowest py-32 px-6 md:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center gap-8 mb-24">
              <div className="h-[1px] bg-outline-variant flex-grow"></div>
              <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-[0.2em] text-center">Selected Works</h2>
              <div className="h-[1px] bg-outline-variant flex-grow"></div>
            </div>

            <div className="selected-works-grid">
              <motion.div {...fadeIn} className="md:col-span-2 md:row-span-2 overflow-hidden">
                <img src={IMAGES.portraits} alt="Work 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 cursor-pointer" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div {...fadeIn} className="overflow-hidden">
                <img src={IMAGES.events} alt="Work 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 cursor-pointer" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div {...fadeIn} className="md:row-span-2 overflow-hidden">
                <img src={IMAGES.family} alt="Work 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 cursor-pointer" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div {...fadeIn} className="overflow-hidden">
                <img src={IMAGES.weddings} alt="Work 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 cursor-pointer" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div {...fadeIn} className="overflow-hidden">
                <img src={IMAGES.dancer} alt="Work 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 cursor-pointer" referrerPolicy="no-referrer" />
              </motion.div>
            </div>

            <div className="mt-24 text-center">
              <button className="border border-outline-variant text-secondary px-12 py-5 font-label text-[10px] uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all duration-500">
                Experience Full Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section id="pricing" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <h2 className="font-headline text-5xl md:text-6xl mb-6">Investment</h2>
            <p className="text-secondary font-light max-w-lg mx-auto leading-relaxed">
              Bespoke collections designed to capture your journey with the intentionality it deserves.
            </p>
          </motion.div>

          {/* Weddings Sub-section */}
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <span className="font-label text-[10px] tracking-[0.5em] uppercase text-primary">01</span>
              <h3 className="font-headline text-2xl uppercase tracking-[0.2em]">Weddings</h3>
              <div className="h-[1px] bg-primary/20 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tier: "The Beginning",
                  name: "Essential",
                  price: "CAD $2,200 – $2,800",
                  duration: "5–6 Hours Coverage",
                  features: ["1 Lead Photographer", "1 Lead Videographer", "300–400 High-Res Photos", "3–4 Min Cinematic Highlight", "Online Delivery Gallery"],
                  recommended: false
                },
                {
                  tier: "The Standard",
                  name: "Signature",
                  price: "CAD $3,200 – $4,200",
                  duration: "8–9 Hours Coverage",
                  features: ["1 Photo + 1 Video Team", "500–700 Edited Photos", "5–7 Min Cinematic Highlight", "Drone Aerial Shots", "Engagement Session Included"],
                  recommended: true
                },
                {
                  tier: "The Legacy",
                  name: "Premium",
                  price: "CAD $4,800 – $6,500",
                  duration: "Full-Day (10–12 Hrs)",
                  features: ["2 Photographers + 2 Videographers", "800+ Hand-Edited Photos", "8–12 Min Feature Film", "48hr Teaser Highlight", "Bespoke Heirlooms"],
                  recommended: false
                }
              ].map((pkg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-12 transition-all duration-500 flex flex-col items-center text-center relative ${
                    pkg.recommended 
                    ? "bg-surface-container border-t-2 border-primary md:scale-105 z-10 shadow-2xl" 
                    : "bg-surface-container-low border-t-2 border-transparent hover:border-primary/20"
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 text-[8px] font-extrabold uppercase tracking-[0.3em]">
                      RECOMMENDED
                    </div>
                  )}
                  <span className={`text-[10px] font-label tracking-[0.4em] uppercase mb-8 ${pkg.recommended ? "text-primary" : "text-secondary"}`}>
                    {pkg.tier}
                  </span>
                  <h4 className="font-headline text-2xl mb-4">{pkg.name}</h4>
                  <div className="text-3xl font-headline mb-2 text-primary">{pkg.price}</div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-secondary/60 mb-10">{pkg.duration}</p>
                  <ul className="space-y-4 mb-12 text-sm font-light text-secondary/80">
                    {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full text-center border border-outline-variant py-4 font-label text-[10px] uppercase tracking-[0.3em] hover:bg-surface-container-high transition-all"
                  >
                    Inquire
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Pre-Wedding */}
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-label text-[10px] tracking-[0.5em] uppercase text-primary">02</span>
                <h3 className="font-headline text-xl uppercase tracking-[0.2em]">Pre-Wedding</h3>
              </div>
              <div className="space-y-6">
                <div className="p-8 bg-surface-container-low border-l-2 border-primary/20 hover:bg-surface-container transition-colors duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline text-lg">Basic Shoot</h4>
                    <span className="text-primary font-headline text-sm">$350–$500</span>
                  </div>
                  <p className="text-xs text-secondary/70 mb-4 font-light">1 hour session focusing on the raw connection.</p>
                  <div className="flex gap-4 text-[9px] uppercase tracking-widest text-secondary/40">
                    <span>1 Hour Shoot</span>
                    <span>20–30 Photos</span>
                  </div>
                </div>
                <div className="p-8 bg-surface-container border-l-2 border-primary hover:bg-surface-container-high transition-colors duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline text-lg">Creative</h4>
                    <span className="text-primary font-headline text-sm">$600–$900</span>
                  </div>
                  <p className="text-xs text-secondary/70 mb-4 font-light">Multi-location cinematic storytelling.</p>
                  <div className="flex gap-4 text-[9px] uppercase tracking-widest text-secondary/40">
                    <span>2–3 Locations</span>
                    <span>40–60 Photos</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Portraits */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-label text-[10px] tracking-[0.5em] uppercase text-primary">03</span>
                <h3 className="font-headline text-xl uppercase tracking-[0.2em]">Portraits</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Mini Session", price: "$250–$350", desc: "30 mins • 10–15 photos" },
                  { name: "Standard", price: "$400–$600", desc: "1 hour • 25–40 photos" },
                  { name: "Premium", price: "$700–$1,000", desc: "1–2 hours • 50+ photos • Lifestyle mix" }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-surface-container-low hover:bg-surface-container transition-colors duration-500 border-b border-outline-variant/10">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.2em]">{item.name}</h4>
                      <span className="text-primary text-sm font-headline">{item.price}</span>
                    </div>
                    <p className="text-[10px] text-secondary/50 uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Events */}
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-label text-[10px] tracking-[0.5em] uppercase text-primary">04</span>
                <h3 className="font-headline text-xl uppercase tracking-[0.2em]">Events</h3>
              </div>
              <div className="space-y-8">
                {[
                  { icon: <Camera size={16} />, name: "Basic Event", price: "$150–$200/hr", desc: "1 Photographer + Edited Gallery" },
                  { icon: <Video size={16} />, name: "Photo + Video", price: "$250–$400/hr", desc: "1 Photo + 1 Video + Highlight" },
                  { icon: <Sparkles size={16} />, name: "Premium Event", price: "$1,500–$3,500", desc: "Full Coverage + Aftermovie + Reels" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="text-primary transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                    <div className="flex-grow pb-6 border-b border-outline-variant/10">
                      <div className="flex justify-between mb-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.name}</h4>
                        <span className="text-primary text-xs font-headline">{item.price}</span>
                      </div>
                      <p className="text-[10px] text-secondary/60 font-light uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-surface-container-low border-t border-primary/5">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div {...fadeIn}>
              <h2 className="font-headline text-5xl md:text-7xl mb-10 leading-[1.1]">
                Let's Define Your <br />
                <span className="italic text-secondary/80">Visual Legacy.</span>
              </h2>
              <p className="text-secondary text-lg mb-16 max-w-md font-light leading-relaxed">
                Ready to begin your journey with KAI ROS? Reach out to schedule a consultation at our studio or on location.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-8">
                  <div className="p-3 bg-surface-container-highest text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-secondary/40 mb-2">Inquiries</p>
                    <p className="text-xl font-light">nandakishannandu@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="p-3 bg-surface-container-highest text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-secondary/40 mb-2">Our Studio</p>
                    <p className="text-xl font-light">178 Bedford Hwy, Halifax, NS</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="p-3 bg-surface-container-highest text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-secondary/40 mb-2">Mobile</p>
                    <p className="text-xl font-light">
                      <a href="tel:+19025493021" className="hover:text-primary transition-colors">+1 902 549 3021</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-surface p-8 md:p-12 shadow-2xl border border-outline-variant/10"
            >
              {state.succeeded ? (
                <div className="text-center py-12">
                  <Sparkles className="mx-auto text-primary mb-6" size={48} />
                  <h3 className="font-headline text-3xl mb-4">Inquiry Received</h3>
                  <p className="text-secondary font-light mb-8">
                    Thank you for reaching out. We will review your vision and get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-primary font-label text-[10px] uppercase tracking-[0.3em] border-b border-primary pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="full-name" className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary/60">Full Name</label>
                      <input 
                        id="full-name"
                        name="name"
                        type="text" 
                        required
                        placeholder="Alexander Thorne"
                        className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-surface p-5 text-sm transition-all"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary/60">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        placeholder="alex@example.com"
                        className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-surface p-5 text-sm transition-all"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary/60">Phone Number</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-surface p-5 text-sm transition-all"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="service" className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary/60">Service of Interest</label>
                    <select 
                      id="service"
                      name="service"
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-surface p-5 pr-12 text-sm appearance-none transition-all bg-no-repeat bg-[right_1.25rem_center] bg-[length:12px] bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2012%208%22%20fill=%22none%22%20stroke=%22%23e0c292%22%20stroke-width=%221.5%22><path%20d=%22M1%201l5%205%205-5%22/></svg>')]"
                    >
                      <option>Wedding Package</option>
                      <option>Pre-Wedding / Engagement</option>
                      <option>Portrait Session</option>
                      <option>Corporate / Events</option>
                      <option>Other Inquiry</option>
                    </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary/60">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4} 
                      required
                      placeholder="Tell us about your vision..."
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-surface p-5 text-sm resize-none transition-all"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full bg-gradient-gold text-on-primary py-6 font-label text-xs font-extrabold uppercase tracking-[0.3em] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl"
                  >
                    {state.submitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-24 px-6 md:px-12 border-t border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-6">
            <img 
              src={IMAGES.logo} 
              alt="KAI ROS Logo" 
              className="h-24 w-auto object-contain logo-invert"
              referrerPolicy="no-referrer"
            />
            <div className="font-headline text-3xl text-primary tracking-[0.4em] uppercase">KAI ROS</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "Instagram", icon: <Instagram size={18} />, url: "https://www.instagram.com/kai.ros_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
              { name: "Facebook", icon: <Facebook size={18} />, url: "https://www.facebook.com/nandakishan.nandu.3" }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 font-label text-xs uppercase tracking-[0.2em]"
              >
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>

          <div className="h-[1px] w-full max-w-md bg-outline-variant/20"></div>

          <div className="text-secondary/30 text-[9px] font-label tracking-[0.5em] uppercase text-center">
            © {new Date().getFullYear()} KAI ROS MEDIA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
