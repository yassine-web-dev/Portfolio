"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react";

import { Button } from "@/components/ui/button"
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
 
const formSchema = z.object({
    fullname: z.string()
        .min(1, {
            message: "Fullname is Required!",
        }),

    email: z.string()
        .min(1, {
            message: "Email is Required!",
        }).email('Invalid Email!'),

    message: z.string()
        .min(4, {
            message: "Message must be at least 4 characters.",
        })
        .max(100, {
            message: "Message must be less than 100 characters.",
        })
})

export default function ContactForm() {
    const [submit, setSubmit] = useState('submit')

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        fullname: "",
        email: "",
        message: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSubmit('submitting');

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            console.log("Message sent successfully");
            setSubmit('submitted');
            // reset the form
            form.reset({
                fullname: '',
                email: '',
                message: '',
            })
        }
        if (!response.ok) {
            console.log("Error sending message");
            setSubmit('failed');
        }
    }
    const handleFocus = () => {
        if (submit == 'submitted' || submit == 'failed') {
            setSubmit('submit')
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-3">
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black dark:text-white">Fullname</FormLabel>
                            <FormControl>
                                <Input onFocus={handleFocus} placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black dark:text-white">Email</FormLabel>
                            <FormControl>
                                <Input onFocus={handleFocus} placeholder="mail@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black dark:text-white">Message</FormLabel>
                            <FormControl>
                                <Textarea onFocus={handleFocus} rows={5} className="resize-none" placeholder="Type something" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {
                    submit == 'submit' && <Button type="submit">
                            Submit
                    </Button>
                }
                {
                    submit == 'submitting' && <Button disabled className="disabled:opacity-90" type="submit">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-5 h-5 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="pl-2">Submitting...</span>
                            </div>
                    </Button>
                }
                {
                    submit == 'submitted' && <Button disabled className="disabled:opacity-100" type="submit">
                            Submitted
                    </Button>
                }
                {
                    submit == 'failed' && <Button type="submit">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-5 h-5 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="pl-2">Retry</span>
                            </div>
                    </Button>
                }
            </form>
        </Form>
    )
}