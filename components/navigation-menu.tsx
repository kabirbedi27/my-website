"use client"

import Link from "next/link"
import { Home, User, Briefcase, Mail, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function NavigationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-110"
          aria-label="Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-md border border-white/20 text-white">
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer group">
          <Link href="/" className="flex items-center gap-2 w-full">
            <Home className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
            <span className="group-hover:text-orange-300 transition-colors">Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer group">
          <Link href="/about" className="flex items-center gap-2 w-full">
            <User className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
            <span className="group-hover:text-orange-300 transition-colors">About</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer group">
          <Link href="/projects" className="flex items-center gap-2 w-full">
            <Briefcase className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
            <span className="group-hover:text-orange-300 transition-colors">Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer group">
          <Link href="/contact" className="flex items-center gap-2 w-full">
            <Mail className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
            <span className="group-hover:text-orange-300 transition-colors">Contact</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
