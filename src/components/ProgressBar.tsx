"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

import { usePathname, useSearchParams } from 'next/navigation'

export function ProgressDemo() {
    const [progress, setProgress] = React.useState(5)
    const pathname = usePathname()
    const searchParams = useSearchParams()

    React.useEffect(() => {
        const prgss = document.querySelector(".progress")
        
        const timer1 = setTimeout(() => setProgress(5), 100)
        const timer2 = setTimeout(() => setProgress(70), 1000)
        const timer3 = setTimeout(() => setProgress(100), 2000)
        const timer4 = setTimeout(() => prgss?.classList.add("hidden"), 2200)
        const timer5 = setTimeout(() => setProgress(5), 2200)
        
        return () => {
            prgss?.classList.remove("hidden")
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
            clearTimeout(timer4)
            clearTimeout(timer5)
        }
    }, [pathname, searchParams])

    return <Progress value={progress} className="progress w-full h-[2px] absolute left-0 top-0 z-50" />
}