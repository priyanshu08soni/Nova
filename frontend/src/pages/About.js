"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import Navbar from "../components/Navbar"
import FooterOther from "../components/FooterOther"
import MechanicalCursorFollower from "../components/MechanicalCursorFollower"
import FloatingMechanicalElements from "../components/FloatingMechanicalElements"
import img1 from '../assets/modern-web-development-workspace-with-multiple-mon.png'
import img2 from '../assets/modern-laptop-with-code-editor-and-responsive-desi.png';
import img3 from '../assets/professional-video-editing-setup-with-timeline-and.png';
import img4 from '../assets/professional-video-production-setup-with-cameras-l.png';
import img5 from '../assets/clean-modern-website-interface-with-responsive-des.png';
import img6 from '../assets/creative-team-workspace-with-designers-and-develop.png';
import img7 from '../assets/modern-web-development-workspace-with-multiple-mon.png';
import img8 from '../assets/futuristic-digital-landscape-with-flowing-data-str.png';
// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const teamRef = useRef(null)
  const visionRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.2 },
      )

      gsap.to(".mechanical-gear", {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
        stagger: 0.5,
      })

      gsap.to(".circuit-element", {
        opacity: 0.3,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })

      gsap.fromTo(
        ".service-card",
        { y: 150, opacity: 0, scale: 0.7, rotationY: 45 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".service-detail-left",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-details",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".service-detail-right",
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-details",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".stat-number",
        { textContent: 0 },
        {
          textContent: (i, target) => target.getAttribute("data-count"),
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      gsap.to(".parallax-ultra-slow", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      })

      gsap.to(".parallax-slow", {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(".parallax-medium", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      })

      gsap.to(".parallax-fast", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      })

      gsap.to(".parallax-ultra-fast", {
        yPercent: -150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      })

      gsap.to(".gear-large", {
        rotation: 360,
        duration: 12,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".gear-small", {
        rotation: -360,
        duration: 8,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".piston-element", {
        y: -10,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      })

      gsap.to(".code-bracket", {
        rotation: 360,
        duration: 15,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".video-play-shape", {
        scale: 1.2,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".design-hexagon", {
        rotation: -360,
        duration: 20,
        ease: "none",
        repeat: -1,
      })

      // Team section parallax
      gsap.to(".team-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Vision section reveal
      gsap.fromTo(
        ".vision-text",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Morphing shapes
      gsap.to(".morph-shape", {
        rotation: 360,
        scale: 1.2,
        duration: 20,
        ease: "none",
        repeat: -1,
      })

      document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }, containerRef)

    return () => {
      ctx.revert()
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 overflow-hidden">
      <MechanicalCursorFollower />
      <FloatingMechanicalElements />

      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <img
            src={img1}
            alt="Industrial Workspace"
            className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm"
          />

          {/* Industrial Grid Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
              {[...Array(400)].map((_, i) => (
                <div key={i} className="border border-gray-700/20"></div>
              ))}
            </div>
          </div>

          {/* Mechanical Rivets Pattern */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gray-600 rounded-full border border-gray-500"
                style={{
                  top: `${10 + (i % 4) * 25}%`,
                  left: `${5 + Math.floor(i / 4) * 30}%`,
                }}
              >
                <div className="absolute inset-0.5 bg-gray-700 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Large Industrial Gear - Enhanced */}
          <div className="mechanical-gear gear-large parallax-ultra-slow absolute top-20 left-10 w-40 h-40 border-4 border-orange-500/60 rounded-full bg-black/40">
            <div className="absolute inset-6 border-2 border-orange-400/50 rounded-full bg-gray-900/60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500/80 rounded-full border-2 border-orange-400"></div>
            {/* Enhanced gear teeth */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-8 bg-gradient-to-b from-orange-500/70 to-orange-600/70 border border-orange-400/50"
                style={{
                  top: "-8px",
                  left: "50%",
                  transformOrigin: "50% 88px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              ></div>
            ))}
            {/* Inner mechanical details */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-orange-400/30 rounded-full"></div>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-6 bg-orange-400/60"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "50% 0",
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* Enhanced Circuit Board Complex */}
          <div className="circuit-element parallax-medium absolute bottom-40 left-1/4 w-56 h-56 bg-black/60 border-2 border-green-400/40">
            <div className="absolute inset-4 border border-green-400/30 bg-gray-900/40"></div>
            {/* Circuit components */}
            <div className="absolute top-8 left-8 w-12 h-12 border-2 border-green-400/60 bg-green-400/20 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-500/70 rounded transform rotate-45"></div>
            </div>
            <div className="absolute top-8 right-8 w-8 h-8 border-2 border-green-400/60 bg-green-400/20 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-16 h-6 border-2 border-green-400/60 bg-green-400/20"></div>
            <div className="absolute bottom-8 right-8 w-10 h-10 border border-green-400/50 bg-green-400/10 rounded-full"></div>
            {/* Complex circuit traces */}
            <div className="absolute top-14 left-20 w-24 h-1 bg-green-400/60"></div>
            <div className="absolute top-20 left-14 w-1 h-16 bg-green-400/60"></div>
            <div className="absolute top-28 left-14 w-32 h-1 bg-green-400/60"></div>
            <div className="absolute top-32 left-32 w-1 h-12 bg-green-400/60"></div>
            {/* Resistor-like elements */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-2 bg-gradient-to-r from-yellow-600 to-red-600 border border-gray-600"
                style={{
                  top: `${40 + i * 20}px`,
                  left: `${60 + i * 30}px`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Piston Assembly */}
          <div className="piston-element parallax-ultra-fast absolute top-1/2 right-1/4 w-12 h-40 bg-gradient-to-b from-gray-500 to-gray-800 rounded-t-lg border-2 border-gray-600">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border-2 border-orange-400"></div>
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-b from-gray-800 to-black rounded-b-lg border-t-2 border-gray-600"></div>
            {/* Piston rings */}
            <div className="absolute top-8 left-0 w-full h-1 bg-gray-400"></div>
            <div className="absolute top-16 left-0 w-full h-1 bg-gray-400"></div>
            <div className="absolute top-24 left-0 w-full h-1 bg-gray-400"></div>
          </div>

          {/* Industrial Pipe Network */}
          <div className="parallax-fast absolute bottom-1/4 left-1/5 w-32 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full border-2 border-gray-500">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-12 bg-gray-600 border border-gray-500"></div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-12 bg-gray-600 border border-gray-500"></div>
            <div className="absolute left-1/2 transform-translate-x-1/2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-orange-500/60 rounded-full border border-orange-400"></div>
          </div>

          {/* Mechanical Joint Complex */}
          <div className="parallax-medium absolute top-2/3 right-1/5 w-24 h-24 bg-black/60 border-2 border-orange-400/60 rounded-full">
            <div className="absolute inset-2 border-2 border-orange-400/40 rounded-full bg-gray-900/40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border border-orange-400"></div>
            {/* Joint arms */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-gradient-to-b from-orange-400 to-orange-600"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-gradient-to-t from-orange-400 to-orange-600"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-3 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-3 bg-gradient-to-l from-orange-400 to-orange-600"></div>
          </div>

          {/* Additional Industrial Elements */}
          <div className="parallax-ultra-fast absolute top-10 right-1/3 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 transform rotate-45 border-2 border-orange-400/60"></div>
          <div className="parallax-slow absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full border-4 border-cyan-300/60"></div>
          <div className="parallax-medium absolute top-1/3 left-10 w-6 h-16 bg-gradient-to-b from-gray-600 to-gray-800 border-2 border-gray-500"></div>

          {/* Steam/Smoke Effects */}
          <div className="parallax-fast absolute top-1/4 left-1/2 w-20 h-20 bg-gradient-radial from-gray-600/20 to-transparent rounded-full blur-xl"></div>
          <div className="parallax-medium absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-lg"></div>
        </div>

        <div className="text-center z-10 px-4 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl border border-gray-700/30"></div>
          <div className="relative z-10 p-8">
            <h1 className="hero-title text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-gray-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(249,115,22,0.6)] font-mono tracking-wider">
              PRECISION ENGINEERING
            </h1>
            <h2 className="hero-title text-3xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-gray-200 via-orange-300 to-cyan-300 bg-clip-text text-transparent font-mono">
              BUILD • OPTIMIZE • DELIVER
            </h2>
            <p className="hero-title text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono">
              ENGINEERED SOLUTIONS THROUGH SYSTEMATIC WEB DEVELOPMENT AND PRECISION VIDEO EDITING - WHERE EVERY
              COMPONENT SERVES A PURPOSE
            </p>

            {/* Industrial Status Indicators */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-sm">SYSTEMS ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-mono text-sm">MANUFACTURING</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-mono text-sm">QUALITY ASSURED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 px-4 relative bg-black/50">
        <div className="absolute inset-0 overflow-hidden">
          {/* Industrial Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-700/30"></div>
              ))}
            </div>
          </div>

          {/* Mechanical Background Elements */}
          <div className="parallax-slow absolute top-10 left-10 w-20 h-20 border-2 border-orange-500/30 bg-gray-900/50 transform rotate-45">
            <div className="absolute inset-2 border border-orange-400/20 bg-orange-500/5"></div>
          </div>

          <div className="parallax-medium absolute top-40 right-20 w-16 h-32 bg-gradient-to-b from-gray-800 to-gray-900 border-l-2 border-r-2 border-cyan-400/40">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-cyan-400/60"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-cyan-400/60"></div>
          </div>

          {/* Rotating Mechanical Elements */}
          <div className="mechanical-gear parallax-fast absolute bottom-20 left-1/4 w-24 h-24 border-2 border-gray-600 rounded-full bg-gray-900/70">
            <div className="absolute inset-3 border border-gray-500 rounded-full bg-gray-800/50"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-4 bg-gray-600"
                style={{
                  top: "-4px",
                  left: "50%",
                  transformOrigin: "50% 52px",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-gray-100 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
            INDUSTRIAL SYSTEMS
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="service-card group relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-gray-900/50 to-cyan-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-8 hover:border-orange-500/70 transition-all duration-500 overflow-hidden">
                {/* Industrial Corner Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-orange-500/50"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-orange-500/50"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-orange-500/50"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-orange-500/50"></div>

                {/* Mechanical Rivets */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-orange-500/60 rounded-full border border-orange-400/40"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500/60 rounded-full border border-orange-400/40"></div>

                <div className="relative mb-6">
                  <img
                    src={img2}
                    alt="Web Development"
                    className="w-full h-32 object-cover rounded-xl border border-gray-600 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-xl"></div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 via-orange-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 border-2 border-gray-600 relative">
                  <div className="absolute inset-1 border border-gray-400/30 rounded"></div>
                  <svg
                    className="w-8 h-8 text-white relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-4 font-mono tracking-wider">WEB ENGINEERING UNIT</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                  PRECISION-MANUFACTURED DIGITAL SYSTEMS • RESPONSIVE ARCHITECTURE • OPTIMIZED PERFORMANCE METRICS •
                  INDUSTRIAL-GRADE RELIABILITY
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["REACT.JS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-gray-900/80 border border-orange-500/40 text-orange-300 text-xs font-mono text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Industrial Progress Bars */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>PERFORMANCE</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1 rounded">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-cyan-400 h-1 rounded"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card group relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 via-black/50 to-cyan-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-8 hover:border-cyan-500/70 transition-all duration-500 overflow-hidden">
                {/* Industrial Corner Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/50"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-500/50"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-500/50"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/50"></div>

                {/* Mechanical Rivets */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-500/60 rounded-full border border-cyan-400/40"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-500/60 rounded-full border border-cyan-400/40"></div>

                <div className="relative mb-6">
                  <img
                    src={img3}
                    alt="Video Editing"
                    className="w-full h-32 object-cover rounded-xl border border-gray-600 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-cyan-500/20 rounded-xl"></div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 via-gray-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 border-2 border-gray-600 relative">
                  <div className="absolute inset-1 border border-gray-400/30 rounded"></div>
                  <svg
                    className="w-8 h-8 text-white relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-4 font-mono tracking-wider">VIDEO ASSEMBLY LINE</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                  SYSTEMATIC CONTENT MANUFACTURING • PRECISION EDITING PROTOCOLS • MOTION GRAPHICS FABRICATION •
                  MULTI-PLATFORM OPTIMIZATION
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["AFTER FX", "PREMIERE", "DAVINCI", "MOTION"].map((tool) => (
                    <div
                      key={tool}
                      className="px-3 py-2 bg-gray-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono text-center"
                    >
                      {tool}
                    </div>
                  ))}
                </div>

                {/* Industrial Progress Bars */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>EFFICIENCY</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1 rounded">
                    <div
                      className="bg-gradient-to-r from-gray-500 to-cyan-400 h-1 rounded"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-details space-y-16">
            {/* Video Services Detail */}
            <div className="service-detail-left bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-8 relative overflow-hidden">
              <img
                src={img4}
                alt="Video Production Setup"
                className="absolute inset-0 w-full h-full object-cover opacity-5 rounded-3xl"
              />

              {/* Industrial Frame */}
              <div className="absolute inset-0 border-4 border-gray-700/20 rounded-3xl"></div>

              {/* Industrial Frame Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-purple-500/60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-purple-500/60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-purple-500/60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-purple-500/60"></div>

              {/* Mechanical Background Pattern */}
              <div className="absolute inset-4 opacity-5">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-purple-500/20"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg border-2 border-gray-600 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white/80 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-2 border-l-white border-t-1 border-t-transparent border-b-1 border-b-transparent ml-0.5"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-purple-400 font-mono tracking-wider">
                    VIDEO PRODUCTION FACILITY
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold text-white mb-4 font-mono">CONTENT MANUFACTURING</h4>
                    <ul className="space-y-2 text-gray-300 font-mono text-sm">
                      <li>→ SCRIPTWRITING & STORYBOARDING</li>
                      <li>→ PRODUCT VIDEOS & EXPLAINERS</li>
                      <li>→ TESTIMONIAL VIDEOS</li>
                      <li>→ SOCIAL MEDIA REELS & TIKTOKS</li>
                      <li>→ YOUTUBE EDITS</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold text-white mb-4 font-mono">AD ASSEMBLY LINE</h4>
                    <ul className="space-y-2 text-gray-300 font-mono text-sm">
                      <li>→ FULL VIDEO AD CAMPAIGNS</li>
                      <li>→ CREATIVE DIRECTION & CONCEPTS</li>
                      <li>→ PLATFORM-OPTIMIZED ADS</li>
                      <li>→ INSTAGRAM • YOUTUBE • META • GOOGLE</li>
                      <li>→ MOTION GRAPHICS & ANIMATION</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Services Detail */}
            <div className="service-detail-right bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-8 relative overflow-hidden">
              <img
                src={img5}
                alt="Web Development Interface"
                className="absolute inset-0 w-full h-full object-cover opacity-5 rounded-3xl"
              />

              {/* Industrial Frame */}
              <div className="absolute inset-0 border-4 border-gray-700/20 rounded-3xl"></div>

              {/* Industrial Frame Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-blue-500/60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-blue-500/60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-blue-500/60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-blue-500/60"></div>

              {/* Mechanical Background Pattern */}
              <div className="absolute inset-4 opacity-5">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-blue-500/20"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg border-2 border-gray-600 flex items-center justify-center">
                    <div className="w-6 h-6 border border-white/80 bg-white/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white/80"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-400 font-mono tracking-wider">WEB DEVELOPMENT FACTORY</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold text-white mb-4 font-mono">UI/UX ENGINEERING</h4>
                    <ul className="space-y-2 text-gray-300 font-mono text-sm">
                      <li>→ USER-FRIENDLY INTERFACE DESIGN</li>
                      <li>→ INTERACTIVE PROTOTYPES & WIREFRAMING</li>
                      <li>→ OPTIMIZED AD-DRIVEN EXPERIENCES</li>
                      <li>→ RESPONSIVE DESIGN SYSTEMS</li>
                      <li>→ CONVERSION-FOCUSED LAYOUTS</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold text-white mb-4 font-mono">VIDEO INTEGRATION UNIT</h4>
                    <ul className="space-y-2 text-gray-300 font-mono text-sm">
                      <li>→ VIDEO EMBEDDING & OPTIMIZATION</li>
                      <li>→ SPEED & SEO OPTIMIZATION</li>
                      <li>→ AUTOPLAY CONFIGURATIONS</li>
                      <li>→ INTERACTIVE VIDEO EXPERIENCES</li>
                      <li>→ LANDING PAGE VIDEO INTEGRATION</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="relative py-32 overflow-hidden">
        <div className="team-bg absolute inset-0 bg-gradient-to-br from-gray-800/40 via-orange-900/20 to-cyan-900/20"></div>
        <img
          src={img6}
          alt="Creative Team"
          className="parallax-medium absolute inset-0 w-full h-full object-cover opacity-5"
        />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-cyan-500 bg-clip-text text-transparent">
            Engineering Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our specialized engineering team operates with systematic precision, combining technical expertise with
            industrial-grade processes to manufacture digital solutions that exceed specifications and deliver
            measurable performance.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-32 px-4 relative bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={img7}
            alt="Development Workspace"
            className="absolute top-0 left-0 w-80 h-60 object-cover opacity-8 blur-sm"
          />

          {/* Industrial Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
              {[...Array(192)].map((_, i) => (
                <div key={i} className="border border-gray-600/30"></div>
              ))}
            </div>
          </div>

          {/* Mechanical Background Elements */}
          <div className="parallax-slow absolute top-20 left-20 w-32 h-32 border-4 border-orange-500/40 bg-black/60 transform rotate-12">
            <div className="absolute inset-4 border-2 border-orange-400/30 bg-gray-900/40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500/60 rounded-full"></div>
          </div>

          <div className="parallax-medium absolute bottom-32 right-32 w-24 h-48 bg-gradient-to-b from-gray-700 to-black border-l-4 border-r-4 border-cyan-400/50">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-cyan-400/70 border border-cyan-300"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-cyan-400/70 border border-cyan-300"></div>
            {/* Industrial bolts */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full border border-gray-400"
                style={{ top: `${20 + i * 20}px` }}
              ></div>
            ))}
          </div>

          {/* Rotating Industrial Gear */}
          <div className="mechanical-gear parallax-fast absolute top-1/2 left-10 w-28 h-28 border-3 border-gray-500 rounded-full bg-black/80">
            <div className="absolute inset-4 border-2 border-gray-400 rounded-full bg-gray-900/60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-400 rounded-full border border-gray-300"></div>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-5 bg-gray-500 border border-gray-400"
                style={{
                  top: "-5px",
                  left: "50%",
                  transformOrigin: "50% 61px",
                  transform: `translateX(-50%) rotate(${i * 36}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* Industrial Pipes */}
          <div className="parallax-ultra-slow absolute bottom-20 left-1/3 w-40 h-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full border-2 border-gray-500">
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gray-600 border border-gray-500"></div>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gray-600 border border-gray-500"></div>
          </div>

          <img
            src={img8}
            alt="Vision Background"
            className="parallax-slow absolute top-0 right-0 w-96 h-64 object-cover opacity-10 blur-sm"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="vision-text">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-cyan-500 bg-clip-text text-transparent font-mono tracking-wider">
                OPERATIONAL BLUEPRINT
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 font-mono">
                TO ENGINEER THE BRIDGE BETWEEN CONCEPT AND EXECUTION, WHERE EVERY COMPONENT IS PRECISION-CRAFTED AND
                EVERY PROCESS IS OPTIMIZED. WE BELIEVE IN SYSTEMATIC DIGITAL MANUFACTURING THAT TRANSFORMS BUSINESSES
                THROUGH RELIABLE, SCALABLE SOLUTIONS.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-mono">
                THROUGH SYSTEMATIC WEB ENGINEERING AND PRECISION VIDEO PRODUCTION, WE HELP BRANDS BUILD ROBUST
                CONNECTIONS WITH THEIR AUDIENCE USING PROVEN METHODOLOGIES THAT DRIVE MEASURABLE GROWTH AND OPERATIONAL
                EFFICIENCY.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-cyan-500/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-gray-600 rounded-3xl p-8 stats-container overflow-hidden">
                {/* Industrial frame corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-orange-500/60"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-orange-500/60"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-cyan-500/60"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-cyan-500/60"></div>

                {/* Industrial rivets */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-orange-500/60 rounded-full border border-orange-400"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500/60 rounded-full border border-orange-400"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-500/60 rounded-full border border-cyan-400"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-500/60 rounded-full border border-cyan-400"></div>

                <div className="grid grid-cols-2 gap-6 text-center relative z-10">
                  <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                    <div className="stat-number text-3xl font-bold text-orange-400 mb-2 font-mono" data-count="100">
                      0
                    </div>
                    <div className="text-gray-300 font-mono text-sm">SYSTEMS DEPLOYED</div>
                  </div>
                  <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                    <div className="stat-number text-3xl font-bold text-cyan-400 mb-2 font-mono" data-count="50">
                      0
                    </div>
                    <div className="text-gray-300 font-mono text-sm">SATISFIED CLIENTS</div>
                  </div>
                  <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                    <div className="text-3xl font-bold text-gray-400 mb-2 font-mono">24/7</div>
                    <div className="text-gray-300 font-mono text-sm">OPERATIONS</div>
                  </div>
                  <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                    <div className="text-3xl font-bold text-orange-400 mb-2 font-mono">99%</div>
                    <div className="text-gray-300 font-mono text-sm">UPTIME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOther />
    </div>
  )
}

export default About
