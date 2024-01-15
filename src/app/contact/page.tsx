import ContactForm from "@/app/contact/ContactForm";

interface contactFormProps {

}

const contactForm: React.FunctionComponent<contactFormProps> = () => {

    return (

        <main className="pt-10">
            <div className="container">
                <div className="flex justify-center">
                    <div className="form w-[500px]">
                        <div className="text-center pb-8 text-lg text-white">
                            {/* <h1>Wanna say hello?</h1> */}
                            <div className="contact-icon flex justify-center">
                                <svg className={`lucide lucide-circle-user-roun stroke-primary`} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                            </div>
                        </div>
                        <hr className="pb-8"/>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default contactForm;