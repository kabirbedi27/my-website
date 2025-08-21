import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import SpaceBackground from "@/components/space-background"

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Top Navigation */}
      <TopNavigation />

      <div className="container mx-auto p-4 pt-24 relative z-10">
        <div className="flex justify-between items-center mb-12">
         <h2 className="text-4xl md:text-6xl font-bold tracking-tighter grid-logo">PROJECTS</h2>
          <Link
            href="#"
            className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition"
          >
            ALL
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">ROBOTIC ARM</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                        Currently in progress. 3D printed robotic arm controlled using potentiometer dials and powered using Arduino, PCBs, SG90 Servo Motors, and Python. Has the ability save and replay positions.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/roboticarm"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">FORMULA 1 FRONT WING</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Recreated and modelled the Williams FW31 Formula 1 front wing in SolidWorks, producing photorealistic renders in KeyShot and running CFD flow simulations to assess aerodynamic characteristics. Fabricated a physical prototype using a Bambu A1 3D printing system.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/formula1frontwing"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">CADILLAC LYRIQ COHDA MOUNT</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Currently in progress. Design of a Cohda Wireless mount for the rear of a General Motors Cadillac Lyriq SUV.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/cohdamount"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">FLAPPY BIRD TOY</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Tasked with designing a viable toy design for SpinMaster Ltd. Developed a fully functioning toy inspired by the Flappy Bird mobile game using machining and 3D printing components using SolidWorks.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/flappybirdtoy"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">AUTONOMOUS ROBOT LIBRARIAN</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Developed a fully functioning robot librarian which sorts books onto corresponding shelves based on the colour scanned on the spine (genre). Using SolidWorks, RobotC, and rapid prototyping techniques such as 3D printing.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/autonomousrobot"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">ROPE BRAKE DYNAMOMETER</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Successfully built a rope brake dynamometer to measure the torque of a TT motor using metal connections and pulley systems. Completed a technical report to present equations and model relationships.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/ropebrakedyno"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">HAND GESTURE CONTROL SYSTEM</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Developed a fully functional hand gesture control system using Python. Hand gestures in front of sensors performed computer functions such as play, pause, rewind, and forward.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/stemcontrolsystem"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 grid-logo">HOOK ATTACHMENT AND CHASSIS GROUNDING</h3>
                    <div className="max-w-md mt-4">
                      <p className="text-white-300 text-lg">
                      Designed and prototyped a hook attachment for gasket sealing, tested o-rings for durability, 3D-printed prototypes, and prepared chassis for coating and finishing.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href="/projects/chassis"
                        className="px-8 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
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

      {/* Footer with Connect With Me section */}
      <Footer />
    </div>
  )
}
