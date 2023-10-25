import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import About from "@/components/about"

import darkMac from "../assets/images/man-house2.jpg"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"

export default function IndexPage() {
  return (
    <section className="w-full">
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {/* Hero Section */}
        <div className="grid py-4 lg:grid-cols-12 lg:py-8">
          <div className="mb-12 self-center lg:col-span-7 ">
            <div className="mb-6 flex max-w-[980px] flex-col items-start gap-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                I Design and Write <br className="hidden sm:inline" />
                about Web Technologies.
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                Accessible and customizable components that you can copy and
                paste into your apps. Free. Open Source. And Next.js 13 Ready.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.docs}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Get in touch
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={buttonVariants({ variant: "outline" })}
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Right Hero Section */}
          <div className="lg:col-span-5 lg:ml-auto">
            <Image
              className="rounded-lg"
              src={darkMac}
              width={400}
              alt="Ify profile"
            />
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="border-t bg-[#10151f]">
        <About />
      </div>

      {/* Portfolio section */}
      <div className="bg-[#10151f] pb-14">
        <Portfolio />
      </div>

      {/* Contact Section */}
      <div>
        <Contact />
      </div>
    </section>
  )
}
