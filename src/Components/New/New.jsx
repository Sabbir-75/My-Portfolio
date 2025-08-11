'use client';

import React from "react";
export default function SpotlightCard() {
    return <>
        <style jsx>{`
  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0deg;
  }
  @keyframes border-spin {
    100% {
      --border-angle: 360deg;
    }
  }
  .animate-border {
    animation: border-spin 6s linear infinite;
  }
`}</style>
        <div className="w-full flex items-center justify-center p-4">
            { }
            <div
                className="w-full max-w-[422px] mx-auto rounded-2xl border border-transparent animate-border"
                style={{
                    background: `linear-gradient(45deg, #080b11, #1e293b 50%, #172033) padding-box,
                 conic-gradient(from var(--border-angle),
                   rgba(71,85,105,0.48) 80%, 
                   #ff014f 86%, 
                   #ff014f 94%, 
                   rgba(71,85,105,0.48)) border-box`
                }}
            >
                { }
                <div className="relative text-center z-10 px-8 py-12 rounded-2xl w-full bg-[linear-gradient(90deg,rgba(25,27,31,1)_0%,rgba(27,30,34,1)_50%,rgba(33,36,40,1)_100%)] h-full mx-auto">
                    { }
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                </div>
            </div>
        </div>
    </>;
}


