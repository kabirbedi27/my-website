"use client"

import { useRef } from "react"

interface TechItem {
  name: string
  category: string
}

const techStack: TechItem[] = [
  { name: "SolidWorks", category: "CAD" },
  { name: "AutoCAD", category: "CAD" },
  { name: "ANSYS", category: "Simulation" },
  { name: "FEA", category: "Design" },
  { name: "React", category: "Frontend" },
  { name: "SiemensNX", category: "CAD" },
  { name: "MATLAB", category: "Backend" },
  { name: "C++", category: "Backend" },
  { name: "C", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "JavaScript", category: "Backend" },
  { name: "GD&T", category: "Design" },
  { name: "3D Printing", category: "Design" },
  { name: "RobotC", category: "Backend" },
  { name: "Technical Drawings", category: "Design" },
  { name: "Fusion 360", category: "CAD" },
  { name: "GD&T", category: "Design" },
  { name: "Machine Shop Manufacturing", category: "Design" },
]

// Function to get category color
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Frontend":
      return "text-purple-300"
    case "Backend":
      return "text-blue-300"
    case "Design":
      return "text-cyan-300"
    case "CAD":
      return "text-indigo-300"
    case "Simulation":
      return "text-violet-300"
    default:
      return "text-purple-300"
  }
}

export function ScrollingTechStack() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  // Split the tech stack into two rows
  const row1Items = techStack.slice(0, Math.ceil(techStack.length / 2))
  const row2Items = techStack.slice(Math.ceil(techStack.length / 2))

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">TECH STACK</h2>

      {/* First row - scrolls left to right */}
      <div className="relative w-full overflow-hidden mb-4 py-2">
        {/* Gradient masks for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        <div ref={row1Ref} className="flex animate-scroll-left">
          {[...row1Items, ...row1Items, ...row1Items].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center min-w-[180px] hover:scale-105 transition-transform duration-300 hover:border-purple-500/30"
            >
              <h3 className="text-xl font-bold">{tech.name}</h3>
              <p className={`${getCategoryColor(tech.category)}`}>{tech.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolls right to left */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Gradient masks for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        <div ref={row2Ref} className="flex animate-scroll-right">
          {[...row2Items, ...row2Items, ...row2Items].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center min-w-[180px] hover:scale-105 transition-transform duration-300 hover:border-purple-500/30"
            >
              <h3 className="text-xl font-bold">{tech.name}</h3>
              <p className={`${getCategoryColor(tech.category)}`}>{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
