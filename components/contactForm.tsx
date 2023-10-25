"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {AiOutlineSwapRight} from "react-icons/ai"



const contactFormSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(10),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const useContactForm = () => {
    const form = useForm<ContactFormValues>({
      resolver: zodResolver(contactFormSchema),
      mode: "onChange",
    })

    return form
  }

  const form = useContactForm()

  function onSubmit(data: ContactFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 lg:space-y-3"
      >
      
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="let me assist you"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button variant={"secondary"} type="submit">
            <div className="flex items-center">
            <span>Talk to me</span> 
            <span><AiOutlineSwapRight className="ml-2 h-4 w-4" /></span>
            </div>
        </Button>
      </form>
    </Form>
  )
}
