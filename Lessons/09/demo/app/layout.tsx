"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SWRConfig } from "swr"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// @ts-expect-error Default fetcher from useSWR docs
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        style={{ minHeight: "100vh" }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
        <div id="portal-root" />
      </body>
    </html>
  )
}
