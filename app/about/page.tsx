import Image from "next/image"
import SpaceBackground from "@/components/space-background"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Top Navigation */}
      <TopNavigation />

      <main className="flex-grow container mx-auto px-4 pt-24 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 grid-logo">ABOUT ME</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
            <Image src="/images/IMG_1210.jpg" alt="Profile Photo" fill className="object-cover" />
          </div>

          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Mechanical Engineer & Developer</h2>
            <p className="text-gray-300 mb-4">
              I'm a mechanical engineer with a passion for innovative design and problem-solving. My expertise spans
              from CAD modeling and structural analysis to programming and system integration.
            </p>
            <p className="text-gray-300 mb-4">
              With a background in both engineering and programming, I bring a unique perspective to projects that
              require technical expertise and creative solutions.
            </p>
            <p className="text-gray-300 mb-4">
              When I'm not designing or coding, you can find me working on personal
              projects, going to the gym, playing/watching sports, exploring new technlogies, or expanding my knowledge in the field of robotics and automation.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Candidate for Bachelor of Applied Science in Honours Mechanical Engineering, University of Waterloo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-300 mb-4">
            My journey in engineering began with a fascination for how things work. From disassembling toys as a child
            to designing complex mechanical systems today, I've always been driven by curiosity and a desire to create.
          </p>
          <p className="text-gray-300 mb-4">
            Throughout my career, I've worked on diverse projects ranging from robotics and automation to structural
            analysis and product design. Each project has taught me valuable lessons and expanded my skill set.
          </p>
          <p className="text-gray-300">
            I believe in continuous learning and staying at the forefront of technological advancements. This mindset
            has allowed me to adapt to new challenges and deliver innovative solutions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
