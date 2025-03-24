import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "PORTEFOLIO",
//   description: "Portefolio BTS SIO de Arthur Briot",
//   viewport: "width=device-width, initial-scale=1",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
      <main className="min-h-screen">
        {children}
      </main>
    </body>
  </html>
  );
}
