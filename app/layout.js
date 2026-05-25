import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lethabo Anyanwu | AI & Automation Developer",
  description:
    "Portfolio of Lethabo Anyanwu — AI & Automation Developer specialising in UiPath RPA, Power Platform, and intelligent business automation.",
  keywords: ["RPA", "UiPath", "Automation Developer", "Power Platform", "AI", "South Africa"],
  authors: [{ name: "Lethabo Anyanwu" }],
  openGraph: {
    title: "Lethabo Anyanwu | AI & Automation Developer",
    description: "Delivering intelligent automation solutions for enterprise environments.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
