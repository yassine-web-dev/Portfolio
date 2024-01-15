import Link from "next/link";
import ModeToggle from "./theme-toggle";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Github } from "lucide-react";

export default function Nav() {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const ulLinks = document.querySelectorAll(".basic-nav .links li span");
        const homeSpan = document.querySelector(".basic-nav .links li .hm");
        const projectsSpan = document.querySelector(".basic-nav .links li .pjs");
        const contactSpan = document.querySelector(".basic-nav .links li .cont");
        const bgIcon = document.querySelector(".basic-nav .links .bg-icon");
        const gbIcon = document.querySelector(".basic-nav .links .gb-icon");
        const url = `${pathname}?${searchParams}`;


        ulLinks.forEach(el => {
            function handleClick() {
                ulLinks.forEach(el => {
                    el.classList.remove("on");
                });
                el.classList.add("on");
            }

            el.addEventListener('click', handleClick);

            return () => {
                el.removeEventListener('click', handleClick);
            }
        });

        // Check if the current URL contains '/projects' and add the 'on' class
        if (url.match('/#projects') && homeSpan && projectsSpan && contactSpan) {
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

        const handleHover = () => {
            bgIcon?.classList.add('!bg-[#f3f7fa]')
            gbIcon?.classList.add('dark:!bg-black')
            gbIcon?.children[0]?.classList.add('dark:!fill-white')
            gbIcon?.children[0]?.classList.add('dark:!text-white')

            // console.log('you hovered')
        }
        const handleBlur = () => {
            bgIcon?.classList.remove('!bg-[#f3f7fa]')
            gbIcon?.classList.remove('dark:!bg-black')
            gbIcon?.children[0]?.classList.remove('dark:!fill-white')
            gbIcon?.children[0]?.classList.remove('dark:!text-white')
            // console.log('you blured')
        }
        const handleSecHover = () => {
            gbIcon?.classList.add('dark:!bg-black')
            gbIcon?.children[0]?.classList.add('dark:!fill-white')
            gbIcon?.children[0]?.classList.add('dark:!text-white')
            // console.log('you blured')
        }
        const handleSecBlur = () => {
            gbIcon?.classList.remove('dark:!bg-black')
            gbIcon?.children[0]?.classList.remove('dark:!fill-white')
            gbIcon?.children[0]?.classList.remove('dark:!text-white')
            // console.log('you blured')
        }

        gbIcon?.addEventListener('mouseover', handleHover)
        gbIcon?.addEventListener('mouseout', handleBlur)
        bgIcon?.addEventListener('mouseover', handleSecHover)
        bgIcon?.addEventListener('mouseout', handleSecBlur)
        
        return () => {
            gbIcon?.removeEventListener('mouseover', handleHover)
            gbIcon?.removeEventListener('mouseout', handleBlur)
            bgIcon?.removeEventListener('mouseover', handleSecHover)
            bgIcon?.removeEventListener('mouseout', handleSecBlur)
        }

    }, [pathname, searchParams]);

    return (
        <main className="basic-nav">
            <nav className="hidden md:block">
                <ul className="links flex gap-3 dark:text-spgray">
                    <li>
                        <Link href="/">
                            <span className="hm text-primary hover:text-primary/90">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects">
                            <span className="pjs text-primary hover:text-primary/90">Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="cont text-primary hover:text-primary/90">Contact</span>
                        </Link>
                    </li>
                    <div className="relative w-10">
                        <ModeToggle />
                    </div>
                    <Link href={`https://github.com/yassine-web-dev`} target='_blank'>
                        <div className="bg-icon absolute -right-3 hover:bg-[#f3f7fa] -top-[6px] w-10 h-10 rounded"></div>
                        <div className="gb-icon relative z-10 mt-[5px] rounded-full w-[17px] h-[17px] bg-black dark:bg-white">
                            <Github className="w-[15px] ml-[1px] pb-[5px] text-white dark:text-black fill-white dark:fill-black dark:hover:fill-white dark:hover:text-white" />
                        </div>
                    </Link>
                </ul>
            </nav>
        </main>
    )
}