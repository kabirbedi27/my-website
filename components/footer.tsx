import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Connect With Me Section */}
        <div id="connect" className="mb-12 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center relative">
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              CONTACT ME!
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

            <Link
              href="https://www.linkedin.com/in/kabir-bedi-professional/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl hover:bg-black/80 transition-all duration-300 hover:scale-105 group"
            >
              <Linkedin className="w-10 h-10 text-white group-hover:text-orange-300 transition-colors" />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1BaVnhp8GD4ZTh5IgWAMI2jL4l5GaoLAG/view?usp=sharing"
              className="flex items-center justify-center p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl hover:bg-black/80 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="w-10 h-10 text-white group-hover:text-orange-300 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Copyright/Watermark */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
          <div className="text-xl font-bold tracking-tighter grid-logo mb-2 md:mb-0">KABIR</div>
          <div className="text-sm text-gray-400">&copy;{new Date().getFullYear()} • All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
