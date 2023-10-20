import React from "react"
import Image from "next/image"

import aboutImage from "../assets/images/dark-mac.jpg"

import css3 from "../assets/images/stacks-icon/css-3.png";
import html from "../assets/images/stacks-icon/html-5.png";
import figma from "../assets/images/stacks-icon/figma.png";
import git from "../assets/images/stacks-icon/git.png";
import js from "../assets/images/stacks-icon/js.png";
import nextjs from "../assets/images/stacks-icon/Next.js.png";
import react from "../assets/images/stacks-icon/reactjs.png";
import ts from "../assets/images/stacks-icon/typescript.png";


export default function About() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid py-4 lg:grid-cols-12 lg:py-10">
        {/* left Item */}
        <div className="mb-6 self-center lg:col-span-5 ">
          <Image
            className="rounded-lg"
            src={aboutImage}
            width={500}
            alt="About Ify"
          />
        </div>
        {/* Right Item */}
        <div className="ml-auto place-self-center lg:col-span-7 ">
          <div className="mb-6 flex max-w-[980px] flex-col items-start gap-2">
            {/* <h1 className="text-2xl font-semibold leading-tight tracking-tighter md:text-3xl">
              About Me
            </h1> */}
            <h1 className="text-xl font-light leading-tight tracking-tighter md:text-xl">
              Elendu Ifeanyi <br className="hidden sm:inline" />
              Writer | Web Developer
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              With experience spanning over 2 years in web development and
              technical writing, i've worked with notable brands and always put
              forward a rich customer experience and satisfaction at the core of
              my process. I love to use modern technologies that thrive on
              performance, security and reliability, and when it comes to front
              end development, you can be sure i've got you covered
            </p>
          </div>
          <div className="flex flex-wrap gap-4">{/* stacks here */}
          <Image src={html} width={40} alt="html icon" />
            <Image src={css3} width={40} alt="html icon" />
            <Image src={js} width={40} alt="html icon" />
            <Image src={ts} width={40} alt="html icon" />
            <Image src={react} width={40} alt="html icon" />
            <Image className="border" src={nextjs} width={40} alt="html icon" />
            <Image src={git} width={40} alt="html icon" />
            <Image src={figma} width={40} alt="html icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
