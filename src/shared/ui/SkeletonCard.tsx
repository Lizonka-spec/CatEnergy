import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
    return (
        <div className="w-full  bg-gray-100/50 p-3 animate-pulse">
            <div className="flex py-4 items-center gap-10 justify-center mb-3 mw:flex-col mw:gap-5">
                <div className="size-20 mw:size-25 lg:size-35">
                    <Skeleton className="w-full h-full rounded-md bg-gray-200" />
                </div>

                <div className="w-[50%] mw:w-full mw:p-3 space-y-3">
                    <Skeleton className="h-6 w-3/4 mb-4 mw:mx-auto bg-gray-200" />

                    <div className="space-y-2">
                        <div className="flex justify-between gap-4">
                            <Skeleton className="h-3 w-1/3 bg-gray-200" />
                            <Skeleton className="h-3 w-1/4 bg-gray-200" />
                        </div>
                        <div className="flex justify-between gap-4">
                            <Skeleton className="h-3 w-1/3 bg-gray-200" />
                            <Skeleton className="h-3 w-1/4 bg-gray-200" />
                        </div>
                        <div className="flex justify-between gap-4">
                            <Skeleton className="h-3 w-1/3 bg-gray-200" />
                            <Skeleton className="h-3 w-1/4 bg-gray-200" />
                        </div>
                    </div>
                </div>
            </div>

            <Skeleton className="h-10 w-full bg-gray-200" />
        </div>
    );
};
