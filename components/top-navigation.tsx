"use client"

import Link from "next/link"
import { Linkedin, Mail, Menu, Home, User, Briefcase, Phone, FileText } from "lucide-react"
import { useState } from "react"

export function TopNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Replace with your actual email
  const emailAddress = "kabirbedi2306@gmail.com"

  return (
    <div className="fixed top-0 inset-x-0 z-50 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/kabir-bedi-professional/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1C4Twqe2HGu4F2pvzkSAS2yWC5ueZ7EVu/view?usp=sharing"
            target="_blank"
            className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1BaVnhp8GD4ZTh5IgWAMI2jL4l5GaoLAG/view?usp=sharing"
            className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-110"
          aria-expanded={menuOpen}
          aria-controls="navigation-menu"
          aria-label="Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Dropdown Menu */}
        <div
          id="navigation-menu"
          className={`absolute top-16 right-6 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-2 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col w-40">
            <Link
              href="/"
              className="flex items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-colors group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-sm font-medium text-orange-300 group-hover:text-orange-300 transition-colors">
                1.
              </span>
              <Home className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
              <span className="group-hover:text-orange-300 transition-colors">Home</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-colors group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-sm font-medium text-orange-300 group-hover:text-orange-300 transition-colors">
                2.
              </span>
              <User className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
              <span className="group-hover:text-orange-300 transition-colors">About</span>
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-colors group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-sm font-medium text-orange-300 group-hover:text-orange-300 transition-colors">
                3.
              </span>
              <Briefcase className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
              <span className="group-hover:text-orange-300 transition-colors">Projects</span>
            </Link>
            <Link
              href="/#connect"
              className="flex items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-colors group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-sm font-medium text-orange-300 group-hover:text-orange-300 transition-colors">
                4.
              </span>
              <Phone className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
              <span className="group-hover:text-orange-300 transition-colors">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
