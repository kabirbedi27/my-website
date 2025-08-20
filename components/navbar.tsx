import Link from "next/link"
import { Instagram, Linkedin, Camera, Plus } from "lucide-react"

export function Navbar() {
  return (
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
        <Link href="/" className="text-2xl font-bold tracking-tighter grid-logo">
          KABIR
        </Link>
        <Link href="#" aria-label="Add">
          <Plus className="w-6 h-6" />
        </Link>
      </div>
    </header>
  )
}
