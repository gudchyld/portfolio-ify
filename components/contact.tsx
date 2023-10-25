"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { MailIcon, MapPin, Smartphone } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import ContactForm from "./contactForm"

export default function Contact() {
  return (
    <div className="container grid items-center pb-8 pt-6 md:py-10">
      <div className="grid gap-6 py-4 lg:grid-cols-12 lg:space-x-10 lg:py-10">
        {/* left Item */}
        <div className="mb-6 self-center lg:col-span-6 lg:justify-self-end  ">
          {/* input contact details here */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>
                <Smartphone />
              </span>
              <p>+2347067327214</p>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <MailIcon />
              </span>
              <p>lenduking@gmail.com</p>
            </div>
            <div className="flex gap-4 ">
              <span>
                <MapPin />
              </span>
              <p>No 24 Coker Street, <span className="lg:block">Ogunsanya, Apapa Lagos</span></p>
            </div>
          </div>
        </div>
        {/* Right Item */}
        <div className="place-self-start lg:col-span-6 ">
          {/* form here */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
