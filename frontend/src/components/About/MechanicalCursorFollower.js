"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const MechanicalCursorFollower = () => {
  const robotRef = useRef(null);
  const eyesRef = useRef(null)
  const gearRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const robot = robotRef.current
    const eyes = eyesRef.current
    const gear = gearRef.current
    const trail = trailRef.current

    if (!robot || !eyes || !gear || !trail) return

    let mouseX = 0
    let mouseY = 0
    let robotX = 0
    let robotY = 0

    // Continuous gear rotation
    gsap.to(gear, {
      rotation: 360,
      duration: 3,
      ease: "none",
      repeat: -1,
    })

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Eye tracking
      const eyeRect = eyes.getBoundingClientRect()
      const eyeCenterX = eyeRect.left + eyeRect.width / 2
      const eyeCenterY = eyeRect.top + eyeRect.height / 2

      const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX)
      const distance = Math.min(3, Math.sqrt(Math.pow(mouseX - eyeCenterX, 2) + Math.pow(mouseY - eyeCenterY, 2)) / 50)

      const eyeX = Math.cos(angle) * distance
      const eyeY = Math.sin(angle) * distance

      gsap.to(".robot-eye", {
        x: eyeX,
        y: eyeY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Smooth robot following
    const updateRobotPosition = () => {
      robotX += (mouseX - robotX) * 0.08
      robotY += (mouseY - robotY) * 0.08

      gsap.set(robot, {
        x: robotX - 30,
        y: robotY - 30,
      })

      // Trail effect
      gsap.set(trail, {
        x: robotX - 15,
        y: robotY - 15,
        opacity: 0.3,
      })

      requestAnimationFrame(updateRobotPosition)
    }

    // Click animation
    const handleClick = () => {
      gsap.to(robot, {
        scale: 1.3,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      })

      // Spark effect
      const spark = document.createElement("div")
      spark.className = "fixed w-2 h-2 bg-orange-400 rounded-full pointer-events-none z-50"
      spark.style.left = mouseX + "px"
      spark.style.top = mouseY + "px"
      document.body.appendChild(spark)

      gsap.fromTo(
        spark,
        { scale: 0, opacity: 1 },
        {
          scale: 3,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => spark.remove(),
        },
      )
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)
    updateRobotPosition()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <>
      {/* Trail */}
      <div
        ref={trailRef}
        className="fixed w-8 h-8 pointer-events-none z-40 opacity-20"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-orange-500/40 to-cyan-500/40 rounded-full blur-sm"></div>
      </div>

      {/* Main Robot */}
      <div
        ref={robotRef}
        className="fixed w-16 h-16 pointer-events-none z-50 transition-transform duration-100"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* Robot Body */}
        <div className="relative w-full h-full">
          {/* Main Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg border-2 border-orange-500/60 shadow-lg">
            <div className="absolute inset-1 border border-orange-400/30 rounded"></div>

            {/* Industrial Rivets */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-orange-400/80 rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-orange-400/80 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-400/80 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400/80 rounded-full"></div>
          </div>

          {/* Eyes Container */}
          <div ref={eyesRef} className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-3 flex gap-1">
            <div className="robot-eye w-3 h-3 bg-cyan-400 rounded-full border border-cyan-300 relative">
              <div className="absolute inset-0.5 bg-cyan-300 rounded-full"></div>
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="robot-eye w-3 h-3 bg-cyan-400 rounded-full border border-cyan-300 relative">
              <div className="absolute inset-0.5 bg-cyan-300 rounded-full"></div>
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Rotating Gear */}
          <div
            ref={gearRef}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-orange-400/60 rounded-full bg-orange-500/20"
          >
            <div className="absolute inset-0.5 border border-orange-400/40 rounded-full bg-gray-900/60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
            {/* Gear teeth */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-1 bg-orange-400/80"
                style={{
                  top: "-1px",
                  left: "50%",
                  transformOrigin: "50% 9px",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* Antenna */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-600"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full border border-orange-300"></div>

          {/* Side Panels */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-6 bg-gray-700 border border-gray-600 rounded-l"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-6 bg-gray-700 border border-gray-600 rounded-r"></div>

          {/* Status Lights */}
          <div className="absolute top-6 left-2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-6 right-2 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  )
}

export default MechanicalCursorFollower
