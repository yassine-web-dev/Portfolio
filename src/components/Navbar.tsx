"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Components
import ExcModeToggle from "./exc-toggle-theme";
import Nav from "./Nav";
import { Github } from "lucide-react";
import { ProgressDemo } from "./ProgressBar";
  

interface NavbarProps {

}

const Navbar: React.FunctionComponent<NavbarProps> = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const close = document.querySelector(".smnav .close");
        const overlay = document.querySelector(".overlay");
        const nav = document.querySelector(".navbar");
        const smnav = document.querySelector(".smnav");
        const ulLinks = document.querySelectorAll(".smnav .links li span");
        const homeSpan = document.querySelector(".smnav .links li .hm");
        const projectsSpan = document.querySelector(".smnav .links li .pjs");
        const contactSpan = document.querySelector(".smnav .links li .cont");
        const url = `${pathname}?${searchParams}`;

        ulLinks.forEach(el => {
            function handleClick() {
                ulLinks.forEach(el => {
                    el.classList.remove("on");
                    overlay?.classList.remove("invisible")
                });
                el.classList.add("on");
                overlay?.classList.add("invisible")
                smnav?.classList.add("hidden")
            }

            el.addEventListener('click', handleClick);

            return () => {
                el.removeEventListener('click', handleClick);
            }
        });

        // Check if the current URL contains '/' and add the 'on' class
        if (url.match('/') && homeSpan && projectsSpan && contactSpan) {
            projectsSpan.classList.remove("on");
            contactSpan.classList.remove("on");
            homeSpan.classList.add("on");
        }
        // Check if the current URL contains '/projects' and add the 'on' class
        if (url.match('/projects') && homeSpan && projectsSpan && contactSpan) {
            homeSpan.classList.remove("on");
            contactSpan.classList.remove("on");
            projectsSpan.classList.add("on");
        }
        // Check if the current URL contains '/contact' and add the 'on' class
        if (url.match('/contact') && homeSpan && projectsSpan && contactSpan) {
            homeSpan.classList.remove("on");
            projectsSpan.classList.remove("on");
            contactSpan.classList.add("on");
        }

        const handleClick = () => {
            smnav?.classList.add("hidden")
            overlay?.classList.add("invisible")
        }
        const handleSecClick = () => {
            smnav?.classList.toggle("hidden")
            overlay?.classList.remove("invisible")
        }
        const handleBlur = (e: MouseEvent) => {
            const eventTarget = e.target as HTMLElement;
            if (eventTarget.classList.contains("overlay")) {
                if (!smnav?.classList.contains("hidden")) {
                    smnav?.classList.add("hidden")
                    if (!overlay?.classList.contains("invisible")) {
                        overlay?.classList.add("invisible")
                    }
                }
            }
        }

        close?.addEventListener('click', handleClick)
        nav?.children[0]?.addEventListener('click', handleSecClick)
        document.body.addEventListener('click', handleBlur)
        
        return () => {
            close?.removeEventListener('click', handleClick)
            nav?.children[0]?.removeEventListener('click', handleSecClick)
            document.body.removeEventListener('click', handleBlur)
        }
    }, [pathname, searchParams]);

    return (
        <>
        <nav className="smnav sticky hidden bg-white dark:bg-black ml-auto mr-[15px] top-[15px] bottom-0 md:hidden border-[1px] rounded w-[350px] h-80 px-10 pt-10 z-[60]">
            <div className="close absolute right-4 top-4 hover:bg-red-600 hover:rounded">
                <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
            </div>
            <ul className="links dark:text-spgray pb-6">
                <li className="pb-4">
                    <Link href="/">
                        <span className="hm text-spgray hover:text-black dark:hover:text-white on">Home</span>
                    </Link>
                </li>
                <li className="pb-4">
                    <Link href="/projects">
                        <span className="pjs text-spgray hover:text-black dark:hover:text-white">Projects</span>
                    </Link>
                </li>
                <li className="">
                    <Link href="/contact">
                        <span className="cont text-spgray hover:text-black dark:hover:text-white">Contact</span>
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="github py-4 pr-44">   
                <Link href={`https://github.com/yassine-web-dev`} target='_blank'>
                    <div className="flex gap-2">
                        <Github className="w-[18px] fill-black dark:fill-white dark:text-white" />
                        <span>Github</span>
                    </div>
                </Link>
            </div>
            <hr />
            <div className="theme flex justify-between items-center pt-8">
                <span className="">Switch Theme</span>
                <ExcModeToggle />
            </div>
        </nav>
        <div className="overlay invisible fixed top-0 left-0 w-full h-full bg-white/[.8] dark:bg-black/[.8] backdrop-blur-[10px] z-50 md:invisible"></div>
        <div className="sticky top-0 left-0 right-0 bottom-0 z-40 w-full h-full bg-white/[.8] dark:bg-black/[.8] backdrop-blur-[10px]">
            <ProgressDemo />
            <main>
                <div className="container flex justify-between items-center py-5">
                    <div className="logo">
                        <Link href="/" >
                            <h1 className="dark:text-white">&lt;Yassine /&gt;</h1>
                        </Link>
                    </div>
                    <div className="navbar relative">
                        <svg className="cursor-pointer hover:bg-[#eee] hover:rounded dark:hover:fill-black md:hidden dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="-5 -7 24 24"><path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"/></svg>
                        <Nav />
                    </div>
                </div>
            </main>
            <hr />
        </div>
        </>
    )
}

export default Navbar;