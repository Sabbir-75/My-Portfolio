'use client';

import React from "react";
export default function Button() {
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
            <div
                className="rounded-sm border border-transparent animate-border"
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
                <div className="text-center z-10 px-5 py-2.5 rounded-sm w-full bg-gradient-to-br from-[#1E2024] to-[#23272B] h-full mx-auto">
                    { }
                    <h1 className="text-base font-medium tracking-tight text-black dark:text-white">
                        Sign In
                    </h1>
                </div>
            </div>
    </>;
}


