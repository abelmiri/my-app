import type { Metadata } from "next"

import "./globals.css"

import MuiThemeProvider from "./MuiThemeProvider"
import Header from "@/components/Header/Header"
import { ReactNode } from "react"
import AuthProvider from "@/context/auth/authProvider"

export const metadata: Metadata = {
  title: "اپلیکیشن متریال من",
  description: "Next.js + TypeScript + MUI design system",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <MuiThemeProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
