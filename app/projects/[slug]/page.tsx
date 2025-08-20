import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from 'lucide-react'
import SpaceBackground from "@/components/space-background"
import { TopNavigation } from "@/components/top-navigation"

interface ProjectData {
  title: string
  overview: string
  skills: string[]
  demoLink?: string  // Add this line
  demoLabel?: string // Add this line
  sections: {
    title: string
    content: string
    image?: string
    imageAlt?: string
  }[]
  mainImage: string
  mainImageAlt: string
  reportLink?: string
  reportLabel?: string
}

const projectsData: Record<string, ProjectData> = {
  roboticarm: {
    title: "ROBOTIC ARM",
    overview:
      "Currently in progress. 3D printed robotic arm controlled using potentiometer dials and powered using Arduino, PCBs, SG90 Servo Motors, and Python. Has the ability save and replay positions.",
    skills: ["CAD", "C++", "Kinematics", "FEA", "ESP32", "SolidWorks"],
    mainImage: "/images/Robot Arm.jpg",
    mainImageAlt: "Robotic arm full view",
    sections: [
      {
        title: "COMING SOON 🤫",
        content:
          "",
      },
    ],
  },
  formula1frontwing: {
    title: "FORMULA 1 FRONT WING",
    overview:
      "Recreated and modelled the Williams FW31 Formula 1 front wing in SolidWorks, producing photorealistic renders in KeyShot and running CFD flow simulations to assess aerodynamic characteristics. Fabricated a physical prototype using a Bambu A1 3D printing system.",
    skills: ["CAD", "CFD", "SolidWorks", "KeyShot", "3D Printing", "Aerodynamics"],
    mainImage: "/images/Front Wing.jpeg",
    mainImageAlt: "Formula 1 front wing model",
    sections: [
      {
        title: "CAD MODELING",
        content:
          "The project began with creating a precise 3D model of the front wing in SolidWorks. The most frequently used tool in the design process was the spline tool. This project exposed me to a wide array of advanced features, including boundary surface, lofting, surface knit, surface offset, replace face, and surface trim, among others. I also gained a deeper appreciation for the use of reference planes, which significantly streamlined the modelling process. To add realism and visual appeal to the model, I used KeyShot Studio to render the design and applied the signature vintage Williams dark blue livery.",
        image: "/images/Front Wing 2.jpeg",
        imageAlt: "CAD model of F1 front wing",
      },
      {
        title: "CFD ANALYSIS",
        content:
          "The flow simulation results displayed excellence by Williams. In Formula 1, the ideal front wing design maximizes downforce while minimizing aerodynamic drag, improving tire grip and allowing for high-speed cornering. The simulation data indicated an average downforce of 3000 N and a drag force of 1500 N. As seen in the simulation images, you can see that the wing forces the air to travel to the side of the car and avoid the front tires, and the nose of the front wing has relatively low pressure points (no red air points). The fillets on the nose also allow for the air to travel along the side of the nose (more efficient), as opposed to going straight up and creating unwanted downforce. An important observation is the airflow beneath the front wing — a critical factor, as teams aim to funnel this air towards the rear diffuser under the floor. When the simulation is animated, the airflow deflects off the wing and transitions toward the sidepods, which have holes to allow air to reach the radiators that manage engine cooling.",
        image: "/images/Front Wing 1.jpeg",
        imageAlt: "CFD analysis results",
      },
      {
        title: "PHYSICAL PROTOTYPING",
        content:
          "A physical prototype was fabricated using a Bambu A1 3D printing system. The prototype allowed for physical validation of the design and provided a tangible representation of the complex aerodynamic geometry.",
      },
    ],
  },
  cohdamount: {
    title: "CADILLAC LYRIQ COHDA MOUNT",
    overview:
      "Currently in progress. Project is a design of a Cohda Wireless mount for the rear of a General Motors Cadillac Lyriq SUV.",
    skills: ["CAD", "Automotive Design", "Material Testing", "Manufacturing", "Quality Control"],
    mainImage: "/images/Cohda.jpg",
    mainImageAlt: "Cadillac Lyriq Cohda mount",
    sections: [
      {
        title: "COMING SOON 🤫",
        content:
          "",
      },
    ],
  },
  flappybirdtoy: {
    title: "FLAPPY BIRD TOY",
    overview:
      "Tasked with designing a viable toy design for SpinMaster Ltd. Developed a fully functioning toy inspired by the Flappy Bird mobile game using machining and 3D printing components using SolidWorks.",
    skills: ["Mechanical Design", "Prototyping", "User Experience", "Manufacturing"],
    demoLink: "https://drive.google.com/file/d/18Bz218vOhfc6g_5PihfQHBJm29HWctN6/view?usp=sharing", // Add this
    demoLabel: "WATCH DEMO", // Add this
    reportLink: "https://drive.google.com/file/d/1V8vZ6uFDwYVr96GwQ9CHcL2g60snTi6w/view?usp=sharing",
    reportLabel: "TECHNICAL REPORT",
    mainImage: "/images/Flappy Bird.jpeg",
    mainImageAlt: "Flappy Bird mechanical toy",
    sections: [
      {
        title: "MECHANISM DESIGN",
        content:
          "Developed the core gameplay system by designing and prototyping conveyor belts to simulate moving obstacles, a vertical slider to control the “bird,” and an automatic stopping mechanism for loss detection. Designed gears, shafts, and supports in CAD, using 3D printing and bearings to ensure smooth motion and stable operation. Iterated multiple concepts (e.g., pulley-driven bird vs. slider system) and selected the simplest, most reliable design to balance functionality, responsiveness, and durability.",
        image: "/images/Conveyor.jpg",
        imageAlt: "Conveyor belt mechanism that was developed",
      },
      {
        title: "USER INTERACTION",
        content:
          "Translated the digital Flappy Bird mechanics into a tactile play experience by creating an intuitive control system. Players manipulate a stick-and-slot mechanism to move the bird up and down, mimicking the original game’s challenge while maintaining simplicity for the target age group (6–12). Integrated a pushbutton collision sensor so the game immediately stops upon loss, providing clear feedback and aligning with safety requirements. Focused on ensuring responsive, smooth, and repeatable interactions to keep gameplay engaging.",
        image: "/images/User Control.jpg",
        imageAlt: "User control system and push button",
      },
      {
        title: "MANUFACTURING OPTIMIZATION",
        content:
          "Refined prototypes to meet cost, safety, and playability constraints while considering manufacturability. Simplified the bird movement from a motorized pulley system to a low-cost manual slider for reliability and ease of assembly. Optimized conveyor belt design using bike tubes as an affordable substitute for standard belts, and adjusted tolerances in gears and shafts to ensure smooth fit with TT motors. Evaluated durability of materials and assembly methods (e.g., adhesives, slot dimensions) to minimize wear, simplify construction, and improve long-term usability.",
        image: "/images/Circuit.jpg",
        imageAlt: "Circuit used to control button switch",
      },
    ],
  },
  autonomousrobot: {
    title: "AUTONOMOUS ROBOT LIBRARIAN",
    overview:
      "Developed a fully functioning robot librarian which sorts books onto corresponding shelves based on the colour scanned on the spine (genre). Using SolidWorks, RobotC, and rapid prototyping techniques such as 3D printing.",
    skills: ["Robotics", "AI", "Navigation", "Computer Vision", "System Integration"],
    demoLink: "https://drive.google.com/file/d/1wq-lluQf4tnn3ogrWBYl23R4cXqu17Hg/view?usp=sharing", // Add this
    demoLabel: "WATCH DEMO", // Add this
    reportLink: "https://drive.google.com/file/d/19DYQfg44cnRgErA2-vPD6bPUzDAepgYM/view?usp=sharing",
    reportLabel: "TECHNICAL REPORT",
    mainImage: "/images/Robot.jpeg",
    mainImageAlt: "Autonomous robot librarian",
    sections: [
      {
        title: "MECHANICAL DESIGN AND PROTOTYPING",
        content:
          "Developed the full mechanical system for an autonomous book-sorting robot, including a custom claw-and-arm mechanism designed with LEGO EV3 components, 3D-printed parts, and laser-cut acrylic grippers. Optimized the design for secure gripping and smooth movement, ensuring books could be consistently picked up, lifted, and placed into bins. Conducted iterative testing to refine grip strength, arm stability, and weight capacity, achieving reliable operation within the project constraints.",
        image: "/images/Claw.jpg",
        imageAlt: "Full robot design",
      },
      {
        title: "SOFTWARE AND CONTROL SYSTEMS",
        content:
          "Programmed the robot using modular, function-based software to integrate multiple subsystems, including colour detection, obstacle avoidance, claw control, and coordinated arm movement. Prioritized precision over speed to account for motor encoder variability, ensuring repeatable performance across trials. Implemented safety protocols with ultrasonic sensors, allowing the robot to detect obstacles and adjust behaviour in real-time, enhancing reliability in public-use scenarios.",
        image: "/images/Colour Scan.jpg",
        imageAlt: "Colour scanning mechanism",
      },
      {
        title: "SYSTEMS INTEGRATION AND TESTING",
        content:
          "Led verification and validation of the robot through structured experiments, including 15 colour-scanning trials, timed operation tests, weight lifting evaluations, and obstacle detection checks. Analyzed results against engineering specifications (≤45s operation, ≤$60 cost, ≤250g book weight) and confirmed compliance with all requirements. Coordinated integration of hardware and software systems, ensuring the robot operated autonomously with minimal user input while maintaining accuracy, safety, and efficiency.",
        image: "/images/String.jpg",
        imageAlt: "Claw mechanism",
      },
    ],
  },
  ropebrakedyno: {
    title: "ROPE BRAKE DYNAMOMETER",
    overview:
      "Successfully built a rope brake dynamometer to measure the torque of a TT motor using metal connections and pulley systems. Completed a technical report to present equations and model relationships.",
    skills: ["Mechanical Testing", "Data Acquisition", "Instrumentation", "Calibration"],
    reportLink: "https://drive.google.com/file/d/12mZbD9QCpRSM2Ciqnr5A8tKE_yV6scoG/view?usp=sharing",
    reportLabel: "TECHNICAL REPORT",
    mainImage: "/images/Dyno.jpg",
    mainImageAlt: "Rope brake dynamometer setup",
    sections: [
      {
        title: "MECHANICAL DESIGN & EXPERIMENT SETUP",
        content:
          "Designed and constructed a rope-brake dynamometer to test the torque–speed characteristics of a DC motor. Integrated a custom base structure, wheel, rope system, and elastic spring acting as a load cell. Applied Hooke’s Law to translate spring displacement into force readings, enabling torque measurement. Optimized stability with structural modifications and motor mounting reinforcements to reduce noise and ensure accurate experimental results.",
        image: "/images/Dyno Design.jpg",
        imageAlt: "Claw mechanism",
     },
      {
        title: "CALIBRATION & DATA ACQUSITION",
        content:
          "Conducted calibration of the elastic spring load cell by suspending known weights and recording displacement, deriving the spring constant through regression analysis (R² = 0.98). Used slow-motion video analysis to determine motor no-load speed and collected torque-speed data across varying load conditions. Implemented error-checking and repeated trials to validate data consistency and reliability.",
        image: "/images/Data.png",
        imageAlt: "Claw mechanism",
      },
      {
        title: "DATA ANALYSIS AND PERFORMANCE EVALUATION",
        content:
          "Analyzed torque-speed characteristics of the DC motor, producing a linear fit with R² = 0.83 that aligned with theoretical expectations of inverse torque-speed relationships. Extracted key motor performance parameters, including stall torque (0.16 Nm) and no-load speed (234 RPM). Critically evaluated data quality by identifying sources of error such as rope friction, spring fatigue, and motor shaft distortion, and proposed refinements for improved accuracy in future iterations.",
        image: "/images/Weight.jpg",
        imageAlt: "Claw mechanism",
      },
    ],
  },
  stemcontrolsystem: {
    title: "HAND GESTURE CONTROL SYSTEM",
    overview:
      "Developed a fully functional hand gesture control system using Python. Hand gestures in front of sensors performed computer functions such as play, pause, rewind, and forward.",
    skills: ["Computer Vision", "Machine Learning", "Python", "OpenCV", "Education Technology"],
    mainImage: "/images/Hand Gesture.jpg",
    mainImageAlt: "Hand gesture control system",
    sections: [
      {
        title: "HARDWARE AND SENSOR INTEGRATION",
        content:
          "Developed a gesture-controlled interface using a Raspberry Pi and Arduino UNO, integrating camera sensors to detect and interpret hand movements in real time. Designed the system to reliably capture motion inputs with minimal latency, ensuring smooth communication between hardware and Python-based software.",
        image: "/images/System.jpg",
        imageAlt: "Claw mechanism",
      },
      {
        title: "COMPUTER VISION AND CONTROL ALGORITHMS",
        content:
          "Validated the system through extensive testing of gesture recognition across varying lighting and motion conditions, ensuring robustness and reliability. Demonstrated practical applications by mapping gestures to media playback functions, highlighting the potential for accessibility tools, touchless interfaces, and interactive systems.",
        image: "/images/Arduino UNO.jpg",
        imageAlt: "Claw mechanism",
      },
      {
        title: "SYSTEM TESTING & APPLICATIONS",
        content:
          "Optimized algorithms ensure low-latency gesture recognition, providing immediate feedback and control responses. The system maintains high accuracy while operating in real-time educational environments.",
         image: "/images/Sensors.jpg",
        imageAlt: "Claw mechanism",
      },
    ],
  },
  chassis: {
    title: "HOOK ATTACHMENT AND CHASSIS GROUNDING",
    overview:
      "Designed and prototyped a hook attachment for gasket sealing, tested o-rings for durability, 3D-printed prototypes, and prepared chassis for coating and finishing.",
    skills: ["SolidWorks, 3D printing, Machine Shop Manufacturing"],
    mainImage: "/images/Hook.jpeg",
    mainImageAlt: "Hand gesture control system",
    sections: [
      {
        title: "DESIGN AND PROTOTYPING",
        content:
          "Worked with a subteam to design a hook attachment in SolidWorks to ensure the gasket would seal properly under load. Multiple iterations were created, accounting for geometric tolerances and fit within the chassis assembly. To validate the design, several prototypes were 3D printed using Prusa printers and presented to the chassis team leads for review, ensuring the attachment met both functional and manufacturability requirements.",
        image: "/images/Hook 1.PNG",
        imageAlt: "Claw mechanism",
      },
      {
        title: "MATERIAL TESTING AND ANALYSIS",
        content:
          "Performed stress testing on various o-ring types to evaluate their performance under compression. Using a weight-based setup, calculated the modulus of elasticity, observed material wear and tear, and determined the optimal o-ring size and material for sealing effectiveness. This testing process provided data-driven justification for material selection and helped refine the attachment design to achieve reliable long-term sealing.",
        image: "/images/Anodize.jpg",
        imageAlt: "Claw mechanism",
      },
      {
        title: "MANUFACTURING PREPARATION",
        content:
          "Oversaw preparation of chassis components for powder coating and anodizing, processes that require proper grounding and surface finishing. Utilized a Dremel to prepare the chassis floor and ensure precise fit of components prior to coating. These steps enhanced coating adhesion, durability, and ensured the final assembly maintained both structural integrity and professional finish.",
         image: "/images/Anodize 1.jpg",
        imageAlt: "Claw mechanism",
      },
    ],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectsData[slug] || {
    title: "Project Not Found",
    overview: "Sorry, this project could not be found",
    skills: [],
    sections: [],
    mainImage: "/placeholder.svg?height=400&width=600",
    mainImageAlt: "Project not found",
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Top Navigation */}
      <TopNavigation />

      {/* Content */}
      <div className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Back Button */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 hover:scale-105 transition-all duration-300 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Main Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-[4/3] shadow-2xl">
                <Image
                  src={project.mainImage || "/placeholder.svg"}
                  alt={project.mainImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
<div className="flex flex-col justify-center space-y-8">
  <div>
    <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 font-space-mono">
      PROJECT: {project.title}
    </h1>

    <h2 className="text-2xl font-bold tracking-wider mb-6 font-space-mono">OVERVIEW:</h2>
    <p className="text-lg leading-relaxed text-gray-300">{project.overview}</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold tracking-wider mb-4 font-space-mono">SKILLS:</h3>
    <p className="text-lg text-gray-300">{project.skills.join(", ")}</p>
  </div>

  {/* Demo and Report Buttons */}
  <div className="flex flex-col gap-4">
    {project.demoLink && (
      <div>
        <h3 className="text-2xl font-bold tracking-wider mb-4 font-space-mono">DEMO:</h3>
        <Link
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-space-mono"
        >
          <span>{project.demoLabel || "VIEW DEMO"}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    )}

    {project.reportLink && (
      <div>
        <h3 className="text-2xl font-bold tracking-wider mb-4 font-space-mono">DOCUMENTATION:</h3>
        <Link
          href={project.reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-space-mono"
        >
          <span>{project.reportLabel || "VIEW REPORT"}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </Link>
      </div>
    )}
  </div>
</div>
</div>

          {/* Project Sections */}
          {project.sections.map((section, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-4xl font-bold tracking-wider mb-12 font-space-mono">{section.title}</h2>

              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <p className="text-lg leading-relaxed text-gray-300">{section.content}</p>
                </div>

                {section.image && (
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-[4/3] shadow-2xl">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.imageAlt || section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}