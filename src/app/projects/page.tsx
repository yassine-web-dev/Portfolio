import Helper from "@/app/projects/Helper";

interface pageProps {

}

const page: React.FunctionComponent<pageProps> = () => {

    return (

        <main className="container">
            <Helper /> { /* This Helper component has The searchbar inside it and it fetches data then give it as a prop to the searchbar component to work with it */ }
        </main>
    )
}

export default page;