"use client"

import React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import thumb1 from "../assets/images/my-designs/adj/careerShift-thumb-2.png"
import thumb3 from "../assets/images/my-designs/adj/movie-watchlist-thumb.png"
import thumb2 from "../assets/images/my-designs/adj/multi-step-form.png"
import thumb4 from "../assets/images/my-designs/adj/quizzical-final.png"

export default function Portfolio() {
  return (
    <>
      <div className="container grid items-center py-6">
        <Tabs defaultValue="design" className="mx-auto w-full ">
          <TabsList className="mx-auto grid max-w-[600px] grid-cols-3 ">
            <TabsTrigger value="design">
              <span className="font-bold">Designs</span>
            </TabsTrigger>
            <TabsTrigger value="article">
              {" "}
              <span className="font-bold">Articles</span>
            </TabsTrigger>
            <TabsTrigger value="tutorial">
              {" "}
              <span className="font-bold">Tutorials</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="design" className="mt-8 grid">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="border-none bg-[#181f2c] pt-6">
                <CardContent>
                  <Image
                    className="mx-auto "
                    src={thumb1}
                    width={500}
                    alt="thumbnail 1"
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col items-start gap-2 lg:px-2">
                    <h1 className="text-lg font-semibold leading-tight tracking-tighter md:text-lg">
                      CareerShiftng
                    </h1>
                    <p className=" text-md text-muted-foreground">
                      Project done for a Resume and Career Consulting agency, using <span className="rounded-md  text-sm text-white ">NextJs</span> and <span className="rounded-md  text-sm text-white ">tailwindcss</span> showcasing the use of a minimal and responsive design approach.
                      </p>
                  </div>
                </CardFooter>
              </Card>

              <Card className="border-none bg-[#181f2c] pt-6">
                <CardContent>
                  <Image
                    className="mx-auto "
                    src={thumb2}
                    width={500}
                    alt="thumbnail 2"
                  />
                </CardContent>
                <CardFooter>
                <div className="flex flex-col items-start gap-2 lg:px-2">
                    <h1 className="text-lg font-semibold leading-tight tracking-tighter md:text-lg">
                      Multi-Step Form
                    </h1>
                    <p className=" text-md text-muted-foreground">
                      Project done for a Resume and Career Consulting agency, using <span className="rounded-md  text-sm text-white ">NextJs</span> and <span className="rounded-md  text-sm text-white ">tailwindcss</span> showcasing the use of a minimal and responsive design approach.
                      </p>
                  </div>
                </CardFooter>
              </Card>

              <Card className="border-none bg-[#181f2c] pt-6">
                <CardContent>
                  <Image
                    className="mx-auto "
                    src={thumb3}
                    width={500}
                    alt="thumbnail 3"
                  />
                </CardContent>
                <CardFooter>
                <div className="flex flex-col items-start gap-2 lg:px-2">
                    <h1 className="text-lg font-semibold leading-tight tracking-tighter md:text-lg">
                      Movie Watchlist
                    </h1>
                    <p className=" text-md text-muted-foreground">
                      Project done for a Resume and Career Consulting agency, using <span className="rounded-md  text-sm text-white ">NextJs</span> and <span className="rounded-md  text-sm text-white ">tailwindcss</span> showcasing the use of a minimal and responsive design approach.
                      </p>
                  </div>
                </CardFooter>
              </Card>

              <Card className="border-none bg-[#181f2c] pt-6">
                <CardContent>
                  <Image
                    className="mx-auto "
                    src={thumb4}
                    width={500}
                    alt="thumbnail 4"
                  />
                </CardContent>
                <CardFooter>
                <div className="flex flex-col items-start gap-2 lg:px-2">
                    <h1 className="text-lg font-semibold leading-tight tracking-tighter md:text-lg">
                      Quizzical
                    </h1>
                    <p className=" text-md text-muted-foreground">
                      Project done for a Resume and Career Consulting agency, using <span className="rounded-md  text-sm text-white ">NextJs</span> and <span className="rounded-md  text-sm text-white ">tailwindcss</span> showcasing the use of a minimal and responsive design approach.
                      </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="article">Change your password here.</TabsContent>
          <TabsContent value="tutorial">
            Visit my youtube for amazing contents
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
