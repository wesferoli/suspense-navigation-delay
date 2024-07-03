import React from "react";

async function ComponentB({
    searchParams,
}: {
    searchParams: { value: string };
}) {
    const data = await new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("COMPONENT B");
        }, 2000);
    }).then(() => "COMPONENT B");

    console.log(JSON.stringify(searchParams));

    return (
        <div>
            <p className="text-blue-500 font-semibold">{data}</p>
        </div>
    );
}

export default ComponentB;
