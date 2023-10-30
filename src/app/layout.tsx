import "./globals.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AppearanceProvider } from "@/hooks/useAppearance";

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Math Rush",
  description: "Solve 20 math problems as fast as you can (new problems daily)",
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppearanceProvider>
          {children}
        </AppearanceProvider>
      </body>
    </html>
  )
}

export default RootLayout;