"use client"

import { useState, useEffect } from "react"
import { NavigationMenu } from "./navigation-menu"

export function ShrinkingTitle() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = 100
      const maxScroll = 300

      // Calculate scroll progress between 0 and 1
      const progress = Math.min(Math.max(scrollY - threshold, 0) / (maxScroll - threshold), 1)
      setScrollProgress(progress)

      // Set scrolled state for header background
      setScrolled(scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate styles based on scroll progress
  const fontSize = 8 - scrollProgress * 6 // rem
  const translateY = scrollProgress * -50 // px

  return (
    <>
      {/* Main title that shrinks and moves to header */}
      <div className="relative flex justify-center items-center">
        <h1
          className="font-bold tracking-tighter grid-logo relative z-20 transition-all duration-300 hover:scale-105"
          style={{
            fontSize: `${fontSize}rem`,
            position: "fixed",
            top: scrollProgress === 0 ? "30vh" : `${8 + (1 - scrollProgress) * 30}px`,
            left: "50%",
            transform: `translateX(-50%) scale(${1 - scrollProgress * 0.2})`,
            opacity: 1,
            transition: "top 0.3s ease-out, font-size 0.3s ease-out, transform 0.3s ease-out",
          }}
        >
          KABIR BEDI
        </h1>
      </div>

      {/* Navigation menu that appears when scrolled */}
      <div
        className="fixed top-0 right-4 z-50 transition-opacity duration-300 py-4"
        style={{ opacity: scrollProgress }}
      >
        <NavigationMenu />
      </div>
    </>
  )
}
