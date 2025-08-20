import Link from "next/link"
import { Instagram, Linkedin, Camera, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
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
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">STRENGTHS AND SKILLS</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="bg-gradient-to-br from-black to-gray-900 border border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter grid-logo">ANALYSIS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Logical analysis of data to find out potential solutions, and the ability to consider multiple variables
                in decision making
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black to-gray-900 border border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter grid-logo">DESIGN</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                From imagination to reality, versed in Solidworks, Fusion, Onshape. Designing to fit various
                manufacturing constraints
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black to-gray-900 border border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter grid-logo">INTEGRATION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Identifying how each part of the system work with the other, and understanding the overall purpose of
                the system
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center">TECH STACK</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">TailwindCSS</h3>
            <p className="text-orange-300">Frontend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">HTML | CSS</h3>
            <p className="text-orange-300">Frontend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">React</h3>
            <p className="text-orange-300">Frontend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">Next.js</h3>
            <p className="text-orange-300">Frontend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">NumPy</h3>
            <p className="text-orange-300">Backend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">Matplotlib</h3>
            <p className="text-orange-300">Backend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">C++</h3>
            <p className="text-orange-300">Backend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">C</h3>
            <p className="text-orange-300">Backend</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">SPI</h3>
            <p className="text-orange-300">Tools</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">CMake</h3>
            <p className="text-orange-300">Tools</p>
          </div>
        </div>
      </div>
    </div>
  )
}
