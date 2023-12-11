import ContactForm from "@/app/contact/ContactForm";
import Sidebar2 from "./Sidebar2";

export default function Footer() {
    return (
        <main className="pt-52 mb-96">
            <hr />
            <div className="container">
                <div className="grid sm:flex sm:justify-between">
                    <div className="copyright pt-10 text-sm">
                        <span>All Right Reserved &copy; 2023</span>
                    </div>
                    <Sidebar2 />
                    {/* <div id="contact-form" className="scroll-mt-24 bg-spgray border rounded w-[520px] mt-10 px-20 py-10">
                        <div className="text-center pb-8 text-lg text-white">
                            <h1>Wanna say hello?</h1>
                        </div>
                        <hr className="pb-8"/>
                        <ContactForm />
                    </div> */}
                </div>
            </div>
        </main>
    )
}