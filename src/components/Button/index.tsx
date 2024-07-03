"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Button() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/?value=myValue", { scroll: false });
    };

    return (
        <button
            onClick={handleClick}
            className="p-2 rounded-md bg-white text-black"
        >
            Set Value
        </button>
    );
}

export default Button;
