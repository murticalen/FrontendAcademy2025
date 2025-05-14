"use client"

import { useEffect, useRef } from "react"

export const ElementRef = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect())
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ backgroundColor: "red", width: "100px", height: "100px" }}
    >
      Hello
    </div>
  )
}
