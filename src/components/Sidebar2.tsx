import Link from "next/link";
import { Contact2  } from "lucide-react";

interface SidebarProps {

}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {

    return (
        <main className="flex gap-4 border-2 border-transparent pt-10">
            <Link href={`/contact`}>
                <div className="contact mb-4 border-2 border-spgray rounded-full p-1">
                        <Contact2 className="dark:text-white" />
                </div>
            </Link>
            <Link className="!cursor-default" href={`https://web.facebook.com/profile.php?id=61563833621826`} target="_blank">
                <div className="fb mb-4 border-2 border-spgray rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/></svg>
                </div>
            </Link>
            <Link className="!cursor-default" href={`https://www.instagram.com/yassine_web_dev?utm_source=qr`} target="_blank">
                <div className="ig mb-4 border-2 border-spgray rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
                </div>
            </Link>
            <Link className="!cursor-default" href={`https://www.linkedin.com/in/yassine-lemkhayer-007a69261/`} target="_blank">
                <div className="ln border-2 border-spgray rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                </div>
            </Link>
            {/* <Link href={`https://github.com/yassine-web-dev`} target="_blank">
                <div className="gb border-2 border-spgray p-1">
                    <Github />
                </div>
            </Link> */}
        </main>
    )
}

export default Sidebar;