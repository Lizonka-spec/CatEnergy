import { SkeletonCard } from "@/shared";

export function SkeletonList({ count = 7 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 mw:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
            {[...Array(count)].map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
}
