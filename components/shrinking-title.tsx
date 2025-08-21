"use client"

import { useState, useEffect } from "react"

export function ShrinkingTitle() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = 100
      const maxScroll = 300

      const progress = Math.min(Math.max(scrollY - threshold, 0) / (maxScroll - threshold), 1)
      setScrollProgress(progress)
      setScrolled(scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const fontSize = isMobile ? 3 - scrollProgress * 2 : 6 - scrollProgress * 4

  return (
    <>
      <div className="relative flex justify-center items-center">
        <h1
          className="font-bold tracking-tighter relative z-20 transition-all duration-300 hover:scale-105 font-space-mono"
          style={{
            fontSize: `${fontSize}rem`,
            position: "fixed",
            top: scrollProgress === 0 ? (isMobile ? "15vh" : "20vh") : `${8 + (1 - scrollProgress) * 30}px`,
            left: "50%",
            transform: `translateX(-50%) scale(${1 - scrollProgress * 0.2})`,
            opacity: 1,
            transition: "top 0.3s ease-out, font-size 0.3s ease-out, transform 0.3s ease-out",
            whiteSpace: "nowrap",
          }}
        >
          KABIR BEDI
        </h1>
      </div>
    </>
  )
}