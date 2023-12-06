import SkeletonCard from "@/components/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Repos{
    name: string,
    description: string,
    id: string,
}

async function getRepos(): Promise<Repos[]> {
    const res = await fetch("https://api.github.com/users/yassine-web-dev/repos");

    return res.json();
}

export default async function Loading() {
    const repos = await getRepos();

    return (
        <main className="container">
            <div className="flex justify-end mt-20 mb-[30px]">
                <div className="flex w-[400px]">
                    <Skeleton className="mt-[4px] mr-4 w-full h-8" />
                </div>
                <div>
                    <Skeleton className="w-20 mt-[4px] h-8 rounded" />
                </div>
            </div>
            <div className="flex justify-center">
                <ScrollArea className="h-[440px] p-4">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-7">
                        {
                            repos.slice(0, 6).map(repo => (
                                <SkeletonCard key={repo.id} />
                            ))
                        }
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <div className="flex justify-center xl:justify-end mt-5">
                <ul className="flex gap-2">
                    <li>
                        <Skeleton className="w-12 h-10 rounded-none"/>
                    </li>
                    <li>
                        <Skeleton className="w-10 h-10 rounded-none"/>
                    </li>
                    <li>
                        <Skeleton className="w-10 h-10 rounded-none"/>
                    </li>
                    <li>
                        <Skeleton className="w-10 h-10 rounded-none"/>
                    </li>
                    <li>
                        <Skeleton className="w-10 h-10 rounded-none"/>
                    </li>
                    <li>
                        <Skeleton className="w-12 h-10 rounded-none"/>
                    </li>
                </ul>
            </div>
        </main>
    )
}