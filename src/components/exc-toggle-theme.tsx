"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ExcModeToggleProps {

}

const ExcModeToggle: React.FunctionComponent<ExcModeToggleProps> = () => {
  const { theme, setTheme } = useTheme();
  const capitalizedTheme = `${theme?.split("")[0].toUpperCase()}${theme?.slice(1, theme?.length)}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button className="relative z-[60] cursor-default bg-white border-[1px] rounded px-16 py-2 hover:bg-white dark:bg-black focus-visible:ring-0 focus-visible:ring-offset-0" variant={`secondary`} size="icon">
          <Sun className="absolute left-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute left-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="">{capitalizedTheme}</span>
          <svg className={`absolute right-1 dark:fill-white`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-black w-40 relative z-[60]" align="end">
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

export default ExcModeToggle;