import React from "react";

const VisionSection = ({visionRef}) => {
  return (
    <section
      ref={visionRef}
      className="py-32 px-4 relative bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/about/modern-web-development-workspace-with-multiple-mon.png"
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
          src="/about/futuristic-digital-landscape-with-flowing-data-str.png"
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
              TO ENGINEER THE BRIDGE BETWEEN CONCEPT AND EXECUTION, WHERE EVERY
              COMPONENT IS PRECISION-CRAFTED AND EVERY PROCESS IS OPTIMIZED. WE
              BELIEVE IN SYSTEMATIC DIGITAL MANUFACTURING THAT TRANSFORMS
              BUSINESSES THROUGH RELIABLE, SCALABLE SOLUTIONS.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-mono">
              THROUGH SYSTEMATIC WEB ENGINEERING AND PRECISION VIDEO PRODUCTION,
              WE HELP BRANDS BUILD ROBUST CONNECTIONS WITH THEIR AUDIENCE USING
              PROVEN METHODOLOGIES THAT DRIVE MEASURABLE GROWTH AND OPERATIONAL
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
                  <div
                    className="stat-number text-3xl font-bold text-orange-400 mb-2 font-mono"
                    data-count="100"
                  >
                    0
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    SYSTEMS DEPLOYED
                  </div>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                  <div
                    className="stat-number text-3xl font-bold text-cyan-400 mb-2 font-mono"
                    data-count="50"
                  >
                    0
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    SATISFIED CLIENTS
                  </div>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-gray-400 mb-2 font-mono">
                    24/7
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    OPERATIONS
                  </div>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-orange-400 mb-2 font-mono">
                    99%
                  </div>
                  <div className="text-gray-300 font-mono text-sm">UPTIME</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
