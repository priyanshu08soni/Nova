import React from "react";

const TeamSection = ({teamRef}) => {
  return (
    <section ref={teamRef} className="relative py-32 overflow-hidden">
      <div className="team-bg absolute inset-0 bg-gradient-to-br from-gray-800/40 via-orange-900/20 to-cyan-900/20"></div>
      <img
        src="/about/creative-team-workspace-with-designers-and-develop.png"
        alt="Creative Team"
        className="parallax-medium absolute inset-0 w-full h-full object-cover opacity-5"
      />

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-cyan-500 bg-clip-text text-transparent">
          Engineering Team
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our specialized engineering team operates with systematic precision,
          combining technical expertise with industrial-grade processes to
          manufacture digital solutions that exceed specifications and deliver
          measurable performance.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
