import React from "react";

async function ComponentA() {
    const data = await new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("COMPONENT A");
        }, 5000);
    }).then(() => "COMPONENT A");

    return (
        <div>
            <p className="text-pink-300 font-semibold">{data}</p>
        </div>
    );
}

export default ComponentA;
