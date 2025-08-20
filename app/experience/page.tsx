import Link from "next/link"
import { Instagram, Linkedin, Camera, Plus, Laptop, DollarSign, BotIcon as Robot, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header with social links */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="#" aria-label="Portfolio">
            <Camera className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold tracking-tighter grid-logo">KABIR</h1>
          <Link href="#" aria-label="Add">
            <Plus className="w-6 h-6" />
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experiences</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 to-purple-900/30 border border-white/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <Laptop className="w-10 h-10 text-purple-300" />
              <div>
                <CardTitle className="text-xl font-bold">Programming & Game Development Instructor</CardTitle>
                <p className="text-gray-400">Code Ninjas</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Worked with a team to teach game development, robotics, and programming fundamentals</li>
                <li>Used proprietary platforms such as Unity, MakeCode, and VSCode</li>
                <li>Instructed over 200 students of various ages</li>
                <li>Developed custom curriculum to engage and challenge students</li>
              </ul>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-purple-900/50">Unity</Badge>
                <Badge className="bg-purple-900/50">MakeCode</Badge>
                <Badge className="bg-purple-900/50">VSCode</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-purple-900/30 border border-white/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <DollarSign className="w-10 h-10 text-yellow-300" />
              <div>
                <CardTitle className="text-xl font-bold">Financial Officer</CardTitle>
                <p className="text-gray-400">WilderCare</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Co-founded a non-profit organization supporting the Oakville Milton Humane Society</li>
                <li>Spearheaded revenue generation through bracelet sales and React-based website development</li>
                <li>Implemented social media marketing strategies, resulting in 40% growth in online engagement</li>
                <li>Managed financial transactions, expense reports, and fundraising events</li>
                <li>Helped secure over $1,000 in donations for the organization</li>
              </ul>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-purple-900/50">React</Badge>
                <Badge className="bg-purple-900/50">Social Media</Badge>
                <Badge className="bg-purple-900/50">Financial Management</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-purple-900/30 border border-white/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <Robot className="w-10 h-10 text-blue-300" />
              <div>
                <CardTitle className="text-xl font-bold">Programmer</CardTitle>
                <p className="text-gray-400">Orbit Robotics</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Contributed to the team's success in the FIRST Robotics Competition at the regional level</li>
                <li>Developed control systems for robotic mechanisms</li>
                <li>Collaborated with mechanical and electrical teams to integrate systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-purple-900/30 border border-white/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <Cpu className="w-10 h-10 text-blue-300" />
              <div>
                <CardTitle className="text-xl font-bold">Firmware Developer</CardTitle>
                <p className="text-gray-400">UW Orbital</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Played a critical role in developing systems for a nanosatellite project</li>
                <li>Designed, tested, and implemented embedded software solutions</li>
                <li>Worked with hardware constraints and space-grade requirements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
