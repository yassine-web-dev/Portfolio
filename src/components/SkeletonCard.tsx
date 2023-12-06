import { Skeleton } from "@/components/ui/skeleton"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function SkeletonCard() {
    return (
        <main>
            <Card className="w-96 dark:bg-black">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="w-72 h-[25px] rounded" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="w-82 h-[30px] rounded" />
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Skeleton className="w-16 h-9 rounded" />
                </CardFooter>
            </Card>
        </main>
    )
}