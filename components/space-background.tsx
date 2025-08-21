"use client"

import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make it taller to cover scrolling content
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    const stars: Star[] = []
    const numStars = window.innerWidth < 768 ? 200 : 400 // Fewer stars on mobile
    const nebulae: Nebula[] = []
    const numNebulae = window.innerWidth < 768 ? 3 : 5 // Fewer nebulae on mobile

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.9 + 0.3,
        twinkleSpeed: Math.random() * 0.03,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        twinkleAmount: 0,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.1,
      })
    }

    // Create nebulae
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        color: getRandomColor(),
        opacity: Math.random() * 0.1 + 0.05,
      })
    }

    function getRandomColor() {
      const colors = [
        { r: 65, g: 17, b: 95 }, // Purple
        { r: 16, g: 28, b: 95 }, // Deep blue
        { r: 95, g: 17, b: 36 }, // Deep red
        { r: 95, g: 55, b: 17 }, // Orange
        { r: 17, g: 95, b: 95 }, // Teal
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#050714")
      gradient.addColorStop(0.5, "#0a0a18")
      gradient.addColorStop(1, "#050714")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebulae
      for (const nebula of nebulae) {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)
        gradient.addColorStop(0, `rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, ${nebula.opacity})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw stars
for (const star of stars) {
  // Update twinkle
  star.twinkleAmount += star.twinkleSpeed * star.twinkleDirection
  if (Math.abs(star.twinkleAmount) > 0.5) {
    star.twinkleDirection *= -1
  }

  // Update position with movement
  star.x += star.speedX
  star.y += star.speedY
  
  // Wrap around edges
  if (star.x < 0) star.x = canvas.width
  if (star.x > canvas.width) star.x = 0
  if (star.y < 0) star.y = canvas.height
  if (star.y > canvas.height) star.y = 0

  const currentOpacity = star.opacity + star.twinkleAmount

  // Add a subtle glow effect for larger stars
  if (star.radius > 1.5) {
    ctx.shadowBlur = 15
    ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
  } else {
    ctx.shadowBlur = 0
  }

  ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
  ctx.beginPath()
  ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
  ctx.fill()
  
  // Reset shadow
  ctx.shadowBlur = 0
}

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinkleDirection: number
  twinkleAmount: number
  speedX: number
  speedY: number
}

interface Nebula {
  x: number
  y: number
  radius: number
  color: { r: number; g: number; b: number }
  opacity: number
}
