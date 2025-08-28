"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import FooterOther from "../components/FooterOther"
import Navbar from "../components/Navbar"
import sun from "../assets/para/sun.png";
import mountain1 from "../assets/para/mountain1.png";
import mountain2 from "../assets/para/mountain2.png";
import trees1 from "../assets/para/trees1.png";
import trees2 from "../assets/para/trees2.png";
import sky from "../assets/para/sky.png";
// const services = [
//   {
//     title: "Video Editing",
//     description:
//       "Transform raw footage into cinematic masterpieces with professional editing, color grading, and seamless transitions that captivate your audience.",
//     icon: "🎬",
//     gradient: "from-orange-300 via-pink-400 to-red-400",
//     bgImage: "/video-editing-bg.png",
//     bgColor: "bg-gradient-to-br from-orange-200 to-pink-200",
//     textColor: "text-white",
//     borderColor: "border-orange-300",
//     shadowColor: "shadow-orange-200/50",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Build lightning-fast, responsive websites and web applications using cutting-edge technologies that deliver exceptional user experiences.",
//     icon: "💻",
//     gradient: "from-purple-300 via-pink-400 to-orange-400",
//     bgImage: "/web-dev-bg.png",
//     bgColor: "bg-gradient-to-br from-purple-200 to-pink-200",
//     textColor: "text-white",
//     borderColor: "border-purple-300",
//     shadowColor: "shadow-purple-200/50",
//   },
//   {
//     title: "Graphic Design",
//     description:
//       "Create stunning visual identities, logos, and brand assets that make lasting impressions and communicate your message effectively.",
//     icon: "🎨",
//     gradient: "from-yellow-300 via-orange-400 to-pink-400",
//     bgImage: "/graphic-design-bg.png",
//     bgColor: "bg-gradient-to-br from-yellow-200 to-orange-200",
//     textColor: "text-white",
//     borderColor: "border-yellow-300",
//     shadowColor: "shadow-yellow-200/50",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Amplify your brand's reach with data-driven marketing strategies, social media campaigns, and targeted advertising that converts.",
//     icon: "📈",
//     gradient: "from-pink-300 via-purple-400 to-indigo-400",
//     bgImage: "/digital-marketing-bg.png",
//     bgColor: "bg-gradient-to-br from-pink-200 to-purple-200",
//     textColor: "text-white",
//     borderColor: "border-pink-300",
//     shadowColor: "shadow-pink-200/50",
//   },
//   {
//     title: "Ads & Promos",
//     description:
//       "Craft compelling promotional content and advertising campaigns that stop the scroll and drive meaningful engagement with your brand.",
//     icon: "🎥",
//     gradient: "from-orange-300 via-yellow-400 to-pink-400",
//     bgImage: "/ads-promos-bg.png",
//     bgColor: "bg-gradient-to-br from-orange-200 to-yellow-200",
//     textColor: "text-white",
//     borderColor: "border-orange-300",
//     shadowColor: "shadow-orange-200/50",
//   },
// ]

// const ServiceCard = ({ service, index, total, scrollYProgress }) => {
//   const cardWidth = 450 // Match actual card width
//   const cardSpacing = 250 // Increased spacing between cards to prevent overlap
//   const cardWithSpacing = cardWidth + cardSpacing
//   const totalWidth = cardWithSpacing * total
//   const startPosition = window.innerWidth + index * cardWithSpacing // Use cardWithSpacing instead of cardWidth

//   // Continuous marquee movement from right to left
//   const x = useTransform(scrollYProgress, [0, 1], [startPosition, -totalWidth - cardWidth])

//   // Keep cards at full opacity and scale during marquee
//   const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])

//   return (
//     <motion.div
//       style={{ x, opacity, scale }}
//       className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center px-4"
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.3 },
//       }}
//     >
//       <div
//         className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-2xl`}
//         style={{
//           width: "450px", // Reduced from 1000px to 450px for more compact cards
//           height: "280px", // Fixed height for consistent card sizing
//         }}
//       >
//         <div className="absolute inset-0">
//           <img
//             src={service.bgImage || "/placeholder.svg"}
//             alt={`${service.title} background`}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <div
//             className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}
//           />
//           <div className="absolute inset-0 bg-black/20" />
//         </div>

//         <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//           <div className="flex items-start gap-4">
//             <motion.div
//               className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-300"
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="text-2xl">{service.icon}</span>
//             </motion.div>

//             <div className="flex-1">
//               <h3
//                 className={`text-2xl font-bold ${service.textColor} drop-shadow-lg mb-2 group-hover:scale-105 transition-transform duration-300`}
//               >
//                 {service.title}
//               </h3>
//             </div>
//           </div>

//           <div>
//             <p
//               className={`${service.textColor} opacity-90 text-sm leading-relaxed group-hover:opacity-100 transition-opacity duration-300 font-medium drop-shadow-sm`}
//             >
//               {service.description}
//             </p>
//           </div>

//           <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
//           <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />

//           <div className="absolute inset-0 pointer-events-none">
//             {[...Array(5)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-2 h-2 rounded-full bg-white/30 shadow-lg"
//                 style={{
//                   left: `${20 + ((i * 15) % 60)}%`,
//                   top: `${30 + (i % 2) * 40}%`,
//                 }}
//                 animate={{
//                   y: [-5, 5, -5],
//                   opacity: [0.3, 0.6, 0.3],
//                   scale: [0.8, 1.2, 0.8],
//                 }}
//                 transition={{
//                   duration: 2 + i * 0.3,
//                   repeat: Number.POSITIVE_INFINITY,
//                   delay: i * 0.4,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

const Services = () => {
  // const cardsRef = useRef(null)
  const { scrollY } = useScroll()

  const sunY = useTransform(scrollY, [0, 1000], [0, 900])
  const sunRotate = useTransform(scrollY, [0, 1000], [0, 180])
  const mountain1Y = useTransform(scrollY, [0, 1000], [0, 400])
  const mountain1X = useTransform(scrollY, [0, 1000], [0, -200])
  const mountain2Y = useTransform(scrollY, [0, 1000], [0, 450])
  const mountain2X = useTransform(scrollY, [0, 1000], [0, 200])
  const trees1Y = useTransform(scrollY, [0, 1000], [0, 600])
  const trees1X = useTransform(scrollY, [0, 1000], [0, -250])
  const trees2Y = useTransform(scrollY, [0, 1000], [0, 700])
  const trees2X = useTransform(scrollY, [0, 1000], [0, 250])

  // const { scrollYProgress } = useScroll({
  //   target: cardsRef,
  //   offset: ["start start", "end start"], // Changed from ["start end", "end start"] to start only when section is at top
  // })

  return (
    <div className="relative min-h-screen">
      <Navbar/>

      <section className="relative h-screen w-full overflow-hidden">
        <motion.img
          src={sky}
          alt="Sky background"
          className="fixed top-0 left-0 w-full h-full object-cover z-[0] will-change-transform"
        />
        <motion.img
          src={sun}
          alt="Sun"
          className="absolute top-40 left-1/2 -translate-x-1/2 w-64 h-64 object-contain z-[1] will-change-transform"
          style={{ y: sunY, rotate: sunRotate }}
        />
        <motion.img
          src={mountain1}
          alt="Mountains"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[2] will-change-transform"
          style={{ y: mountain1Y, x: mountain1X }}
        />
        <motion.img
          src={mountain2}
          alt="Mountains"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[3] will-change-transform"
          style={{ y: mountain2Y, x: mountain2X }}
        />
        <motion.img
          src={trees1}
          alt="Trees"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[4] will-change-transform"
          style={{ y: trees1Y, x: trees1X }}
        />
        <motion.img
          src={trees2}
          alt="Trees"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[5] will-change-transform"
          style={{ y: trees2Y, x: trees2X }}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[6]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-8xl font-bold drop-shadow-2xl mb-6 text-balance">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90 font-light leading-relaxed text-pretty">
              We craft digital experiences that inspire, engage, and deliver exceptional results for your brand
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/80">
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      

      <FooterOther/>
    </div>
  )
}

export default Services
