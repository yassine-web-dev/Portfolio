import { useEffect } from "react";
import { Button } from "./ui/button";

interface PaginationProps {
    items: number,
    currentPage: number,
    pageSize: number,
    onPageChange: any
}

export default function Pagination({items, currentPage, pageSize, onPageChange} : PaginationProps) {
    const pagesCount = Math.ceil(items / pageSize);
    
    useEffect(() => {
        const ulLinks = document.querySelectorAll(".pages li .bn");
        const activeBtn = document.querySelector(".pages li .bn:nth-child(1)");
        activeBtn?.classList.add("active")

        ulLinks.forEach(el => {
            function handleClick() {
                ulLinks.forEach(el => {
                    el.classList.remove("active");
                });
                el.classList.add("active");
            }

            el.addEventListener('click', handleClick);

            return () => {
                el.removeEventListener('click', handleClick);
            }
        });
        
        return () => {
            activeBtn?.classList.remove("active")
        }
        
    }, [])

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage-1)
        }
    }
    const handleNext = () => {
        if (currentPage < pagesCount) {
            onPageChange(currentPage+1)
        }
    }
    
    return (
        <main className="flex justify-center xl:justify-end mt-5">
            <ul className="pages flex gap-2">
                <div className="prev">
                    <Button className={`rounded-none cursor-default bg-[#eee] hover:bg-[#eee] dark:bg-slate-700 dark:hover:bg-slate-700 border-[1px]`} onClick={handlePrev}>
                        <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z"/></svg>
                    </Button>
                </div>
                {
                    pages.map(page => (
                        <li key={page}>
                            <a onClick={() => onPageChange(page)}>
                                <Button className="bn bg-white dark:bg-black text-black dark:text-white hover:!bg-[#eee] dark:hover:!bg-slate-700 dark:hover:text-white border-[1px] rounded-none">
                                    {page}
                                </Button>
                            </a>
                        </li>
                    ))
                }
                <div className="next">
                    <Button className={`rounded-none cursor-default bg-[#eee] hover:bg-[#eee] dark:bg-slate-700 dark:hover:bg-slate-700 border-[1px]`} onClick={handleNext}>
                        <svg className={`fill-black dark:fill-white`} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"/></svg>
                    </Button>
                </div>
            </ul>
        </main>
    )
}