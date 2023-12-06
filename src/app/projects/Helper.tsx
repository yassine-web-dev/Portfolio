import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Searchbar from "./Searchbar";




interface Repos{
    name: string,
    description: string,
    id: string,
}

async function getRepos(): Promise<Repos[]> {
    const res = await fetch("https://api.github.com/users/yassine-web-dev/repos", 
    {
        next: {
            revalidate: 86400,
        }
    }
    );

    return res.json();
}
  
export default async function Helper() {
    const repos = await getRepos();

    return (
        <main>
            <Searchbar repos={repos} /> {/* This searchbar is responasble of filtering Repos and return the filterd Repos */}
        </main>
    )
}