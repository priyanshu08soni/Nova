"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const FloatingMechanicalElements = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating gears with different speeds
      gsap.to(".floating-gear-1", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".floating-gear-2", {
        rotation: -360,
        duration: 15,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".floating-gear-3", {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
      })

      // Floating movement animations
      gsap.to(".floating-element-1", {
        y: -20,
        x: 10,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".floating-element-2", {
        y: 15,
        x: -8,
        duration: 5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".floating-element-3", {
        y: -12,
        x: 15,
        duration: 6,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".floating-element-4", {
        y: 18,
        x: -12,
        duration: 3.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".floating-element-5", {
        y: -25,
        x: 8,
        duration: 7,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Pulsing animations for circuit elements
      gsap.to(".floating-circuit", {
        opacity: 0.3,
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      })

      // Bolt rotation
      gsap.to(".floating-bolt", {
        rotation: 360,
        duration: 30,
        ease: "none",
        repeat: -1,
      })

      // Robot eye blinking
      gsap.to(".robot-eye", {
        scaleY: 0.1,
        duration: 0.1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Gear 1 - Top Left */}
      <div className="floating-element-1 absolute top-20 left-16">
        <div className="floating-gear-1 w-16 h-16 border-2 border-orange-500/40 rounded-full bg-black/60">
          <div className="absolute inset-2 border border-orange-400/30 rounded-full bg-gray-900/40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500/60 rounded-full"></div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-3 bg-orange-500/50"
              style={{
                top: "-3px",
                left: "50%",
                transformOrigin: "50% 35px",
                transform: `translateX(-50%) rotate(${i * 45}deg)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Gear 2 - Top Right */}
      <div className="floating-element-2 absolute top-32 right-20">
        <div className="floating-gear-2 w-12 h-12 border-2 border-cyan-500/40 rounded-full bg-black/60">
          <div className="absolute inset-1.5 border border-cyan-400/30 rounded-full bg-gray-900/40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-500/60 rounded-full"></div>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-2 bg-cyan-500/50"
              style={{
                top: "-2px",
                left: "50%",
                transformOrigin: "50% 26px",
                transform: `translateX(-50%) rotate(${i * 60}deg)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Circuit Board - Middle Left */}
      <div className="floating-element-3 absolute top-1/2 left-8">
        <div className="floating-circuit w-20 h-20 bg-black/70 border border-green-400/40">
          <div className="absolute inset-2 border border-green-400/20 bg-gray-900/30"></div>
          <div className="absolute top-3 left-3 w-4 h-4 border border-green-400/50 bg-green-400/20 rounded"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border border-green-400/50 bg-green-400/20 rounded-full"></div>
          <div className="absolute bottom-3 left-3 w-6 h-2 border border-green-400/50 bg-green-400/20"></div>
          <div className="absolute top-7 left-7 w-8 h-0.5 bg-green-400/50"></div>
          <div className="absolute top-10 left-5 w-0.5 h-6 bg-green-400/50"></div>
        </div>
      </div>

      {/* Floating Bolt - Bottom Left */}
      <div className="floating-element-4 absolute bottom-32 left-24">
        <div className="floating-bolt w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-gray-600">
          <div className="absolute inset-1 border border-gray-400/50 bg-gray-600/50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-400"></div>
          <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-6 h-1 bg-gray-400"></div>
        </div>
      </div>

      {/* Floating Mini Robot - Bottom Right */}
      <div className="floating-element-5 absolute bottom-40 right-16">
        <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-600 rounded-lg">
          <div className="absolute inset-1 border border-gray-500/50 rounded bg-gray-800/50"></div>
          {/* Robot eyes */}
          <div className="absolute top-3 left-3 w-2 h-2 bg-cyan-400 rounded-full robot-eye"></div>
          <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full robot-eye"></div>
          {/* Robot mouth */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-orange-400/60 rounded"></div>
          {/* Robot antenna */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gray-500"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
        </div>
      </div>

      {/* Floating Piston - Middle Right */}
      <div className="floating-element-1 absolute top-1/3 right-12">
        <div className="w-6 h-16 bg-gradient-to-b from-gray-600 to-gray-800 border border-gray-500 rounded-t">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border border-orange-400"></div>
          <div className="absolute bottom-0 w-full h-4 bg-gradient-to-b from-gray-800 to-black rounded-b border-t border-gray-600"></div>
          <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-400"></div>
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-400"></div>
        </div>
      </div>

      {/* Floating Large Gear - Center */}
      <div className="floating-element-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="floating-gear-3 w-24 h-24 border-3 border-gray-500/30 rounded-full bg-black/40">
          <div className="absolute inset-3 border-2 border-gray-400/20 rounded-full bg-gray-900/30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-500/40 rounded-full"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-4 bg-gray-500/30"
              style={{
                top: "-4px",
                left: "50%",
                transformOrigin: "50% 52px",
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Additional Small Floating Elements */}
      <div className="floating-element-3 absolute top-1/4 left-1/3 w-3 h-3 bg-orange-500/60 transform rotate-45 border border-orange-400/40"></div>
      <div className="floating-element-4 absolute bottom-1/4 right-1/3 w-4 h-4 bg-cyan-500/60 rounded-full border-2 border-cyan-400/40"></div>
      <div className="floating-element-5 absolute top-3/4 left-1/4 w-2 h-8 bg-gray-600/60 border border-gray-500/40"></div>
    </div>
  )
}

export default FloatingMechanicalElements
