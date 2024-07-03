import Button from "@/components/Button";
import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";
import { Suspense } from "react";

export default function Home({
    searchParams,
}: {
    searchParams: { value: string };
}) {
    const suspenseKey = JSON.stringify(searchParams);

    return (
        <main className="space-y-4">
            <h1 className="text-lg text-red-500 font-semibold">HOME</h1>

            <div className="space-y-2">
                <Suspense
                    fallback={
                        <p className="bg-pink-300 text-black">Loading...</p>
                    }
                >
                    <ComponentA />
                </Suspense>
                <Suspense
                    fallback={
                        <p className="bg-blue-500 text-white">Loading...</p>
                    }
                    key={suspenseKey}
                >
                    <ComponentB searchParams={searchParams} />
                </Suspense>
            </div>

            <Button />
        </main>
    );
}
