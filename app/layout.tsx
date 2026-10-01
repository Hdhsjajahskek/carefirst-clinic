import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CareFirst Clinic — Trusted Healthcare in Aligarh",
  description:
    "Modern medical care with experienced doctors. Book your appointment online in 30 seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 border-b border-[#1e252b] bg-[#07090b]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0ea5a0] to-[#38bdf8] font-bold text-white">
                +
              </div>
              <div className="leading-none">
                <p className="text-lg font-bold tracking-tight text-white">
                  CAREFIRST
                </p>
                <p className="text-[10px] tracking-widest text-[#0ea5a0]">
                  CLINIC
                </p>
              </div>
            </Link>
            <div className="hidden gap-8 text-sm md:flex">
              <a
                href="#services"
                className="text-[#7e8a93] transition hover:text-white"
              >
                Services
              </a>
              <a
                href="#tools"
                className="text-[#7e8a93] transition hover:text-white"
              >
                Health Tools
              </a>
              <a
                href="#doctors"
                className="text-[#7e8a93] transition hover:text-white"
              >
                Doctors
              </a>
              <a
                href="#book"
                className="text-[#7e8a93] transition hover:text-white"
              >
                Book
              </a>
            </div>
            <a
              href="#book"
              className="rounded-full bg-[#0ea5a0] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#14b8b2]"
            >
              BOOK APPOINTMENT
            </a>
          </div>
          <div className="mx-auto max-w-7xl border-t border-[#1e252b] px-6 py-3">
            <div className="flex gap-6 overflow-x-auto text-sm">
              <a
                href="#services"
                className="whitespace-nowrap text-[#7e8a93] transition hover:text-white"
              >
                Services
              </a>
              <a
                href="#bmi"
                className="whitespace-nowrap text-[#7e8a93] transition hover:text-white"
              >
                BMI
              </a>
              <a
                href="#weight"
                className="whitespace-nowrap text-[#7e8a93] transition hover:text-white"
              >
                Ideal Weight
              </a>
              <a
                href="#pregnancy"
                className="whitespace-nowrap text-[#7e8a93] transition hover:text-white"
              >
                Pregnancy
              </a>
              <a
                href="#bp"
                className="whitespace-nowrap text-[#7e8a93] transition hover:text-white"
              >
                BP Check
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer className="mt-24 border-t border-[#1e252b] bg-[#07090b] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0ea5a0] to-[#38bdf8] text-sm font-bold text-white">
                  +
                </div>
                <p className="font-bold tracking-tight text-white">
                  CAREFIRST CLINIC
                </p>
              </div>
              <p className="text-sm text-[#7e8a93]">
                © 2026 CareFirst Clinic. All rights reserved.
              </p>
              <p className="font-mono text-xs text-[#7e8a93]">
                Demo built by{" "}
                <a
                  href="https://forge-sage-six.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6b1a] transition hover:underline"
                >
                  FORGE
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}