import React from 'react'

const HeroSection = ({heroRef}) => {
  
  return (
    <section ref={heroRef} className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center bg-black">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <img
            src="/about/modern-web-development-workspace-with-multiple-mon.png"
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

        <div className="text-center z-10 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm md:rounded-3xl border border-gray-700/30"></div>
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
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
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
  )
}

export default HeroSection
