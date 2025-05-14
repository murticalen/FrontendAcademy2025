"use client"

import { useEffect } from "react"

import { useState } from "react"
import { createPortal } from "react-dom"

export const ToastPortal = () => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalRoot(document.getElementById("portal-root")!)
  }, [])

  return (
    <div>
      {portalRoot
        ? createPortal(
            <p style={{ position: "fixed", bottom: 0, right: 0 }}>Hello</p>,
            portalRoot
          )
        : null}
    </div>
  )
}
