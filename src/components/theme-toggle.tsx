"use client"

import * as React from "react"
import { useEffect } from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ModeToggleProps {

}

const ModeToggle: React.FunctionComponent<ModeToggleProps> = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const btn = document.querySelector('.btn-parent.btn');
    
    const handleHover = () => {
      btn?.children[1]?.classList.add('dark:!text-black')
      console.log('you hovered!')
    }
    const handleBlur = () => {
      btn?.children[1]?.classList.remove('dark:!text-black')
      console.log('you blured!')
    }

    btn?.addEventListener('mouseover', handleHover)
    btn?.addEventListener('mouseout', handleBlur);
    
    return () => {
      btn?.removeEventListener('mouseover', handleHover)
      btn?.removeEventListener('mouseout', handleBlur);
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="btn-parent" asChild>
          <Button className="btn h-10 bg-transparent hover:bg-[#f3f7fa] absolute right-0 -top-[6px] rounded dark:bg-black dark:hover:bg-white focus-visible:ring-0 focus-visible:ring-offset-0" variant={`secondary`} size="icon">
            <Sun className="h-[1.2rem] w-[60px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute dark:hover:text-black h-[1.2rem] w-[60px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-black" align="end">
        <DropdownMenuItem className="hover:!bg-[f3f7fa] dark:hover:!bg-slate-700" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-[f3f7fa] dark:hover:!bg-slate-700" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-[f3f7fa] dark:hover:!bg-slate-700" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle;