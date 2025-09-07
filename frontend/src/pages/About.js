"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import Navbar from "../components/Layout/Navbar"
import FooterOther from "../components/Layout/Footer/FooterOther"
import MechanicalCursorFollower from "../components/About/MechanicalCursorFollower"
import FloatingMechanicalElements from "../components/About/FloatingMechanicalElements"
import HeroSection from "../components/About/HeroSection"
import ServicesSection from "../components/About/ServicesSection"
import TeamSection from "../components/About/TeamSection"
import VisionSection from "../components/About/VisionSection"


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
      <HeroSection heroRef={heroRef}/>

      {/* Services Section */}
      <ServicesSection servicesRef={servicesRef}/>

      {/* Team Section */}
      <TeamSection teamRef={teamRef}/>

      {/* Vision Section */}
      <VisionSection visionRef={visionRef}/>

      <FooterOther />
    </div>
  )
}

export default About
