"use client"

import React from "react"
import Image from "next/image"

import thumb1 from "../assets/images/dev-lady.jpg"
import thumb2 from "../assets/images/dev-lady.jpg"
import thumb3 from "../assets/images/couch-man.jpg"
import thumb4 from "../assets/images/dev-man.jpg"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <>
      <div className="container grid items-center py-6">
        <Tabs defaultValue="design" className="mx-auto w-full ">
          <TabsList className="mx-auto grid max-w-[600px] grid-cols-3 ">
            <TabsTrigger value="design">
              <span className="font-bold">Designs</span>
            </TabsTrigger>
            <TabsTrigger value="article"> <span className="font-bold">Articles</span></TabsTrigger>
            <TabsTrigger value="tutorial"> <span className="font-bold">Tutorials</span></TabsTrigger>
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
