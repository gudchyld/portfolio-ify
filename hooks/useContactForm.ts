import { useForm } from "react-hook-form"

import { contactFormSchema } from "../schemas/contactFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  })

  return form
}
