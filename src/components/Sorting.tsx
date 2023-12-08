import { useEffect } from "react"

interface SortingProps {
    onValue: any,
    onChange: any,
}

export default function Sorting({ onValue, onChange }: SortingProps) {

    useEffect(() => {
        const btn = document.querySelector(".select-box .button")
        const menu = document.querySelector(".select-box .menu")
        const menuItems = document.querySelectorAll(".select-box .menu > div")


        const handleClick = () => {
            menu?.classList.toggle("hidden")
            btn?.classList.toggle("!cursor-default")
        }
        const handleBlur = (e: MouseEvent) => {
            const eventTarget = e.target as HTMLElement;
            if (!eventTarget.classList.contains("eligible")) {
                if (!menu?.classList.contains("hidden")) {
                    menu?.classList.add("hidden")
                    if (btn?.classList.contains("!cursor-default")) {
                        btn?.classList.remove("!cursor-default")
                    }
                }
            }
        }

        menuItems.forEach(el => {
            function handleClick() {
                menuItems.forEach(el => {
                    el.firstElementChild?.classList.add("invisible");
                });
                el.firstElementChild?.classList.remove("invisible");
                menu?.classList.add("hidden");
                btn?.classList.remove("!cursor-default");
            }

            el.addEventListener('click', handleClick);

            return () => {
                el.removeEventListener('click', handleClick);
            }
        });

        btn?.addEventListener('click', handleClick)
        document.body.addEventListener('click', handleBlur)

        return () => {
            btn?.removeEventListener('click', handleClick)
            document.body.removeEventListener('click', handleBlur)
        }
        
    }, [])

    return (
        <main>
            <div className="select-box eligible relative border-b-[1px] w-20 pl-3 pb-2">
                <div className="relative flex justify-end eligible">
                    <div className="button absolute left-0 top-0 w-full h-full cursor-pointer z-30 eligible">
                        {onValue}
                    </div>
                    <svg className={`eligible  dark:fill-white`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                </div>
                <div className="menu hidden eligible absolute left-0 top-[35px] bg-white dark:bg-black border-[1px] w-32 p-2 rounded z-10">
                    <div onClick={onChange} className="A-Z asc eligible flex items-center gap-2 rounded hover:text-black dark:hover:text-white hover:bg-[#f3f7fa] dark:hover:bg-slate-700 px-2 cursor-default">
                        <svg className='A-Z eligible fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                        <div className="A-Z eligible">A-Z</div>
                    </div>
                    <div onClick={onChange} className="Z-A dsc eligible flex items-center gap-2 rounded hover:text-black dark:hover:text-white hover:bg-[#f3f7fa] dark:hover:bg-slate-700 px-2 cursor-default">
                        <svg className="Z-A eligible invisible fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                        <div className='Z-A eligible'>Z-A</div>
                    </div>
                </div>
            </div>
        </main>
    )
}