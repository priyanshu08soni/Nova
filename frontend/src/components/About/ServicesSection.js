import React from 'react'

const ServicesSection = ({servicesRef}) => {
  return (
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
                    src="/about/modern-laptop-with-code-editor-and-responsive-desi.png"
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
                    src="/about/professional-video-editing-setup-with-timeline-and.png"
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
            {/* Video ServicesSection Detail */}
            <div className="service-detail-left bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-8 relative overflow-hidden">
              <img
                src="/about/professional-video-production-setup-with-cameras-l.png"
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

            {/* Web ServicesSection Detail */}
            <div className="service-detail-right bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-8 relative overflow-hidden">
              <img
                src="/about/clean-modern-website-interface-with-responsive-des.png"
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
  )
}

export default ServicesSection
