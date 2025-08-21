import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import SpaceBackground from "@/components/space-background"
import { ShrinkingTitle } from "@/components/shrinking-title"
import { ScrollingTechStack } from "@/components/scrolling-tech-stack"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Top Navigation with Social Icons and Menu */}
      <TopNavigation />

      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Hero section with shrinking header effect */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[150px] opacity-70"></div>
          </div>

          <ShrinkingTitle />

          {/* Add a spacer div to push content down to account for the fixed title */}
          <div className="h-[10vh] sm:h-[15vh]"></div>

          <div className="flex flex-col items-center gap-4 relative z-10 mt-8">
            <p className="max-w-lg text-center text-lg mb-12">
              my personal portfolio displaying my passion, design skills, and imagination
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
  <Link
    href="/#connect"
    className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover-lift text-center"
  >
    CONTACT
  </Link>
  <Link
    href="/about"
    className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover-lift text-center"
  >
    ABOUT
  </Link>
  <Link
    href="https://drive.google.com/file/d/1lls6lCuU84XQzjy4fNkpttV2r5tPNTEG/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover-lift text-center"
  >
    RESUME
  </Link>
</div>

            {/* Circular image below buttons */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-lg hover:scale-105 transition-all duration-500 mt-8">
              <Image src="/images/IMG_0696 2.jpg" alt="Profile Photo" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <div className="p-4 text-center">
                  <span className="text-white/90 font-medium">KABIR BEDI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen py-20">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-6xl font-bold tracking-tighter grid-logo">PROJECTS</h2>
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover-lift text-center"
              >
                ALL
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {/* Project 1 - Robotic Arm */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Robot Arm.jpg"
                    alt="Robotic Arm"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">ROBOTIC ARM</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                        Currently in progress. 3D printed robotic arm controlled using potentiometer dials and powered using Arduino, PCBs, SG90 Servo Motors, and Python. Has the ability save and replay positions.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/roboticarm"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    CAD
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Arduino
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Python
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Circuitry
                  </Badge>
                </div>
              </div>

              {/* Project 2 - Formula 1 Front Wing */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Front Wing.jpeg"
                    alt="Formula 1 Front Wing"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">FORMULA 1 FRONT WING</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Recreated and modelled the Williams FW31 Formula 1 front wing in SolidWorks, producing photorealistic renders in KeyShot and running CFD flow simulations to assess aerodynamic characteristics. Fabricated a physical prototype using a Bambu A1 3D printing system.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/formula1frontwing"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    CAD
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    3D Printing
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    CFD Simulation
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    FEA
                  </Badge>
                </div>
              </div>

              {/* Project 3 - Cadillac Lyriq Cohda Mount */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Cohda.jpg"
                    alt="Flappy Bird Toy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">CADILLAC LYRIQ COHDA MOUNT</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Currently in progress. Project is a design of a Cohda Wireless mount for the rear of a General Motors Cadillac Lyriq SUV.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/cohdamount"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    CAD
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Machining
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    3D Printing
                  </Badge>
                </div>
              </div>

              {/* Project 4 - Flappy Bird Toy */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Flappy Bird.jpeg"
                    alt="Flappy Bird Toy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">FLAPPY BIRD TOY</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Tasked with designing a viable toy design for SpinMaster Ltd. Developed a fully functioning toy inspired by the Flappy Bird mobile game using machining and 3D printing components using SolidWorks.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/flappybirdtoy"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    CAD
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Machining
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    3D Printing
                  </Badge>
                </div>
              </div>

              {/* Project 5 - Autonomous Robot Librarian */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Robot.jpeg"
                    alt="Structural Analysis Project"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">AUTONOMOUS ROBOT LIBRARIAN</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Developed a fully functioning robot librarian which sorts books onto corresponding shelves based on the colour scanned on the spine (genre). Using SolidWorks, RobotC, and rapid prototyping techniques such as 3D printing.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/autonomousrobot"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    CAD
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    C++
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    RobotC
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    EV3 Robotics
                  </Badge>
                </div>
              </div>

              {/* Project 6 - Rope Brake Dynamometer */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Dyno.jpg"
                    alt="Flappy Bird Toy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">ROPE BRAKE DYNAMOMETER</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Successfully built a rope brake dynamometer to measure the torque of a TT motor using metal connections and pulley systems. Completed a technical report to present equations and model relationships.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/ropebrakedyno"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Machine Shop Manufacturing
                  </Badge>
                </div>
              </div>

              {/* Project 7 - Hand Gesture Control System */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Hand Gesture.jpg"
                    alt="Flappy Bird Toy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">HAND GESTURE CONTROL SYSTEM</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Developed a fully functional hand gesture control system using Python. Hand gestures in front of sensors performed computer functions such as play, pause, rewind, and forward.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/stemcontrolsystem"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Arduino
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Python
                  </Badge>
                </div>
              </div>

              {/* Project 8 - Hook Attachment R&D and Chassis Grounding */}
              <div className="space-y-3 hover-lift">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative group h-[450px] transition-all duration-300 hover:border-orange-500/30">
                  <Image
                    src="/images/Hook.jpeg"
                    alt="Flappy Bird Toy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <h3 className="text-4xl font-bold mb-2 grid-logo">HOOK ATTACHMENT AND CHASSIS GROUNDING</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Designed and prototyped a hook attachment for gasket sealing, tested o-rings for durability, 3D-printed prototypes, and prepared chassis for coating and finishing.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/chassis"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    SolidWorks
                  </Badge>
                  <Badge className="bg-black/70 text-white border-white/20 rounded-full px-4 py-1 hover:scale-105 transition-transform duration-300 hover:bg-black/90">
                    Machine Shop Manufacturing
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold tracking-tighter mb-10 text-center">STRENGTHS AND SKILLS</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:border-orange-500/30 hover-lift">
                <h3 className="text-2xl font-bold tracking-tighter grid-logo mb-4">PROBLEM-SOLVING AND ANALYTICAL THINKING</h3>
                <p className="text-gray-300">
                Skilled at breaking down complex challenges and developing practical, efficient solutions that balance innovation with real-world constraints.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:border-orange-500/30 hover-lift">
                <h3 className="text-2xl font-bold tracking-tighter grid-logo mb-4">DESIGN AND TECHNICAL PROFICIENCY</h3>
                <p className="text-gray-300">
                Experienced in CAD modeling and simulation using SolidWorks, SiemensNX, and ANSYS, with a focus on functionality, manufacturability, and cost-efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:border-orange-500/30 hover-lift">
                <h3 className="text-2xl font-bold tracking-tighter grid-logo mb-4">COMMUNICATION & COLLABORATION</h3>
                <p className="text-gray-300">
                Strong at conveying technical ideas clearly through drawings, reports, and teamwork, ensuring smooth coordination across disciplines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section with Scrolling Effect */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <ScrollingTechStack />
          </div>
        </section>
      </div>

      {/* Footer with Connect With Me section */}
      <Footer />
    </div>
  )
}
