'use client';

import React from "react";
export default function SpotlightCard({children}) {
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
    <div className="w-full flex items-center justify-center">
      { }
      <div className="w-full rounded-2xl"
        style={{
          boxShadow: `-10px -10px 15px #24282A, 10px 10px 5px #1E2024`,
        }}>
        <div
          className="w-full rounded-2xl border border-transparent animate-border"
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
          <div className="relative text-center z-10 px-8 py-12 rounded-2xl w-full bg-gradient-to-br from-[#1c1e22] to-[#22262a] 
                hover:from-[#22262a] hover:to-[#1c1e22] 
                transition-colors duration-300">
            { }
             {children}
          </div>
        </div>
      </div>
    </div>
  </>;
}


